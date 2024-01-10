import React from "react";
import { Animate } from "react-simple-animate";
import { FaLinkedin } from "react-icons/fa";
import "./styles.scss";
import MyPdf from '../../resume/mahesh_resume.pdf';

const Home = () => {
  function handleNavigateLinkedin() {
    window.open(
      "https://www.linkedin.com/in/maheshwattamwar/",
      "_blank"
    );
  }

  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Mahesh
          <br />
          Web Developer.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <a href={MyPdf} download="mahesh_resume.pdf">Download resume</a>
          </div>
          <div className="contact-me__socials-wrapper">
            <FaLinkedin onClick={handleNavigateLinkedin} size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
