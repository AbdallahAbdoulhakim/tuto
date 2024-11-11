import React from "react";
import NavItem from "./NavItem";

const Nav = ({ search, setSearch }) => {
  const items = [
    { item: "Home", link: "/" },
    { item: "New Post", link: "/post" },
    { item: "About", link: "/about" },
  ];
  return (
    <nav className="text-slate-200 mt-2 grid grid-cols-2 px-2 space-x-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="hidden" htmlFor="search">
          Search Posts
        </label>
        <input
          className=" border border-slate-400 rounded-lg p-2 w-full outline-none focus:border-green-700 text-slate-700"
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <ul className="flex w-50">
        {items.map((item) => {
          return <NavItem item={item} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
