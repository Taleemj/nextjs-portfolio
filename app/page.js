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
