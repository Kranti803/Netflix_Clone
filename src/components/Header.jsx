import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ simplified }) => {
  return (
    <div className="header">
      <img src={Logo} alt="" />

      <div>
        { !simplified && (
          <button>
            <Link to={"/signup"}>Sign Up</Link>

          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
