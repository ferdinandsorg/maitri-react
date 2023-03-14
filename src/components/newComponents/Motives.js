import { useState, useEffect, Navigate } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import client from "../../sanityClient";

export default function Motives() {
  const [motives, setMotives] = useState(null);
  const { motiveSlug } = useParams();
  const location = useLocation();
  useEffect(() => {
    const query = `*[_type == "motive"] {
            title,
            slug
          }`;
    client
      .fetch(query)
      .then((data) => setMotives(data))
      .catch(console.error);
  }, []);

  if (!motives) {
    return <div>Loading.</div>;
  }

  return (
    <div>
      <header className="motive-nav border-2 border-yellow-300">
        <p className="text-sm bg-yellow-300 text-black">Configurator Header</p>
        <nav className="flex flex-row gap-4">
          {motives.map((motive) => (
            <NavLink
              to={"/motive/" + motive.slug.current}
              key={motive.slug.current}>
              {motive.title}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="border-2 border-green-300">
        <p className="text-sm bg-green-300 text-black">Configurator Main</p>
        {/* If Startpage, load first element of Motive  */}
        {/* {"/" == location.pathname && (
          <Navigate to={"motive/" + motives[0].slug.current} />
        )} */}
      </main>
    </div>
  );
}
