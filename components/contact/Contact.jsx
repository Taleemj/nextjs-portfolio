import React, { useRef } from "react";
import styles from "./Contact.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AnimatedLetters from "../Animated/AnimatedLetters";
import emailjs from '@emailjs/browser'

const contact = () => {
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
      <div
        className={`wow animate__animated animate__slideInRight ${styles.mapcontainer}`}
      >
        {/* <Map center={[4.845927, 31.589679]} zoom={13}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[4.845927, 31.589679]}>
                <Popup>yeah I live here, come over for a visit :)</Popup>
              </Marker>
            </>
          )}
        </Map> */}
      </div>
    </div>
  );
};

export default contact;
