"use client";
import { useRef } from "react";
import styles from "./Contact.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import AnimatedLetters from "../Animated/AnimatedLetters";
import emailjs from "@emailjs/browser";
import RevealIt from "../RevealIt";

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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formref.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
    <>
      <div id="contact" className={styles.contactme}>
        <div className={styles.info}>
          <h1 className="wow animate__animated animate__fadeInUp">
            <RevealIt>
              <AnimatedLetters wordArray={titlearr} idx={3} />
            </RevealIt>
          </h1>
          <p className="wow animate__animated animate__fadeInUp">
            <RevealIt>
              Leave me a message if you&apos;re looking for web development services or just say hii &#128075;.
            </RevealIt>
          </p>
          <RevealIt>
            <div className={`${styles.contactinfo}`}>
              <div className="email">
                {/* <AiOutlineMail /> */}
                <video
                  src="/assets/chat2.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  width={22}
                  height={22}
                  loading="lazy"
                  style={{
                    marginRight: "4px",
                  }}
                ></video>
                taleemmankuer@gmail.com
              </div>
              <div className="phone">
                {/* <RevealIt> */}
                <BsPhone />
                {/* </RevealIt> */}
                +256774323035
              </div>
            </div>
          </RevealIt>
          <RevealIt>
            <form ref={formref} autoComplete="off" onSubmit={handleOnSubmit}>
              <ul>
                <li>
                  <input type="text" name="name" className="name" placeholder="Name" ref={nameref} required />
                </li>
                <li>
                  <input type="email" name="email" placeholder="Email" ref={emailref} required />
                </li>
              </ul>
              <input type="text" name="subject" placeholder="Subject" ref={subjectref} required />
              <textarea placeholder="Message..." name="message" ref={messageref} required />
              {/* <button type="submit">Send Message</button> */}
              <button type="submit" className={styles.button}>
                <span className={styles.button_lg}>
                  <span className={styles.button_sl}></span>
                  <p className={styles.button_text}>Send Message</p>
                </span>
              </button>
            </form>
          </RevealIt>
        </div>

        <div className={styles.gif}>
          <RevealIt>
            <img src="/assets/chat.gif" alt="" width={500} height={500} loading="lazy" />
          </RevealIt>
        </div>
      </div>
    </>
  );
};

export default Contact;
