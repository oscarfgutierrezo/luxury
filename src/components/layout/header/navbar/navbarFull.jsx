import { NavLink } from "react-router-dom";
import { linksData } from "./linksData";

export const NavbarFull = () => {
  return (
    <nav className="w-full">
      <ul className="h-12 max-w-6xl flex flex-row justify-end items-center gap-3 xl:gap-5">
        {linksData.map((link) => (
          <li
            key={link.name}
            className="text-center text-base font-seravekmedium text-white uppercase hover:text-red transition-all duration-500 xl:text-lg"
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
