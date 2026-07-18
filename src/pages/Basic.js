import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";

export default function Basic() {
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