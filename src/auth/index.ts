import NextAuth, { NextAuthConfig, User } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const basePath = "/api/auth"

const authConfig: NextAuthConfig = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { type: "text", name: "username" },
                password: { type: "password", name: "password" }
            },
            async authorize(credentials): Promise<User | null> {
                // for now hardcode the credentials
                if (credentials.username === "admin" && credentials.password === "pass") {
                    return {
                        id: "0",
                        name: "admin",
                        email: "admin@admin.com"
                    }
                }

                // log if wrong
                console.log("Wrong credentials provided:", credentials)
                return null
            }
        })
    ],
    basePath: basePath,
    secret: process.env.NEXTAUTH_SECRET
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
