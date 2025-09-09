"use client";

import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

type Containers = "div" | "header" | "nav" | "main" | "section" | "article" | "aside" | "footer";

interface ContainerProps {
  children?: React.ReactNode;
  as?: Containers;
  className?: string;
  padded?: boolean;
  center?: boolean;
  style?: CSSProperties;
}

const Container = ({ children, as: Tag = "div", className, padded, center, style }: ContainerProps) => {
  return (
    <Tag className={cn(className, `${padded && "p-4"} ${center && "mx-auto"}`)} style={style}>
      {children}
    </Tag>
  );
};

export default Container;
