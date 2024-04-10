import React,{useRef} from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebook-icon.png";
import instaIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nrgp0ww', 'template_e036pwc', form.current, {
        publicKey: 'Mytf2veWIpl3hqLZLQ7l3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('email sent')
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact">
      <div className="clientPage">
        <h2 className="clientTitle">My Clients</h2>
        <p className="clientDesc">
          {" "}
          I have had the opportunity to work with a diverse group of companies
          some of the notable companies i have worked which includes
        </p>
        <div className="clientImgs">
          <img src={walmart} alt="client" className="clientImg" />
          <img src={adobe} alt="client" className="clientImg" />
          <img src={microsoft} alt="client" className="clientImg" />
          <img src={facebook} alt="client" className="clientImg" />
        </div>
      </div>
      <div id="contactPage">
        <h2 className="clientTitle">Contact Me</h2>
        <p className="contactDesc">
          please fill out the form below to discuss any work opportunities
        </p>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="your name" name="your_name"/>
          <input type="email" className="email" placeholder="your email" name="your_email" />
          <textarea className="message" name="message" rows="5" placeholder="your message" />
          <button type="submit" value="send" className="submitBtn">
            submit
          </button>
        </form>
        <div className="links">
          <img src={facebookIcon} alt="facebookIcon" className="link" />
          <img src={twitterIcon} alt="twitterIcon" className="link" />
          <img src={youtubeIcon} alt="youtubeIcon" className="link" />
          <img src={instaIcon} alt="instaIcon" className="link" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
