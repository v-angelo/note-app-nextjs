"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  FaCheck,
  FaNoteSticky,
  FaPowerOff,
  FaUser,
  FaXmark,
} from "react-icons/fa6";

export default function AddNote() {
  const { data: session, status } = useSession();

  const [noteDetails, setNoteDetails] = useState({
    title: "",
    description: "",
    color: "blue",
  });

  if (status === "loading") {
    return (
      <p className="mt-10 text-center text-2xl font-semibold">Loading...</p>
    );
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const handleSaveNote = async () => {
    if (!noteDetails.title || !noteDetails.description) {
      toast.error("Please fill all the fields!!");
      return;
    }

    if (!session?.user?.email) {
      return;
    }

    const note = {
      ...noteDetails,
      userMail: session.user.email,
    };

    const res = await fetch(`/api/notes`, {
      method: "POST",
      body: JSON.stringify(note),
    });

    const serverResponse = await res.json();
    // console.log(serverResponse);

    if (res.status === 201) {
      toast.success(serverResponse.message);

      setTimeout(() => {
        redirect("/notes");
      }, 1500);
    } else {
      toast.error(serverResponse.message);
    }
  };

  return (
    <div className="min-h-screen">
      {/* header */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-5">
        <div className="flex items-center justify-center gap-2">
          <FaNoteSticky className="text-2xl text-blue-400" />
          <Link href={"/"} className="text-2xl font-semibold text-blue-400">
            Miniso
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2">
          <FaUser className="text-2xl text-blue-400" />
          <h3 className="text-2xl font-semibold text-blue-400">
            {session?.user?.name}
          </h3>
          <FaPowerOff
            onClick={() => signOut()}
            className="ms-2 cursor-pointer text-2xl text-blue-400"
          />
        </div>
      </nav>

      {/* notes card */}
      <div className="mx-auto mt-25 w-100 rounded-xl border border-black/20 p-3 shadow-xl">
        <Link href={"/notes"} className="text-2xl font-bold text-blue-400">
          Miniso
        </Link>
        <h4 className="text-gray-500">Add Notes</h4>

        <div className="my-5 flex items-center justify-between">
          <button
            className="cursor-pointer"
            onClick={() => {
              redirect("/notes");
            }}
          >
            <FaXmark className="text-xl" />
          </button>

          <button
            onClick={handleSaveNote}
            className="flex cursor-pointer items-center rounded-full bg-green-400 px-3 py-1 text-sm font-semibold text-white"
          >
            <span>Save</span> <FaCheck className="ms-1 text-base" />
          </button>
        </div>

        <div className="my-3 flex items-center justify-between">
          <h4 className="text-slate-500">Theme</h4>

          <div className="flex items-center justify-center gap-3">
            <div
              onClick={(e) => setNoteDetails({ ...noteDetails, color: "blue" })}
              className={`h-5 w-5 cursor-pointer rounded-full bg-blue-400 ${noteDetails.color === "blue" ? "ring ring-black/50" : ""}`}
            />
            <div
              onClick={(e) =>
                setNoteDetails({ ...noteDetails, color: "green" })
              }
              className={`h-5 w-5 cursor-pointer rounded-full bg-green-400 ${noteDetails.color === "green" ? "ring ring-black/50" : ""}`}
            />
            <div
              onClick={(e) => setNoteDetails({ ...noteDetails, color: "red" })}
              className={`h-5 w-5 cursor-pointer rounded-full bg-red-400 ${noteDetails.color === "red" ? "ring ring-black/50" : ""}`}
            />
            <div
              onClick={(e) =>
                setNoteDetails({ ...noteDetails, color: "yellow" })
              }
              className={`h-5 w-5 cursor-pointer rounded-full bg-yellow-400 ${noteDetails.color === "yellow" ? "ring ring-black/50" : ""}`}
            />
            <div
              onClick={(e) =>
                setNoteDetails({ ...noteDetails, color: "purple" })
              }
              className={`h-5 w-5 cursor-pointer rounded-full bg-purple-400 ${noteDetails.color === "purple" ? "ring ring-black/50" : ""}`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <input
            value={noteDetails.title}
            onChange={(e) =>
              setNoteDetails({ ...noteDetails, title: e.target.value })
            }
            className="py-2"
            type="text"
            placeholder="Title"
          />

          <textarea
            value={noteDetails.description}
            onChange={(e) =>
              setNoteDetails({ ...noteDetails, description: e.target.value })
            }
            name="note"
            id="note"
            rows={5}
            placeholder="Description"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
