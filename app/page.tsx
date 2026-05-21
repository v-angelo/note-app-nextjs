import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="md:grid grid-cols-2">
        <div>
          <h1>Miniso</h1>
          <h2 className="text-2xl text-blue-400 mt-5">
            Capture Your Ideas Anytime, Anywhere
          </h2>

          <p className="text-justify">
            Organize notes, tasks and thoughts effortlessly with our smart and
            secure note-taking app. Whether you're managing daily tasks, meeting
            notes, study materials, or creative ideas, our note app helps you
            stay organized and productive.
          </p>
        </div>

        <div>
          <img src="/notes.png" alt="landingImage" />
        </div>
      </div>
    </div>
  );
}
