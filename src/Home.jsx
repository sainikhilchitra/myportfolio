import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function Home(){
    return<div className="home">
        <div className="home-content">
            <h1 className="home-heading">Sai Nikhil Chitra</h1>
            <h2 className="home-role">Full Stack Web Developer</h2>
            <p className="home-desc">A passionate Computer Science undergraduate skilled in building scalable full stack web applications using PHP, JavaScript, MySQL, and React.js. Strong foundation in data structures, with a focus on clean code, API integration, and responsive UI/UX development.</p>
            <div className="home-buttons">
                <button><FontAwesomeIcon icon={faEnvelope}/> Get in touch</button>
                <button><FontAwesomeIcon icon={faDownload}/> Resume</button>
            </div>
            <div className="home-social-icons">
                <FontAwesomeIcon icon={faGithub}/>
                <FontAwesomeIcon icon={faLinkedin}/>
                <FontAwesomeIcon icon={faEnvelope}/>
            </div>
        </div>
    </div>
}