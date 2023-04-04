import { Outlet } from "react-router-dom";
import LogoImage from "../content/DefaultContent/LogoImage";
import LogoText from "../content/DefaultContent/LogoText";

export default function ContentLayout({
  mainPercentage,
  mainFontWdth,
  isMobile,
}) {
  return (
    <main
      id="content"
      className="w-full overflow-y-scroll md:overflow-y-visible md:w-1/2 p-5 relative bg-white"
      style={
        isMobile
          ? {
              height: `${mainPercentage}vh`,
              fontVariationSettings: `'wdth' ${mainFontWdth}`,
            }
          : {
              width: `${mainPercentage}%`,
              fontVariationSettings: `'wdth' ${mainFontWdth}`,
            }
      }>
      <LogoImage />
      <article className="flex flex-col gap-16 relative">
        <LogoText />
        <Outlet />
      </article>
    </main>
  );
}
