import { FaNoteSticky, FaPowerOff, FaUser } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <nav className="p-2 max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <FaNoteSticky className="text-blue-400 text-2xl" />
          <h3 className="text-2xl font-semibold text-blue-400">Miniso</h3>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <FaUser className="text-blue-400 text-2xl" />
          <h3 className="text-2xl font-semibold text-blue-400">Username</h3>
          <FaPowerOff className="text-blue-400 text-2xl" />
        </div>
      </nav>

      <section className="mx-auto mt-10 max-w-5xl rounded bg-slate-100 shadow min-h-50"></section>
    </div>
  );
}
