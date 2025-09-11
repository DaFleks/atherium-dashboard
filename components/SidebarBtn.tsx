"use client";

import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

type SidebarBtnProps = {
  icon?: LucideIcon;
  text?: string;
  collapse: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SidebarBtn = ({ icon: Icon, text, collapse, ...props }: SidebarBtnProps) => {
  return (
    <Button variant="ghost" {...props} className="hover:bg-slate-500 hover:text-white flex items-center gap-2 w-full justify-start !py-6">
      {Icon && <Icon className="!w-6 !h-6" />}
      {!collapse && text}
    </Button>
  );
};

export default SidebarBtn;
