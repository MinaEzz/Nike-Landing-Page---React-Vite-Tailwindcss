import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="padding-x py-8  fixed w-[100dvw] z-20 ">
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
          isOpen ? "" : "hidden"
        } lg:hidden py-4 mt-2 text-center space-y-2 bg-neutral-50`}
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

const NavLink = ({ path, label }) => {
  return (
    <li>
      <a
        href={path}
        className=" font-montserrat leading-normal text-slate-gray capitalize"
      >
        {label}
      </a>
    </li>
  );
};
