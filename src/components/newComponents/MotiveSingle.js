import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";
import ArtistSingle from "./ArtistSingle";
import client from "../../sanityClient";

function MotiveSingle() {
  const { motiveSlug } = useParams();
  const motive = useLoaderData();

  return (
    <div>
      <h1>Motive: {motive[0].title}</h1>
      <main>
        <p>{motive[0].slug.current}</p>
        <p>{motive[0].price}</p>
        <NavLink
          to={"artist/" + motive[0].artist.slug.current}
          element={<ArtistSingle />}>
          {motive[0].artist.name}
        </NavLink>
        <hr></hr>
      </main>
      <Outlet />
    </div>
  );
}

export default MotiveSingle;

export const motiveDetailsLoader = async ({ params }) => {
  const { motiveSlug } = params;
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

  return res;
};
