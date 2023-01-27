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
                                I'm a full stack developer from the northern part of Sweden who has ended up in Örebro. I have experience
                                in the most commonly used web frameworks React, Angular & Vue.js. I have also experience with backend
                                techniques like Java, C#, Node.js, and SQL. I have a bachelor's degree in systems sciences and I'm a
                                certified Scrum Master.
                            </p>
                            <p className="about-wrapper__info-text">
                                My spare time involves a lot of exercise, spending time with my family, and some downhill skiing in the
                                winter. Currently working as a full stack developer. I am a passionate developer who likes to take on new
                                technologies. I am most inspired when I tackle problems that are outside my comfort zone.
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