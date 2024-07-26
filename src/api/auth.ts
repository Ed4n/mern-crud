import axios from "./axios";

export type User = {
    username: string | null
    email: string;
    password: string;
};

export const registerRequest = (user: User) => {
    return axios.post("/register", user);
};

export const loginRequest = (user: User) => {
    return axios.post("/login", user);
};

export const verifyToken = () => {
    return axios.get("/verify-token");
};