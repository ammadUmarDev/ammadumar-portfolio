import React from "react";
import Slide from "react-reveal/Slide";
import nuLogo from "../static/images/logos/nuces.png";
import EducationCard from "./cards/EducationCard";
import "../static/css/Education.css";

export default function Education() {
  return (
    <div className="section education">
      <h2 className="section-heading">Education</h2>
      <div className="education-card-container">
        <Slide left>
          <EducationCard
            schoolInfo={{
              name: "National University of Computer and Emerging Sciences (NUCES FAST)",
              logo: nuLogo,
              degree:
                "Bachelor of Science in Computer Science",
              dates: "August 2017 - May 2021",
              bulletsTitle: "Concentrations:",
              bullets: [
                "Software Engineering: Large-scale Software Design, API Design, Human-centered Software, Databases, Data Warehouses, Web Development",
                "Machine Learning: AI, Data Mining, Text Mining, NLP, Computer Vision and Learning-based Image Synthesis.",
              ],
            }}
          />
        </Slide>
       </div>
    </div>
  );
}
