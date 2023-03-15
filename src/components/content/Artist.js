import { useParams, Link } from "react-router-dom";
import client from "../../sanityClient";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import imageUrlBuilder from "@sanity/image-url";

function Artist() {
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
    // <div className="">
    //   <span className="btn">
    //     <Link to={"/motive/" + motiveSlug}>Close Artist</Link>
    //   </span>
    //   <h1>Artist: {artist.name}</h1>
    //   <main>
    //     <img
    //       src={urlFor(artist.avatar).width(200).url()}
    //       className="max-h-full"
    //     />
    //     <p>{artist.bio}</p>
    //   </main>
    // </div>

    <div>
      <header className="w-full h-auto flex flex-row justify-between items-start">
        <h2 className="text-3xl font-bold mb-2">{artist.name}</h2>
        <Link className="btn" to={"/motive/" + motiveSlug}>
          Close {artist.name}
        </Link>
      </header>
      <img
        src={urlFor(artist.avatar).width(200).url()}
        className="mb-2 w-full"
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

export default Artist;
