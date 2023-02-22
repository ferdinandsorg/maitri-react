import React, { useState, useEffect } from "react";
import client from "../../sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";
import Loading from "../Loading.js";

function Motive({ motive }) {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  if (!motive) {
    return <Loading />;
  } else {
    console.log("<Motive /> motive", motive);
    return (
      <div>
        <img src={urlFor(motive.image).width(200).url()} />
      </div>
    );
  }
}

export default Motive;
