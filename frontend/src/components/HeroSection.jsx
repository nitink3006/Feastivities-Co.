import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h2>Storybook Social</h2>
        <div>
          <h1>Unforgettable Events, Seamlessly Planned</h1>
          <p>Unforgettable Events Begin Here.</p>
          <p>Turn your dream event into a reality, stress-free.</p>
          <p>We take care of the details, so you can create lasting memories.</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
