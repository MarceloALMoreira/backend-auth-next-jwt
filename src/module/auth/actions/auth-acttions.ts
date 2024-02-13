"use server";

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

import { db } from "@/lib/prisma";
import AuthService from "@/services/auth-service";

export const createAccount = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await db.user.findMany({
    where: {
      email: email,
    },
  });
  if (!user) {
    throw new Error("Usuario ja cadastrado");
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  redirect("/portal/login");
};

export const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  //compare password create hash
  const user = await db.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    redirect("/portal/login");
  }

  const isMatch = await bcrypt.compare(password, user?.password);

  if (!isMatch) {
    redirect("/portal/login");
  }
  //se o User for validos

  // TODO criar sessão com JWT
  await AuthService.createSessionToke({
    sub: user.id,
    name: user.name,
    email: user.email,
  });

  redirect("/portal");
};

// const AuthActions = {
//   createAccount,
// };

// export default AuthActions;
