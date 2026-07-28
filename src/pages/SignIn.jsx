import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Config";
import { useState ,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { MdLockReset} from "react-icons/md"
import Data from "../context/Data";
import "./SignIn.css";
import { sendPasswordResetEmail } from "firebase/auth";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorr, setErrorr] = useState(false);
  const [MessageError, setMessageError] = useState("");
  const { theme } = useContext(Data);
    const [resetEmail, setResetEmail] = useState(false);
    const [resetPassword, setResetPassword] = useState("");
  
  const resetPss = (eo) => {
      sendPasswordResetEmail(auth, resetPassword)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  console.log("error")
  });
  }
    const [showReset, setShowReset] = useState(false);
  const signInBtn = (eo) => {
      eo.preventDefault();

              console.log(email);
              console.log(password);

              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  signInWithEmailAndPassword(auth, email, password).then(() => {
                    navigate("/");
                  });

                  console.log("sign in");
                })
                .catch((error) => {
                  const errorCode = error.code;

                  setErrorr(true);

                  switch (errorCode) {
                    case "auth/invalid-email":
                      setMessageError("wrong email");
                      break;

                    case "auth/invalid-credential":
                      setMessageError("wrong password");
                      break;

                    case "auth/too-many-requests":
                      setMessageError("try later");
                      break;

                    case "auth/missing-password":
                      setMessageError("enter password");
                      break;

                    default:
                      setMessageError("enter password");
                  }
                });
  }
  
  return (
    <div>
      <Helmet>
        <title>Sign in page</title>
      </Helmet>

      <Header />

      <main>
        <form>
        
          <input
            onChange={(eo) => {
              setEmail(eo.target.value);
            }}
            required
            placeholder="email"
            type="email"
          />

          <input
            onChange={(eo) => {
              setPassword(eo.target.value);
            }}
            required
            placeholder="password"
            type="password"
          />

          <button
            onClick={(eo) => {
            signInBtn(eo)
            }}
          >
            Sign in
          </button>
<div
  onClick={() => {
    setShowReset(!showReset);
  }}
>
  <MdLockReset
  size={35}
  color={theme === "dark" ? "gold" : "black"}
/>
</div>
          <p className="account">
            <Link to="/Signup">Sign up</Link>
          </p>
  </form>

<br></br>

{errorr && <p>{MessageError}</p>}

{showReset && (
  <div className="reset-password">

    <hr />

    <input onChange={(eo) => {
      setResetPassword(eo.target.value);
    }
    }
      type="email"
      placeholder="Enter your email"
    />

    <button  onClick={(eo) => {
    resetPss(eo);
    }
    } >
      Reset Password
    </button>
    {resetEmail && <p className ="reset email ">please check your email tp reset your password</p>
}
  </div>
)}

      </main>

      <Footer />
    </div>
  );
}