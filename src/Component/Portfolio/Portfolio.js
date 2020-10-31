import React from 'react';
import { PortfolioData } from './PortfolioData';
import PortfolioCard from './PortfolioCard';
import NavbarCont from '../NavbarCont/NavbarCont';

const anim1 = ["fade-up", "flip-down", "zoom-in-right", "fade-down-left", "slide-right", "flip-up"];
const anim2 = ["flip-left", "slide-left", "flip-right", "flip-up", "zoom-in-left", "fade-down"];
const Portfolio = () => {
    
    return (
      <div>
        <NavbarCont />
         <section className="portfolio container">
          <h1 className="mb-5">My Works</h1>
          {PortfolioData.map((d,i)=> <PortfolioCard data={d} key={i} anim1={anim1[i]} anim2={anim2[i]} id={i} layout={"col-lg-6"}></PortfolioCard>)}
         </section>
     </div>
    );
};

export default Portfolio;