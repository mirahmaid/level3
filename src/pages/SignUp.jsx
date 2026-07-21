import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth}from "../firebase/Config"
import { Navigate} from "react-router";

import { useState } from 'react';
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
        const [errorr, setErrorr] = useState(false);    
  const [MessageError, setMessageError] = useState("");

  return (
    <div>
      <Helmet>
        <title>Sign up page</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <input onChange = {(eo) => {
            setEmail (eo.target.value)
          }
          }
          required placeholder="email" type="email" />
          <input onChange = {(eo) => {
            setPassword (eo.target.value)
          } 
        }
          required placeholder="password" type="password" />
          <button
            onClick={(eo) => {
              eo.preventDefault()
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                
                
                
                  const user = userCredential.user;
                  Navigate("/");
                  console.log("success")
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorr(true);
                    switch(errorCode){
      case  "auth/invalid-email":
     setMessageError("wrong email")
      break;  
        case  "auth/invalid-credential":
            setMessageError("wrong password")

      break;  
        case  "auth/too-many-requests":
            setMessageError("try later")

      break;  
        case  "auth/missing-password":
            setMessageError("enter password")

      break; 
        case  "auth/weak-password":
            setMessageError("weak password")

      break;
      default:
              setMessageError("enter password")

    }
              
                });
            }}
          >
            Sign up
          </button>
          <p className="account">
            <Link to="/Signin">Sign in</Link>
          </p>
        {errorr && <p>{MessageError}</p>}
        </form>
      </main>{" "}
      <Footer />
    </div>
  );
}
