"use client";
import { useRef, useState } from "react";
import styles from "./Contact.module.scss";
import { AiOutlineMail, AiOutlineLoading } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import AnimatedLetters from "../Animated/AnimatedLetters";
import emailjs from "@emailjs/browser";
import RevealIt from "../RevealIt";
import Image from "next/image";

const Contact = () => {
  const nameref = useRef();
  const subjectref = useRef();
  const emailref = useRef();
  const messageref = useRef();
  const formref = useRef();
  const [sendLoading, setSendLoading] = useState(false);
  const titlearr = ["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSendLoading(true);

    try {
      fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          name: nameref.current.value,
          subject: subjectref.current.value,
          email: emailref.current.value,
          message: messageref.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setSendLoading(false);
            alert("message sent successfully");
          }
        })
        .then(() => {
          nameref.current.value = "";
          emailref.current.value = "";
          messageref.current.value = "";
          subjectref.current.value = "";
        })
        .catch((_err) => {
          alert("something went wrong please try again");
        });
    } catch (error) {
      setSendLoading(false);
      alert("something went wrong please try again");
    }

    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    //     formref.current,
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     (nameref.current.value = ""),
    //     (emailref.current.value = ""),
    //     (messageref.current.value = ""),
    //     (subjectref.current.value = "")
    //   )
    //   .then(alert("thank you, your message has been sent successfully"))
    //   .catch((err) => alert("something went wrong try again"));
  };
  return (
    <>
      <div id="contact" className={styles.contactme}>
        <div className={styles.info}>
          <h1 className="wow animate__animated animate__fadeInUp">
            <AnimatedLetters wordArray={titlearr} idx={3} />
          </h1>
          <p className="wow animate__animated animate__fadeInUp">
            Leave me a message if you&apos;re looking for web development services or just say hii &#128075;.
          </p>

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
              {/*  */}
              <BsPhone />
              {/*  */}
              +256774323035
            </div>
          </div>

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
                <p className={styles.button_text}>
                  {sendLoading ? "Sending..." : "Send Message"}{" "}
                  {sendLoading && <AiOutlineLoading style={{ marginLeft: "10px" }} className="rotating" />}
                </p>
              </span>
            </button>
          </form>
        </div>

        <div className={styles.gif}>
          <Image src="/assets/chat.gif" alt="" width={500} height={500} loading="lazy" />
        </div>
      </div>
    </>
  );
};

export default Contact;
