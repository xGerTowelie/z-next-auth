"use client"

import { signIn, signOut } from "@/auth/helpers"
import { useSession } from "next-auth/react"

export const AuthButton = () => {
    const session = useSession()

    if (session.data?.user) {
        return (
            <button onClick={async () => await signOut()}>Sign Out</button>
        )
    } else {
        return (
            <button onClick={async () => await signIn()}>Sign In</button>
        )
    }

}

export default AuthButton
