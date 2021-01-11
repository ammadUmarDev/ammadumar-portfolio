import React from "react";
import Fade from "react-reveal/Fade";
import {
  faBrain,
  faDownload,
  faDesktop,
  faServer,
  faMobile,
  faLightbulb,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga";
import Button from "@material-ui/core/Button";
import SkillCard from "./cards/SkillCard";
import "../static/css/Skills.css";

export default function Skills() {
  return (
    <div className="section skills">
      <h2 className="section-heading">Services</h2>
      <Fade bottom cascade>
        <div className="skills-grid">
          <SkillCard
            skillInfo={{
              name: "Front-End Development",
              icon: faDesktop,
              color: "#fff",
              details:
                "Any concept to a responsive user interface with latest tools and technologies",
            }}
          />
          <SkillCard
            skillInfo={{
              name: "Back-End Development",
              icon: faServer,
              color: "#fff",
              details:
                "Scalable server background services and API development as per application need",
            }}
          />

          <SkillCard
            skillInfo={{
              name: "Mobile Development",
              icon: faMobile,
              color: "#fff",
              details:
                "Cross plateform applications using Flutter for personal and commercial purpose. ",
            }}
          />

          <SkillCard
            skillInfo={{
              name: "Machine Learning",
              icon: faBrain,
              color: "#fff",
              details:
                "Custom solutions using intellegent algorithms which enable faster and intellegent decisions",
            }}
          />
          <SkillCard
            skillInfo={{
              name: "Natural Language Processing",
              icon: faLanguage,
              color: "#fff",
              details:
                "Custom solutions that solve enormous challenges from data acquisition, knowledge discovery, etc",
            }}
          />
          <SkillCard
            skillInfo={{
              name: "Ideas To Solution",
              icon: faLightbulb,
              color: "#fff",
              details:
                "Have an idea in mind? Reach out for consultation and complete solution as per your needs",
            }}
          />
        </div>

        <div className="more-projects">
          <ReactGA.OutboundLink
            eventLabel="Resume"
            to="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="section-button">
              <FontAwesomeIcon className="more-icon" icon={faDownload} />
              Resume
            </Button>
          </ReactGA.OutboundLink>
        </div>
      </Fade>
    </div>
  );
}
