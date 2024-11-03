"use client";
import { useState } from "react";
import styles from "./Projects.module.scss";
import Project from "../project/Project";
import "animate.css";
import AnimatedLetters from "../Animated/AnimatedLetters";
import RevealIt from "../RevealIt";
import { urlForImage } from "@/sanity/lib/image";

const Projects = ({ works, categories }) => {
  const htmlcss = works.filter((item) => item.categories[0]._ref == categories[2]._id);
  const reactapis = works.filter((item) => item.categories[0]._ref == categories[0]._id);
  const fullstack = works.filter((item) => item.categories[0]._ref == categories[1]._id);
  const [filtered, setfiltered] = useState([...works]);
  const [active, setactive] = useState(0);
  const titlearr = ["M", "y", "", "P", "r", "o", "j", "e", "c", "t", "s"];

  const filterProjects = (projects, active) => {
    setfiltered(projects);
    setactive(active);
  };

  return (
    <div id="projects" className={styles.projectscontainer}>
      <h1 className="animate__animated animate__fadeInUp">
        <RevealIt>
          <AnimatedLetters wordArray={titlearr} idx={3} />
        </RevealIt>
      </h1>
      <RevealIt>
        <div className={`animate__animated animate__fadeInUp delay-1s ${styles.filters}`}>
          <button
            style={{
              backgroundColor: `${active === 0 ? "var(--red)" : "transparent"}`,
              color: `${active === 0 ? "#fff" : "var(--cyan)"}`,
              borderColor: `${active === 0 ? "var(--red)" : "var(--cyan)"}`,
              boxShadow: `${active === 0 ? "0 0 5px var(--red)" : "0 0 5px var(--cyan)"}`,
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
              boxShadow: `${active === 1 ? "0 0 5px var(--red)" : "0 0 5px var(--cyan)"}`,
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
              boxShadow: `${active === 2 ? "0 0 5px var(--red)" : "0 0 5px var(--cyan)"}`,
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
              boxShadow: `${active === 3 ? "0 0 5px var(--red)" : "0 0 5px var(--cyan)"}`,
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
            key={item._id}
            title={item.title}
            description={item.description}
            tag={item?.tags}
            codeLink={item.codeLink}
            demoLink={item.demoLink}
            img={urlForImage(item.mainImage)?.url()}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
