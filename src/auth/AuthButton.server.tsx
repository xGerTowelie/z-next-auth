
import { SessionProvider } from "next-auth/react"
import { auth, basePath } from "."
import { AuthButton as AuthButtonClient } from "./AuthButton.client"

export default async function AuthButton() {
    const session = await auth()

    if (session && session.user) {
        session.user = {
            name: session.user.name,
            email: session.user.email,
        }
    }

    return (
        <SessionProvider basePath={basePath} session={session}>
            <AuthButtonClient />
        </SessionProvider>
    )

}

