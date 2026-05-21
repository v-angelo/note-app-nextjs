import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center p-5 max-w-5xl mx-auto">
      <div className="md:grid grid-cols-2 gap-5">
        <div>
          <h1 className="text-4xl font-bold text-blue-500">Miniso</h1>
          <h2 className="text-2xl text-blue-400 mt-5">
            Capture Your Ideas Anytime, Anywhere
          </h2>

          <p className="text-justify">
            Organize notes, tasks and thoughts effortlessly with our smart and
            secure note-taking app. Whether you're managing daily tasks, meeting
            notes, study materials, or creative ideas, our note app helps you
            stay organized and productive.
          </p>

          <Link
            href={"/login"}
            className="p-2 bg-blue-600 text-white font-medium active:bg-blue-600 rounded my-2 cursor-pointer hover:bg-blue-500"
          >
            Let's Start
          </Link>
        </div>

        <div>
          <img
            className="mx-auto sm:max-w-120"
            src="/notes.png"
            alt="landingImage"
          />
        </div>
      </div>
    </div>
  );
}
