import axios from "axios";

const BASE_URL = "http://localhost:3300/api/v1";

export type User = {
    username: string;
    email: string;
    password: string;
};

export const registerRequest = (user: User) => {
    return axios.post(`${BASE_URL}/register`, user);
};