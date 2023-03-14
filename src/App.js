import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import MotiveLayout from "./components/layout/MotiveLayout";
import Content from "./components/Content.js";
import ArtistSingle from "./components/newComponents/ArtistSingle";
import Error from "./components/newComponents/Error";
import Imprint from "./components/newComponents/imprint";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<Error />}>
        <Route path="motive/:motiveSlug" element={<MotiveLayout />}>
          <Route index path="*" element={<Content />} />
          <Route path="artist/:artistSlug" element={<ArtistSingle />} />
          <Route path="imprint" element={<Imprint />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
