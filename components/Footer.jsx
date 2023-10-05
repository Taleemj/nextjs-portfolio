import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = ({ styles }) => {
  return (
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
      </div>
      <h4>
        Made & designed with <AiOutlineHeart /> By <span>Taleem</span>
        {new Date().getFullYear()}
      </h4>
    </footer>
  );
};

export default Footer;
