import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
export default function Contact(){
    return <div className="contact">
        <h1>Let's Get In Touch</h1>
        <div className="contact-content">
            <div className="contact-info">
                <div className="contact-details">
                    <h3><FontAwesomeIcon icon={faEnvelope}/>Contact Information</h3>
                    <div  className="contact-detail">
                        <h4><FontAwesomeIcon icon={faEnvelope}/>Email</h4>
                        <h5>sainikhilchitra@gmail.com</h5>
                    </div>
                    <div className="contact-detail">
                        <h4><FontAwesomeIcon icon={faPhone}/>Phone</h4>
                        <h5>+91 6302183671</h5>
                    </div>
                    <div className="contact-detail">
                        <h4><FontAwesomeIcon icon={faLocationDot}/>Location</h4>
                        <h5>Hyderabad</h5>
                    </div>
                </div>
                <div className="contact-icons">
                    <h3>Contact with me</h3>
                    <div className="contact-icon">
                        <FontAwesomeIcon icon={faGithub} className="icons"/>
                        <FontAwesomeIcon icon={faLinkedin} className="icons"/>
                        <FontAwesomeIcon icon={faEnvelope} className="icons"/>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <h3 className="form-title"><FontAwesomeIcon icon={faTelegram}/>Send Me a Message</h3>
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" name="name" className="form-input" placeholder="sai nikhil"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" name="email" className="form-input" placeholder="sainikhilchitra@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" id="subject" name="subject" className="form-input" placeholder="Job Opportunity"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="msg" className="form-label">Message</label>
                        <input type="text" id="msg" name="msg" className="form-input" placeholder="Hi Sai Nikhil, we're interested in discussing a frontend developer position with you..."/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="form-button"><FontAwesomeIcon icon={faTelegram}/>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}