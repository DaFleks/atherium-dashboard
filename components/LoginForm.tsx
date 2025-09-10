"use client";

import { FormEvent, ReactNode, useState } from "react";

import Link from "next/link";

import { LogInIcon } from "lucide-react";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

import Container from "./aetherium/Container";
import Heading from "./aetherium/Heading";

import googleIcon from "@/public/icons/google.png";
import githubIcon from "@/public/icons/github.png";
import Text from "./aetherium/Text";
import OAuthButton from "./aetherium/OAuthButton";
import Loading from "./aetherium/Loading/Loading";
import { signIn } from "next-auth/react";

interface LoginFormProps {
  backgroundSrc: string;
  logo: ReactNode;
  infoText?: string;
}

const LoginForm = ({ backgroundSrc, logo, infoText }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = () => {
    setIsLoading(!isLoading);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  };

  return (
    <>
      <Container className="grid grid-cols-2 mx-auto rounded-xl shadow-2xl overflow-hidden">
        <Container className="bg-cover" style={{ backgroundImage: `url('${backgroundSrc}')`, backgroundPosition: "35% 50%" }} />

        <Container className="space-y-8 p-8 bg-white/15 flex flex-col justify-center relative">
          {isLoading && <Loading />}
          <Container padded center className="bg-emerald-700/50 rounded-xl flex items-center w-fit">
            {logo}
          </Container>

          <Heading as="h3">Welcome Back!</Heading>
          <Text className="text-sm">{infoText}</Text>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Container className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" required className="bg-white/50 text-slate-800 font-semibold" />
            </Container>
            <Container className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" required className="bg-white/50 text-slate-800 font-semibold" />
            </Container>

            <Link href="#" className="float-end underline text-sm">
              Forgot password?
            </Link>

            <Button variant="secondary" type="submit" className="w-full" onClick={handleIsLoading}>
              <LogInIcon />
              Sign In
            </Button>

            <Container className="grid grid-cols-2 gap-2">
              <OAuthButton iconSrc={googleIcon.src} text="Sign in with Google" />
              <OAuthButton iconSrc={githubIcon.src} text="Sign in with GitHub" />
            </Container>
          </form>
        </Container>
      </Container>
    </>
  );
};

export default LoginForm;
