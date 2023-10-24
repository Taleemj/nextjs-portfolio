"use client";
import React from "react";
import MouseTrail from "@pjsalita/react-mouse-trail";

const TheMouseTrail = () => {
  const config = {
    color: "#ffffff",
    idleAnimation: true,
    idleAnimationCount: 10,
    inverted: true,
    size: 15,
    trailCount: 25,
  };
  return <MouseTrail {...config} />;
};

export default TheMouseTrail;
