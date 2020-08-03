import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h4>Copyright &copy; {year}</h4>
      </div>
    </>
  );
};

export default Footer;
