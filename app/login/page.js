'use client'

import Link from 'next/link'
import { redirect } from 'next/navigation';
import { useState } from 'react';



export default function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function storage() {
        const res = await fetch("/api", {
            method: "POST",
            headers: { "Content-Type": "application/mmmm" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();

        if (data.success) {
            localStorage.setItem("login", "true");
            redirect('/dashboard');
        } else {
            alert("Invalid credentials");
        }

    }

    return (
        <>
            {/* <Link href="/dashboard">Login and go to Home page</Link> */}


            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">

                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-700 text-sm font-medium">Email</label>
                            <input value={username} onChange={e => setUsername(e.target.value)}
                                type="email"
                                autoComplete='email'
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 text-sm font-medium">Password</label>
                            <input value={password} onChange={e => setPassword(e.target.value)}
                                type="password"
                                autoComplete='password'
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button

                            onClick={e => storage()}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>


        </>
    )


} 
