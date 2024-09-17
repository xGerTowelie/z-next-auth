import AuthButton from "@/auth/AuthButton.server";
import { Button } from "@/components/ui/button";
import { getLoggedInUser } from "@/server/actions";
import Link from "next/link";

export default async function Home() {
    // ask the server whats the current user
    // we test this here, since this is the only
    // route we can access without the middleware
    // redirecting us to signin
    const user = await getLoggedInUser()
    return (
        <div>
            <h1>Home</h1>
            <Link href="/signup"><Button variant="default">Sign Up</Button></Link>
            <AuthButton />
            <p>Current User: {user}</p>
        </div>
    )
}
