import React, { useState, useEffect } from "react";
import client from "../../sanityClient.js";
import Loading from "../Loading.js";
import { PortableText } from "@portabletext/react";

function WrapperContent() {
  const [content, setContent] = useState(null);
  useEffect(() => {
    const query = `*[_type == "content"][1]`;
    client
      .fetch(query)
      .then((data) => setContent(data))
      .catch(console.error);
  }, []);

  if (!content) {
    return <Loading />;
  } else {
    console.log("content", content);
    return (
      <main className="flex flex-col gap-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Why</h2>
          <PortableText value={content.why} />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">What</h2>
          <div className="columns-2">
            <div>
              <h3 className="text-2xl font-bold mb-2">We are...</h3>
              <PortableText value={content.what.weAre} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">We are not...</h3>
              <PortableText value={content.what.weAreNot} />
            </div>
          </div>
        </div>
        <div>
          <PortableText value={content.bodyText} />
        </div>
      </main>
    );
  }
}

export default WrapperContent;
