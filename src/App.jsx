import Hero from "./components/hero/Hero.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [scrolly, setscrolly] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        console.log("asdwad");
        setscrolly(true);
      } else {
        setscrolly(false);
      }
    });
  }, []);
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a href="#up" style={{ opacity: scrolly ? 1 : 0, transition: "3s" }}>
        {" "}
        <button className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}
