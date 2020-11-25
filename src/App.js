import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import NavbarCont from './Component/NavbarCont/NavbarCont';
import Portfolio from './Component/Portfolio/Portfolio';
import Blog from './Component/Blog/Blog';
import AboutMe from './Component/AboutMe/AboutMe';
import Contact from './Component/Contact/Contact';
import { createContext } from 'react';
import { useState } from 'react';
import Skils from './Component/Home/Skils';

function App() {

  return (
    <Router>
      <NavbarCont />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/skills">
          <Skils />
        </Route>
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
        <Router path="/contact">
          <Contact />
        </Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
