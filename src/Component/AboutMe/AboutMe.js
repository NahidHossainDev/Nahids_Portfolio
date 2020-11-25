import React from 'react';
import NavbarCont from '../NavbarCont/NavbarCont';
import img from "../Image/Nahid Hossain (3).jpg"
import { Link } from 'react-router-dom';

const fontEnd = ["React.js", "Bootstrap", "Material-ui", "Javascript", "Html","CSS","Firebase",];
const backEnd = ["Node", "MongoDB", "Express.js"]
const tools = ["Npm ","Git","Github","VS Code", "Figma", "Chrome-DEV", "Netlify"]
const AboutMe = () => {
    return (
        <section className="container about-me">
          <h1>
            <span className="text-light"> About</span> ME
          </h1>
          <div className="row">
            <div className="col-lg-6">
              <img src={img} alt=""></img>
              <p>
                As a Frontend developer, I have expertise in Reactjs,
                Javascript, ES-6, node.js, vanila.js, HTML, CSS, and many more.
                I also worked as a Research Analyst in "Golden Harvest Info.
                Tech. Ltd" for 6 months. But I did my Bachelor's degree in
                Marketing so I have also experience in the marketing sector and
                I also did several jobs as a brand promoter in renowned company
                as "Grameenphone", and "British-Tobacco".
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
            <div className="col-lg-6">
              <h3>Skills</h3>
              <div className="about-skills">
                
                <ul>
                  {fontEnd.map(d => <li>{d}</li>)}
                </ul>
              </div>
              <div className="about-skills">
                
                <ul>
                  {backEnd.map(d => <li>{d}</li>)}
                </ul>
              </div>
              <div className="about-skills">
                
                <ul>
                  {tools.map(d => <li>{d}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
};

export default AboutMe;