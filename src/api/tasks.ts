import axios from "./axios";

type Task = {
    title: string
    description: string
}

export const getTaskRequest = () => axios.get("/tasks")
export const getSingleTaskRequest = (id: string) => axios.get(`/tasks/${id}`)
export const createTaskRequest = (task: Task) => axios.post("/tasks", task)
export const deleteTaskRequest = (id: string) => axios.delete(`/tasks/${id}`)
export const updateTaskRequest = (id: string, task: Task) => axios.put(`/tasks/${id}`, task)
