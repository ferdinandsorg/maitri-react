import client from "../../sanityClient";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { PortableText } from "@portabletext/react";
import { Link, useParams } from "react-router-dom";

function Imprint() {
  const [imprint, setImprint] = useState(null);
  const { motiveSlug } = useParams();
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
  }

  return (
    <>
      <header className="w-full h-auto flex flex-row justify-between items-start">
        <h2 className="text-3xl font-bold mb-2">Imprint</h2>
        <Link className="btn" to={"/motive/" + motiveSlug}>
          Close Imprint
        </Link>
      </header>
      <article>
        <PortableText value={imprint.imprintText} />
      </article>
    </>
  );
}

export default Imprint;
