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

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <Projects />
      <Skills />
      <Aboutme />
      <Contact />
      <Footer styles={styles} />
      <TheMouseTrail />
    </main>
  );
}
