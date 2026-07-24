import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth}from "../firebase/Config"
import moment from "moment";
import {deleteUser } from "firebase/auth";

export default function Basic() {
        const [user, loading, error] = useAuthState(auth);
  
  let navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading){
    navigate("/")
  }
  if(user){
  if(!user.emailVerified){
          navigate("/")
        }
      }
},[]
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
    if (user.emailVerified){
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
  <button className ="delete"
  onClick={() => {
    deleteUser(user).then(() => {
  // User deleted.
  console.log("user deleted")
}).catch((error) => {
  // An error ocurred
  // ...
  console.log("error")
});
  }
  }>Delete account</button>


</div>
</main>
      <Footer />
    </>
  )}};
}