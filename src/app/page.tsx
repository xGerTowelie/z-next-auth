import AuthButton from "@/auth/AuthButton.server";
import { getLoggedInUser } from "@/server/actions";

export default async function Home() {
    return (
        <div>
            <h1>Home</h1>
            <AuthButton />
            <p>Current User: {await getLoggedInUser()}</p>
        </div>
    )
}
