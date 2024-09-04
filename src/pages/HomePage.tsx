import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const Home = () => {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")

    }, [isAuthenticated, navigate])

    return (
        <main>
            <h1>Home</h1>
            <div className="flex flex-col gap-5">
                <Link to='/register' className="px-7 py-3 bg-white/20 text-white/75 rounded-lg flex justify-center items-center">Register</Link>
                <Link to='/login' className="px-7 py-3 bg-white/20 text-white/75 rounded-lg flex justify-center items-center">Login</Link>
            </div>
        </main>
    )
}

export { Home }