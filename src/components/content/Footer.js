import React, { useState, useEffect } from "react";
import client from "../../sanityClient.js";
import Loading from "../Loading.js";
import { PortableText } from "@portabletext/react";

function SanityContent() {
  const currentYear = new Date().getFullYear();
  const [meta, setMeta] = useState(null);
  useEffect(() => {
    const query = `*[_type == "header"][0]{
      title
    }`;
    client
      .fetch(query)
      .then((data) => setMeta(data))
      .catch(console.error);
  }, []);
  const [footer, setFooter] = useState(null);
  useEffect(() => {
    const query = `*[_type == "footer"][0]`;
    client
      .fetch(query)
      .then((data) => setFooter(data))
      .catch(console.error);
  }, []);

  if (!footer) {
    return <Loading />;
  } else {
    // console.log(footer.bodyText);
    return (
      <footer>
        <div className="w-full mb-2">
          <PortableText value={footer.bodyText} />
        </div>
        <div className="w-full flex flex-row gap-2 items-start mb-8">
          <a
            className="btn btn-primary"
            href={"https://instagram.com/" + footer.instagramUsername}
            target="_blank">
            Instagram @{footer.instagramUsername}
          </a>
          <a className="btn btn-primary" href={"mailto:" + footer.email}>
            {footer.email}
          </a>
        </div>
        <div className="w-full flex flex-row justify-between justify-content-start">
          <a href="./imprint">Imprint</a>
          <p>
            &copy; {currentYear} {meta.title}
          </p>
        </div>
      </footer>
    );
  }
}

export default SanityContent;
