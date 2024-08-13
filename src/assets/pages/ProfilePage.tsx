import { logOutRequest } from "../../api/auth"
import { useAuth } from "../context/AuthContext"

export const ProfilePage: React.FC = () => {

    const { user, logOut } = useAuth()




    return (
        <main>
            <h1>Profile</h1>

            <div className="flex flex-col gap-3 w-full py-3 px-5 rounded-lg bg-white/10 text-white/75 text-lg">
                <span>Username: {user?.username}</span>
                <span>Username: {user?.email}</span>
            </div>

            <button onClick={logOut} className="w-full rounded-lg mt-10 py-3 bg-white/20 text-red-500 font-bold text-lg">Logout</button>

        </main>
    )
}