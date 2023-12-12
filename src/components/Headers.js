import React, { useState } from "react";
import "./styles/Headers.css";

import { Link } from "react-router-dom";
import { Close, MenuBookOutlined } from "@mui/icons-material";

const Headers = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="header">
      <div className="header_logo">
        <h1>My Portfolio</h1>
      </div>
      <nav>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>
          <li>
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <b>About</b>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <b>Contact</b>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <b>Portfolio</b>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="changer">
        <MenuBookOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Headers;
