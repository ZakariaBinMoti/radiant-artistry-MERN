import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-32">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-3xl text-gray-600">
        Oops! Looks like youre lost.
      </p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </div>
      <p className="mt-4 text-2xl text-gray-600">
        Lets get you back{" "}
        <Link to="/" className="text-blue-500">
          home
        </Link>
        .
      </p>
    </div>
  );
};

export default ErrorPage;
