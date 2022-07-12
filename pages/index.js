import styles from "../styles/Home.module.scss";
import {
  Aboutme,
  Header,
  Services,
  Skills,
  Contact,
  Projects,
} from "../components";
import { AiOutlineHeart } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Services />
      <Projects />
      <Skills />
      <Aboutme />
      <Contact />
      <footer className={styles.footer}>
        <div className={styles.icons}>
          <a
            href="https://linkedin.com/in/taleem-mankuer-713367235"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/Taleemj" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://web.facebook.com/taleem22"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <SiUpwork />
          </a>
        </div>
        <h4>
          Made & designed with <AiOutlineHeart /> By <span>Taleem</span>2022
        </h4>
      </footer>
    </div>
  );
}
