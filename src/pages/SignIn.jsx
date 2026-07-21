import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link ,NavLink} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth}from "../firebase/Config"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const [errorr, setErrorr] = useState(false);
      const [MessageError, setMessageError] = useState("");

  return (
    <div >
      <Helmet>
              <title>Sign in page</title>
            </Helmet>
      
            <Header />
            <main >
              <form>
                <input  onChange = {(eo) => {
            setEmail (eo.target.value)
          }
          }
                required placeholder = 'email' type = 'email'/>
                <input onChange = {(eo) => {
            setPassword (eo.target.value)
          }
          }
              required placeholder = 'password' type = 'password'/>
                <button onClick ={(eo) => {
                  eo.preventDefault()
                  console.log(email);
console.log(password);
                  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
navigate("/");
    console.log("sign in")

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
      default:
              setMessageError("enter password")

    }
//  setMessageError(errorCode);
  //    console.log(errorMessage)

  });
                }
                }>Sign in</button>
                <p className='account'><Link to ="/Signup">Sign up</Link>
                </p>
                {errorr && <p>{MessageError}</p>}
              </form>
            </main>
            <Footer />
    </div>
  )
}
