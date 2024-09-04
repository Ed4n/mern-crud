import { createContext, ReactNode, useContext, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getSingleTaskRequest, getTaskRequest, updateTaskRequest } from "../api/tasks";

interface TaskContextType {
    tasks: Task[] | void

    getTask: () => void
    createTask: (task: Task) => void
    deleteTask: (id: string) => void
    getSingleTask: (id: string) => void
    updateTask: (id: string, task: Task) => void
}

type Task = {
    title: string
    description: string
}

interface TaskProviderProps {
    children: ReactNode
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

const useTask = () => {
    const context = useContext(TaskContext)

    if (!context) return console.error("usetask must be within <TaskProvider></TaskProvider>")
    return context
}

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([])




    const getTask = async () => {
        try {
            const res = await getTaskRequest()

            if (res.status !== 200) {
                return console.error("An error has ocurred")
            }

            setTasks(res.data.data)

        } catch (err) {
            throw new Error(`Hubo un error: ${err}`)
        }
    }

    const getSingleTask = async (id: string) => {
        try {
            const res = await getSingleTaskRequest(id)
            console.log(res.data.data)
            return res.data.data

        } catch (err) {
            throw new Error(`Hubo un error: ${err}`)
        }
    }

    const createTask = async (task: Task) => {
        try {
            const res = await createTaskRequest(task)

            console.log(res.data.data)
        } catch (err) {
            throw new Error(`Hubo un error: ${err}`)
        }
    }

    const updateTask = async (id: string, task: Task) => {
        try {
            const res = await updateTaskRequest(id, task)
            console.log(res.data.data)

        } catch (err) {
            console.error(err)
        }
    }

    const deleteTask = async (id: string) => {
        const res = await deleteTaskRequest(id)
        console.log(res)
    }

    return (
        <TaskContext.Provider value={{ tasks, getTask, createTask, getSingleTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )

}

export { TaskProvider, useTask }