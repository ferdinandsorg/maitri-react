import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import client from "../../sanityClient";

export default function RootLayout() {
  const location = useLocation();
  const [firstMotive, setFirstMotive] = useState(null);
  useEffect(() => {
    const query = `*[_type == "motive"][0] {
        slug,
      }`;
    client
      .fetch(query)
      .then((data) => setFirstMotive(data))
      .catch(console.error);
  }, []);

  if (location.pathname === "/" && firstMotive) {
    return <Navigate to={"motive/" + firstMotive.slug.current} />;
  }

  return <Outlet />;
}
