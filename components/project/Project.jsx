import React from "react";
import styles from "./Project.module.scss";

const Project = ({ title, description, codeLink, demoLink, img, tag }) => {
  return (
    <div
      className={`wow animate__animated animate__fadeInUp ${styles.singleProject}`}
    >
      <div className={styles.img}>
        <img src={`/${img}`} loading="lazy" alt={title} />
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
  );
};

export default Project;
