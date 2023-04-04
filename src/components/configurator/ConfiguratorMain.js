import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../sanityClient";
import Loading from "../Loading";
import imageUrlBuilder from "@sanity/image-url";
import Motive from "./ConfiguratorMain/Motive";

function ConfiguratorMain({ view, shirtColor }) {
  const { motiveSlug } = useParams();
  const [motive, setMotive] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return <Motive motive={motive} view={view} shirtColor={shirtColor} />;
}

export default ConfiguratorMain;
