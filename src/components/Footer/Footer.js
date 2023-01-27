import React from 'react';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a aria-label="Back to top of page" rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a aria-label="Read about filip huhta on stackoverflow" rel="noreferrer" href="https://stackoverflow.com/users/15113491/filip-huhta" target="_blank">
            <i className="fab fa-stack-overflow "></i>
          </a>
          <a aria-label="Read about filip huhta on linkedin" rel="noreferrer" href="https://www.linkedin.com/in/filip-huhta-77b1a01a5/" target="_blank">
            <i className="fab fa-linkedin "></i>
          </a>
          <a aria-label="Read about filip huhta on github" rel="noreferrer" href="https://github.com/filiphuhta" target="_blank">
            <i className="fab fa-github "></i>
          </a>
          <a aria-label="Read about filip huhta on npm" rel="noreferrer" href="https://www.npmjs.com/~filiphuhta" target="_blank">
            <i className="fab fa-npm "></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © 2022 - Filip huhta
        </p>

      </div>
    </footer>
  );
}

export default Footer;