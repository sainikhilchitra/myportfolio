import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const ROLES = [
  "Machine Learning Engineer",
  "Deep Learning Enthusiast",
  "Full Stack Developer",
  "DevOps",
  "AI / Computer Vision",
  "Problem Solver",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!isDeleting && charIndex > current.length) {
      // pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      // move to next role
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-heading">
            Hi, I&apos;m <br />
            <span className="home-name-gradient">Sai Nikhil Chitra</span>
          </h1>
          <h2 className="home-role">
            {displayed}
            <span className="typing-cursor">|</span>
          </h2>
          <p className="home-desc">
            A passionate Computer Science undergraduate skilled in Machine Learning,
            Deep Learning, Computer Vision, Full Stack Development, and DevOps.
            I build intelligent systems and scalable applications — from training
            neural networks to containerizing with Docker and deploying to the cloud.
          </p>
          <div className="home-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects &nbsp;→
          </a>
          <a href="/resume.pdf" download="Sai_Nikhil_Resume.pdf" className="btn btn-outline">
            <FontAwesomeIcon icon={faExternalLinkAlt} /> Resume
          </a>
        </div>
        <div className="home-social-icons">
          <a href="https://github.com/sainikhilchitra" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://linkedin.com/in/sainikhilchitra" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <div className="home-image-container reveal">
        <div className="home-img-wrapper">
          <img src="/profile.png" alt="Sai Nikhil Chitra" className="profile-img-zoomed" />
          <div className="img-glow"></div>
        </div>
      </div>


      </div>
    </section>
  );
}