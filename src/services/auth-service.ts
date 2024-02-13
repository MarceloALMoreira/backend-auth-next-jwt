import * as jose from "jose";
import { cookies } from "next/headers";

const openSessionToken = async (toke: string) => {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRETE);
  const { payload } = await jose.jwtVerify(toke, secret);

  return payload;
};

const createSessionToke = async (payload = {}) => {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRETE);
  const session = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setExpirationTime("1d")
    .sign(secret);
  const { exp } = await openSessionToken(session);

  cookies().set("session", session, {
    expires: (exp as number) * 1000,
    path: "/",
    httpOnly: true, // permitir que esse token so é usado no backend.

    //Posso criar outro token apenas para leitura. sem o 'httpOnly'
  });
};

const AuthService = {
  openSessionToken,
  createSessionToke,
};

export default AuthService;
