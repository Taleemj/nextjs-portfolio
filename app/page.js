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
import TheMouseTrail from "@/components/MouseTrail";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// export const revalidate = 60;

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
      <Projects works={works} categories={thecategories} />
      <Skills />
      <Aboutme />
      <Contact />
      <Footer styles={styles} />
      <TheMouseTrail />
    </main>
  );
}
