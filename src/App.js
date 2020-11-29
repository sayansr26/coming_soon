import React, { useEffect, useRef } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./Assets/fav.svg";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiGithubFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import lottie from "lottie-web";

function App() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Assets/construction.json"),
    });
  }, []);
  return (
    <>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <div className="container">
          <div className="row py-5">
            <div className="col-10 mx-auto d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-center text-shy">
                <img src={logo} className="logo" alt="logo" />
                siaaw.tk
              </h5>
              <div className="container-fluid lottie-box" ref={container}></div>
              <h1 className="text-center big-font text-heli">
                Website Under Construction
              </h1>
              <h3 className="text-center text-bluee">Coming soon..</h3>
              <div className="d-flex mx-auto justify-content-between">
                <a href="https://facebook.com" rel="noreferrer" target="_blank">
                  <RiFacebookCircleLine />
                </a>
                <a href="https://twitter.com" rel="noreferrer" target="_blank">
                  <RiTwitterLine />
                </a>
                <a href="https://github.com" rel="noreferrer" target="_blank">
                  <RiGithubFill />
                </a>
                <a href="https://youtube.com" rel="noreferrer" target="_blank">
                  <RiYoutubeFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default App;
