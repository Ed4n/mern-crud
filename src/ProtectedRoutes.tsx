import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext"

export const ProtectedRoutes: React.FC = () => {

    const { isAuthenticated, loading } = useAuth()

    if (loading) return <h1>Loading...</h1>

    if (!isAuthenticated) return <Navigate to='/login' />

    return (
        <Outlet />
    )
}