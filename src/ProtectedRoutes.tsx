import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./assets/context/AuthContext"
import { LoginPage } from "./assets/pages/LoginPage"

export const ProtectedRoutes: React.FC = () => {

    const { isAuthenticated, loading } = useAuth()

    if (loading) return <h1>Loading...</h1>

    if (!isAuthenticated) return <Navigate to='/login' />

    return (
        <Outlet />
    )
}