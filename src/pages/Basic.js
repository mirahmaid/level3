import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth}from "../firebase/Config"

export default function Basic() {
        const [user, loading, error] = useAuthState(auth);
  
  let navigate = useNavigate();
  useEffect(() => {
    if (!user){
    navigate("/")
  }},[]
  )
  return (
    <>
      <Helmet>
        <title>Web Dev Roadmap - Basics</title>
      </Helmet>

      <Header />

      <Footer />
    </>
  );
}