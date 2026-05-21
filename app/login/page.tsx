import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen p-3">
      <form className="max-w-90 bg-blue-400 rounded p-5">
        <h3 className="text-2xl text-white font-bold">Miniso</h3>
        <p className="text-white">Note Taking made easier!</p>

        <input
          className="bg-white outline-none focus:ring-2 p-2 w-full rounded my-2"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="bg-white outline-none focus:ring-2 p-2 w-full rounded my-2"
          type="password"
          placeholder="Password"
          required
        />

        <button
          className="py-2 px-4 bg-blue-600 text-white font-medium active:bg-blue-600 rounded my-2 cursor-pointer hover:bg-blue-500 inline-block"
          type="submit"
        >
          Login
        </button>
        <p className="text-sm inline-block ms-2 text-white">
          New User? Click here to{" "}
          <Link className="text-blue-700 underline" href={"/register"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
