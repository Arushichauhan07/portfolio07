import React from "react";
import "./styles/Main.css";
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";

const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="main_content">
          <div className="text">
            <p>Hello Everyone</p>
            <h1>I am Arushi </h1>
            <p>Full-Stack Developer</p>
            <div className="icons">
              <Instagram className="icon" />
              <Facebook className="icon" />
              <LinkedIn className="icon" />
            </div>
            <div className="buttons">
              <button>Hire Me</button>
            </div>
          </div>
        </div>
        {/* <div className="main_img">
            <img src={} alt=""/>
        </div> */}
      </div>
    </div>
  );
};

export default Main;
