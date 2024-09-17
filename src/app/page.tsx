import AuthButton from "@/auth/AuthButton.server";
import { getLoggedInUser } from "@/server/actions";

export default async function Home() {
    // ask the server whats the current user
    // we test this here, since this is the only
    // route we can access without the middleware
    // redirecting us to signin
    const user = await getLoggedInUser()
    return (
        <div>
            <h1>Home</h1>
            <AuthButton />
            <p>Current User: {user}</p>
        </div>
    )
}
