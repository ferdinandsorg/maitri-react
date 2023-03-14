import React, { useState, useEffect } from "react";
import LogoImage from "./content/logo-image.js";
import LogoText from "./content/logo-text";
import WrapperContent from "./content/WrapperContent";
import CoFounders from "./content/co-founders";
import Definitions from "./content/definitions";
import client from "../sanityClient.js";
import Footer from "./content/Footer.js";
import Artistpage from "./content/Artistpage.js";
import Imprint from "./content/imprint.js";

function Content({ mainPercentage, mainFontWdth }) {
  return (
    <main
      className="bg-white relative"
      style={{
        width: `${mainPercentage}%`,
        fontVariationSettings: `'wdth' ${mainFontWdth}`,
      }}>
      <LogoImage />
      <div className="p-5 h-full overflow-y-scroll pt-[var(--top-space)] flex flex-col gap-16 relative">
        <LogoText />

        <Artistpage />
        <WrapperContent />
        <CoFounders />
        <Definitions />
        <Footer />
      </div>
    </main>
  );
}

export default Content;
