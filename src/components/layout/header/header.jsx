import { useState } from "react";
import { Navbar } from "./navbar/navbar";
import { HamburgerBtn } from "./hamburgerBtn";
import { Link } from "react-router-dom";
import logoMvp from "../../../assets/images/mvp-miami.png";
import { NavbarFull } from "./navbar/navbarFull";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="relative p-5 flex justify-between items-center xs:px-7 sm:px-10">
      <Link to="/">
        <img className="h-16 md:h-20" src={logoMvp} alt="Logo MVP Miami" />
      </Link>
      <div>
        <div className="flex justify-end lg:hidden">
          <HamburgerBtn menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          <Navbar menuIsOpen={menuIsOpen} />
        </div>
        <div className="hidden lg:block">
          <NavbarFull />
        </div>
      </div>
    </header>
  );
};
