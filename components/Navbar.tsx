"use client";

import Link from "next/link";

import { BellIcon, ChevronDown, CogIcon, SearchIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "./ui/input";

import Container from "./aetherium/Container";
import NavButton from "./NavButton";
import Text from "./aetherium/Text";

import Logo from "./Logo";

interface NavbarProps {
  name: string;
  email: string;
}

const Navbar = (props: NavbarProps) => {
  return (
    <Container as="nav" className="absolute top-0 left-0 w-full bg-white flex justify-between items-center gap-4 shadow p-2">
      <Container className="flex items-center w-full gap-4">
        <Link href="/dashboard">
          <Logo nav />
        </Link>
        <Container className="w-1/3 flex items-center gap-0 border rounded-md px-2">
          <SearchIcon className="w-4 h-4" />
          <Input placeholder="Search..." className="border-none focus-visible:ring-ring/0" />
        </Container>
      </Container>
      <Container className="flex gap-4 justify-self-end h-full items-center">
        <NavButton icon={BellIcon} />
        <NavButton icon={CogIcon} />
        <Separator orientation="vertical" className="bg-slate-300 !h-[2rem] my-auto" />
        <NavButton className="space-x-2 h-fit">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Container className="text-left">
            <Text as="p">{props.name}</Text>
            <Text as="p" className="text-xs">
              {props.email}
            </Text>
          </Container>
          <ChevronDown />
        </NavButton>
      </Container>
    </Container>
  );
};

export default Navbar;
