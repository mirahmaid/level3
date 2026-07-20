import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link ,NavLink} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth}from "../firebase/Config"
import { useState } from 'react';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
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
                  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log("sign in")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
      console.log(errorMessage)

  });
                }
                }>Sign in</button>
                <p className='account'><Link to ="/Signup">Sign up</Link></p>
              </form>
            </main>
            <Footer />
    </div>
  )
}
