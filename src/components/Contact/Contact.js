import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper load-hidden">
          <p className="contact-wrapper__text">hello@filiphuhta.se</p>
          <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--green-fill" href="mailto:hello@filiphuhta.se">Email me</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;