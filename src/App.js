// App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Values from "./components/Values";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import SEO from "./components/SEO"; // Importa el componente SEO
import "./index.css";

function App() {
  return (
    <div className="App">
      <SEO /> {/* Agrega el componente SEO */}
      <Header />
      <Hero />
      <About />
      <Values />
      <Services />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
