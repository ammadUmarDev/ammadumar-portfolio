import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Fade from "react-reveal/Fade";
import profilePic from "../static/images/AboutPic.jpg";
import Socials from "./Socials";
import { makeStyles } from "@material-ui/core/styles";
import "../static/css/About.css";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className="section about">
      <div className="about-container">
        <div className="about-left">
          {/* https://www.react-reveal.com/docs/ */}
          <Fade left>
            <h2 className="about-greeting">
              Hi! I'm Ammad{" "}
            
            </h2>
            <p className="about-text" align="left">
              I'm a dedicated, and target-oriented individual with overall 2+ years of professional experience as a developer for working among the few highly reputed organizations like Telenor Microfinance Bank, Synergy IT, and 2vec. I believe I am capable of quickly becoming an asset due to my urge to continually learn and acquire new skills, in order to grow and become a better version of myself.
              <br/><br/>
              I stepped into the industry right after my 2nd year of Bachelors of Computer Science. While I'm a proficient MERN stack developer and a Flutter mobile application developer, my expertise lies in building responsive user interfaces and scalable backend services.
              <br/><br/>
              My expertise is not limited to web and mobile application development as I have worked on several machine learning projects and natural language processing projects as well. I'm looking for a contributor role where I can be part of a collaborative team, learn new tools and technology, and gain experience as a software engineer.
            </p>
            <Socials noLeft />
          </Fade>
        </div>
        <div className="about-right">
          <Fade right>
            <Avatar
              className={classes.large + " about-avatar"}
              src={profilePic}
              alt="Diego Martinez"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
