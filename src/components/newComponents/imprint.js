import client from "../../sanityClient";
import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import { PortableText } from "@portabletext/react";
import { Outlet } from "react-router-dom";

function Imprint() {
  const [imprint, setImprint] = useState(null);
  useEffect(() => {
    const query = `*[_type == "siteSettings"][0] {
          imprintText,
        }`;
    client
      .fetch(query)
      .then((data) => setImprint(data))
      .catch(console.error);
  }, []);

  if (!imprint) {
    <Loading />;
  } else {
    return (
      <div className="mt-6">
        <PortableText value={imprint.imprintText} />
      </div>
    );
  }
}

export default Imprint;
