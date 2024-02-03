import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="padding-x py-8  fixed w-[100dvw] z-20">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-end items-center space-x-16 max-lg:hidden">
          {navLinks.map((link) => {
            return (
              <NavLink path={link.href} label={link.label} key={link.label} />
            );
          })}
        </ul>
        <button className="max-lg:block hidden" onClick={toggleNavbar}>
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </button>
      </nav>
      <ul
        className={`${
          isOpen ? "opacity-100" : "opacity-0"
        } lg:hidden block py-4 mt-2 text-center space-y-2 transition duration-500 ease-in-out rounded-xl`}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      >
        {navLinks.map((link) => {
          return (
            <NavLink path={link.href} label={link.label} key={link.label} />
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
