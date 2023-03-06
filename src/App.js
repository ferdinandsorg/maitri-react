import Configurator from "./components/Configurator";
import Content from "./components/Content";
import Dragbar from "./components/Dragbar";
import Motives, { motiveLoader } from "./components/newComponents/Motives";
import Artists from "./components/newComponents/Artists";
import MotiveSingle, {
  motiveDetailsLoader,
} from "./components/newComponents/MotiveSingle";
import ArtistSingle, {
  artistDetailsLoader,
} from "./components/newComponents/ArtistSingle";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Error from "./components/newComponents/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* <Route index element={<Motives />} loader={motiveLoader} /> */}

        <Route path="motive">
          <Route
            path=":motiveSlug"
            element={<MotiveSingle />}
            loader={motiveDetailsLoader}
            errorElement={<Error />}>
            <Route path="artist">
              <Route
                path=":artistSlug"
                element={<ArtistSingle />}
                loader={artistDetailsLoader}
              />
            </Route>
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
