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

        <WrapperContent />
        <CoFounders />
        <Definitions />
      </div>
    </main>
  );
}

export default Content;
