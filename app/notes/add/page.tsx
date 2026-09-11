import Link from "next/link";
import {
  FaCheck,
  FaNoteSticky,
  FaPowerOff,
  FaUser,
  FaXmark,
} from "react-icons/fa6";

export default function AddNote() {
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
          <h3 className="text-2xl font-semibold text-blue-400">Username</h3>
          <FaPowerOff className="ms-2 cursor-pointer text-2xl text-blue-400" />
        </div>
      </nav>

      {/* notes card */}
      <div className="mx-auto mt-25 w-100 rounded-xl border border-black/20 p-3 shadow-xl">
        <Link href={"/notes"} className="text-2xl font-bold text-blue-400">
          Miniso
        </Link>
        <h4 className="text-gray-500">Add Notes</h4>

        <div className="my-5 flex items-center justify-between">
          <FaXmark className="text-xl" />
          <button className="flex cursor-pointer items-center rounded-full bg-green-400 px-3 py-1 text-sm font-semibold text-white">
            <span>Save</span> <FaCheck className="ms-1 text-base" />
          </button>
        </div>

        <div className="my-3 flex items-center justify-between">
          <h4 className="text-slate-500">Theme</h4>

          <div className="flex items-center justify-center gap-3">
            <div className="h-5 w-5 cursor-pointer rounded-full bg-blue-400 ring ring-black/50" />
            <div className="h-5 w-5 cursor-pointer rounded-full bg-green-400" />
            <div className="h-5 w-5 cursor-pointer rounded-full bg-red-400" />
            <div className="h-5 w-5 cursor-pointer rounded-full bg-yellow-400" />
            <div className="h-5 w-5 cursor-pointer rounded-full bg-purple-400" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <input className="py-2" type="text" placeholder="Title" />

          <textarea
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
