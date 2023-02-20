import React, { useState, useEffect } from "react";
import client from "../../sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";

function Motive({ motive, callback }) {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  if (!motive) {
    return <div>Loading...</div>;
  } else {
    callback(motive);
    console.log("<Motive> motive is ", motive);
    return (
      <div key={motive.image.asset._ref} className="flex flex-row gap-2">
        <img src={urlFor(motive.image).width(200).url()} />
      </div>
    );
  }
}

export default Motive;
