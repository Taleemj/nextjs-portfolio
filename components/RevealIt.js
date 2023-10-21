"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";

const RevealIt = ({ children, styles }) => {
  return (
    <RevealWrapper className={styles} reset={true}>
      {children}
    </RevealWrapper>
  );
};

export default RevealIt;
