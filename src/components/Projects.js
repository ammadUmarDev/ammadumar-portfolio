import React from "react";
import Button from "@material-ui/core/Button";
import Fade from "react-reveal/Fade";
import {
  faLaptopCode,
  faGlobe,
  faMobile,
  faGamepad
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "./cards/ProjectCard";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactGA from "react-ga";
import "../static/css/Projects.css";

export default function Projects() {
  return (
    <div className="section projects">
      <h2 className="section-heading">Projects</h2>
      <div className="more-projects">
        <ReactGA.OutboundLink
          eventLabel="Socials: Github [from Projects]"
          to="https://github.com/ammadUmarDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="section-button">
            <FontAwesomeIcon className="more-icon" icon={faGithub} />
              View More Projects
            </Button>
        </ReactGA.OutboundLink>
      </div>

      <Fade bottom cascade>
        <div className="projects-grid">

          <ProjectCard
            projectInfo={{
              name: "SentiMix Hindi-English",
              link: "https://github.com/ammadUmarDev/SentiMix-Hindi-English",
              icon: faLaptopCode,
              desc:
                "Predict the sentiment of a given code-mixed tweet. Code-mixed languages will be English-Hindi",
              skills: ["Python", "NLP", "ML"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "Web RTC Ext.",
              link: "https://github.com/ammadUmarDev/EInViGiL-chrome-extension",
              icon: faLaptopCode,
              desc:
                "Chrome Extension that records Screen Activity, Camera, and Microphone sends data to flask server",
              skills: ["JS", "WRTC", "Flask"],
            }}
          />

          <ProjectCard
            projectInfo={{
              name: "Metro DWH",
              link: "https://github.com/ammadUmarDev/metro-DataWarehouse-using-hybrid-join",
              icon: faLaptopCode,
              desc:
                "METRO, a superstores chains in PK, we intend to optimise their selling techniques e.g. giving of promotions",
              skills: ["Java", "mySQL", "OLAP"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "Easypaisa.com.pk",
              link: "https://easypaisa.com.pk/",
              icon: faGlobe,
              desc:
                "Brand web application for Easypaisa by Telenor Microfinance Bank",
              skills: ["Php", "JQuery", "mySQL"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "Mario 2D",
              link: "https://github.com/ammadUmarDev/Mario-Bros-Computer-Organization-and-Assembly-Language-Project",
              icon: faGamepad,
              desc:
                "3 level 2D game where Mario climbs hurdles and dodges enemies",
              skills: ["Assembly x86"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "Sudoku",
              link: "https://github.com/ammadUmarDev/Sudoku",
              icon: faGamepad,
              desc:
                "Sudoku validator implementing core operating system concepts",
              skills: ["C++"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "Udhaar",
              link: "https://drive.google.com/file/d/1nmweapTF2ZmW5e7i4h9e0aKo_z1NhRCy/view?usp=sharing",
              icon: faMobile,
              desc:
                "Money lending manager that keeps a track of money owed and money lended",
              skills: ["Flutter", "Firebase", "Dart"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "Ugao.pk",
              link: "https://www.youtube.com/watch?v=nv_TsIGVU1M",
              icon: faMobile,
              desc:
                "Help farmers by maximizing their profits by minimizing the role of middlemen",
              skills: ["Flutter", "Firebase", "SQLite"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "E.R.I.M.S",
              link: "https://drive.google.com/file/d/1og3jIPZYRpZypO0th-xslK3aj2v4XN_m/view?usp=sharing",
              icon: faMobile,
              desc:
                "Automating event registeration process at FAST NUCES",
              skills: ["Flutter", "Firebase", "SQLite"],
            }}
          />
          
          <ProjectCard
            projectInfo={{
              name: "Adravaline.com",
              link: "https://adraveline.com/",
              icon: faGlobe,
              desc:
                "Landing Page for Adraveline. Web application automating business coming soon",
              skills: ["React JS", "Bootstrap"],
            }}
          />
          {/* <ProjectCard
            projectInfo={{
              name: "2Vec.com",
              link: "/2vec.png",
              icon: faGlobe,
              desc:
                "Landing page for the 2vec startup to create an online presence",
              skills: ["Javascript", "Bootstrap"],
            }}
          /> */}
          <ProjectCard
            projectInfo={{
              name: "Lauzaafs.com",
              link: "/lauzaafs.png",
              icon: faGlobe,
              desc:
                "Landing page for the Lauzaaf startup to create an online presence",
              skills: ["Javascript", "Bootstrap"],
            }}
          />
          <ProjectCard
            projectInfo={{
              name: "Online Resume",
              link: "https://ammad-umar.netlify.app/",
              icon: faGlobe,
              desc:
                "Current site is built using React JS. An older version of my online resume to explore",
              skills: ["VanillaJS", "Bootstrap"],
            }}
          />

        </div>

      </Fade>
    </div>
  );
}
