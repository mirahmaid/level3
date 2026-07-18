import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import Content from "../component/Content";

export default function Frameworks() {
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