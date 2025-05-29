import './contact.css';
import githubIcon from '../../assets/GitHubIcon.png';
import linkedInIcon from '../../assets/LinkedIn.png';
import resumeIcon from '../../assets/Resume.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  emailjs.init('blaHt_5KIJ711DfGH');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5aovf6n',
      'template_m6gm2tr',
      form.current,
      '0R8iQoiDeyf0JRZrP'
    )
      .then((result) => {
        console.log("SUCCESS:", result.text);
        e.target.reset();
        alert('Email Sent!');
      }, (error) => {
        console.error("EMAILJS ERROR:", error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <div id="contactWrapper">
      <div id="contact" className="contactPage">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </p>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="msg"
            required
          ></textarea>
          <button type="submit" className="submitBtn">Submit</button>

          <div className="links">
            <div className="iconBlock">
              <a href="https://github.com/mbubel" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub Icon" className="githubIcon" />
                <p className="iconLabel">GitHub</p>
              </a>
            </div>
            <div className="iconBlock">
              <a href="https://www.linkedin.com/in/michael-bubel/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="LinkedIn Icon" className="linkedInIcon" />
                <p className="iconLabel">LinkedIn</p>
              </a>
            </div>
            <div className="iconBlock">
              <a href="/MichaelBubelResume2025PDF.pdf" target="_blank" rel="noopener noreferrer">
                <img src={resumeIcon} alt="Resume PDF" className="resumeIcon" />
                <p className="iconLabel">Resume</p>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
