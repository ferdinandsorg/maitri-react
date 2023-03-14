import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import client from "../../sanityClient";
import Loading from "../Loading";
import imageUrlBuilder from "@sanity/image-url";

function MotiveSingle() {
  const { motiveSlug } = useParams();
  const [motive, setMotive] = useState(null);
  const [loading, setLoading] = useState(true);
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    const getMotiveDetails = async (motiveSlug) => {
      const query = `*[_type == "motive" && slug.current == "${motiveSlug}"] {
        title,
        slug,
        image,
        price,
        artist->{name, slug}
      }`;

      const res = await client.fetch(query).catch(() => {
        throw new Error("Could not find that motive. Damn...");
      });

      if (res && res.length > 0) {
        setMotive(res[0]);
      }

      setLoading(false);
    };

    getMotiveDetails(motiveSlug);
  }, [motiveSlug]);

  if (loading) {
    return <Loading />;
  }

  if (!motive) {
    return <div>Could not find that motive. Damn...</div>;
  }

  return (
    <div>
      <h1>Motive: {motive.title}</h1>
      by{" "}
      <NavLink
        to={"artist/" + motive.artist.slug.current}
        key={motive.artist.slug.current}>
        {motive.artist.name}
      </NavLink>
      <main className="border-2 border-blue-300">
        <p className="text-sm bg-blue-300 text-black">
          Configurator Main MotiveSingle
        </p>
        <img
          src={urlFor(motive.image).width(200).url()}
          className="max-h-full"
        />
      </main>
      <footer className="border-2 border-cyan-300">
        <p className="text-sm bg-cyan-300 text-black">
          Configurator Footer MotiveSingle
        </p>
        <p>{motive.price} €</p>
      </footer>
    </div>
  );
}

export default MotiveSingle;
