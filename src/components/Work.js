import React from "react";
import Fade from "react-reveal/Fade";
import WorkCard from "./cards/WorkCard";
import xLogo from "../static/images/X.jpg";
import telenorLogo from "../static/images/logos/telenor.png";
import easypaisaLogo from "../static/images/logos/easypaisa.png";
import synergyLogo from "../static/images/logos/synergy.png";
import nucesLogo from "../static/images/logos/nuces.png";
import vecLogo from "../static/images/logos/2vec.png";
import "../static/css/Work.css";

export default function Work() {
  return (
    <div className="section work ">
      <div className="slide">
        <h2 className="section-heading">Work Experience</h2>
        <Fade bottom>
          <div className="experience-cards-div">
            <WorkCard
              cardInfo={{
                company: "Telenor Microfinance Bank",
                companyLink: "https://www.linkedin.com/company/telenormicrofinancebanklimited/",
                logo: easypaisaLogo,
                desc:
                  "Part of development team of Easypaisa brand web application",
                date: "Jun 2019 - Dec 2019",
                role: "Project Intern",
                team: "Project Intern",
                descBullets: [
                  "Front-end and Back-end development",
                  "Load time optimization, Google analytics, and Google maps integration",
                  "Stress testing to support one million users API development (Cashpoint Locator)",
                  "Deployment on a remote Red hat server.",
                ],
              }}
            />
          
            <WorkCard
              cardInfo={{
                company: "Information System Research Lab",
                companyLink: "https://www.linkedin.com/company/synergy-it-pakistan/",
                logo: synergyLogo,
                desc:
                  "Developed an end-to-end solution for scheduling deliveries",
                date: "Feb 2020 - Nov 2020",
                role: "Research And Development Intern",
                descBullets: [
                  "R&D of an optimized delivery scheduling and routing web application w.r.t domain constraints, a solution to 'CVRP'",
                  "UI using react JS",
                  "Deployed on Google Cloud Plateform",
                  "Collaboration with Synergy IT Pakistan",
                ],
              }}
            />
            <WorkCard
              cardInfo={{
                company: "2vec Consulting",
                companyLink: "https://www.linkedin.com/company/2vecai/",               
                logo: vecLogo,
                desc:
                  "Worked on multiple NLP and development projects",
                date: "Jul 2020 - Sep 2020",
                role: "Software Engineer Intern",
                descBullets: [
                  "Semantic search with approximate nearest neighbors and text embeddings",
                  "Development of InVigil Chrome extension using web RTC",
                  "Built using ML, Python, NLP, thereTensorflow, Flask",
                ],
              }}
            />
            {/* <WorkCard
            cardInfo={{
              company: "",
              // companyLink: "https://www.cs.cmu.edu/~charlie/courses/17-214",
              desc:
                "Bringing ideas to life",
              date: "Jan 2020 - Present",
              role: "Freelancer",
              descBullets: [
                "React Web Application Development",
                "Flutter Android/IOS Application Development",
                "Natural Language Processing Projects",
                "Machine Learning Applications Projects"
              ],
            }}
          /> */}
          {/* <WorkCard
            cardInfo={{
              company: "Microsoft",
              logo: easypaisaLogo,
              companyLink:
                "https://www.microsoft.com/en-us/account/authenticator",
              desc:
                "Spearheaded the technical specification, user experience design and the implementation of various features for the Microsoft Authenticator Android app:",
              date: "Summer 2017",
              role: "Explore Intern",
              descBullets: [
                "Cloud-based backup and restore for 2FA accounts.",
                "In-app Microsoft account profile picture updates.",
              ],
              headerColor: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
            }}
          /> */}
          </div>
        </Fade>
      </div>
      
    </div>
  );
}
