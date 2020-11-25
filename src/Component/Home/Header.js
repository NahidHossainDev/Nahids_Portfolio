import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import { Link } from 'react-router-dom';
import ReactParticles from "react-particles-js";
import particlesStyle from "./Particles-config";

const Header = () => {
  return (
    <Particles>
      <div className="home-header d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h3>
            Hi I'm <span> Md. Nahid Hossain</span>
          </h3>
          <h4 style={{ color: "#05c46b" }}>
            <Typical
              steps={["A Web developer", 2000, "A Programmer", 2000]}
              loop={Infinity}
              wrapper="p"
            />
          </h4>
          <div className="btn-box" style={{zIndex:"9999"}}>
            <Link to="/contact">
              <button className="btn btn-message mr-5 mt-4">
                Send Message
              </button>
            </Link>
            <a href="https://drive.google.com/uc?export=download&id=180BAu7kayLVxLC0cyHgl5JmhqGBRwtkh">
              <button className="btn btn-bg mt-4">Download Resume</button>
            </a>
          </div>
          <div className="icons-div">
            <a href="https://github.com/nahid9764" target="blank">
              <FontAwesomeIcon icon={faGithub} className="icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/nahid-hossain9764/"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="icons" />
            </a>
            <a href="https://twitter.com/Nahid_Hossain97" target="blank">
              <FontAwesomeIcon icon={faTwitter} className="icons" />
            </a>
            <a href="https://www.facebook.com/nahidhossain9764/" target="blank">
              <FontAwesomeIcon icon={faFacebook} className="icons" />
            </a>
          </div>
        </div>
      </div>
  </Particles>
  );
};


function Particles({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <ReactParticles
        params={particlesStyle}
        style={{
          pointerEvents: "none",
          position: "absolute",
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children && <div style={{ position: "relative" }}>{children}</div>}
    </div>
  );
}
export default Header;