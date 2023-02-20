import React from "react";

const Footer = ({
  currentViewMode,
  updateViewMode,
  currcentBgColor,
  updateBgColor,
  currentShirtColor,
  updateShirtColor,
  currentShirtSize,
  updateShirtSize,
  currentShirtPrice,
}) => {
  // const colors = ["#2D2D2A", "#4E148C", "#55C1FF", "#715AFF", "#FF7F11"];

  // const changeConfiguratorBackground = () => {
  //   let randomColor = () => {
  //     return Math.floor(Math.random() * colors.length);
  //   };
  //   let newColor;
  //   do {
  //     newColor = colors[randomColor()];
  //   } while (newColor === currcentBgColor);
  //   return colors[randomColor()];
  // };

  const changeBgColor = (event) => {
    updateBgColor(event.target.value);
  };

  const getButtonClassName = (buttonId) => {
    if (currentViewMode === buttonId) {
      return "text-4xl opacity-100 grayscale-0";
    } else {
      return "text-4xl opacity-50 grayscale";
    }
  };

  const getActiveButtonClassName = (type, value) => {
    let className = "";
    if (type === "color" && currentShirtColor === value) {
      className += " btn-active";
    }
    if (type === "size" && currentShirtSize === value) {
      className += " btn-active";
    }
    return className;
  };

  const buyShirt = () => {
    alert(
      "I want a " +
        currentShirtColor +
        " Shirt in size " +
        currentShirtSize +
        ", please!"
    );
  };

  return (
    <>
      <footer className="w-full flex flex-row justify-between align-start gap-5">
        <div className="flex flex-row gap-2 items-end">
          <button
            className={getButtonClassName("shirt")}
            id="shirt"
            onClick={() => updateViewMode("shirt")}>
            👕
          </button>
          <button
            className={getButtonClassName("person")}
            id="person"
            onClick={() => updateViewMode("person")}>
            🙋🏻‍♂️
          </button>
          <button
            className={getButtonClassName("motive")}
            id="motive"
            onClick={() => updateViewMode("motive")}>
            🖼
          </button>
          {/* <button
          className="text-4xl"
          onClick={() => updateColor(changeConfiguratorBackground())}>
          🌈
        </button> */}
          <label
            className="relative text-4xl cursor-pointer"
            htmlFor="change-background-color">
            🌈
            <input
              id="change-background-color"
              className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
              type="color"
              value={currcentBgColor}
              onChange={changeBgColor}
            />
          </label>
        </div>

        <div className="flex flex-row gap-2 flex-wrap justify-end">
          <div className="flex flex-row gap-1">
            <button
              className={"btn" + getActiveButtonClassName("size", "S")}
              onClick={() => updateShirtSize("S")}>
              S
            </button>
            <button
              className={"btn" + getActiveButtonClassName("size", "M")}
              onClick={() => updateShirtSize("M")}>
              M
            </button>
            <button
              className={"btn" + getActiveButtonClassName("size", "L")}
              onClick={() => updateShirtSize("L")}>
              L
            </button>
          </div>

          <div className="flex flex-row gap-1">
            <button
              className={"btn" + getActiveButtonClassName("color", "white")}
              onClick={() => updateShirtColor("white")}>
              white
            </button>
            <button
              className={"btn" + getActiveButtonClassName("color", "black")}
              onClick={() => updateShirtColor("black")}>
              black
            </button>
          </div>

          <div className="flex flex-row gap-1">
            <button
              className="btn whitespace-nowrap"
              onClick={() => buyShirt()}>
              Buy this shirt for {currentShirtPrice} €
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
