"use client";
import { useState } from "react";
import { RevealWrapper } from "next-reveal";

const RevealIt = ({ children, styles, reset }) => {
  const [resetstate, setreset] = useState(reset == undefined ? true : false);
  return (
    <RevealWrapper className={styles} reset={resetstate}>
      {children}
    </RevealWrapper>
  );
};

export default RevealIt;
