import { NavLink } from "react-router-dom";
import { linksData } from "./linksData";

export const Navbar = ({ menuIsOpen }) => {
  return (
    <nav
      className={`absolute bottom-0 right-0 translate-y-full w-full overflow-hidden transition-all duration-500 bg-black/85 z-50 ${
        menuIsOpen ? "h-max opacity-100" : "h-0 opacity-0"
      }`}
    >
      <ul className="mx-auto max-w-6xl flex flex-col lg:p-0 lg:flex-row lg:justify-end lg:items-center lg:gap-3 xl:gap-5">
        {linksData.map((link) => (
          <li
            key={link.name}
            className="py-3 text-center text-lg font-seravekmedium text-white hover:text-orange hover:bg-white/20 transition-all duration-500"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-orange" : "text-inherit"
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
