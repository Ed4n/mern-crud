import { useState, createContext, ReactNode, Dispatch, SetStateAction, useContext } from "react";
import { registerRequest } from "../../api/auth";

// Define the shape of the context value
interface AuthCotextType {
    user: User;
    signup: (user: User) => void
    isAuthenticated: boolean
    errors: string[]
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

    const signup = async (user: User) => {
        try {
            const res = await registerRequest(user)
            if (res.status == 200) {
                alert("User Register Succesfully")
            }

            setUser(res.data)
            setIsAuthenticated(true)
        } catch (err: unknown) {
            console.log(err.response.data.error)
            setErrors(err.response.data.error)

        }

    }

    return (
        // Provide the context value to children components
        <AuthContext.Provider value={{ user, signup, isAuthenticated, errors }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider, useAuth };

