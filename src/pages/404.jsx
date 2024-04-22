import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry, an unexpected an error has occurred</p>
      <p className="text-red-500 font-semibold text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
