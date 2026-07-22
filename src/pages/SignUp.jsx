import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth}from "../firebase/Config"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { updateProfile } from "firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
        const [errorr, setErrorr] = useState(false);    
  const [MessageError, setMessageError] = useState("");
    const [userName, setUserName] = useState("");


  return (
    <div>
      <Helmet>
        <title>Sign up page</title>
      </Helmet>
      <Header />
      <main>
        <form>
          <p>create a new account</p>
          <input onChange = {(eo) => {
            setUserName (eo.target.value)
          }
          }
          required placeholder="username" type="text" />
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
                const auth = getAuth();
updateProfile(auth.currentUser, {
  displayName: "userName", photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
                  navigate("/");
                  console.log("success")
                })
              .catch((error) => {
  console.log("ERROR CODE:", error.code);
  console.log("ERROR MESSAGE:", error.message);

  const errorCode = error.code;
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
