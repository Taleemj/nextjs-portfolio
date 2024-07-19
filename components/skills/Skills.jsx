import styles from "./Skills.module.scss";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import AnimatedLetters from "../Animated/AnimatedLetters";
import RevealIt from "../RevealIt";

const Skills = () => {
  const titlearr = ["T", "e", "c", "h", "n", "o", "l", "o", "g", "i", "e", "s"];
  return (
    <div id="skills" className={styles.skills}>
      <h1 className="animate__animated animate__fadeInUp">
        <AnimatedLetters wordArray={titlearr} idx={3} />
      </h1>

      <p className="animate__animated animate__fadeInUp">
        I&apos;ve worked with a wide range of
        <span>web & mobile development</span>
        Technologies.From frontend and design to backend.
      </p>

      <div className={styles.skillscontainer}>
        <div className={`animate__animated animate__fadeInUp ${styles.frontend}`}>
          <FaReact />
          <h4>Front-End</h4>
          <p>Fluent in</p>
          <ul>
            <li>React & Next Js</li>
            <li>Html / Css / Scss</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className={`animate__animated animate__fadeInUp ${styles.backend}`}>
          <FaNodeJs />
          <h4>Back-End</h4>
          <p>Expertise in</p>
          <ul>
            <li>Node & Express Js</li>
            <li>PostgreSql</li>
            <li>TypeOrm</li>
          </ul>
        </div>
        <div className={`animate__animated animate__fadeInUp ${styles.tools}`}>
          <DiGit />
          <h4>Tools</h4>
          <p>Worked with</p>
          <ul>
            <li>Sanity.io / Firebase / Supabase</li>
            <li>Netlify / Vercel</li>
            <li>Git & GitHub</li>
            <li>Vs Code</li>
          </ul>
        </div>
        <div className={`animate__animated animate__fadeInUp ${styles.tools}`}>
          <DiGit />
          <h4>Mobile Development</h4>
          <p>Proficient in</p>
          <ul>
            <li>React Native</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
