import { useState } from "react";

const Projects = () => {
  const [showProjects, setShowProjects] = useState(true);

  const projectList = [
    { id: 1, name: "OS startup screen" },
    { id: 2, name: "Unreal Tallinn workshop poster" },
    { id: 3, name: "TF2 72 hr Jam 3D composition" },
    { id: 4, name: "Messenger app UI" },
    { id: 5, name: "Shotgun model" },
    { id: 6, name: "'VIBRANT' poster" },
    { id: 7, name: "'PAC-MAN' poster" },
    { id: 8, name: "3D Rolling ball game" },
    { id: 9, name: "Educational coding game" },
    { id: 10, name: "Frutiger Aero human models" },
    { id: 11, name: "'Godomachy' level design" },
    { id: 12, name: "Abstract snake game 'NEOQ'" },
    { id: 13, name: "Frutiger Aurora glades 1" },
    { id: 14, name: "Frutiger Aurora glades 2" },
    { id: 15, name: "'ROCKET' poster" },
  ];

  return (
    <section id="projects">
      <h2>My projects</h2>
      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>
      {showProjects && (
        <ul>
          {projectList.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Projects;