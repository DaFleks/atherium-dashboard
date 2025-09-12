import { auth } from "@/auth";
import prisma from "@/lib/prisma";

import Container from "@/components/aetherium/Container";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session?.user) return null;
  const user = await prisma.user.findUnique({ where: { email: session.user.email! } });

  return (
    <Container className="bg-gradient-to-r from-gray-300 to-slate-400 h-full flex items-center">
      <Container center className="border h-[90%] w-[80%] bg-white/85 rounded-xl shadow-xl relative overflow-hidden flex flex-col">
        <Navbar name={`${user!.firstName} ${user!.lastName}`} email={user!.email} />

        <Container className="flex grow">
          <Sidebar />
          <Container padded className="bg-white grow w-full">
            {children}
          </Container>
        </Container>

      </Container>
    </Container>
  );
};

export default layout;
