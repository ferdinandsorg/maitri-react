import React, { useState, useEffect } from "react";
import client from "../../sanityClient.js";
import Loading from "../Loading.js";

function WrapperContent() {
  const [dataContent, setDataContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(
        `*[_type == "content" && slug.current == "what"] {
          title,
          slug,
          mainImage,
          publishedAt,
          body,
        }`
      );
      setDataContent(result[0]);
    };
    fetchData();
  }, []);

  if (!dataContent) {
    return <Loading />;
  } else {
    // console.log("dataContent.body", dataContent.body);
    return (
      <div>
        <div className="flex flex-col gap-y-8">
          <div key={dataContent.slug.current} className="flex flex-row gap-2">
            <h3 className="text-xl font-bold">{dataContent.title}</h3>
            {/* <p>{dataContent.body}</p> */}
            {/* <pre>{dataContent.body[0]}</pre> */}
          </div>
        </div>
      </div>
    );
  }
}

export default WrapperContent;
