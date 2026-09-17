"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  FaClock,
  FaNoteSticky,
  FaPenToSquare,
  FaPowerOff,
  FaUser,
} from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

interface Note {
  _id: string;
  title: string;
  description: string;
  color: string;
  userMail: string;
  createdAt: string;
  updatedAt: string;
}

const colorClasses: Record<string, string> = {
  red: "bg-red-300",
  blue: "bg-blue-300",
  green: "bg-green-300",
  yellow: "bg-yellow-300",
  purple: "bg-purple-300",
};

export default function Notes() {
  const { data: session, status } = useSession();

  const [allNotes, setAllNotes] = useState<Note[]>([]);

  const fetchAllNotes = async () => {
    const email = session?.user?.email;
    if (!email) {
      return;
    }
    const res = await fetch(`/api/notes?email=${email}`);

    const allNotes = await res.json();

    setAllNotes(allNotes.data);
  };

  useEffect(() => {
    fetchAllNotes();
  }, [session]);

  const deleteNote = async (id: string) => {
    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        toast.success("Note deleted successfully!!");

        fetchAllNotes();
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (status === "loading") {
    return (
      <p className="mt-10 text-center text-2xl font-semibold">Loading...</p>
    );
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

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

      {/* dashboard */}
      <section className="mx-auto mt-10 max-w-5xl rounded bg-slate-100 p-5 shadow">
        <h2 className="mb-5 p-2 text-4xl font-semibold text-blue-500 max-sm:text-center">
          My Notes
        </h2>

        {/* notes card */}
        <div className="mx-auto grid items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allNotes?.map((note) => (
            <article
              key={note?._id}
              className={`min-h-40 rounded-xl p-3 shadow ${colorClasses[note?.color]}`}
            >
              <div className="flex items-center justify-between">
                <h4 className="text-gray-700">{note?.title}</h4>
                <Link href={`/notes/${note?._id}`}>
                  <FaPenToSquare className="cursor-pointer text-gray-700" />
                </Link>
              </div>

              <hr className="my-3 text-slate-200" />

              <p className="my-3">{note?.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <FaClock />
                  <h4>
                    {new Date(note?.createdAt).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </h4>
                </div>

                <button onClick={() => deleteNote(note?._id)}>
                  <MdDelete className="cursor-pointer text-lg text-red-500" />
                </button>
              </div>
            </article>
          ))}
          <Link
            href={"/notes/add"}
            className="flex min-h-40 min-w-70 cursor-pointer flex-col items-center justify-center rounded-xl border border-dotted p-3 shadow"
          >
            <FaPenToSquare />
            <h4>New Note</h4>
          </Link>
        </div>
      </section>
    </div>
  );
}
