import React, { useRef } from "react";
import styles from "./Contact.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import AnimatedLetters from "../Animated/AnimatedLetters";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const nameref = useRef();
  const subjectref = useRef();
  const emailref = useRef();
  const messageref = useRef();
  const formref = useRef();
  const titlearr = ['C','o','n','t','a','c','t',' ','M','e']

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qk3pncs",
        "template_wzifqhf",
        formref.current,
        "UMCV1YwfNUNEnBTqj"
      )
      .then(alert("thank you, your message has been sent successfully"))
      .then(
        (nameref.current.value = ""),
        (emailref.current.value = ""),
        (messageref.current.value = ""),
        (subjectref.current.value = "")
      )
      .catch((err) =>( console.log(err), alert("something went wrong try again")));
  };
  return (
    <div id="contact" className={styles.contactme}>
      <div className={styles.info}>
        <h1 className="wow animate__animated animate__fadeInUp">
          <AnimatedLetters wordArray={titlearr} idx={3} />
        </h1>
        <p className="wow animate__animated animate__fadeInUp">
          I am interested and available for freelance, part time or long term
          work feel free to leave me a message about any opportunities or just
          say hii &#128075;.
        </p>
        <div className={`${styles.contactinfo}`}>
          <div className="email">
            <AiOutlineMail />
            taleemmankuer@gmail.com
          </div>
          <div className="phone">
            <BsPhone />
            +211923919670
          </div>
        </div>
        <form ref={formref} autoComplete="off" onSubmit={handleOnSubmit}>
          <ul>
            <li>
              <input
                type="text"
                name="name"
                className="name"
                placeholder="Name"
                ref={nameref}
                required
              />
            </li>
            <li>
              <input
                type="email"
                name="email"
                placeholder="Email"
                ref={emailref}
                required
              />
            </li>
          </ul>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            ref={subjectref}
            required
          />
          <textarea
            placeholder="Message..."
            name="message"
            ref={messageref}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div id="map" className={`${styles.mapcontainer}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d549.1210962570213!2d32.62982575988001!3d0.26886817726967643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbe753d5ebf8d%3A0x702b8adf1fc325ec!2sKAWUKU%20GREEN%20APARTMENT!5e0!3m2!1sen!2sug!4v1661597087276!5m2!1sen!2sug"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className={"wow animate__animated animate__backInRight "}
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
