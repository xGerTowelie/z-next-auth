import NextAuth, { NextAuthConfig } from "next-auth"

const authConfig: NextAuthConfig = {
    providers: [],
    basePath: "/api/auth",
    secret: process.env.NEXTAUTH_SECRET
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
