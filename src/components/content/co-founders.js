import React, { useState, useEffect } from "react";
import client from "../../sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";
import Loading from "../Loading.js";
import { useNavigate } from "react-router-dom";

function SanityContent() {
  const [data, setData] = useState(null);
  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(client);

  // Then we like to make a simple function like this that gives the
  // builder an image and returns the builder for you to specify additional
  // parameters:
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(
        `*[_type == "coFounder"] {
          name,
          slug,
          pronounce,
          bio,
          avatar,
        }`
      );
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Co-Founders</h2>
      <div className="flex flex-col gap-y-4">
        {data.map((coFounder) => (
          <div
            key={coFounder.slug.current}
            className="flex flex-row gap-4 items-center">
            <img
              src={urlFor(coFounder.avatar).width(150).height(150).url()}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="text-xl">
                <span className="font-bold">{coFounder.name}</span> (
                {coFounder.pronounce})
              </h3>
              <p>{coFounder.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SanityContent;
