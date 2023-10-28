import styles from "./Project.module.scss";
import Image from "next/image";
import RevealIt from "../RevealIt";

const Project = ({ title, description, codeLink, demoLink, img, tag }) => {
  return (
    <RevealIt thereset={false}>
      <div className={`${styles.singleProject}`}>
        <div className={styles.img}>
          <Image
            src={img}
            alt={title}
            width={1000}
            height={1000}
            loading="lazy"
          />
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
    </RevealIt>
  );
};

export default Project;
