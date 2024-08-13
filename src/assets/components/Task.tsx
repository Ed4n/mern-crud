import React, { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { useTask } from "../context/TaskContext"

interface Task {
    title: string
    description: string
}

export const Task: React.FC<Task> = ({ task }) => {
    const { deleteTask } = useTask()
    const { _id, title, description, date } = task



    return (
        <>
            <Link to="#" className=" bg-white/10 text-gray-300 px-5 py-3 rounded-xl shadow-lg relative" >
                <h2 className="text-2xl">{title}</h2>
                <p>{description}</p>
                <p>{new Date(date).toLocaleDateString()}</p>
                <div className="w-full justify-end items-end gap-3">
                    <button onClick={() => deleteTask(_id)} className=" absolute right-3 top-1 rotate-45 text-2xl">+</button>
                </div>
            </Link>

        </>
    )


}  