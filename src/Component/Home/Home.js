import React from "react";
import Header from "./Header";
import NavbarCont from "../NavbarCont/NavbarCont";
import HomePortfolio from "./HomePortfolio";
import Skils from "./Skils";


const Home = () => {
    return (
      <div >
        <Header />
        <NavbarCont />
        <Skils/>
        <HomePortfolio/>
        <p className="text-center py-3 copyright">
          © {new Date().getFullYear()} | All rights reserved for Md. Nahid Hossain
        </p>
      </div>
    );
};

export default Home;