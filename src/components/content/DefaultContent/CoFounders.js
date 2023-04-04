import React, { useState, useEffect } from "react";
import client from "../../../sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";
import Loading from "../../Loading.js";
import { PortableText } from "@portabletext/react";

function CoFounder() {
  const [coFounders, setCoFounders] = useState(null);
  const [content, setContent] = useState(null);
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(`
      {
        'content': *[_type == 'content'][1]{coFounderText},
          'coFounders': *[_type == 'coFounder']{
            name,
                slug,
                pronounce,
                bio,
                avatar,
          }
      }
      `);
      setCoFounders(result.coFounders);
      setContent(result.content);
    };
    fetchData();
  }, []);

  if (!coFounders && !content) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">The Co-Founders</h2>
      <div className="mb-4">
        {content && <PortableText value={content.coFounderText} />}
      </div>
      <div className="flex flex-col gap-y-4">
        {coFounders &&
          coFounders.map((coFounder) => (
            <div
              key={coFounder.slug.current}
              className="flex flex-row gap-4 items-center">
              <img
                src={urlFor(coFounder.avatar).width(150).height(150).url()}
                className="rounded-full"
                alt={coFounder.name}
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

export default CoFounder;
