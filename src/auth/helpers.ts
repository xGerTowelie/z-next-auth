"use server"

import { signIn as auth_signIn, signOut as auth_signOut } from "."

export async function signIn() {
    return await auth_signIn()
}

export async function signOut() {
    return await auth_signOut()
}
