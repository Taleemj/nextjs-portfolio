import styles from "./Project.module.scss";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

const Project = ({ title, description, codeLink, demoLink, img, tag }) => {
  return (
    <RevealWrapper reset={true}>
      <div
        className={`animate__animated animate__fadeInUp ${styles.singleProject}`}
      >
        <div className={styles.img}>
          <Image src={`/${img}`} alt={title} width={300} height={150} />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
        <h5>stack</h5>
        <div className={styles.stack}>
          {tag?.map((t, i) => (
            <p key={i}>{`#${t}`}</p>
          ))}
        </div>
        <div className={styles.linkbtns}>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button href={demoLink}>Preview</button>
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer">
            <button
              href={codeLink}
              onClick={() =>
                codeLink ? null : alert("sorry, this code is not public.")
              }
            >
              Code
            </button>
          </a>
        </div>
      </div>
    </RevealWrapper>
  );
};

export default Project;
