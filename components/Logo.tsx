"use client";

import { SunriseIcon } from "lucide-react";
import Container from "./aetherium/Container";
import Heading from "./aetherium/Heading";

const Logo = () => {
  return (
    <Container padded as="div" className="w-fit mx-auto space-y-1 select-none">
      <SunriseIcon size="48" className="mx-auto" />
      <Heading as="h3" className="text-center" style={{ fontFamily: "monospace", letterSpacing: '0.25rem' }}>
        AETHERIUM
      </Heading>
    </Container>
  );
};

export default Logo;
