import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

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
  motives,
}) => {
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

  const changeEmoji = () => {
    const emojis = [
      "🙋🏻‍♀️",
      "🙋🏼‍♀️",
      "🙋🏽‍♀️",
      "🙋🏾‍♀️",
      "🙋🏿‍♀️",
      "🙋🏼",
      "🙋🏽",
      "🙋🏾",
      "🙋🏿",
      "🙋🏻‍♂️",
      "🙋🏼‍♂️",
      "🙋🏽‍♂️",
      "🙋🏾‍♂️",
      "🙋🏿‍♂️",
    ];
    let random = Math.floor(Math.random() * emojis.length);
    return emojis[random];
  };

  const [emoji, setEmoji] = useState(changeEmoji());

  const handlePersonButton = () => {
    setEmoji(changeEmoji());
    updateViewMode("person");
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

  return (
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
          onClick={() => handlePersonButton()}>
          {emoji}
        </button>
        <button
          className={getButtonClassName("motive")}
          id="motive"
          onClick={() => updateViewMode("motive")}>
          🖼
        </button>
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
          <Routes>
            {motives &&
              motives.map((motive) => (
                <Route
                  key={motive.slug.current}
                  path={`/motive/${motive.slug.current}`}
                  element={
                    <Price
                      motive={motive}
                      shirt={{
                        color: currentShirtColor,
                        size: currentShirtSize,
                      }}
                    />
                  }
                />
              ))}
          </Routes>
        </div>
      </div>
    </footer>
  );
};

const buyShirt = (motive, shirt) => {
  alert(
    "I want this " +
      shirt.color +
      " Shirt in size " +
      shirt.size +
      " with the Motive " +
      motive.title +
      " from Artist " +
      motive.artist.name +
      ", please!\n\n 🛒 cart (1)\n" +
      "shirt color: " +
      shirt.color +
      "\n" +
      "shirt size: " +
      shirt.size +
      "\n" +
      "motive: " +
      motive.title +
      "\n" +
      "artist: " +
      motive.artist.name +
      "\n" +
      "price: " +
      motive.price
  );
};

function Price({ motive, shirt }) {
  if (!motive) {
    return <button className="btn whitespace-nowrap">Loading...</button>;
  } else {
    return (
      <button
        className="btn whitespace-nowrap"
        onClick={() => buyShirt(motive, shirt)}>
        Buy this shirt for {motive.price} €
      </button>
    );
  }
}

export default Footer;
