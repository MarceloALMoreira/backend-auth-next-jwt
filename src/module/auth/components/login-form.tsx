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
import { login } from "../actions/auth-acttions";

const LoginForm = () => {
  return (
    <Card className="w-[350px]">
      <form action={login}>
        <CardHeader>
          <CardTitle className="text-center">EAD Plataform</CardTitle>
          <CardDescription>Faça login para continuar.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
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
          <Button type="submit" variant="outline">
            Entrar
          </Button>
          <Link
            href="/portal/cadastro"
            className={buttonVariants({ variant: "link" })}
          >
            Criar conta
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
