import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error" className="h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold">💩 Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Back to the homepage</Link>
      </div>
    </div>
  );
}
