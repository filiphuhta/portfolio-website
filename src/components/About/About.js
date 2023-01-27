import React from 'react';
import filipImage from '../../../assets/images/filip.webp';

const AboutSection = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title load-hidden">About me</h2>
                <div className="row about-wrapper">
                    <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__image load-hidden">
                            <img loading="lazy" alt="Profile Image" className="img-fluid rounded shadow-lg" width="300"
                                src={filipImage} />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__info load-hidden">
                            <p className="about-wrapper__info-text">
                                I'm a developer with experience in popular web frameworks such as React, Angular, and Vue.js. I am proficient in backend technologies like Java, C#, Node.js, and SQL. In addition, I hold a bachelor's degree in systems sciences and am certified as a Scrum Master.
                            </p>
                            <p className="about-wrapper__info-text">
                                In my free time, I enjoy staying active by exercising and spending time with my family, including some downhill skiing in the winter. As a developer, I constantly seek new challenges and technologies to learn and expand my skills. I am most motivated when faced with problems that push me out of my comfort zone.
                            </p>
                            <span className="d-flex mt-3">
                                <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--orange-fill"
                                    href="https://www.linkedin.com/in/filip-huhta-77b1a01a5/">
                                    View LinkedIn
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;