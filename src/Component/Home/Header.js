import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="home d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h3 className="">
            Hi I'm <span> Md. Nahid Hossain</span>
          </h3>
          <h4 style={{ color: "#05c46b" }}>
            <Typical
              steps={["A Web developer", 2000, "A Programmer", 2000]}
              loop={Infinity}
              wrapper="p"
            />
          </h4>
          <div className=" btn-box">
            <Link to="/contact">
              <button className="btn btn-message mr-5 mt-4"> Send Message </button>
            </Link>
            <a href="https://drive.google.com/uc?export=download&id=180BAu7kayLVxLC0cyHgl5JmhqGBRwtkh">
              <button className="btn btn-bg mt-4">
                Download Resume
              </button>
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
    );
};

export default Header;