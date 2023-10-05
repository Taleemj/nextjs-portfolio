import { useState } from "react";
import styles from "./Projects.module.scss";
import { works } from "../project/Projects";
import Project from "../project/Project";
import "animate.css";
import AnimatedLetters from "../Animated/AnimatedLetters";

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
      <h1 className="wow animate__animated animate__fadeInUp">
        <AnimatedLetters wordArray={titlearr} idx={3} />
      </h1>
      <div
        className={`wow animate__animated animate__fadeInUp delay-1s ${styles.filters}`}
      >
        <button
          style={{
            backgroundColor: `${active === 0 ? "#29b9f0ff" : "transparent"}`,
            color: `${active === 0 ? "#fff" : "#29b9f0ff"}`,
          }}
          onClick={() => filterProjects(works, 0)}
        >
          ALL ({works.length})
        </button>
        <button
          style={{
            backgroundColor: `${active === 1 ? "#29b9f0ff" : "transparent"}`,
            color: `${active === 1 ? "#fff" : "#29b9f0ff"}`,
          }}
          onClick={() => filterProjects(htmlcss, 1)}
        >
          WEB PAGES ({htmlcss.length})
        </button>
        <button
          style={{
            backgroundColor: `${active === 2 ? "#29b9f0ff" : "transparent"}`,
            color: `${active === 2 ? "#fff" : "#29b9f0ff"}`,
          }}
          onClick={() => filterProjects(reactapis, 2)}
        >
          WEB APPS ({reactapis.length})
        </button>
        <button
          style={{
            backgroundColor: `${active === 3 ? "#29b9f0ff" : "transparent"}`,
            color: `${active === 3 ? "#fff" : "#29b9f0ff"}`,
          }}
          onClick={() => filterProjects(fullstack, 3)}
        >
          FULLSTACK ({fullstack.length})
        </button>
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
