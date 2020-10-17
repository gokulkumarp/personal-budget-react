import React from "react";
import "./App.scss";
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./Menu/Menu";
import Hero from "./Hero/Hero";
import HomePage from "./HomePage/HomePage";
import Footer from "./Footer/Footer";
import AboutPage from "./AboutPage/AboutPage";
import LoginPage from "./LoginPage/LoginPage";

export const chartData = () =>{
  const res =  axios.get("http://localhost:3000/budget");
  return res;
}
function App() {
      
  return (
    <Router>
      <Menu />
      <Hero />
      <div className="mainContainer">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
