import React from "react";
import LogoImage from "./content/logo-image.js";
import LogoText from "./content/logo-text";
import WrapperContent from "./content/wrapper-content";
import CoFounders from "./content/co-founders";
import Definitions from "./content/definitions";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorPage from "./error-page";

function Content({ mainPercentage, mainFontWdth }) {
  return (
    <main
      id="content"
      className="w-1/2 h-screen bg-white relative"
      style={{
        width: `${mainPercentage}%`,
        fontVariationSettings: `'wdth' ${mainFontWdth}`,
      }}>
      <LogoImage />
      <div className="p-5 h-full overflow-y-scroll pt-[var(--top-space)] flex flex-col gap-16">
        <LogoText />

        {/* <Nav /> */}
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/co-founders" element={<CoFounders />} />
            <Route path="/definitions" element={<Definitions />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/co-founders">co-founders</NavLink>
          </li>
          <li>
            <NavLink to="/definitions">definitions</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Content;

// function Content({ mainPercentage, mainFontWdth }) {
//   return (
//     <main
//       id="content"
//       className="w-1/2 h-screen bg-white relative"
//       style={{
//         width: `${mainPercentage}%`,
//         fontVariationSettings: `'wdth' ${mainFontWdth}`,
//       }}>
//       <LogoImage />
//       <div className="p-5 h-full overflow-y-scroll pt-[var(--top-space)] flex flex-col gap-16">
//         <LogoText />

//         <WrapperContent />
//         <CoFounders />
//         <Definitions />
//       </div>
//     </main>
//   );
// }
