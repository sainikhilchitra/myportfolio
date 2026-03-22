import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-heading">Sai Nikhil Chitra</h1>
          <h2 className="home-role">Full Stack Web Developer</h2>
          <p className="home-desc">
            A passionate Computer Science undergraduate skilled in building scalable 
            full stack web applications. Focused on clean code, seamless user 
            experiences, and solving complex problems through modern tech.
          </p>
          <div className="home-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
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