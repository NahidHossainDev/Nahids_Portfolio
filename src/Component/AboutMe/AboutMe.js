import React from 'react';
import NavbarCont from '../NavbarCont/NavbarCont';
import img from "../Image/Nahid Hossain (3).jpg"
import { Link } from 'react-router-dom';
const AboutMe = () => {
    return (
      <div>
        <NavbarCont />
        <section className="container about-me">
          <h1>About Me</h1>
          <div className="row">
            <div className="col-lg-6">
              <img src={img} alt=""></img>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia maiores adipisci illum sunt temporibus iure
                reprehenderit aspernatur quos, quam maxime explicabo vitae amet
                culpa tempore dolorem suscipit, quasi officiis hic animi ipsum
                vel eos. Modi non recusandae nam expedita accusantium inventore
                ratione, possimus laborum quaerat error culpa ipsam! Laboriosam
              </p>
              <Link to="/contact">
                <button className="btn btn-message mr-5 mt-4">
                  Send Message
                </button>
              </Link>
              <a href="https://drive.google.com/uc?export=download&id=180BAu7kayLVxLC0cyHgl5JmhqGBRwtkh">
                <button className="btn btn-bg mt-4">Download Resume</button>
              </a>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </section>
      </div>
    );
};

export default AboutMe;