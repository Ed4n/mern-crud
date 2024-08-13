import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getTaskRequest } from "../../api/tasks";

interface TaskContextType {
    tasks: Task[] | void
    createTask: (task: Task) => void
    deleteTask: (id: string) => void
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

    useEffect(() => {

        const getTask = async () => {

            try {
                const res = await getTaskRequest()

                if (res.status !== 200) {
                    return console.error("An error has ocurred")
                }

                setTasks(res.data.data)

            } catch (err) {
                console.error(err)
            }
        }

        getTask()
    }, [tasks])

    const createTask = async (task: Task) => {
        try {
            const res = await createTaskRequest(task)

            console.log(res.data.data)
        } catch (err) {
            throw new Error(err)
        }
    }

    const deleteTask = async (id: string) => {
        const res = await deleteTaskRequest(id)
        console.log(res)
    }





    return (
        <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )

}

export { TaskProvider, useTask }