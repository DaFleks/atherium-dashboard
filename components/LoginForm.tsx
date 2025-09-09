"use client";

import { ReactNode } from "react";

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

interface LoginFormProps {
  backgroundSrc: string;
  logo: ReactNode;
  infoText?: string;
}

const LoginForm = ({ backgroundSrc, logo, infoText }: LoginFormProps) => {
  return (
    <Container className="grid grid-cols-2 mx-auto rounded-xl shadow-2xl overflow-hidden">
      <Container className="bg-cover" style={{ backgroundImage: `url('${backgroundSrc}')`, backgroundPosition: "35% 50%" }} />
      <Container className="space-y-8 p-8 bg-white/15 flex flex-col justify-center">
        <Container padded center className="bg-emerald-700/50 rounded-xl flex items-center w-fit">
          {logo}
        </Container>
        <Heading as="h3">Welcome Back!</Heading>
        <Text className="text-sm">{infoText}</Text>
        <form className="space-y-4">
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
          <Button variant="secondary" type="submit" className="w-full">
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
  );
};

export default LoginForm;
