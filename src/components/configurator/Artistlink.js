import client from "../../sanityClient";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Aristlink({ artist }) {
  const [currentArtist, setCurrentArtist] = useState(null);
  useEffect(() => {
    const query = `*[_type == "artist" && slug.current == "${artist}"][0] {
          name,
          slug
        }`;
    client
      .fetch(query)
      .then((data) => setCurrentArtist(data))
      .catch(console.error);
  }, [artist]);

  return (
    <span>
      {currentArtist && (
        <Link
          key={currentArtist.slug.current}
          to={`artist_${currentArtist.slug.current}`}>
          {currentArtist.name}
        </Link>
      )}
    </span>
  );
}

export default Aristlink;
