import client from "../../sanityClient";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import Loading from "../Loading";

function Artistpage() {
  const [artists, setArtists] = useState(null);
  useEffect(() => {
    const query = `*[_type == "artist"] {
          name,
          slug,
          bio,
          avatar,
          email,
          instagramUsername,
          website
        }`;
    client
      .fetch(query)
      .then((data) => setArtists(data))
      .catch(console.error);
  }, []);

  if (!artists) {
    <Loading />;
  } else {
    return (
      <Routes>
        {artists &&
          artists.map((artist) => (
            <Route
              key={artist.slug.current}
              path={`:artist_${artist.slug.current}`}
              element={<Artist artist={artist} />}
            />
          ))}
      </Routes>
    );
  }
}

function Artist({ artist }) {
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">{artist.name}</h2>
      <img
        src={urlFor(artist.avatar).width(150).height(150).url()}
        className="mb-2"
      />
      <p className="mb-6">{artist.bio}</p>
      <h3 className="text-2xl font-bold mb-2">Connect with {artist.name}</h3>
      <div className="w-full flex flex-row gap-2 items-start">
        {artist.instagramUsername && (
          <a
            className="btn btn-primary"
            href={"https://instagram.com/" + artist.instagramUsername}
            target="_blank">
            Instagram @{artist.instagramUsername}
          </a>
        )}
        {artist.website && (
          <a className="btn btn-primary" href={artist.website} target="_blank">
            Website {artist.website.replace(/(^\w+:|^)\/\//, "")}
          </a>
        )}
        {artist.email && (
          <a className="btn btn-primary" href={"mailto:" + artist.email}>
            {artist.email}
          </a>
        )}
      </div>
    </div>
  );
}

export default Artistpage;
