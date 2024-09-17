import NextAuth, { NextAuthConfig, User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { validateUser } from "@/lib/auth"

export const BASE_PATH = "/api/auth"

const authConfig: NextAuthConfig = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<User | null> {
                if (!credentials?.username || !credentials?.password) {
                    return null
                }

                const user = await validateUser(credentials.username, credentials.password)
                if (user) {
                    return user
                }

                console.log("Invalid credentials provided:", credentials.username)
                return null
            }
        })
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
