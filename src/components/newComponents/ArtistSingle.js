import { useParams, Link } from "react-router-dom";
import client from "../../sanityClient";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import imageUrlBuilder from "@sanity/image-url";

function ArtistSingle() {
  const { artistSlug, motiveSlug } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    const getArtistDetails = async (artistSlug) => {
      const query = `*[_type == "artist" && slug.current == "${artistSlug}"] {
        name,
        slug,
        bio,
        avatar,
        email,
        instagramUsername,
        website
      }`;

      const res = await client.fetch(query).catch(() => {
        throw new Error("Could not find that artist. Damn...");
      });

      if (res && res.length > 0) {
        setArtist(res[0]);
      }

      setLoading(false);
    };

    getArtistDetails(artistSlug);
  }, [artistSlug]);

  if (loading) {
    return <Loading />;
  }

  if (!artist) {
    return <div>Could not find that artist. Damn...</div>;
  }

  return (
    <div className="border-2 border-orange-300">
      <p className="text-sm bg-orange-300 text-black">ArtistSingle</p>
      <p>
        <Link to={"/motive/" + motiveSlug}>Close Artist</Link>
      </p>
      <h1>Artist: {artist.name}</h1>
      <main>
        <img
          src={urlFor(artist.avatar).width(200).url()}
          className="max-h-full"
        />
        <p>{artist.bio}</p>
      </main>
    </div>
  );
}

export default ArtistSingle;
