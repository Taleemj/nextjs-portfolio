import React from "react";
import styles from "./Aboutme.module.scss";
import Image from "next/image";
import AnimatedLetters from "../Animated/AnimatedLetters";

const Aboutme = () => {
  const titlearr = ['A','b','o','u','t',' ','M','e']
  return (
    <div id="aboutme" className={styles.about}>
      <h1 className="wow animate__animated animate__fadeInUp">
        <AnimatedLetters wordArray={titlearr} idx={3} />
      </h1>
      <div className={styles.aboutcontainer}>
        <div className={styles.txt}>
          <p className="wow animate__animated animate__fadeInUp">
            Hi, my name is Taleem Mankuer and i am an aspiring{" "}
            <span style={{ color: "#29b9f0ff" }}>developer</span> and student
            with a good understanding in web development. I enjoy finding creative
            solutions to problems and spend my time experimenting with{" "}
            <span style={{ color: "#29b9f0ff" }}>technologies</span> such as
            react and inhale a wide variety of potentially useful information
            through different platforms.
          </p>
          <br />
          <p className="wow animate__animated animate__fadeInUp">
            I enjoy making conections and trying out new things, i love to
            increase my skills and knowledge and would love to advance in my
            career as a developer. I am open for any
            <span style={{ color: "#29b9f0ff" }}> opportunities</span>. I build
            websites that delight and inform and try give it my all.
          </p>
          <a href="/">
          <button className="wow animate__animated animate__fadeInUp">
            Download CV
          </button>
          </a>
        </div>
        <div
          className={`wow animate__animated animate__fadeInUp ${styles.gif}`}
        >
          <Image src="/coding.gif" alt="Coding" width="400px" height="300px" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
