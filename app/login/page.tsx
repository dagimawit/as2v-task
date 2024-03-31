
"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1  className='text-3xl text-indigo-950 font-Poppins font-bold text-center w-96 h-12 '>Welcome Back,</h1>
        <h1>{loading ? "Processing" : "Login"}</h1>
        <hr />
        <div className="flex flex-col">
        <label htmlFor="email">Email Address</label>
        <input 
       className="focus:outline-none text-black
       flex items-center justify-center w-96 h-12 border-2 border-solid  mt-3 rounded-lg p-4"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="Enter email Address"
            />

        </div>
       <div className="flex flex-col" >
       <label htmlFor="password">password</label>
        <input 
         className="focus:outline-none text-black
         flex items-center justify-center w-96 h-12 border-2 border-solid  mt-3 rounded-lg p-4"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="Enter password"
            />
       </div>
       
            <button
            onClick={onLogin}
            className="focus:outline-none 
            flex items-center justify-center w-96 h-12 border-2 border-solid  mt-3 p-4 
            bg-blue-900 text-white px-4 py-2 rounded-3xl"
            >Login </button>
            <div className="flex p-3">
            <p>Don’t have an account?</p>
            <p><Link href="/signup"><span className="bg-gradient-to-r from-purple-900 to-purple-700 text-black bg-clip-text text-transparent bg-center bg-repeat-x bg-cover font-inter text-center text-16 font-semibold leading-24">Signup</span></Link></p>
            </div>
        </div>

    )

}
