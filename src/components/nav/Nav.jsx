import React from "react";
import "./nav.css";
import { FaWhatsapp } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="nav">
      <a href="https://wa.me/+0201068978663">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Nav;
