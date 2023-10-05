import React, { useRef } from "react";
import styles from "./Contact.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import AnimatedLetters from "../Animated/AnimatedLetters";
import emailjs from "@emailjs/browser";
// import GlobeComponent from "../Globe/Globe";
// import CustomGlobe from "../Globe/Globe";

const Contact = () => {
  const nameref = useRef();
  const subjectref = useRef();
  const emailref = useRef();
  const messageref = useRef();
  const formref = useRef();
  const titlearr = ["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"];

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qk3pncs",
        "template_wzifqhf",
        formref.current,
        "UMCV1YwfNUNEnBTqj"
      )
      .then(
        (nameref.current.value = ""),
        (emailref.current.value = ""),
        (messageref.current.value = ""),
        (subjectref.current.value = "")
      )
      .then(alert("thank you, your message has been sent successfully"))
      .catch((err) => alert("something went wrong try again"));
  };
  return (
    <div id="contact" className={styles.contactme}>
      <div className={styles.info}>
        <h1 className="wow animate__animated animate__fadeInUp">
          <AnimatedLetters wordArray={titlearr} idx={3} />
        </h1>
        <p className="wow animate__animated animate__fadeInUp">
          Leave me a message if you're looking for web development services or
          just say hii &#128075;.
        </p>
        <div className={`${styles.contactinfo}`}>
          <div className="email">
            <AiOutlineMail />
            taleemmankuer@gmail.com
          </div>
          <div className="phone">
            <BsPhone />
            +256774323035
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
      {/* <div
        id="map"
        className={`wow animate__animated animate__fadeInUp ${styles.mapcontainer}`}
      >
        <CustomGlobe />
      </div> */}
    </div>
  );
};

export default Contact;
