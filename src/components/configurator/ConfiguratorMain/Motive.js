import React from "react";
import client from "../../../sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";
import Loading from "../../Loading";
import motivePersonWhite from "../../../assets/person-white-x1.png";
import motivePersonBlack from "../../../assets/person-black-x1.png";
import motiveShirtWhite from "../../../assets/shirt-white-x1.png";
import motiveShirtBlack from "../../../assets/shirt-black-x1.png";

function Motive({ motive, view, shirtColor }) {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const getShirtColor = () => {
    switch (view) {
      case "person":
        return shirtColor === "white" ? motivePersonWhite : motivePersonBlack;
      case "shirt":
        return shirtColor === "white" ? motiveShirtWhite : motiveShirtBlack;
      default:
        return null;
    }
  };

  if (!motive) {
    return <Loading />;
  }

  const Image = ({ className }) => {
    const imageSize = 600;
    return (
      <img
        src={urlFor(motive.image).width(imageSize).url()}
        className={
          "max-h-full transition-all max-w-[" + imageSize + "px] " + className
        }
      />
    );
  };

  switch (view) {
    case "person":
      return (
        <main
          className="w-full h-full bg-no-repeat bg-contain bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${getShirtColor()})` }}>
          <Image className={"w-1/2"} />
        </main>
      );
      break;
    case "shirt":
      return (
        <main
          className="w-full h-full bg-no-repeat bg-contain bg-center flex justify-center items-center"
          style={{ backgroundImage: `url(${getShirtColor()})` }}>
          <Image className={"w-[40%]"} />
        </main>
      );
      break;
    case "motive":
      return (
        <main className="w-full h-full max-h-full bg-no-repeat bg-contain bg-center flex justify-center items-center">
          <Image className={"w-[80%] max-w-[1200px]"} />
        </main>
      );
      break;
    default:
      return (
        <main className="w-full h-full max-h-full bg-no-repeat bg-contain bg-center flex justify-center items-center">
          <Image className={"w-[80%]"} />
        </main>
      );
  }
}

export default Motive;