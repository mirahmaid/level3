import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import Content from "../component/Content";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth}from "../firebase/Config"
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function Frameworks() {
    const [user, loading, error] = useAuthState(auth);
  
  let navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading){
    navigate("/")
  }
    if(!user.emailVerified){
        navigate("/")
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
    if(user){
    
      if (user.emailVerified){
  return (
    <>
      <Helmet>
        <title>Web Dev Roadmap - Frameworks</title>
      </Helmet>

      <Header />
<Content data ="Framework"/>
      <Footer />
    </>
  );
      }
    }

}