import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./about">About</Link>
        </li>
        <li>
          <Link to="./login">Login</Link>
        </li>
        <li>
          <a href={"http://github.com/gokulkumarp"} title="github">
            Github
          </a>
        </li>
        <li>
          <a href={"https://www.linkedin.com/in/gokulkumar-p/"}>
            <button id="link">
              Linkedin <i className="fa fa-linkedin-square"></i>
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
