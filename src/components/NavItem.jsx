import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <li
      id={item.link}
      className="h-10 flex bg-green-500 border border-r-slate-300 rounded-lg hover:bg-green-400 hover:text-slate-500 active:scale-95  flex-grow text-center"
    >
      <Link className="flex-grow grid place-items-center" to={item.link}>
        {item.item}
      </Link>
    </li>
  );
};

export default NavItem;
