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
          <h4>Web Developerment</h4>
          <p>
            
          </p>
        </div>
        <div className={styles.service}>
          <h4>Responsive design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            blanditiis vitae totam esse accusamus beatae animi eius dolore unde
            cum.
          </p>
        </div>
        <div className={styles.service}>
          <h4>FullStack Development</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quam
            voluptas veritatis similique repellat excepturi exercitationem,
            totam eveniet qui vero!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
