"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
    const router = useRouter();
    const NEXT_PUBLIC_HOSTNAME = "https://akil-backend.onrender.com/signup"
    const baseURL = NEXT_PUBLIC_HOSTNAME ;

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const requestBody = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmpassword: formData.get('confirm_password'),
            role : formData.get('role')
        };

        try {
            const res = await axios.post(baseURL, requestBody);
            console.log(res);
            alert('Account created!');
            router.push('/login');
        } catch (error) {
            alert('Something went wrong...');
        }
    };

    return (
        <div className="flex-col flex items-center justify-center min-h-screen">
            <form onSubmit={submitHandler}>
                <div>
                    <h1 className='text-3xl text-indigo-950 font-Poppins font-bold text-center w-96 h-12'>Sign Up Today!</h1>
                    <div className="flex items-center gap-2 justify-center w-96 h-12 border-2 border-solid border-black mt-3 rounded-lg p-4">
                        <img src="/gogle.png" width={20} height={7} alt="google" />
                        <p>Sign Up with Google</p>
                    </div>
                    <div className="flex gap-4 items-center w-96 h-12 mt-4">
                        <img src="/Line.png" width={90} height={10} alt="line" />
                        <p>Or Sign Up with Email</p>
                        <img src="/Line.png" width={90} height={10} alt="line" />
                    </div>
                </div>
                <hr />
                <div className="flex flex-col">
                    <label htmlFor="username">FullName</label>
                    <input
                        className="focus:outline-none text-black flex items-center justify-center w-96 h-12 border-2 border-solid mt-3 rounded-lg p-4"
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your full name"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email Address</label>
                    <input
                        className="focus:outline-none text-black flex items-center justify-center w-96 h-12 border-2 border-solid mt-3 rounded-lg p-4"
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Enter email Address"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input
                        className="focus:outline-none text-black flex items-center justify-center w-96 h-12 border-2 border-solid mt-3 rounded-lg p-4"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="confirm_password">Confirm password</label>
                    <input
                        className="focus:outline-none text-black flex items-center justify-center w-96 h-12 border-2 border-solid mt-3 rounded-lg p-4"
                        id="confirm_password"
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm password"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="confirm_password">Role</label>
                    <input
                        className="focus:outline-none text-black flex items-center justify-center w-96 h-12 border-2 border-solid mt-3 rounded-lg p-4"
                        id="role"
                        type="role"
                        name="role"
                        placeholder="Enter role"
                    />
                </div>
                <div className="flex flex-wrap justify-between w-96 mt-4">
                    <div className="flex flex-col">
                        <button
                            className="focus:outline-none flex items-center justify-center w-96 h-12 border-2 border-solid mt-3 p-4 bg-blue-900 text-white px-4 py-2 rounded-3xl"
                        >
                            Signup
                        </button>
                    </div>
                    <div className="flex flex-col">
                        <p>Already have an account? <Link href="/login"><span className="bg-gradient-to-r from-purple-900 to-purple-700 text-black bg-clip-text text-transparent bg-center bg-repeat-x bg-cover font-inter text-center text-16 font-semibold leading-24">Login</span></Link></p>
                        <p className="font-size text-xs pt-2">By clicking Continue, you acknowledge that you have read and accepted our Terms of Service and Privacy Policy.</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
