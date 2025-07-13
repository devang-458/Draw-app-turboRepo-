"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    const handleAuth = async () => {
        try {
            const endpoint = isSignin ? "signin" : "signup";
            const url = `http://localhost:3002/${endpoint}`;


            const payload = isSignin
                ? { username: email, password }
                : { username: email, password, name: email.split("@")[0] };

            const { data } = await axios.post(url, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (isSignin) {
                alert(`Signed in as ${data.user?.name}`);
                localStorage.setItem("token", data.token);
                router.push("/");
            } else {
                alert("Signed up successfully!");
            }
        } catch (err: any) {
            const message = err;
            alert(message);
        }
    };

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-6 m-2 bg-white rounded shadow w-full max-w-sm">
                <h1 className="text-xl font-bold mb-4">{isSignin ? "Sign In" : "Sign Up"}</h1>

                <div className="p-2">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                </div>

                <div className="p-2">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                </div>

                <div className="pt-2">
                    <button
                        className="bg-blue-500 text-white rounded p-2 w-full"
                        onClick={handleAuth}
                    >
                        {isSignin ? "Sign in" : "Sign up"}
                    </button>
                </div>
            </div>
        </div>
    );
}
