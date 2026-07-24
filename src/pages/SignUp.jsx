import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/Config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from 'react';

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorr, setErrorr] = useState(false);
  const [MessageError, setMessageError] = useState("");
  const [userName, setUserName] = useState("");

  const [user, loading, error] = useAuthState(auth);
useEffect(() => {
    if (user){
      if(user.emailVerified){  
    navigate("/")
      }
  }
  
},[]
  )
  if (loading) {
    return (
      <div>
        <Header />
        <main>
          <p>Initialising User...</p>
        </main>
        <Footer />
      </div>
    );
  }
if (error) {
  return (
    <div>
      <Header />
      <main>
        <p>Error: {error.message}</p>
      </main>
      <Footer />
    </div>
  );
}
  if (user && !user.emailVerified) {
    return (
      <div>
        <Header />
        <main>
          <p>We sent you an email to verify your account.</p>

          <button
            className="delete"
            onClick={() => {
              sendEmailVerification(auth.currentUser).then(() => {
                console.log("Email sent again");
              });
            }}
          >
            Send Again
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <Helmet>
          <title>Sign up page</title>
        </Helmet>

        <Header />

        <main>
          <form>
            <p>Create a new account</p>

            <input
              required
              placeholder="Username"
              type="text"
              onChange={(eo) => {
                setUserName(eo.target.value);
              }}
            />

            <input
              required
              placeholder="Email"
              type="email"
              onChange={(eo) => {
                setEmail(eo.target.value);
              }}
            />

            <input
              required
              placeholder="Password"
              type="password"
              onChange={(eo) => {
                setPassword(eo.target.value);
              }}
            />

            <button
              onClick={(eo) => {
                eo.preventDefault();

                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    const authh = getAuth();

                    updateProfile(authh.currentUser, {
                      displayName: userName,
                    }).then(() => {
                      console.log("Profile Updated");
                    });

                    sendEmailVerification(authh.currentUser).then(() => {
                      console.log("Verification Email Sent");
                    });

                    navigate("/");
                  })

                  .catch((error) => {
                    console.log("ERROR CODE:", error.code);
                    console.log("ERROR MESSAGE:", error.message);

                    setErrorr(true);

                    switch (error.code) {
                      case "auth/invalid-email":
                        setMessageError("Wrong email");
                        break;

                      case "auth/email-already-in-use":
                        setMessageError("Email already in use");
                        break;

                      case "auth/weak-password":
                        setMessageError("Weak password");
                        break;

                      case "auth/missing-password":
                        setMessageError("Enter password");
                        break;

                      case "auth/too-many-requests":
                        setMessageError("Try again later");
                        break;

                      default:
                        setMessageError(error.message);
                    }
                  });
              }}
            >
              Sign Up
            </button>

            <p className="account">
              <Link to="/Signin">Sign In</Link>
            </p>

            {errorr && <p>{MessageError}</p>}
          </form>
        </main>

        <Footer />
      </div>
    );
  }
}