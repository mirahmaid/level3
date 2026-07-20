import { Link ,NavLink} from "react-router-dom";
import "./Header.css";
import { FaRegSun ,FaMoon} from "react-icons/fa";
import '../Theme.css'
import {useContext } from "react";
import Data from "../context/Data";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth}from "../firebase/Config"
import { signOut } from "firebase/auth";

export default function Header() {
    const [user, loading, error] = useAuthState(auth);
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
        {!user &&<li className="main-list">
        <NavLink className="main-link" to="/Signin">
          sign in
        </NavLink>
      </li>}
        {!user &&<li className="main-list">
        <NavLink className="main-link" to="/Signup">
          sign up
        </NavLink>
      </li>}
      {user && <li className="main-list">
        <NavLink className="main-link" to="/Basic">
          Basics
        </NavLink>
      </li>}
    {user && <li className="main-list">
        <NavLink className="main-link" to="/Frameworks">
          Frameworks
        </NavLink>
      </li>}
      {user &&<li className="main-list">
        <NavLink className="main-link" to="/Tips">
          {" "}
          Tips{" "}
        </NavLink>
      </li>}
      
     {user && <li onClick ={(params) => {
       signOut(auth).then(() => {
        console.log("success sign out")
  // Sign-out successful.
}).catch((error) => {
  console.log("fail sign out")
});
     }
     }
     className="main-list">
        <NavLink className="main-link" >
          sign out
        </NavLink>
      </li>}
    </ul>
  </header>    
    </div>
  )
}
