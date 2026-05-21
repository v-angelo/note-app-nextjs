import { FaCheck, FaXmark } from "react-icons/fa6";

export default function AddNote() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="min-w-90 rounded border border-black/20 p-3 shadow">
        <h4 className="text-2xl font-bold text-blue-400">Miniso</h4>
        <h4 className="text-gray-700">Add Notes</h4>

        <div className="my-5 flex items-center justify-between">
          <FaXmark className="text-xl" />
          <button className="flex cursor-pointer items-center rounded-full bg-green-400 px-3 py-1 text-sm font-semibold text-white">
            <span>Save</span> <FaCheck className="ms-1 text-base" />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <input className="py-2" type="text" placeholder="Title" />

          <textarea
            name="note"
            id="note"
            rows={4}
            placeholder="Description"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
