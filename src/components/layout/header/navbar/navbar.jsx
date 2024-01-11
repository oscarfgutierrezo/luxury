import { NavLink } from "react-router-dom";
import { linksData } from "./linksData";

export const Navbar = ({ menuIsOpen }) => {
  return (
    <nav
      className={`absolute bottom-0 right-0 translate-y-full w-full overflow-hidden transition-all duration-500 bg-black/80 ${
        menuIsOpen ? "h-max opacity-100" : "h-0 opacity-0"
      } lg:relative lg:translate-y-0 lg:bg-transparent`}
    >
      <ul className="mx-auto max-w-6xl p-4 flex flex-col lg:p-0 lg:flex-row lg:justify-end lg:items-center lg:gap-3 xl:gap-5">
        {linksData.map((link) => (
          <li
            key={link.name}
            className="py-5 text-center text-lg font-seravekmedium text-white uppercase hover:text-red transition-all duration-500 lg:py-0 lg:text-base xl:text-lg"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-red" : "text-inherit"
              }
            >
              {link.image ? (
                <img className="mx-auto" src={link.imagePath} alt="Home icon" />
              ) : (
                link.name
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
