"use client"

import { signIn, signOut } from "@/auth/helpers"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

export const AuthButton = () => {
    const session = useSession()

    if (session.data?.user) {
        return (
            <Button variant="default" onClick={async () => await signOut()}>Sign Out</Button>
        )
    } else {
        return (
            <Button variant="default" onClick={async () => await signIn()}>Sign In</Button>
        )
    }

}

export default AuthButton
