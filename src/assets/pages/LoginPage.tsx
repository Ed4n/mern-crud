import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useForm } from "react-hook-form";

interface Inputs {
    username: string;
    email: string;
    password: string;
}


export const LoginPage: React.FC = () => {
    const { login, isAuthenticated, errors: formErrors } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")

    }, [isAuthenticated, navigate])

    const onSubmit = handleSubmit(async (values) => {
        login(values)
    })

    return (
        <main>
            <h1>Login</h1>
            <form className="w-full  flex flex-col gap-3 justify-center items-center" onSubmit={onSubmit}>
                {/* Errors Section */}
                {
                    formErrors.length > 0 &&
                    (<ul className="w-full bg-red-500 p-3 px-7 text-red-100 rounded-lg list-disc ">
                        {
                            formErrors.map((error, index) => (
                                <li key={index}>{error}</li>
                            ))
                        }
                    </ul>)
                }

                {/* Email */}
                <input className="input" placeholder="example@email.com" type="text" {...register("email", { required: true })} />
                {errors.email && <p className="text-red-300 justify-start self-start">Email is required</p>}

                {/* Password */}
                <input className="input" placeholder="*******" type="password" {...register("password", { required: true })} />
                {errors.password && <p className="text-red-300 justify-start self-start">Password is required</p>}

                {/* Submit */}
                <input className="w-full bg-gray-400 text-slate-800 py-4 mt-5 px-4 rounded-lg text-lg" type="submit" />
            </form>
        </main>
    )
}