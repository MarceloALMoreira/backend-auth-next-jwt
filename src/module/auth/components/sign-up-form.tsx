import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { createAccount } from "../actions/auth-acttions";

const SignUpForm = () => {
  return (
    <Card className="w-[350px]">
      <form action={createAccount}>
        <CardHeader>
          <CardTitle className="text-center">EAD Plataform</CardTitle>
          <CardDescription>
            Preencha os campos abaixo para criar uma conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Criar Conta</Button>
          <Link
            href="/portal/login"
            className={buttonVariants({ variant: "link" })}
          >
            Já tenho conta
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUpForm;
