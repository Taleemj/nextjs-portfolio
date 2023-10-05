import React from "react";
import styles from "./Services.module.scss";
import AnimatedLetters from "../Animated/AnimatedLetters";

const Services = () => {
  const servicearr = ["W", "h", "a", "t", " ", "I", " ", "D", "o"];

  return (
    <div className={styles.servicecontainer}>
      <h1 className="wow animate__animated animate__fadeInUp">
        <AnimatedLetters wordArray={servicearr} idx={4} />
      </h1>
      <div
        className={`wow animate__animated animate__fadeInUp ${styles.services}`}
      >
        <div className={styles.service}>
          <h4>Web Development</h4>
          <p>
            Develop a variety of websites ranging from simple satic pages using
            html and css to complex web applications using react next js.
          </p>
        </div>
        <div className={styles.service}>
          <h4>App Development</h4>
          <p>
            Create mobile cross-platform (ios & andriod) apps using react native
            and the expo CLI for easy and fast development.
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
