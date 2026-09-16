"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const { email, password } = userDetails;

    if (!email || !password) {
      toast.error("Please fill the form completely");
    } else {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log(res);

      if (res?.ok) {
        toast.success("Login Successfull!!");

        setTimeout(() => {
          router.push("/notes");
        }, 1500);
      } else {
        toast.error("Invalid Credentials!!");

        setUserDetails({
          email: "",
          password: "",
        });
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-3">
      <form onSubmit={handleLogin} className="max-w-90 rounded bg-blue-400 p-5">
        <Link href={"/"} className="text-2xl font-bold text-white">
          Miniso
        </Link>
        <p className="text-white">Note Taking made easier!</p>

        <input
          value={userDetails?.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          className="my-2 w-full rounded bg-white p-2 outline-none focus:ring-2"
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={userDetails?.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          className="my-2 w-full rounded bg-white p-2 outline-none focus:ring-2"
          type="password"
          placeholder="Password"
          required
        />

        <button
          className="my-2 inline-block cursor-pointer rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500 active:bg-blue-600"
          type="submit"
        >
          Login
        </button>
        <p className="ms-2 inline-block text-sm text-white">
          New User? Click here to{" "}
          <Link className="text-blue-700 underline" href={"/register"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
