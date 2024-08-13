import { useForm } from "react-hook-form"
import { useTask } from "../context/TaskContext"
import { Link, useNavigate } from "react-router-dom"

export const TaskFormPage: React.FC = () => {

    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    const { createTask } = useTask()

    const onSubmit = handleSubmit((data) => {
        createTask(data)
        navigate("/tasks")

    })


    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-5 px-7 py-5">
            <input
                {...register("title")}
                className=" text-7xl bg-transparent text-gray-300 outline-none placeholder:text-white/40"
                placeholder="Title"
                autoFocus
                type="text" />
            <textarea
                {...register("description")}
                className="w-full h-[40vh] ml-3 bg-transparent text-gray-400 outline-none text-xl placeholder:text-white/40 resize-none"
                placeholder="Add your task description..."></textarea>

            <div className="w-full flex justify-end items-center gap-5 bottom-5 absolute right-5">
                <Link to="/tasks" className="text-xl text-gray-300">cancel</Link>
                <button className="w-[130px] h-[40px] bg-gray-300 text-xl text-black/70 rounded-xl">Add</button>
            </div>
        </form>
    )
}