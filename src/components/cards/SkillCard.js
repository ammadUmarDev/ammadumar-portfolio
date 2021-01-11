import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function SkillCard({ skillInfo }) {

  return (
    <div className="skill-card-div">
      <div className="skill-left">
        <span className="fa-stack fa-2x">
          <FontAwesomeIcon
            className="fa-stack-2x"
            icon={faCircle}
            color="#445c74"
          />
          <FontAwesomeIcon
            className="fa-stack-1x"
            icon={skillInfo.icon}
            color={skillInfo.color}
          />
        </span>
      </div>
      <div className="skill-right">
        <p className="skill-name">{skillInfo.name}</p>

        <p className="skill-details">{skillInfo.details}</p>
      </div>
    </div>
  );
}
