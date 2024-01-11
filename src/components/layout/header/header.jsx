import { useEffect, useState } from "react";
import { LocationIcon, PhoneIcon } from "../../icons";
import { InfoLink } from "./infoLink";
import { Navbar } from "./navbar/navbar";
import { HamburgerBtn } from "./hamburgerBtn";
import { Link } from "react-router-dom";
import logoMvp from "../../../assets/images/mvp-miami.png";
import { NavbarFull } from "./navbar/navbarFull";

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setMenuIsOpen(true);
    }
  }, []);

  return (
    <header className="relative p-5 flex justify-between sm:px-10">
      <Link to="/">
        <img
          className="h-14 xs:h-20 lg:h-28 xl:h-32"
          src={logoMvp}
          alt="Logo MVP Miami"
        />
      </Link>
      <div className="flex flex-col justify-between gap-3">
        <div className="flex flex-col items-end md:flex-row-reverse md:items-start md:gap-5">
          <InfoLink
            path="#"
            icon={<LocationIcon width={20} height={25} />}
            text="2500 NW 39th Street Miami, Florida 33142"
          />
          <InfoLink
            path="#"
            icon={<PhoneIcon width={24} height={30} />}
            text="786.877.4317"
          />
        </div>
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
