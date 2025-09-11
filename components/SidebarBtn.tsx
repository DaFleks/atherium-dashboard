"use client";

import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

type SidebarBtnProps = {
  icon?: LucideIcon;
  text?: string;
  collapse: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SidebarBtn = ({ icon: Icon, text, collapse, ...props }: SidebarBtnProps) => {
  return (
    <Button variant="ghost" {...props} className={`${collapse ? "w-fit" : "w-full"} mx-auto hover:bg-slate-500 hover:text-white flex items-center justify-start !py-6`}>
      <Link href="/dashboard/products" className="flex items-center gap-2 w-fit">
        {Icon && <Icon className="!w-6 !h-6" />}
        {!collapse && text}
      </Link>
    </Button>
  );
};

export default SidebarBtn;
