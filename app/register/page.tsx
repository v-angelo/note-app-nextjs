import Link from "next/link";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center p-3">
      <form className="max-w-90 rounded bg-blue-400 p-5">
        <h3 className="text-2xl font-bold text-white">Miniso</h3>
        <p className="text-white">Note Taking made easier!</p>

        <input
          className="my-2 w-full rounded bg-white p-2 outline-none focus:ring-2"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="my-2 w-full rounded bg-white p-2 outline-none focus:ring-2"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="my-2 w-full rounded bg-white p-2 outline-none focus:ring-2"
          type="password"
          placeholder="Password"
          required
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
