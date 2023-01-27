import "./App.scss";
import Hero from "./components/Hero/Hero";
import Loading from "./components/Loading/Loading";
import React, { Suspense } from 'react';
import "./fontawesome-free/css/all.min.css";
const Projects = React.lazy(() => import('./components/Projects/Projects'));
const About = React.lazy(() => import('./components/About/About'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));
const Footer = React.lazy(() => import('./components/Footer/Footer'));

const App = () => {
  return (
    <div className="start-container">
      <Hero></Hero>
      <Suspense fallback={<Loading/>}>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </Suspense>
    </div>
  );
};

export default App;