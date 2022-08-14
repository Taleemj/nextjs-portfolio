import React from "react";
import styles from "./Services.module.scss";
import AnimatedLetters from "../Animated/AnimatedLetters";

const Services = () => {
  const servicearr = ["W", "h", "a", "t", " ", "I", " ", "D", "o"];

  return (
    <div className={styles.servicecontainer}>
      <h1>
        <AnimatedLetters wordArray={servicearr} idx={4} />
      </h1>
      <div className={styles.services}>
        <div className={styles.service}>
        </div>
        <div className={styles.service}>
          <h4>Web Developerment</h4>
          <p>
            Develop a variety of websites ranging from simple satic pages using
            html and css to complex web applications using react next js.
          </p>
        </div>
        <div className={styles.service}>
          <h4>Responsive design</h4>
          <p>
            Create websites that are responsible to any device screen size, from
            desktop to tablets and mobile phones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
