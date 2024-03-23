import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="text-center">
        <h1 className="text-7xl">Oops!!!</h1>
        <br />
        <h3 className="text-5xl"><i>Page Not found</i></h3>
        <br />
        <Link to="/" className="btn">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
