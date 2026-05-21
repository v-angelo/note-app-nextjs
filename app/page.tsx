import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center p-5">
      <div className="grid-cols-2 gap-5 md:grid">
        <div>
          <h1 className="text-4xl font-bold text-blue-500">Miniso</h1>
          <h2 className="mt-5 text-2xl text-blue-400">
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
            className="my-2 cursor-pointer rounded bg-blue-600 p-2 font-medium text-white hover:bg-blue-500 active:bg-blue-600"
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
