import { React } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactGA from "react-ga";

export default function Socials({ noLeft }) {
  return (
    <div className="social-media-div">
      <ReactGA.OutboundLink
        eventLabel="Socials: Email"
        to="mailto:ammad.umar@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={noLeft ? "icon-button mail first" : "icon-button mail"}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Socials: Github"
        to="https://github.com/ammadUmarDev"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-button github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Socials: LinkedIn"
        to="https://www.linkedin.com/in/ammad-umar000/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-button linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </ReactGA.OutboundLink>
    </div>
  );
}
