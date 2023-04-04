import React, { useState, useEffect } from "react";
import client from "../../../sanityClient";
import Loading from "../../Loading";
import { PortableText } from "@portabletext/react";
import { NavLink } from "react-router-dom";

function ContentFooter() {
  const currentYear = new Date().getFullYear();
  const [siteSettings, setsiteSettings] = useState(null);
  useEffect(() => {
    const query = `*[_type == "siteSettings"][0]`;
    client
      .fetch(query)
      .then((data) => setsiteSettings(data))
      .catch(console.error);
  }, []);

  if (!siteSettings) {
    return <Loading />;
  }

  return (
    <footer>
      <div className="w-full mb-2">
        <PortableText value={siteSettings.footerText} />
      </div>
      <div className="w-full flex flex-row flex-wrap gap-2 items-start">
        <a
          className="btn btn-primary"
          href={"https://instagram.com/" + siteSettings.instagramUsername}
          target="_blank">
          Instagram @{siteSettings.instagramUsername}
        </a>
        <a className="btn btn-primary" href={"mailto:" + siteSettings.email}>
          {siteSettings.email}
        </a>
      </div>
      <div className="flex justify-center my-14">
        <a
          href="https://ferdinands.org"
          target="_blank"
          className="text-center inline-flex justify-center items-center px-6 py-2 bg-white rounded-full hover:bg-[#00f] hover:text-white transition-all">
          Website made with <span className="text-2xl">🕺🏻</span> by Ferdinand
          Sorg
        </a>
      </div>
      <div className="w-full flex flex-row justify-between justify-content-start">
        <NavLink to={"imprint"}>Imprint</NavLink>
        {siteSettings ? (
          <p>
            &copy; {currentYear} {siteSettings.title}
          </p>
        ) : (
          <Loading />
        )}
      </div>
    </footer>
  );
}

export default ContentFooter;
