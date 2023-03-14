import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  NavLink,
} from "react-router-dom";
import Imprint from "../content/imprint";
import Error from "./Error";

export default function SndPart() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootDings />} errorElement={<Error />}>
        <Route path="imprint" element={<Imprint />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function RootDings() {
  return (
    <div>
      <NavLink to="imprint">Imprint</NavLink>
      <Outlet />
    </div>
  );
}
