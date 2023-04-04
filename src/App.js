import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import MotiveLayout from "./components/layout/MotiveLayout";
import Artist from "./components/content/Artist";
import Error from "./components/Error";
import Imprint from "./components/content/ImprintContent";
import DefaultContent from "./components/content/DefaultContent";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route path="motive/:motiveSlug" element={<MotiveLayout />}>
          <Route index path="*" element={<DefaultContent />} />
          <Route path="artist/:artistSlug" element={<Artist />} />
          <Route path="imprint" element={<Imprint />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
