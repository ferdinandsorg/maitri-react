import { useState } from "react";
import ConfiguratorHeader from "../configurator/ConfiguratorHeader";
import ConfiguratorMain from "../configurator/ConfiguratorMain";
import ConfiguratorFooter from "../configurator/ConfiguratorFooter";

export default function ConfiguratorLayout({
  sidebarPercentage,
  sidebarFontWdth,
  isMobile,
}) {
  const [footerData, setFooterData] = useState({
    bgColor: "#E4C1F9",
    textColor: "#000",
    viewMode: "shirt",
    shirt: {
      color: "white",
      size: "M",
    },
  });

  const updateFooterData = (field, value) => {
    setFooterData((prevData) => ({ ...prevData, [field]: value }));
  };

  if (footerData.bgColor) {
    document.body.style.backgroundColor = footerData.bgColor;
  }

  return (
    <aside
      id="configurator"
      className={
        "h-1/2 w-full md:w-auto md:h-screen sticky top-0 p-5 bg-primary flex flex-col flex-nowrap justify-between"
      }
      style={
        isMobile
          ? {
              backgroundColor: footerData.bgColor,
              color: footerData.textColor,
              height: `${sidebarPercentage}vh`,
              fontVariationSettings: `'wdth' ${sidebarFontWdth}`,
            }
          : {
              backgroundColor: footerData.bgColor,
              color: footerData.textColor,
              width: `${sidebarPercentage}%`,
              fontVariationSettings: `'wdth' ${sidebarFontWdth}`,
            }
      }>
      <ConfiguratorHeader />
      <ConfiguratorMain
        view={footerData.viewMode}
        shirtColor={footerData.shirt.color}
      />
      <ConfiguratorFooter
        currentViewMode={footerData.viewMode}
        updateViewMode={(newComponent) =>
          updateFooterData("viewMode", newComponent)
        }
        currcentBgColor={footerData.bgColor}
        updateBgColor={(newColor) => (
          updateFooterData("bgColor", newColor),
          updateFooterData("textColor", getContrast(newColor))
        )}
        currentShirtColor={footerData.shirt.color}
        updateShirtColor={(newShirtColor) =>
          updateFooterData("shirt", {
            ...footerData.shirt,
            color: newShirtColor,
          })
        }
        currentShirtSize={footerData.shirt.size}
        updateShirtSize={(newShirtSize) =>
          updateFooterData("shirt", {
            ...footerData.shirt,
            size: newShirtSize,
          })
        }
        currentShirtPrice={0}
      />
    </aside>
  );
}

function getContrast(hexcolor) {
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1);
  }
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split("")
      .map(function (hex) {
        return hex + hex;
      })
      .join("");
  }

  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);

  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? "black" : "white";
}
