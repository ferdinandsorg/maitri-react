import MotiveSingle from "../newComponents/MotiveSingle";
import { Outlet } from "react-router-dom";
import Motives from "../newComponents/Motives";

export default function MotiveLayout() {
  return (
    <div className="flex flex-row">
      <div
        className="h-screen basis-1/2 border-2 border-red-300"
        id="configurator">
        <p className="text-sm bg-red-300 text-black">Configurator</p>
        <Motives />
        <MotiveSingle />
      </div>
      <div
        className="h-screen overflow-y-scroll basis-1/2 border-2 border-purple-300"
        id="content">
        <p className="text-sm bg-purple-300 text-black">Content</p>
        <Outlet />
      </div>
    </div>
  );
}
