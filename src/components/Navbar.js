import React from "react";
import Hidden from "@material-ui/core/Hidden";
import AM from "../static/images/signature.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand fixed-top nav-container">
      <div className="nav-brand-div">
        <Hidden smDown>
          <a className="js-scroll active" href="#home">
            <img className="dm-logo" src={AM} alt="DM Logo" />
          </a>
        </Hidden>
      </div>

      <div className="nav-sections-div">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id="home-nav" className="nav-link js-scroll active" href="#home">
              <h6 className="nav-section-text">Home</h6>
            </a>
          </li>
          <li className="nav-item">
            <a id="about-nav" className="nav-link js-scroll" href="#about">
              <h6 className="nav-section-text">About</h6>
            </a>
          </li>
          <li className="nav-item">
            <a
              id="education-nav"
              className="nav-link js-scroll"
              href="#education"
            >
              <h6 className="nav-section-text">Education</h6>
            </a>
          </li>
         <li className="nav-item">
            <a id="work-nav" className="nav-link js-scroll" href="#work">
              <h6 className="nav-section-text">Experience</h6>
            </a>
          </li>
          
          <li className="nav-item">
            <a id="skills-nav" className="nav-link js-scroll" href="#skills">
              <h6 className="nav-section-text">Services</h6>
            </a>
          </li>
          
          <li className="nav-item">
            <a
              id="projects-nav"
              className="nav-link js-scroll"
              href="#projects"
            >
              <h6 className="nav-section-text">Projects</h6>
            </a>
          </li>
           
          
        </ul>
      </div>
    </nav>
  );
}
