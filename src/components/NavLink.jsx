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

export default NavLink;
