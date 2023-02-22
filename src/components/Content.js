import React, { useState, useEffect } from "react";
import LogoImage from "./content/logo-image.js";
import LogoText from "./content/logo-text";
import WrapperContent from "./content/wrapper-content";
import CoFounders from "./content/co-founders";
import Definitions from "./content/definitions";
import client from "../sanityClient.js";
import Footer from "./content/Footer.js";

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
        <Footer />
      </div>
    </main>
  );
}

export default Content;
