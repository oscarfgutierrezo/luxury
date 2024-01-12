import { Link } from "react-router-dom";

export const LinkBtn = ({ path, text }) => {
  return (
    <Link
      to={path}
      className="w-max px-5 py-1 text-lg font-medium text-orange border border-orange bg-black/40 rounded-full hover:text-white hover:border-white transition-all duration-500 sm:py-2 sm:bottom-8"
    >
      {text}
    </Link>
  );
};
