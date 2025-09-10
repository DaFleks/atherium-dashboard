import NextAuth from "next-auth";

import prisma from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import { signInSchema } from "./lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },
      },
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = await signInSchema.parseAsync(credentials);

        try {
          user = await prisma.user.findUnique({ where: { email: email } });
        } catch (err) {
          console.log(err);
        }

        if (!(await bcryptjs.compare(password, user!.hashedPassword))) user = null;

        return user;
      },
    }),
  ],
});
