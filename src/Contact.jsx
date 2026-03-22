import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Actual keys from EmailJS
    const serviceID = "service_ypagt2i";
    const templateID = "template_4c6bv8o";
    const publicKey = "AAoO6zq_DSJ2JopF-";


    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Have a project in mind or just want to say hi? Feel free to reach out!</p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-method glass-effect" style={{padding: '20px'}}>
            <div className="contact-icon-box">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <h4 style={{color: 'var(--text-muted)'}}>Email</h4>
              <p>sainikhilchitra@gmail.com</p>
            </div>
          </div>

          <div className="contact-method glass-effect" style={{padding: '20px'}}>
            <div className="contact-icon-box">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div>
              <h4 style={{color: 'var(--text-muted)'}}>Phone</h4>
              <p>+91 6302183671</p>
            </div>
          </div>

          <div className="contact-method glass-effect" style={{padding: '20px'}}>
            <div className="contact-icon-box">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <h4 style={{color: 'var(--text-muted)'}}>Location</h4>
              <p>Hyderabad, Telangana</p>
            </div>
          </div>

          <div className="home-social-icons" style={{marginTop: '10px', justifyContent: 'center'}}>
            <a href="https://github.com/sainikhilchitra" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://linkedin.com/in/sainikhilchitra" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>

        <form className="contact-form glass-effect" ref={form} onSubmit={sendEmail}>
          <h3 style={{marginBottom: '20px'}}>Send Me a Message</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-input" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" className="form-input" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" className="form-input" rows="4" placeholder="Your Message" style={{resize: 'none', height: 'auto'}} required></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{marginTop: '10px', width: '100%', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faTelegram} /> Send Message
          </button>
          {status && <p className="status-message" style={{marginTop: '15px', color: 'var(--primary)', textAlign: 'center'}}>{status}</p>}
        </form>
      </div>
    </section>
  );
}

