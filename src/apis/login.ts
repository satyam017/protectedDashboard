import { SendAsync } from "../utils/api";

export interface LoginInterface  {
    email: string;
    password: string;
}

// API

export const login = async (payload:LoginInterface) => {
    const url = '/api/login';
    const res = await SendAsync({
        url,
        method: 'POST',
        data: payload,
    })
    return res;
}