import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import "../component/Content.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link ,NavLink} from "react-router-dom";
import {  sendEmailVerification} from "firebase/auth";
import {auth}from "../firebase/Config"
export default function Home() {
      const [user, loading, error] = useAuthState(auth);
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
  if(!user){
return(
<div>
  <header/>
  
<main className ='auth'>
  <p><Link to ="/Signin">sign in </Link> to continue</p>
</main> 
<footer/>

</div>
)

  }
  if(user){
    if(!user.emailVerified){
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
    if(user.emailVerified){
  return (
    <>
      <Helmet>
        <title>Web Dev Roadmap - Home</title>
      </Helmet>

      <div>
        <Header />

      {user &&   <main className="hero-section">
          <div className="hero-text">
            <h2>Start your journey with Web Development</h2>
            <p>Learn step-by-step and build real projects.</p>

            <a href="#" className="hero-btn">
              Start Learning
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="hero-img"
          />
        </main>}

        <Footer />
      </div>
    </>
  );
    }
  }

}