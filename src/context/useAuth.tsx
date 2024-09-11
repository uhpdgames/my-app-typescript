import {UserProfile} from '../models/User';
import {createContext, useEffect, useState, useContext} from 'react';
import { loginAPI, registerAPI } from '../services/auth';
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from 'axios';


type UserContextType = {
    user: UserProfile | null;
    token:string | null;
    registerUser:(email:string, username:string, password:string) => void; 
    loginUser:(username:string, password:string) => void;
    logout:()=>void;
    isLoggedIn:()=>boolean;
}

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType | undefined>({} as UserContextType);

export const UserProvider = ({children}:Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState<boolean>(false);


    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if(token && user){
            setToken(token);
            setUser(JSON.parse(user));

            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        setIsReady(true);
    } , [])

    const registerUser = async (email:string, username:string, password:string) => {   
    
        await registerAPI(email, username, password).then((res) => {
            if(res){
                localStorage.setItem('token', res?.data.token);

                const objUser = {
                    userName: res?.data.userName,
                    email: res?.data.email
                }

                localStorage.setItem('user', JSON.stringify(objUser));

                setToken(res?.data.token);
                setUser(objUser);
                navigate('/');
            }
        }).catch((error) => {

            toast.warning('Server Error');
        });
    }

    const loginUser = async (username:string, password:string) => {   
    
        await loginAPI(username, password).then((res) => {
            if(res){
                localStorage.setItem('token', res?.data.token);

                const objUser = {
                    userName: res?.data.userName,
                    email: res?.data.email
                }

                localStorage.setItem('user', JSON.stringify(objUser));

                setToken(res?.data.token);
                setUser(objUser);
                navigate('/');
            }
        }).catch((error) => {

            toast.warning('Server Error');
        });
    }


    const isLoggedIn = () => {
        return user !== null;
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
      
        navigate('/');

    }

    return (
        <UserContext.Provider value={{user, token, registerUser, loginUser, logout, isLoggedIn}}>
            {isReady && children}
        </UserContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useAuth must be used within an UserProvider');
    }
    return context;
  }