import { useState } from "react";
import ConfiguratorHeader from "../configurator/ConfiguratorHeader";
import ConfiguratorMain from "../configurator/ConfiguratorMain";
import ConfiguratorFooter from "../configurator/ConfiguratorFooter";

export default function ConfiguratorLayout({
  sidebarPercentage,
  sidebarFontWdth,
}) {
  const [footerData, setFooterData] = useState({
    bgColor: "#E4C1F9",
    viewMode: "shirt",
    shirt: {
      color: "white",
      size: "M",
    },
  });

  const updateFooterData = (field, value) => {
    setFooterData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <aside
      id="configurator"
      className="w-1/2 p-5 bg-primary flex flex-col flex-nowrap justify-between h-screen max-h-screen min-h-screen sticky top-0"
      style={{
        backgroundColor: footerData.bgColor,
        width: `${sidebarPercentage}%`,
        fontVariationSettings: `'wdth' ${sidebarFontWdth}`,
      }}>
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
        updateBgColor={(newColor) => updateFooterData("bgColor", newColor)}
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
