"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import "animate.css";
import WOW from "wow.js";
import { Header, Projects, Skills, Aboutme, Contact } from "@/components";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <main className={styles.container}>
      <Header />
      <Projects />
      <Skills />
      <Aboutme />
      <Contact />
      <Footer styles={styles} />
    </main>
  );
}
