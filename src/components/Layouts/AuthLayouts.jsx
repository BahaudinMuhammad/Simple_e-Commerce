import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, tes, type } = props;
  return (
    <div className=" flex justify-center min-h-screen items-center text-white">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2 text-center ">
          {title}
        </h1>
        <p className="font-medium text-slate-500 mb-6 text-center">{tes}</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-slate-700 text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-slate-700 text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
