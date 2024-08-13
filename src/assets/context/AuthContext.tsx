import { useState, createContext, ReactNode, useContext, useEffect } from "react";
import { loginRequest, logOutRequest, registerRequest, verifyToken } from "../../api/auth";
import Cookies from 'js-cookie'

// Define the shape of the context value
interface AuthCotextType {
    user: User | null;
    setUser: (user: User | null) => void
    signup: (user: User) => void
    login: (user: User) => void
    isAuthenticated: boolean
    errors: string[]
    loading: boolean
}

type User = {
    username: string
    email: string
    password: string
}



// Create a context with the defined type, defaulting to undefined
const AuthContext = createContext<AuthCotextType | undefined>(undefined);

const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be within an <AuthProvider></AuthProvider>")

    return context
}

// Define the props type for the CategoriesProvider component
interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // Use state to manage categories
    const [user, setUser] = useState<User>(Object)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    const cookies = Cookies.get()

    useEffect(() => {
        const verifyAuth = async () => {

            if (!cookies.token) {
                setIsAuthenticated(false)
                setLoading(false)
                setUser(null)
                return
            }

            try {
                const res = await verifyToken(cookies.token)

                if (res.status == 401) {
                    setIsAuthenticated(false)
                    setLoading(false)
                    return
                }

                setIsAuthenticated(true)
                setUser(res.data.data)
                console.log(user)
                setLoading(false)

            } catch (err) {
                console.error(err)
                setIsAuthenticated(false)
                setLoading(true)
            }
        }

        verifyAuth()
    }, [isAuthenticated])

    const signup = async (user: User) => {
        try {
            const res = await registerRequest(user)
            if (res.status == 200) {
                alert("User Register Succesfully")
            }

            setUser(res.data.data)
            setIsAuthenticated(true)
        } catch (err: unknown) {
            console.log(err.response.data.error)
            setErrors(err.response.data.error)

        }

    }

    const login = async (user: User) => {
        try {
            const res = await loginRequest(user)
            setUser(res.data.data)
            setIsAuthenticated(true)
        } catch (err) {
            console.log(err.response.data.error)
            setErrors(err.response.data.error)

        }
    }

    const logOut = () => {
        try {
            const res = logOutRequest()
            setIsAuthenticated(false)
            return res
        } catch (err) {
            throw new Error(err)
        }
    }



    return (
        // Provide the context value to children components
        <AuthContext.Provider value={{ user, signup, isAuthenticated, logOut, errors, login, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider, useAuth };

