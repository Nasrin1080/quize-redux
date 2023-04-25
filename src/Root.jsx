import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <nav className="flex justify-between p-8 bg-blue-400 items-center">
        <h1 className="text-4xl font-extrabold text-white">Welcome!</h1>

        <ul className="flex space-x-4 text-white font-extrabold">
          <li>
            <Link to={"/"}>Quizz</Link>
          </li>
          <li>
            <Link to={"/AdminPage"}>Admin</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}