import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import "../component/Content.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link ,NavLink} from "react-router-dom";

import {auth}from "../firebase/Config"
export default function Home() {
      const [user, loading, error] = useAuthState(auth);
  
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
{!user &&
<main className ='auth'>
  <p><Link>sign in </Link> to continue</p>
</main> }
        <Footer />
      </div>
    </>
  );
}