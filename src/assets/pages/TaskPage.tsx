import { Link } from "react-router-dom"
import { Task } from "../components/Task"
import { useTask } from "../context/TaskContext"
import { useEffect } from "react"

export interface Task {
    _id: string
    title: string
    description: string
    date: string
}

export const TaskPage: React.FC = () => {

    const { tasks, getTask } = useTask()

    useEffect(() => {
        getTask()
    }, [getTask])

    return (
        <main>
            <header className=" flex justify-between items-center mb-10">
                <h1>My Tasks</h1>

                <Link to="/add-task" className="w-[50px] h-[50px] bg-gray-300 rounded-full shadow-lg flex justify-center items-center text-black/70 text-3xl"> + </Link>
            </header>
            <div className="w-full flex flex-col gap-4">
                {
                    tasks.map((task: Task,) => (
                        <Task
                            key={task._id}
                            task={task}
                        />
                    ))
                }
            </div>


        </main>
    )
}