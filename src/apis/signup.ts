import { SendAsync } from "../utils/api";

export interface signUpRequest  {
    email: string;
    password: string;
}

// API

export const signUp = async (payload:signUpRequest) => {
    const url = '/api/register';
    
    const res = await SendAsync({
        url,
        method: 'POST',
        data: payload,
    })
    return res;
}