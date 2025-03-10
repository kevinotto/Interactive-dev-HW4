import { useState } from "react";

const Projects = () => {
  const [showProjects, setShowProjects] = useState(false);

  const projectList = [
    { id: 1, img: "/Project images/Fruitger Aurora PC login screen 1.png", name: <a href="https://www.artstation.com/artwork/rJxWLO" target="_blank" rel="noopener noreferrer"> Frutiger Aurora OS startup screen </a> },
    { id: 2, img: "/Project images/Unreal Tallinn 2024 Workshop.png", name: <a href="https://www.artstation.com/artwork/eRPLkZ" target="_blank" rel="noopener noreferrer"> Unreal Tallinn workshop poster </a> },
    { id: 3, img: "/Project images/TF2 mercs voxelheadz 72hr jam.png", name: <a href="https://www.artstation.com/artwork/qJO46P" target="_blank" rel="noopener noreferrer"> TF2 3D composition </a> },
    { id: 4, img: "/Project images/frutiger aurora messenger app 5.PNG", name: <a href="https://www.artstation.com/artwork/lGDVNa" target="_blank" rel="noopener noreferrer"> Frutiger Aurora messenger app UI</a> },
    { id: 5, img: "/Project images/Shotgun and ammo showcase10.png", name: <a href="https://www.artstation.com/artwork/KePymr" target="_blank" rel="noopener noreferrer"> 3D shotgun model</a> },
    { id: 6, img: "/Project images/Vibrant Vibes.png", name: <a href="https://www.artstation.com/artwork/OvyKlK" target="_blank" rel="noopener noreferrer"> VIBRANT VIBES poster</a> },
    { id: 7, img: "/Project images/pacman green acid.png", name: <a href="https://www.artstation.com/artwork/RKYZ0y" target="_blank" rel="noopener noreferrer"> PAC-MAN green acid style poster</a> },
    { id: 8, img: "/Project images/AA1.png", name: <a href="https://www.artstation.com/artwork/n0ArX1" target="_blank" rel="noopener noreferrer"> Aenigma Abstractum game</a> },
    { id: 9, img: "/Project images/HelloWorld main menu UI 4.jpg", name: <a href="https://www.artstation.com/artwork/49K4oY" target="_blank" rel="noopener noreferrer"> Hello World! main menu UI</a> },
    { id: 10, img: "/Project images/Frutiger pals.png", name: <a href="https://www.artstation.com/artwork/aov9b9" target="_blank" rel="noopener noreferrer"> Frutiger pals</a> },
    { id: 11, img: "/Project images/Godomachy level design.jpg", name: <a href="https://www.artstation.com/artwork/zD9J3Q" target="_blank" rel="noopener noreferrer"> Godomachy level design</a> },
    { id: 12, img: "/Project images/NEOQ game.jpg", name: <a href="https://www.artstation.com/artwork/n04qae" target="_blank" rel="noopener noreferrer"> NEOQ game</a> },
    { id: 13, img: "/Project images/Frutiger Aurora 1.png", name: <a href="https://www.artstation.com/artwork/Jvogka" target="_blank" rel="noopener noreferrer"> Frutiger Aurora glades 1</a> },
    { id: 14, img: "/Project images/Frutiger Aurora 2.png", name: <a href="https://www.artstation.com/artwork/kNE3bx" target="_blank" rel="noopener noreferrer"> Frutiger Aurora glades 2</a> },
    { id: 15, img: "/Project images/minimalist rocket.png", name: <a href="https://www.artstation.com/artwork/zOGAxL" target="_blank" rel="noopener noreferrer"> ROCKET poster</a> },
  ];

  return (
    <section id="projects">
      <h2>My projects</h2>
      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide projects" : "Show projects"}
      </button>

      {showProjects && (
        <div className="project-container">
          {projectList.map((project) => (
            <div key={project.id} className="project-item">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.name} className="project-image" style={{ width: "700px", height: "auto", borderRadius: "5px" }} />
              </a>
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;