import React from "react";
import Header from "./Header";
import NavbarCont from "../NavbarCont/NavbarCont";
import HomePortfolio from "./HomePortfolio";
import Skils from "./Skils";
import Contact from "../Contact/Contact"

const Home = () => {
    return (
      <div >
        <Header />
        <Skils/>
        <HomePortfolio/>
        <Contact navs={false}/>
        <p className="text-center py-3 copyright">
          © {new Date().getFullYear()} | All rights reserved for Md. Nahid Hossain
        </p>
      </div>
    );
};

export default Home;