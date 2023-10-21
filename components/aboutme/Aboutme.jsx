import styles from "./Aboutme.module.scss";
import AnimatedLetters from "../Animated/AnimatedLetters";
import Image from "next/image";
import RevealIt from "../RevealIt";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichText } from "../Richtext/Richtext";

const Aboutme = async () => {
  const titlearr = ["A", "b", "o", "u", "t", " ", "M", "e"];
  const query = groq`
  *[_type == "about"]
  `;
  const query1 = groq`
  *[_type == "about"]{
    "cvurl": CV.asset->url
  }
  `;
  const aboutstuff = await client.fetch(query);
  const thecvUrl = await client.fetch(query1);
  console.log(thecvUrl);
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
            <PortableText value={aboutstuff[0].bio} components={RichText} />
            <a href={`${thecvUrl[0].cvurl}`} target="_blank" rel="noreferrer">
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
