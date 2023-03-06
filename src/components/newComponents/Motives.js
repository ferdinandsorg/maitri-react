import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import client from "../../sanityClient";

export default function Motives() {
  const [motives, setMotives] = useState(null);
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

  //   const motives = useLoaderData();
  if (!motives) {
    return <div>Loading.</div>;
  }
  return (
    <div>
      <h1>
        <NavLink to="/">Motives</NavLink>
      </h1>

      <header>
        <nav className="flex flex-row gap-4">
          {motives.map((motive) => (
            <NavLink
              to={"motive/" + motive.slug.current}
              key={motive.slug.current}>
              {motive.title}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

// export const motiveLoader = async () => {
//   const query = `*[_type == "motive"] {
//       title,
//       slug
//     }`;
//   const res = await client.fetch(query);
//   return res;
// };
