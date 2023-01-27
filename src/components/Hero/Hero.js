import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title">
          Hi, my name is <span className="text-color-main">Filip Huhta.</span>
          <br />
          I'm a Developer.
        </h1>
        <p className="hero-cta">
          <a rel="noreferrer" className="cta-btn cta-btn--green-fill" href="#about">Know more</a>
        </p>
      </div>
    </section>
  )
}

export default Hero;