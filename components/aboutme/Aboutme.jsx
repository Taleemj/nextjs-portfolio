import styles from "./Aboutme.module.scss";
import AnimatedLetters from "../Animated/AnimatedLetters";
import Image from "next/image";
import RevealIt from "../RevealIt";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

const Aboutme = async () => {
  const titlearr = ["A", "b", "o", "u", "t", " ", "M", "e"];
  const query = groq`
  *[_type == "about"]
  `;
  const aboutstuff = await client.fetch(query);

  console.log(aboutstuff);
  return (
    <div id="aboutme" className={styles.about}>
      <RevealIt>
        <strong>
          <h1 className="wow animate__animated animate__fadeInUp">
            <AnimatedLetters wordArray={titlearr} idx={3} />
          </h1>
        </strong>
      </RevealIt>
      <RevealIt>
        <div className={styles.aboutcontainer}>
          <div className={styles.txt}>
            <p className="wow animate__animated animate__fadeInUp">
              Hi, my name is <strong>Taleem Mankuer</strong> and i am an
              aspiring <span style={{ color: "var(--cyan)" }}>developer</span>{" "}
              and student with a good understanding in{" "}
              <span style={{ color: "var(--cyan)" }}>web development</span>. I
              enjoy finding creative solutions to problems and spend my time
              experimenting with{" "}
              <span style={{ color: "var(--cyan)" }}>technologies</span> such as
              <span style={{ color: "var(--cyan)" }}> react</span> and inhale a
              wide variety of potentially useful information through different
              platforms.
            </p>
            <br />
            <p className="wow animate__animated animate__fadeInUp">
              I enjoy making conections and trying out new things, i love to
              increase my skills and knowledge and would love to advance in my
              career as a developer. I am open for any
              <span style={{ color: "var(--cyan)" }}> opportunities</span>. I
              build websites that delight and inform and try give it my all.
            </p>
            <a href={"/assets/TaleemCV.pdf"} target="_blank" rel="noreferrer">
              <button className="wow animate__animated animate__fadeInUp">
                Download CV
              </button>
            </a>
          </div>
          <div
            className={`wow animate__animated animate__fadeInUp ${styles.gif}`}
          >
            <Image
              src={urlForImage(aboutstuff[0].image).url()}
              alt="taleemmankuer"
              loading="lazy"
              width={400}
              height={300}
            />
          </div>
        </div>
      </RevealIt>
    </div>
  );
};

export default Aboutme;
