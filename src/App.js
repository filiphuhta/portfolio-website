
import React from "react";
import "./App.scss";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./fontawesome-free/css/all.min.css";


const App = () => {
  return (
    <div className="start-container">
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;