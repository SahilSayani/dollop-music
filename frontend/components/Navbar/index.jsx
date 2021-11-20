import Link from "next/link";
import { useStore } from "../../store";

export default function Navbar() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  function Login() {
    // Do login stuff here
    setUser({
      name: "Neelansh",
    });
  }

  function Logout() {
    setUser(null);
  }

  return (
    <div className="py-5 px-15 w-full flex justify-between items-center bg-dark-500">
      <h1>Dollop Music</h1>
      <ul className="list-none flex space-x-4 items-center text-sm">
        <Link href="/">
          <li className="cursor-pointer">Dashboard</li>
        </Link>
        <Link href="/search">
          <li className="cursor-pointer">Search</li>
        </Link>
        <Link href="/profile">
          <li className="cursor-pointer">Profile</li>
        </Link>
        <li>
          {user ? (
            <div className="flex items-center space-x-2">
              <div className="bg-dark-800 py-1 px-4 rounded-lg font-bold">
                {user.name}
              </div>
              <button
                onClick={Logout}
                className="py-1 px-4 bg-white text-black font-semibold text-md rounded-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={Login}
              className="py-1 px-4 bg-white text-black font-semibold text-md rounded-lg"
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}