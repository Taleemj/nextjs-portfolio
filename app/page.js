"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import "animate.css";
import {
  Header,
  Projects,
  Skills,
  Aboutme,
  Contact,
  Footer,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
