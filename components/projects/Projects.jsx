import React, { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import { works } from "../project/Projects";
import Project from "../project/Project";
import "animate.css";
import AnimatedLetters from "../Animated/AnimatedLetters";

const Projects = () => {
  const htmlcss = works.filter((item) => item.category === "htmlcss");
  const reactapis = works.filter((item) => item.category === "reactapis");
  const work = works.filter((item) => item.category === "work");
  const fullstack = works.filter((item) => item.category === "fullstack");
  const [filtered, setfiltered] = useState([...works]);
  const titlearr = ['M','y','','P','r','o','j','e','c','t','s']

  // useEffect(() => {

  // }, [filtered])

  return (
    <div id="projects" className={styles.projectscontainer}>
      <h1 className="wow animate__animated animate__fadeInUp">
        <AnimatedLetters wordArray={titlearr} idx={3} />
      </h1>
      <div
        className={`wow animate__animated animate__fadeInUp delay-1s ${styles.filters}`}
      >
        <button onClick={() => setfiltered(works)}>ALL</button>
        <button onClick={() => setfiltered(htmlcss)}>HTML/CSS</button>
        <button onClick={() => setfiltered(reactapis)}>REACT/APIS</button>
        <button onClick={() => setfiltered(fullstack)}>FULLSTACK</button>
        <button onClick={() => setfiltered(work)}>WORK</button>
      </div>
      <div className={styles.Projects}>
        {filtered.map((item) => (
          <Project
            key={item.id}
            title={item.title}
            description={item.description}
            tag={item?.tag}
            codeLink={item.codeLink}
            demoLink={item.demoLink}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
