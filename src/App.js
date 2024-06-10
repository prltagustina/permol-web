import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Values from "./components/Values";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; 
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Values />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTopButton /> 
    </div>
  );
}

export default App;
