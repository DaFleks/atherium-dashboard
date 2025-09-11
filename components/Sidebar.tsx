"use client";

import { CircleDollarSignIcon, HomeIcon, LogOutIcon, MenuIcon, PackageIcon, TagIcon, UserCircle2Icon, XIcon } from "lucide-react";
import Container from "./aetherium/Container";
import SidebarBtn from "./SidebarBtn";
import { useToggle } from "@/hooks/useToggle";
import { Separator } from "./ui/separator";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const [collapse, handleCollapse] = useToggle(true);
  return (
    <Container
      as="aside"
      padded
      className={`${collapse ? "w-fit" : "!w-[15%]"} bg-slate-100 text-slate-500 font-semibold space-y-4 relative border-r shadow-xl`}>
      <SidebarBtn icon={collapse ? MenuIcon : XIcon} text={`${collapse ? "" : "Close"}`} collapse={collapse} onClick={handleCollapse} />
      <Separator className="bg-slate-300"/>
      <SidebarBtn icon={HomeIcon} text="Dashboard" collapse={collapse} />
      <SidebarBtn icon={TagIcon} text="Products" collapse={collapse} />
      <SidebarBtn icon={UserCircle2Icon} text="Users" collapse={collapse} />
      <SidebarBtn icon={PackageIcon} text="Orders" collapse={collapse} />
      <SidebarBtn icon={CircleDollarSignIcon} text="Sales" collapse={collapse} />
      <Separator className="bg-slate-300"/>
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
