import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    emailjs.init('blaHt_5KIJ711DfGH');

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm(
            'service_5aovf6n',         // ✅ this is the correct one
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
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <p className="contactDesc">
                    Please fill out the form below to discuss any work opportunities.
                </p>

                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        className="name"
                        placeholder="Your name"
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
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
