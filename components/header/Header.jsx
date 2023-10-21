import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaNodeJs, FaCss3Alt, FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import AnimatedLetters from "../Animated/AnimatedLetters";
import RevealIt from "../RevealIt";

const Header = () => {
  const nameArry = [
    "a",
    "l",
    "e",
    "e",
    "m",
    " ",
    "M",
    "a",
    "n",
    "k",
    "u",
    "e",
    "r",
  ];
  const titlearr = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  return (
    <>
      <Navbar />
      <div id="hero" className={styles.headercontainer}>
        <div className={styles.hero}>
          <div className={`${styles.herotext}`}>
            <RevealIt>
              <strong>
                <h1 className="animate__animated animate__fadeInUp">
                  <span className={styles.firstspan}>
                    <span
                      className={`animate__animated animate__bounceIn ${styles.textanimate}`}
                    >
                      H
                    </span>
                    <span
                      className={`animate__animated animate__bounceIn ${styles.textanimate}`}
                    >
                      i,
                    </span>
                    <br />
                    <span
                      className={`animate__animated animate__bounceIn ${styles.textanimate}`}
                    >
                      I
                    </span>
                    <span
                      className={`animate__animated animate__bounceIn ${styles.textanimate}`}
                    >
                      &apos;m
                    </span>
                  </span>
                  <span className={styles.firstletter}>T</span>
                  <AnimatedLetters wordArray={nameArry} idx={3} />
                </h1>
              </strong>
            </RevealIt>
            <RevealIt>
              <h2 className="animate__animated animate__fadeInUp">
                <AnimatedLetters wordArray={titlearr} idx={3} />
              </h2>
            </RevealIt>
            <RevealIt>
              <p className="animate__animated animate__fadeInUp">
                Front End, I creates beautiful and informative websites that
                help users with what they are looking for.
              </p>
            </RevealIt>

            <RevealIt>
              <div
                className={`animate__animated animate__fadeInUp ${styles.buttons}`}
              >
                <a href="#projects">Projects</a>

                <a href="#contact">Contact me!</a>
              </div>
            </RevealIt>
          </div>
          <div className={`animate__animated animate__fadeIn ${styles.cube}`}>
            <div className={styles.cubespinner}>
              <div className={styles.face1}>
                <AiFillHtml5 />
              </div>
              <div className={styles.face2}>
                <FaCss3Alt />
              </div>
              <div className={styles.face3}>
                <SiJavascript />
              </div>
              <div className={styles.face4}>
                <FaReact />
              </div>
              <div className={styles.face5}>
                <FaSass />
              </div>
              <div className={styles.face6}>
                <FaNodeJs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
