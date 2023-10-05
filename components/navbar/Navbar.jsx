import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.scss";
import logo from "../../assets/tm.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [navClass, setNavClass] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(document.documentElement.scrollTop);
      scrollTop > 400 ? setNavClass(true) : setNavClass(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  return (
    <div className={navClass ? styles.navbar : styles.navcontainer}>
      <div className={styles.logo}>
        <a href="#hero">
          <img src={logo} alt="TM" width="60px" height="60px" />
        </a>
      </div>
      <div className={styles.linkcontainer}>
        <ul>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#skills">Technologies</a>
          </li>
          <li>
            <a
              href="https://thedeveloperblog.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.socialLinks}>
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
        </div>
      </div>

      <div
        className={`animate__animated animate__fadeInUp ${styles.linkcontainer2}`}
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <div className={styles.times} onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </div>
        <div className={styles.logo}>
          <a href="#hero">
            <img
              src={logo}
              alt="TM"
              onClick={() => setMenuOpen(false)}
              width="60px"
              height="60px"
            />
            <h5>Taleem</h5>
            <h6>Web Developer</h6>
          </a>
        </div>
        <ul onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#skills">Technologies</a>
          </li>
          <li>
            <a
              href="https://thedeveloperblog.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.socialLinks}>
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
        </div>
      </div>
      <div className={styles.menu} onClick={() => setMenuOpen(true)}>
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Navbar;
