import axios from "./axios";

type Task = {
    title: string
    description: string
}

export const getTaskRequest = () => axios.get("/tasks")
export const createTaskRequest = (task: Task) => axios.post("/tasks", task)
export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`)