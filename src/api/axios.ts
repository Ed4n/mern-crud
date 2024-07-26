import axios from "axios";


const instace = axios.create({
    baseURL: "http://localhost:3300/api/v1",
    withCredentials: true
})

export default instace