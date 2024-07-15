import { useForm } from "react-hook-form"
import { registerRequest } from "../../api/auth";

interface Inputs {
    username: string;
    email: string;
    password: string;
}

export const RegisterPage: React.FC = () => {

    const { register, handleSubmit } = useForm<Inputs>()

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)

        if (res.status == 200) {
            alert("User Register Succesfully")
        }

        console.log(res)
    })

    return (
        <main>
            <h1>Register</h1>
            <form className="w-full  flex flex-col gap-3 justify-center items-center" onSubmit={onSubmit}>
                <input className="input" placeholder="Username" type="text" {...register("username", { required: true })} />
                <input className="input" placeholder="example@email.com" type="text" {...register("email", { required: true })} />
                <input className="input" placeholder="*******" type="password" {...register("password", { required: true })} />
                <input className="w-full bg-gray-400 text-slate-800 py-4 mt-5 px-4 rounded-lg text-lg" type="submit" />
            </form>
        </main>
    )
}