import { NavLink, Outlet } from "react-router-dom";

export default function Configurator() {
  return (
    <div className="motive-nav border-2 border-red-300">
      <p className="text-sm bg-red-300 text-black">Configurator</p>
      <Outlet />
    </div>
  );
}
