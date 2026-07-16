import { Link ,NavLink} from "react-router-dom";
import "./Header.css";
import { FaRegSun ,FaMoon} from "react-icons/fa";
import '../Theme.css'
import {useContext } from "react";
import Data from "../context/Data";
export default function Header() {
      const {theme,changeTheme} = useContext(Data);              
  
  return (
    <div>
  <header className="header comp">
    
    <h1><Link to="/">Web Dev Roadmap</Link></h1>
    <button
  className="theme"
  onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
>
  {theme === "light" ? <FaMoon /> : <FaRegSun />}
</button>
    <ul className="flex">
      <li className="main-list">
        <NavLink className="main-link" to="/Basic">
          Basics
        </NavLink>
      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/Frameworks">
          Frameworks
        </NavLink>
      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/Tips">
          {" "}
          Tips{" "}
        </NavLink>
      </li>
    </ul>
  </header>    
    </div>
  )
}
