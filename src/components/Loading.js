import React, { useState, useEffect } from "react";

function Loading() {
  const [index, setIndex] = useState(0);
  const emojis = [
    "🕛",
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [emojis.length]);

  return <p>{emojis[index]}</p>;
}

export default Loading;
