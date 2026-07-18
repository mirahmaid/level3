import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";

export default function Tips() {
  return (
    <>
      <Helmet>
        <title>Web Dev Roadmap - Tips</title>
      </Helmet>

      <Header />

      <Footer />
    </>
  );
}