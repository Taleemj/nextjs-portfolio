import React from "react";
import styles from "./Skills.module.scss";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import AnimatedLetters from "../Animated/AnimatedLetters";

const Skills = () => {
  const titlearr = ['T','e','c','h','n','o','l','o','g','i','e','s']
  return (
    <div id="skills" className={styles.skills}>
      <h1 className="wow animate__animated animate__fadeInUp">
        <AnimatedLetters wordArray={titlearr} idx={3} />
      </h1>
      <p className="wow animate__animated animate__fadeInUp">
        I&apos;ve worked with a wide range of<span>web development</span>
        Technologies.From frontend and design to backend.
      </p>
      <div className={styles.skillscontainer}>
        <div
          className={`wow animate__animated animate__fadeInUp ${styles.frontend}`}
        >
          <FaReact />
          <h4>Frontend</h4>
          <p>Experinced with</p>
          <ul>
            <li>React & Next Js</li>
            <li>Html/Css/Sass</li>
            <li>Bootstrap & Tailwind</li>
          </ul>
        </div>
        <div
          className={`wow animate__animated animate__fadeInUp ${styles.backend}`}
        >
          <FaNodeJs />
          <h4>Backend</h4>
          <p>Learning</p>
          <ul>
            <li>Node Js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div
          className={`wow animate__animated animate__fadeInUp ${styles.tools}`}
        >
          <DiGit />
          <h4>Tools</h4>
          <p>Worked with</p>
          <ul>
            <li>Netlify</li>
            <li>Git & GitHub</li>
            <li>Sanity.io</li>
            <li>Vs Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
