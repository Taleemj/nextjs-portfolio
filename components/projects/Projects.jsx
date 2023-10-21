"use client";
import { useState } from "react";
import styles from "./Projects.module.scss";
import { works } from "../project/Projects";
import Project from "../project/Project";
import "animate.css";
import AnimatedLetters from "../Animated/AnimatedLetters";
import RevealIt from "../RevealIt";

const Projects = () => {
  const htmlcss = works.filter((item) => item.category === "htmlcss");
  const reactapis = works.filter((item) => item.category === "reactapis");
  const fullstack = works.filter((item) => item.category === "fullstack");
  const [filtered, setfiltered] = useState([...works]);
  const [active, setactive] = useState(0);
  const titlearr = ["M", "y", "", "P", "r", "o", "j", "e", "c", "t", "s"];

  const filterProjects = (projects, active) => {
    setfiltered(projects);
    setactive(active);
  };

  return (
    <div id="projects" className={styles.projectscontainer}>
      <RevealIt>
        <h1 className="animate__animated animate__fadeInUp">
          <AnimatedLetters wordArray={titlearr} idx={3} />
        </h1>
      </RevealIt>
      <RevealIt>
        <div
          className={`animate__animated animate__fadeInUp delay-1s ${styles.filters}`}
        >
          <button
            style={{
              backgroundColor: `${active === 0 ? "var(--red)" : "transparent"}`,
              color: `${active === 0 ? "#fff" : "var(--cyan)"}`,
              borderColor: `${active === 0 ? "var(--red)" : "var(--cyan)"}`,
              boxShadow: `${
                active === 0 ? "0 0 5px var(--red)" : "0 0 5px var(--cyan)"
              }`,
            }}
            onClick={() => filterProjects(works, 0)}
          >
            ALL ({works.length})
          </button>
          <button
            style={{
              backgroundColor: `${active === 1 ? "var(--red)" : "transparent"}`,
              color: `${active === 1 ? "#fff" : "var(--cyan)"}`,
              borderColor: `${active === 1 ? "var(--red)" : "var(--cyan)"}`,
              boxShadow: `${
                active === 1 ? "0 0 5px var(--red)" : "0 0 5px var(--cyan)"
              }`,
            }}
            onClick={() => filterProjects(htmlcss, 1)}
          >
            WEB PAGES ({htmlcss.length})
          </button>
          <button
            style={{
              backgroundColor: `${active === 2 ? "var(--red)" : "transparent"}`,
              color: `${active === 2 ? "#fff" : "var(--cyan)"}`,
              borderColor: `${active === 2 ? "var(--red)" : "var(--cyan)"}`,
              boxShadow: `${
                active === 2 ? "0 0 5px var(--red)" : "0 0 5px var(--cyan)"
              }`,
            }}
            onClick={() => filterProjects(reactapis, 2)}
          >
            WEB APPS ({reactapis.length})
          </button>
          <button
            style={{
              backgroundColor: `${active === 3 ? "var(--red)" : "transparent"}`,
              color: `${active === 3 ? "#fff" : "var(--cyan)"}`,
              borderColor: `${active === 3 ? "var(--red)" : "var(--cyan)"}`,
              boxShadow: `${
                active === 3 ? "0 0 5px var(--red)" : "0 0 5px var(--cyan)"
              }`,
            }}
            onClick={() => filterProjects(fullstack, 3)}
          >
            FULLSTACK ({fullstack.length})
          </button>
        </div>
      </RevealIt>
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
