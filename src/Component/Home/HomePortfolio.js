import React from 'react';
import { PortfolioData } from '../Portfolio/PortfolioData';
import PortfolioCard from '../Portfolio/PortfolioCard';
import { Link } from 'react-router-dom';

const animation1 = ["fade-up", "flip-down",];
const animation2 = ["flip-left", "zoom-in-out"];

const HomePortfolio = () => {
    
    const portfolio = PortfolioData.slice(0,2)
    return (
      <section className="portfolio" style={{marginTop:"200px"}}>
        <div className="container">
          <h1>My Latest <span className="text-light">Works</span></h1>
          <h5 className="text-light mb-5">Go Portfolio Section for view all</h5>
        {portfolio.map((d, i) => (
          <PortfolioCard
            data={d}
            key={i}
            layout={"col-lg-6"}
            id={i}
          ></PortfolioCard>
        ))}
        <Link to="/portfolio">
          <button className="btn btn-message mr-5 mt-4">View All Works</button>
        </Link>
        </div>
      </section>
    );
};

export default HomePortfolio;