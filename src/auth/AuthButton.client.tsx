"use client"

import { signOut } from "@/auth/helpers"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import Link from "next/link"

export const AuthButton = () => {
    const session = useSession()

    if (session.data?.user) {
        return (
            <Button variant="default" onClick={async () => await signOut()}>Sign Out</Button>
        )
    } else {
        return (
            <>
                <Link href="/signup"><Button variant="default">Sign Up</Button></Link>
                <Link href="/signin"><Button variant="default">Sign In</Button></Link>
            </>
        )
    }

}

export default AuthButton
