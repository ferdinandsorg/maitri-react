import React, { useState, useEffect } from "react";
import client from "../../sanityClient.js";
import Loading from "../Loading.js";

function SanityContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(
        `*[_type == "definitions"] {
          term,
          slug,
          description,
        }`
      );
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  // console.log("data of definitions ", data);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Definitions</h2>
      <div className="grid grid-cols-[auto_1fr] gap-y-6 gap-x-4">
        {data.map((definitions, index) => (
          <React.Fragment key={`${definitions.slug.current}-${index}`}>
            <h3 className="text-xl font-bold">{definitions.term}</h3>
            <p>{definitions.description}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SanityContent;
