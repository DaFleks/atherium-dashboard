"use client";

import {
  ChevronLeftCircleIcon,
  ChevronRightCircleIcon,
  CircleDollarSignIcon,
  HomeIcon,
  LogOutIcon,
  PackageIcon,
  TagIcon,
  UserCircle2Icon,
} from "lucide-react";
import Container from "./aetherium/Container";
import SidebarBtn from "./SidebarBtn";
import { useToggle } from "@/hooks/useToggle";
import { Separator } from "./ui/separator";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [collapse, handleCollapse] = useToggle(true);
  return (
    <Container
      as="aside"
      className={` ${!collapse && "w-1/4 px-4"} py-4 grow bg-slate-100 text-slate-500 font-semibold relative space-y-6 border-r`}>
      <Button
        variant="ghost"
        className="absolute top-[47%] translate-y-[75%] right-[-20] hover:bg-transparent hover:text-slate-400"
        onClick={handleCollapse}>
        {collapse ? (
          <ChevronRightCircleIcon className="bg-slate-100 rounded-full" />
        ) : (
          <ChevronLeftCircleIcon className="bg-slate-100 rounded-full" />
        )}
      </Button>

      <SidebarBtn href="/dashboard/products" icon={HomeIcon} text="Dashboard" collapse={collapse} />
      <SidebarBtn href="/dashboard/products" icon={TagIcon} text="Products" collapse={collapse} />
      <SidebarBtn href="/dashboard/products" icon={UserCircle2Icon} text="Users" collapse={collapse} />
      <SidebarBtn href="/dashboard/products" icon={PackageIcon} text="Orders" collapse={collapse} />
      <SidebarBtn href="/dashboard/products" icon={CircleDollarSignIcon} text="Sales" collapse={collapse} />
      <Separator className="bg-slate-400 mx-auto !w-[50%]" />
      <SidebarBtn
        icon={LogOutIcon}
        text="Sign Out"
        collapse={collapse}
        onClick={() => {
          signOut();
        }}
      />
    </Container>
  );
};

export default Sidebar;
