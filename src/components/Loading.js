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
      setIndex((index + 1) % emojis.length);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [index]);

  return <p>{emojis[index]}</p>;
}

export default Loading;
