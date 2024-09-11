import axios from "axios";
import {handleError} from "../helpers/ErrorHandler";
import {UserProfileToken} from "../models/User";

const api = "http://localhost:3000/api";

export const loginAPI = async (username: string, password: string) => {
    try{
        const data = await axios.post<UserProfileToken>(`${api}/auth/login`, {
            username,
            password
        });
        return data;
    }catch(error){ 
        handleError(error);
    }

}
export const registerAPI = async (username: string, email: string, password: string) => {
    try{
        const data = await axios.post<UserProfileToken>(`${api}/auth/register`, {
            username,
            email,
            password
        });
        return data;
    }catch(error){
        handleError(error);
    }
}
//Auth with JWT