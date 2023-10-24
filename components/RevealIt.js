"use client";
import { useState } from "react";
import { RevealWrapper } from "next-reveal";

const RevealIt = ({ children, styles, thereset }) => {
  const [resetit, setresetit] = useState(thereset == undefined ? true : false);
  return (
    <RevealWrapper reset={resetit} className={styles}>
      {children}
    </RevealWrapper>
  );
};

export default RevealIt;
