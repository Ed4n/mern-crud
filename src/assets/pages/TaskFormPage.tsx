import { useForm } from "react-hook-form"
import { useTask } from "../context/TaskContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"

export const TaskFormPage: React.FC = () => {

    const { createTask, getSingleTask, updateTask } = useTask()

    const { register, handleSubmit, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                try {
                    const task = await getSingleTask(params.id)
                    setValue('title', task.title)
                    setValue('description', task.description)
                } catch (err) {
                    throw new Error(err)
                }
            }
        }
        loadTask()
    }, [])



    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data)
            navigate("/tasks")
        } else {
            createTask(data)
            navigate("/tasks")
        }
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
                <button className="w-[130px] h-[40px] bg-gray-300 text-xl text-black/70 rounded-xl">{params.id ? ("Update") : ("Add")}</button>
            </div>
        </form>
    )
}