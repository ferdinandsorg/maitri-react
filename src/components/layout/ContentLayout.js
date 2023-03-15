import { Outlet } from "react-router-dom";
import LogoImage from "../content/DefaultContent/LogoImage";
import LogoText from "../content/DefaultContent/LogoText";

export default function ContentLayout({ mainPercentage, mainFontWdth }) {
  return (
    <main
      id="content"
      className="w-1/2 p-5 bg-white relative"
      style={{
        width: `${mainPercentage}%`,
        fontVariationSettings: `'wdth' ${mainFontWdth}`,
      }}>
      <LogoImage />
      <article className="flex flex-col gap-16 relative">
        <LogoText />
        <Outlet />
      </article>
    </main>
  );
}
