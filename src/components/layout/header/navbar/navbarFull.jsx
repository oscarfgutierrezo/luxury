import { NavLink } from "react-router-dom";
import { linksData } from "./linksData";

export const NavbarFull = () => {
  return (
    <nav className="w-full">
      <ul className="h-12 max-w-6xl flex flex-row justify-end items-center gap-4 xl:gap-5">
        {linksData.map((link) => (
          <li
            key={link.name}
            className="text-center text-lg font-seravekmedium text-white border-b border-transparent hover:text-orange hover:border-orange transition-all duration-500 xl:text-lg"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-orange border-b border-orange" : "text-inherit"
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
