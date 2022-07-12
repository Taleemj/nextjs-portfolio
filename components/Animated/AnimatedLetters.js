import React from "react";
import styles from "./Animatedletters.module.scss";
import "animate.css";

const AnimatedLetters = ({ wordArray, idx }) => {
  return (
    <span>
      {wordArray.map((char, i) => (
        <span
          key={char + i}
          className={`animate__animated animate__bounceIn ${
            styles.textanimate
          } _${i + idx}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
