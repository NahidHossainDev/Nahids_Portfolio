import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const PortfolioCard = ({ data, id, anim1, anim2, layout }) => {
    const {title, img, liveSite, gitHub, detail, tec } = data
   
  useEffect(() => {
     AOS.init({ duration: 2000 });
   }, []);
   
  return (
    <div className="row my-4 portfolio-card">
      <div className={`${layout} img-div`} data-aos={anim1}>
        <img src={img} alt="" style={{ width: "100%" }} />
      </div>
      <div className={`${layout} text-div`} data-aos={anim2}>
        <p>{id + 1}</p>
        <h4>{title}</h4>
        <div className="portfolio-icons">
          <a href={gitHub} target="blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={liveSite}  target="blank">Live</a>
        </div>
        <p>{detail}</p>
        {tec.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;