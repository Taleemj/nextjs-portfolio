"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";

const RevealIt = ({ children }) => {
  return <RevealWrapper reset={true}>{children}</RevealWrapper>;
};

export default RevealIt;
