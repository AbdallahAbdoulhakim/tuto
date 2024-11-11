import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="h-14 text-2xl text-slate-100 bg-green-500 px-5 grid place-items-center">
      <h1>Copyright &copy; {date.getFullYear()}</h1>
    </footer>
  );
};

export default Footer;
