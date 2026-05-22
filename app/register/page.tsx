"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e: any) => {
    e.preventDefault();

    const { name, email, password } = userDetails;

    if (!name || !email || !password) {
      toast.error("Please fill the form completely!!");
    } else {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const serverResponse = await response.json();
      // console.log(serverResponse);

      if (response.status === 201) {
        toast.success(serverResponse.message);

        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else if (response.status === 409) {
        toast.error(serverResponse.message);
      }

      setUserDetails({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-3">
      <form
        onSubmit={handleRegister}
        className="max-w-90 rounded bg-blue-400 p-5"
      >
        <h3 className="text-2xl font-bold text-white">Miniso</h3>
        <p className="text-white">Note Taking made easier!</p>

        <input
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          className="my-2 w-full rounded bg-white p-2 outline-none focus:ring-2"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          className="my-2 w-full rounded bg-white p-2 outline-none focus:ring-2"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          className="my-2 w-full rounded bg-white p-2 outline-none focus:ring-2"
          type="password"
          placeholder="Password"
        />

        <button
          className="my-2 inline-block cursor-pointer rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500 active:bg-blue-600"
          type="submit"
        >
          Register
        </button>
        <p className="ms-2 inline-block text-sm text-white">
          New User? Click here to{" "}
          <Link className="text-blue-700 underline" href={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
