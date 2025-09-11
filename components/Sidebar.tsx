"use client";

import { CircleDollarSignIcon, HomeIcon, LogOutIcon, MenuIcon, PackageIcon, TagIcon, UserCircle2Icon, XIcon } from "lucide-react";
import Container from "./aetherium/Container";
import SidebarBtn from "./SidebarBtn";
import { useToggle } from "@/hooks/useToggle";
import { Separator } from "./ui/separator";
import { signOut } from "next-auth/react";
import Logo from "./Logo";

const Sidebar = () => {
  const [collapse, handleCollapse] = useToggle(true);
  return (
    <Container
      as="aside"
      className={`${collapse ? "w-fit" : "!w-[15%]"} grow bg-white text-slate-500 font-semibold relative flex flex-col`}>
      <Container padded className="h-[75px] flex items-center border-b">
        <Logo nav />
      </Container>

      <Container padded className={`bg-slate-100 grow space-y-4`}>
        <SidebarBtn icon={collapse ? MenuIcon : XIcon} text={`${collapse ? "" : "Close"}`} collapse={collapse} onClick={handleCollapse} />
        <SidebarBtn icon={HomeIcon} text="Dashboard" collapse={collapse} />
        <SidebarBtn icon={TagIcon} text="Products" collapse={collapse} />
        <SidebarBtn icon={UserCircle2Icon} text="Users" collapse={collapse} />
        <SidebarBtn icon={PackageIcon} text="Orders" collapse={collapse} />
        <SidebarBtn icon={CircleDollarSignIcon} text="Sales" collapse={collapse} />
        <Separator className="bg-slate-300" />
        <SidebarBtn
          icon={LogOutIcon}
          text="Sign Out"
          collapse={collapse}
          onClick={() => {
            signOut();
          }}
        />
      </Container>
    </Container>
  );
};

export default Sidebar;
