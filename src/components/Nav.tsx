import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const Nav: React.FC = () => {
    const { user } = useAuth()

    return (
        <nav className=" flex justify-between h-[5vh] px-5 py-5  shadow-xl bg-gray-700 w-full text-white text-xl ">
            <Link to='../'>Back</Link>
            <Link to="/profile" className="">{user?.username}</Link>
        </nav>
    )
}

export { Nav }