import React from 'react';
import BootstrapImg from "../Image/Skills_icons/icons8-bootstrap-100.png"
import FirebaseImg from "../Image/Skills_icons/icons8-firebase-100.png"
import gitImg from "../Image/Skills_icons/icons8-git-100.png"
import gitHubImg from "../Image/Skills_icons/icons8-github-100.png";
import HerokuImg from "../Image/Skills_icons/icons8-heroku-100.png"
import JsImg from "../Image/Skills_icons/javascript.png"
import MaterialImg from "../Image/Skills_icons/icons8-material-ui-100.png"
import MongodbImg from "../Image/Skills_icons/icons8-mongodb-100.png"
import NodeImg from "../Image/Skills_icons/icons8-nodejs-100.png"
import NpmImg from "../Image/Skills_icons/icons8-npm-100.png";
import ReactImg from "../Image/Skills_icons/icons8-react-100.png";
import ReduxImg from "../Image/Skills_icons/icons8-redux-100.png";
import SassImg from "../Image/Skills_icons/icons8-sass-100.png";
import NetlifyImg from "../Image/Skills_icons/Netlify.png";
import HtmlImg from "../Image/Skills_icons/Html.png";
import CssImg from "../Image/Skills_icons/css.png";
import ChromeImg from "../Image/Skills_icons/Chrorome-dev.png";
import ExpressImg from "../Image/Skills_icons/express.png";
import FigmaImg from "../Image/Skills_icons/figma.png";
import VSCodeImg from "../Image/Skills_icons/icons8-visual-studio-code-2019-100.png";
import AOS from "aos";
import "aos/dist/aos.css";


const comfortSkills = [
  { img: ReactImg, name: "React.js" },
  { img: BootstrapImg, name: "Bootstrap" },
  { img: MaterialImg, name: "Material-ui" },
  { img: JsImg, name: "Javascript" },
  { img: HtmlImg, name: "Html" },
  { img: CssImg, name: "Css" },
  { img: FirebaseImg, name: "Firebase" },
];
const familiarSkills = [
  { img: NodeImg, name: "Node.js" },
  { img: MongodbImg, name: "MongoDB" },
  { img: ExpressImg, name: "Express.js" },
  { img: ReduxImg, name: "Redux" },
  { img: SassImg, name: "Sass" },
  { img: HerokuImg, name: "Heroku" },
  
];
const tools = [
  { img: NpmImg, name: "Npm" },
  { img: gitImg, name: "Git" },
  { img: gitHubImg, name: "Github" },
  { img: VSCodeImg, name: "VS Code" },
  { img: FigmaImg, name: "Figma" },
  { img: ChromeImg, name: "Chrome-Dev" },
  { img: NetlifyImg, name: "Netlify" },
];


const Skils = () => {
    return (
      <section className="container">
        <h1><span className="text-light">TECHNICAL</span> SKILLS</h1>
        <h5 className="text-light">That you Should know First</h5>
        <div className="skill-div" data-aos="zoom-in-out">
          <div className="comfort">
            <h3 className="d-inline-block">Comfort</h3>
            <div className="skill-icons">
              {comfortSkills.map((d, i) => (
                <div>
                  <img src={d.img} alt="" />
                  <p>{d.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="familiar">
            <h3 className="d-inline-block">Familiar</h3>
            <div className="skill-icons">
              {familiarSkills.map((d, i) => (
                <div>
                  <img src={d.img} alt="" />
                  <p>{d.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="tools">
            <h3 className="d-inline-block">Tools</h3>
            <div className="skill-icons">
              {tools.map((d, i) => (
                <div>
                  <img src={d.img} alt="" />
                  <p>{d.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default Skils;