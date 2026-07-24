import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth}from "../firebase/Config"
import moment from "moment";
export default function Basic() {
        const [user, loading, error] = useAuthState(auth);
  
  let navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading){
    navigate("/")
  }},[]
  )
  if (loading) {
    return (
      <div>
        <header/>
      <main> 
        <p>Initialising User...</p>
      </main> 
    <footer/>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <header/>
        <main>
        <p>Error: {error}</p>
        </main>
        <footer/>
      </div>
    );
  }
  if(user){
  return (
    <>
      <Helmet>
        <title>Web Dev Roadmap - Basics</title>
      </Helmet>

      <Header />
      <main>
<div className="page-content">
  <h3>Welcome {user.displayName}</h3>

  <p>
    <strong>Account Created:</strong>{" "}
    {moment(user.metadata.creationTime).fromNow()}
  </p>
  <p>

  <strong>  last sign in </strong>{" "}
  {moment(user.metadata.lastSignInTime).fromNow()}

  </p>
  <button className ="delete">Delete account</button>
</div>
</main>
      <Footer />
    </>
  )};
}