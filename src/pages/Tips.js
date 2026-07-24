import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth}from "../firebase/Config"

export default function Tips() {
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
  return (
    <>
      <Helmet>
        <title>Web Dev Roadmap - Tips</title>
      </Helmet>

      <Header />

      <Footer />
    </>
  );
    if(user){
      
        if (user.emailVerified){
    return (
      <>
        <Helmet>
          <title>Web Dev Roadmap - tips</title>
        </Helmet>
  
        <Header />
  <Content data ="Tips"/>
        <Footer />
      </>
    );
        }
      }
}