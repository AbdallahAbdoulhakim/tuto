import React from "react";
import { TiSocialVimeoCircular } from "react-icons/ti";

const Header = ({ title }) => {
  return (
    <header className="h-14 text-2xl text-slate-100 bg-green-500 px-5 flex items-center justify-between">
      <h1>{title}</h1>
      <div className="">
        <TiSocialVimeoCircular size={40} />
      </div>
    </header>
  );
};

export default Header;
