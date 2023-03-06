import {
  NavLink,
  Outlet,
  useParams,
  useLoaderData,
  useLocation,
  Link,
} from "react-router-dom";
import client from "../../sanityClient";

function ArtistSingle() {
  const { artistSlug } = useParams();
  const artist = useLoaderData();
  const location = useLocation();

  let url = location.pathname;
  const regex = new RegExp("/artist/" + artistSlug, "g");
  const closeArtistLink = url.replace(regex, "");

  return (
    <div>
      <p>
        <Link to={closeArtistLink}>Close Artist</Link>
      </p>
      <h1>Artist: {artist[0].name}</h1>
      <main>
        <p>{artist[0].bio}</p>
      </main>
    </div>
  );
}

export default ArtistSingle;

export const artistDetailsLoader = async ({ params }) => {
  const { artistSlug } = params;
  const query = `*[_type == "artist" && slug.current == "${artistSlug}"] {
        name,
        slug,
        bio,
        avatar,
        email,
        instagramUsername,
        website
      }`;
  const res = await client.fetch(query);
  return res;
};
