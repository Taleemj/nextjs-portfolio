import styles from "./page.module.scss";
import "animate.css";
import {
  Header,
  Projects,
  Skills,
  Aboutme,
  // Contact,
  Footer,
} from "@/components";
import TheMouseTrail from "@/components/MouseTrail";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";
const Contact = dynamic(() => import("@/components/contact/Contact"), {
  ssr: false,
});

export const revalidate = 60;

export default async function Home() {
  const query = groq`
  *[_type == "project"]
  `;
  const query1 = groq`
  *[_type == "category"]
  `;
  const works = await client.fetch(query);
  const thecategories = await client.fetch(query1);

  return (
    <main className={styles.container}>
      <Header />
      <Loader />
      <Skills />
      <Projects works={works} categories={thecategories} />
      <Aboutme />
      <Contact />
      <Footer styles={styles} />
      <TheMouseTrail />
    </main>
  );
}
