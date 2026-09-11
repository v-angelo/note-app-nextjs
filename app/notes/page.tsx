import Link from "next/link";
import {
  FaClock,
  FaNoteSticky,
  FaPenToSquare,
  FaPowerOff,
  FaUser,
} from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export default function Notes() {
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

      {/* dashboard */}
      <section className="mx-auto mt-10 max-w-5xl rounded bg-slate-100 p-5 shadow">
        <h2 className="mb-5 p-2 text-4xl font-semibold text-blue-500 max-sm:text-center">
          My Notes
        </h2>

        <div className="mx-auto flex flex-wrap items-center gap-5 max-sm:justify-center">
          <article className="min-h-40 min-w-70 rounded-xl bg-amber-100 p-3 shadow">
            <div className="flex items-center justify-between">
              <h4 className="text-gray-700">Title</h4>
              <Link href={"/notes/123"}>
                <FaPenToSquare className="cursor-pointer text-gray-700" />
              </Link>
            </div>

            <hr className="my-3 text-slate-200" />

            <p className="my-3">notes body</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <FaClock />
                <h4>11/09/2026</h4>
              </div>
              <MdDelete className="cursor-pointer text-lg text-red-500" />
            </div>
          </article>

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
