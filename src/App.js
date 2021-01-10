import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
  
    <div id="preloader">
        <div id="status">
            <div className="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar"></div>
        </div>
    </div>

    <header className="navbar-fixed-top">
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#experience">experience</a></li>
               <li><a href="#projects">projects</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </nav>
    </header>
 

    <div className="section" id="home" data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="disply-table">
                <div className="table-cell" data-aos="fade-up" data-aos-delay="0">
                    <img src="img/favicon.ico" style={{marginBottom: "-30px"}} />
                    <h1>Software Engineer</h1>
                </div>
            </div>
        </div>
    </div>

    <div className="section" id="about">
        <div className="container">
            <div className="col-md-6" data-aos="fade-up">
                <h1 className="size-50">
                    About Me
                </h1>
                <div className="h-50"></div>
                <p>
                    I'm a dedicated, and target-oriented individual with overall 2+ years of professional experience as a developer for working among the few highly reputed organizations like Telenor Microfinance Bank, Synergy IT, and 2vec. I believe I am capable of quickly becoming an asset due to my urge to continually learn and acquire new skills, in order to grow and become a better version of myself.
                </p>
                <p>
                     I stepped into the industry right after my 2nd year of Bachelors of Computer Science. While I'm a proficient MERN stack developer and a Flutter mobile application developer, my expertise lies in building responsive user interfaces and scalable backend services. 
                </p>
                <p>
                    My expertise is not limited to web and mobile application development as I have worked on several machine learning projects and natural language processing projects as well. I'm looking for a contributor role where I can be part of a collaborative team, learn new tools and technology, and gain experience as a software engineer.
                </p>

                <img src="img/Signature.png" width="200" height="150" alt="" />
                <div className="h-50"></div>
            </div>
            <div className="col-md-6 about-img-div">
                <div className="about-border" data-aos="fade-up" data-aos-delay=".5"></div>
                <img src="img/about-img.png" width="400" className="img-responsive" alt="" align="right"
                    data-aos="fade-right" data-aos-delay="0" />
            </div>
        </div>
    </div>

    <div className="section" id="services">
        <div className="container">
            <div className="col-md-12">
                <h1 className="size-50">
                    My Services
                </h1>
                <div className="h-50"></div>
            </div>
            <div className="col-md-12" data-aos="fade-up">
                <div className="cards-grid">
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75"
                            viewBox="0 0 226 226" style={{fill: "#000000"}}>
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style={{mixBlendMode: "normal"}}>
                                <path d="M0,226v-226h226v226z" fill="none"></path>
                                <g fill="#445c74">
                                    <path
                                        d="M22.6,18.08c-2.49622,0.00025 -4.51975,2.02378 -4.52,4.52v45.2c0.00025,2.49622 2.02378,4.51975 4.52,4.52h180.8c2.49622,-0.00025 4.51975,-2.02378 4.52,-4.52v-45.2c-0.00025,-2.49622 -2.02378,-4.51975 -4.52,-4.52zM27.12,27.12h171.76v36.16h-171.76zM45.2,40.68c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM63.28,40.68c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM81.36,40.68c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM18.08,85.88v117.52c0.00025,2.49622 2.02378,4.51975 4.52,4.52h180.8c2.49622,-0.00025 4.51975,-2.02378 4.52,-4.52v-117.52h-9.04v113h-171.76v-113zM45.2,85.88c-2.49622,0.00025 -4.51975,2.02378 -4.52,4.52v90.4c0.00025,2.49622 2.02378,4.51975 4.52,4.52h58.76c2.49622,-0.00025 4.51975,-2.02378 4.52,-4.52v-90.4c-0.00025,-2.49622 -2.02378,-4.51975 -4.52,-4.52zM122.04,85.88v9.04h63.28v-9.04zM49.72,94.92h49.72v81.36h-49.72zM122.04,108.48v9.04h63.28v-9.04zM122.04,131.08v9.04h63.28v-9.04zM122.04,153.68v9.04h63.28v-9.04zM122.04,176.28v9.04h63.28v-9.04z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <div className="card__body">
                            <h4 className="card__head">Front-end Development</h4>
                            <p className="card__content">Any design in mind to a responsive user interface whether it is a
                                landing page or a complex web applications as per your satisfaction with latest tools
                                and technologies using React JS.</p>
                        </div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75"
                            viewBox="0 0 226 226" style={{fill: "#000000"}}>
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style={{mixBlendMode: "normal"}}>
                                <path d="M0,226v-226h226v226z" fill="none"></path>
                                <g fill="#445c74">
                                    <path
                                        d="M22.6,9.04c-7.43328,0 -13.56,6.12672 -13.56,13.56v135.6c0,7.43328 6.12672,13.56 13.56,13.56h63.28v9.04h-40.68c-0.14125,0 -0.2825,0 -0.42375,0c-1.21828,0.12359 -2.34828,0.72391 -3.1075,1.695l-22.6,27.12c-1.09469,1.35953 -1.30656,3.21344 -0.54734,4.78484c0.75922,1.57141 2.34828,2.56016 4.07859,2.56016h180.8c1.73031,0 3.31938,-0.98875 4.07859,-2.56016c0.75922,-1.57141 0.54734,-3.42531 -0.54734,-4.78484l-22.6,-27.12c-0.86516,-1.07703 -2.15406,-1.695 -3.53125,-1.695h-40.68v-9.04h63.28c7.43328,0 13.56,-6.12672 13.56,-13.56v-135.6c0,-7.43328 -6.12672,-13.56 -13.56,-13.56zM22.6,18.08h180.8c2.50719,0 4.52,2.01281 4.52,4.52v135.6c0,2.50719 -2.01281,4.52 -4.52,4.52h-180.8c-2.50719,0 -4.52,-2.01281 -4.52,-4.52v-135.6c0,-2.50719 2.01281,-4.52 4.52,-4.52zM27.12,27.12v126.56h171.76v-126.56zM36.16,36.16h153.68v108.48h-153.68zM87.15125,50.99125l-36.16,36.16l-3.1075,3.24875l3.1075,3.24875l36.16,36.16l6.4975,-6.4975l-32.91125,-32.91125l32.91125,-32.91125zM138.84875,50.99125l-6.4975,6.4975l32.91125,32.91125l-32.91125,32.91125l6.4975,6.4975l36.16,-36.16l3.1075,-3.24875l-3.1075,-3.24875zM94.92,171.76h36.16v18.08h-36.16zM47.31875,189.84h38.56125v9.04h54.24v-9.04h38.56125l15.11375,18.08h-161.59z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <div className="card__body">
                            <h4 className="card__head">Back-end Development</h4>
                            <p className="card__content">Scalable server background services and API development as per
                                application needs using Python Flask, Node JS, Firebase, mySQL.</p>
                        </div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75"
                            viewBox="0 0 226 226" style={{fill: "#000000"}}>
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                               style={{mixBlendMode: "normal"}}>
                                <path d="M0,226v-226h226v226z" fill="none"></path>
                                <g fill="#445c74">
                                    <path
                                        d="M71.41953,9.04c-13.4696,0 -26.21953,13.1984 -26.21953,27.12v39.09977l9.04,-10.12586v-28.97391c0,-8.9496 8.68193,-18.08 17.17953,-18.08h75.03024c8.814,0 16.27023,7.45623 16.27023,16.27023v30.78367l9.04,10.12586v-40.90953c0,-13.7408 -11.56943,-25.31023 -25.31023,-25.31023zM67.8,31.64c-2.486,0 -4.52,2.034 -4.52,4.52v18.08l9.04,-9.04v-4.52h72.32v4.52l9.04,9.04v-18.08c0,-2.486 -2.034,-4.52 -4.52,-4.52zM66.68766,64.78961l-41.11258,45.95039l41.11258,45.95039l6.74469,-6.02078l-35.72742,-39.92961l35.72742,-39.92961zM150.27234,64.78961l-6.74469,6.02078l35.72742,39.92961l-35.72742,39.92961l6.74469,6.02078l41.11258,-45.95039zM45.2,146.22023v43.61977c0,16.8144 15.7748,27.12 27.12,27.12h74.12977c13.7408,0 25.31023,-11.56943 25.31023,-25.31023v-45.42953l-9.04,10.12586v35.30367c0,8.814 -7.45623,16.27023 -16.27023,16.27023h-74.12977c-6.1472,0 -18.08,-6.3732 -18.08,-18.08v-33.49391zM63.28,167.24v18.08c0,2.486 2.034,4.52 4.52,4.52h81.36c2.486,0 4.52,-2.034 4.52,-4.52v-18.08l-9.04,9.04v4.52h-72.32v-4.52zM108.48,192.1c-3.74449,0 -6.78,3.03551 -6.78,6.78c0,3.74449 3.03551,6.78 6.78,6.78c3.74449,0 6.78,-3.03551 6.78,-6.78c0,-3.74449 -3.03551,-6.78 -6.78,-6.78z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <div className="card__body">
                            <h4 className="card__head">Mobile Application Development</h4>
                            <p className="card__content">Optimized cross plateform applications for personal and commercial
                                purpose. using Flutter, Firebase, tfLite, sqlLite bringing ideas to reality.</p>
                        </div>
                    </div>

                </div>
                <div className="h-50"></div>
                <div className="cards-grid">
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75"
                            viewBox="0 0 226 226" style={{fill: "#000000"}}>
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style={{mixBlendMode: "normal"}}>
                                <path d="M0,226v-226h226v226z" fill="none"></path>
                                <g fill="#445c74">
                                    <path
                                        d="M103.96,4.52c-32.66406,0 -56.74719,11.26469 -72.32,28.92094c-15.57281,17.67391 -22.6,41.40391 -22.6,65.99906c0,19.91625 6.16203,38.45531 16.61453,53.63969c9.46375,13.77187 15.02547,30.06859 15.02547,46.70078v21.69953h9.04v-21.69953c0,-18.62734 -6.19734,-36.67203 -16.61453,-51.82109c-9.44609,-13.73656 -15.02547,-30.47469 -15.02547,-48.51937c0,-22.86484 6.53281,-44.33484 20.34,-59.99594c13.80719,-15.67875 34.92406,-25.88406 65.54,-25.88406c30.73953,0 50.65578,8.95172 63.80969,22.63531c13.15391,13.66594 19.68672,32.52281 22.10563,52.93344l0.10594,0.91812l21.68187,37.36063c1.11234,2.01281 0.54734,4.02563 -1.4125,5.13797l-20.41063,10.20531v27.19062c0,16.91469 -13.91312,30.06859 -30.77484,28.51484l-0.07063,-0.01766l-18.87453,-1.21828v24.25969h9.04v-14.61938l9.07531,0.58266c22.01734,2.06578 40.64469,-15.5375 40.64469,-37.50188v-21.61125l15.74937,-7.87469c6.16203,-3.42531 8.31609,-11.33531 4.92609,-17.44437l-0.01766,-0.03531l-21.01094,-36.19531c-2.68375,-21.16984 -9.56969,-41.59812 -24.24203,-56.87078c-14.99016,-15.57281 -37.78437,-25.38969 -70.32484,-25.38969zM122.04,36.16v9.49906c-2.87797,0.58266 -5.54406,1.74797 -7.91,3.31938l-6.74469,-6.74469l-6.39156,6.39156l6.74469,6.74469c-1.57141,2.36594 -2.73672,5.03203 -3.31937,7.91h-9.49906v9.04h9.49906c0.58266,2.87797 1.74797,5.54406 3.31937,7.91l-6.74469,6.74469l6.39156,6.39156l6.74469,-6.74469c2.36594,1.57141 5.03203,2.73672 7.91,3.31938v9.49906h9.04v-9.49906c2.87797,-0.58266 5.54406,-1.74797 7.91,-3.31938l6.74469,6.74469l6.39156,-6.39156l-6.74469,-6.74469c1.57141,-2.36594 2.73672,-5.03203 3.31938,-7.91h9.49906v-9.04h-9.49906c-0.58266,-2.87797 -1.74797,-5.54406 -3.31938,-7.91l6.74469,-6.74469l-6.39156,-6.39156l-6.74469,6.74469c-2.36594,-1.57141 -5.03203,-2.73672 -7.91,-3.31938v-9.49906zM126.56,54.24c7.53922,0 13.56,6.02078 13.56,13.56c0,7.53922 -6.02078,13.56 -13.56,13.56c-7.53922,0 -13.56,-6.02078 -13.56,-13.56c0,-7.53922 6.02078,-13.56 13.56,-13.56zM67.8,72.32v9.49906c-2.87797,0.58266 -5.50875,1.76563 -7.89234,3.35469l-6.76234,-6.78l-6.39156,6.39156l6.78,6.78c-1.57141,2.36594 -2.73672,5.01437 -3.31938,7.87469h-9.53438v9.04h9.49906c0.58266,2.87797 1.74797,5.54406 3.31938,7.91l-6.74469,6.74469l6.39156,6.39156l6.74469,-6.74469c2.36594,1.57141 5.03203,2.73672 7.91,3.31938v9.49906h9.04v-9.49906c2.87797,-0.58266 5.54406,-1.74797 7.91,-3.31938l6.74469,6.74469l6.39156,-6.39156l-6.74469,-6.74469c1.57141,-2.36594 2.73672,-5.03203 3.31938,-7.91h9.49906v-9.04h-9.53437c-0.58266,-2.86031 -1.74797,-5.50875 -3.31938,-7.87469l6.78,-6.78l-6.39156,-6.39156l-6.76234,6.78c-2.38359,-1.58906 -5.01438,-2.77203 -7.89234,-3.35469v-9.49906zM72.32,90.4c7.53922,0 13.56,6.02078 13.56,13.56c0,7.53922 -6.02078,13.56 -13.56,13.56c-7.53922,0 -13.56,-6.02078 -13.56,-13.56c0,-7.53922 6.02078,-13.56 13.56,-13.56z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <div className="card__body">
                            <h4 className="card__head">Machine Learning</h4>
                            <p className="card__content">Custom solutions using intellegent algorithms which enable faster
                                and intellegent
                                decisions, increased productivity, anomaly detechtion, and business process automation.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75"
                            viewBox="0 0 226 226" style={{fill: "#000000"}}>
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style={{mixBlendMode: "normal"}}>
                                <path d="M0,226v-226h226v226z" fill="none"></path>
                                <g fill="#445c74">
                                    <path
                                        d="M113,18.3625c-56.88844,0 -103.6775,40.06203 -103.6775,90.1175c0,29.04453 16.1025,54.66375 40.3975,71.04875c-0.03531,0.97109 0,2.47188 -1.27125,7.20375c-1.57141,5.84422 -4.67891,14.125 -11.15875,23.30625l-4.66125,6.4975l8.05125,0.14125c27.91453,0.12359 44.08766,-18.22125 46.6125,-21.1875c8.24547,1.83625 16.82641,3.1075 25.7075,3.1075c56.87078,0 103.6775,-40.06203 103.6775,-90.1175c0,-50.05547 -46.80672,-90.1175 -103.6775,-90.1175zM113,26.8375c52.95109,0 95.2025,36.84859 95.2025,81.6425c0,44.79391 -42.25141,81.6425 -95.2025,81.6425c-9.05766,0 -17.85047,-1.09469 -26.13125,-3.1075l-2.5425,-0.565l-1.695,2.11875c0,0 -13.06562,14.72531 -33.9,18.22125c3.76078,-6.74469 6.62109,-13.01266 7.91,-17.7975c1.80094,-6.69172 1.83625,-11.3 1.83625,-11.3v-2.26l-1.9775,-1.27125c-23.62406,-14.9725 -38.7025,-38.82609 -38.7025,-65.68125c0,-44.79391 42.23375,-81.6425 95.2025,-81.6425z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <div className="card__body">
                            <h4 className="card__head">Natural Language Processing</h4>
                            <p className="card__content">NLP based systems that solve enormous challenges from data
                                acquisition and knowledge discovery to analytics, entity extraction and knowledge
                                discovery.</p>
                        </div>
                    </div>
                    <div className="card">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="75"
                            viewBox="0 0 226 226" style={{fill: "#000000"}}>
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style={{mixBlendMode: "normal"}}>
                                <path d="M0,226v-226h226v226z" fill="none"></path>
                                <g fill="#445c74">
                                    <path
                                        d="M58.76,27.12c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM167.24,27.12c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM113,31.64c-17.42159,0 -31.64,14.21841 -31.64,31.64c0,10.52611 5.61874,19.39509 13.56,25.1425v11.0175c0,6.19538 4.2738,11.43098 9.99344,13.02148c1.47437,2.98922 4.5266,5.05852 8.08656,5.05852c3.55996,0 6.61219,-2.0693 8.08656,-5.05852c5.71964,-1.5905 9.99344,-6.8261 9.99344,-13.02148v-11.0175c7.94126,-5.74741 13.56,-14.61639 13.56,-25.1425c0,-17.42159 -14.21841,-31.64 -31.64,-31.64zM36.16,36.16c-9.93195,0 -18.08,8.14805 -18.08,18.08v99.44c0,3.30271 0.96569,6.36583 2.53367,9.04h-11.57367c-2.49622,0.00025 -4.51975,2.02378 -4.52,4.52c0,12.42781 10.17219,22.6 22.6,22.6h171.76c12.42781,0 22.6,-10.17219 22.6,-22.6c-0.00025,-2.49622 -2.02378,-4.51975 -4.52,-4.52h-11.57367c1.56798,-2.67417 2.53367,-5.73729 2.53367,-9.04v-99.44c0,-9.93195 -8.14805,-18.08 -18.08,-18.08h-9.04v9.04h9.04c5.04733,0 9.04,3.99267 9.04,9.04v99.44c0,5.04733 -3.99267,9.04 -9.04,9.04h-153.68c-5.04733,0 -9.04,-3.99267 -9.04,-9.04v-99.44c0,-5.04733 3.99267,-9.04 9.04,-9.04h9.04v-9.04zM72.32,36.16c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM153.68,36.16c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM113,40.68c12.53697,0 22.6,10.06303 22.6,22.6c0,7.437 -3.58008,13.96454 -9.09297,18.08h-13.50703v9.04h9.04v9.04c0,2.55394 -1.96606,4.52 -4.52,4.52h-9.04c-2.55394,0 -4.52,-1.96606 -4.52,-4.52v-15.29914l-2.25117,-1.30656c-6.75617,-3.91345 -11.30883,-11.15959 -11.30883,-19.5543c0,-12.53697 10.06303,-22.6 22.6,-22.6zM49.72,58.76c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM67.8,58.76c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM158.2,58.76c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM176.28,58.76c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM72.32,81.36c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM153.68,81.36c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM58.76,90.4c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM167.24,90.4c-2.49633,0 -4.52,2.02367 -4.52,4.52c0,2.49633 2.02367,4.52 4.52,4.52c2.49633,0 4.52,-2.02367 4.52,-4.52c0,-2.49633 -2.02367,-4.52 -4.52,-4.52zM15.42273,171.76h20.73727h153.68h20.73727c-1.97564,5.02834 -5.93042,9.04 -11.69727,9.04h-171.76c-5.76685,0 -9.72163,-4.01166 -11.69727,-9.04z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <div className="card__body">
                            <h4 className="card__head">Ideas to Solution</h4>
                            <p className="card__content">Have an idea in mind? Reach out for consultation and complete
                                solution as per your needs.</p>
                        </div>
                    </div>

                </div>
                <div className="h-50"></div>
            </div>
        </div>
    </div>

    <div className="section" id="experience">
        <div className="container">
            <div className="col-md-12">
                <h1 className="size-50">
                    My Experience
                </h1>
                <div className="h-50"></div>
            </div>
            <div className="col-md-12">
                <ul className="timeline">
                    <li className="timeline-event" data-aos="fade-up" data-aos-delay=".2">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">Jan 2020 - Present</p>
                            <h3>Freelancer</h3>
                            <p>
                                
                                \n• React Web Application Development
                                
                                \n• Flutter Android/IOS Application Development
                                
                                \n• Natural Language Processing Projects
                                
                                \n• Machine Learning Applications Projects
                            </p>
                        </div>
                    </li>
                    <li className="timeline-event" data-aos="fade-up">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">Jul 2020 - Sep 2020</p>
                            <h3>Software Engineer Intern</h3>
                            <h4>2vec Consulting</h4>
                            <p>
                                • Semantic search with approximate nearest neighbors and text embeddings
                                
                                \n• Development of InVigil Chrome extension using web RTC
                                
                                \n• Built using ML, Python, NLP, thereTensorflow, Flask
                            </p>
                        </div>
                    </li>
                    <li className="timeline-event" data-aos="fade-up" data-aos-delay=".4">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">Feb 2020 - Nov 2020</p>
                            <h3>Research And Development Intern</h3>
                            <h4>Information System Research Lab</h4>
                            <p>
                                • R&D of an optimized delivery scheduling and routing web
                                application w.r.t domain constraints, a solution to 'CVRP'
                                
                                \n• UI using react JS
                                
                                \n• Deployed on Google Cloud Plateform
                                
                                \n• Collaboration with Synergy IT Pakistan
                            </p>
                        </div>
                    </li>
                    <li className="timeline-event" data-aos="fade-up" data-aos-delay=".4">
                        <label className="timeline-event-icon"></label>
                        <div className="timeline-event-copy">
                            <p className="timeline-event-thumbnail">Jun 2019 - Dec 2019</p>
                            <h3>Project Intern</h3>
                            <h4>Telenor Microfinance Bank Limited</h4>
                            <p>
                                • Development of <a target="_blank" href="https://easypaisa.com.pk"> Easypaisa </a>
                                brand web application
                                
                                \n• Load time optimization, Google analytics, and Google maps integration
                                
                                \n• Stress testing to support one million users API development (Cashpoint Locator)
                                
                                \n• Deployment on a remote Red hat server.
                                
                                \n• Built using HTML, CSS, Bootstrap, JavaScript, jQuery, WordPress, PHP, and MySQL
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>


        <section className="site-section section-counters text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-xs-12">
                        <p className="counter start" data-to="2" data-speed="2000">0</p>
                        <h4>Years Experience</h4>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <p className="counter start" data-to="20" data-speed="2000">0</p>       
                        <h4>Projects Delivered</h4>      
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <p id="infinity" className="counter" data-from="0" data-to="1" data-speed="1000">0</p>
                        <h4>Seconds on this site!\nWhat are you waiting for?</h4>
                    </div>
                </div>
            </div>
        </section>

    <div className="section" id="contact">
        <div className="container">
            <div className="col-md-12">
                <h1 className="size-50">Contact Me</h1>
                <div className="h-50"></div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
                <h3 style={{fontSize: "22px"}}>Mobile Number</h3>
                <p>00 92 303 0888028</p>
                <h3 style={{fontSize: "22px"}}>Email</h3>
                <p><a href="mailto:ammad.umar@outlook.com" style={{color: "#445c74"}}><b>ammad.umar@outlook.com</b></a></p>

                <h3 style={{fontSize: "22px"}}>Social Network</h3>

                <ul className="social">
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/ammad-umar000/"><i className="ion-social-linkedin"></i></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.github.com/ammadUmarDev/"><i className="ion-social-github"></i></a>
                    </li>
                </ul>
                <div className="clearfix"></div>
                <div className="h-50"></div>
            </div>
         
        </div>
    </div>

    <div id="animatedModal" className="popup-modal">
        <div id="btn-close-modal" className="close-animatedModal close-popup-modal">
            <i className="ion-close-round"></i>
        </div>
        <div className="clearfix"></div>
        <div className="modal-content">
            <div className="container">
                <div className="portfolio-padding">
                    <div className="col-md-8 col-md-offset-2">
                        <h2>
                            Geschäfts Eines<br />
                            Web-Studios
                        </h2>
                        <div className="h-50"></div>
                        <p>
                            Appropriately maintain standards compliant total linkage with
                            cutting-edge action items. Enthusiastically create seamless
                            synergy rather than excellent value. Quickly promote premium
                            strategic theme areas vis-a-vis.
                        </p>
                        <p>
                            Appropriately maintain standards compliant total linkage with
                            cutting-edge action items. Enthusiastically create seamless
                            synergy rather than excellent value.
                        </p>
                        <br />
                        <br />
                        <img src="img/portfolio/02.jpg" alt="" className="img-responsive" />
                        <br />
                        <br />
                        <p>
                            Appropriately maintain standards compliant total linkage with
                            cutting-edge action items. Enthusiastically create seamless
                            synergy rather than excellent value. Quickly promote premium
                            strategic theme areas vis-a-vis.
                        </p>
                        <p>
                            Appropriately maintain standards compliant total linkage with
                            cutting-edge action items. Enthusiastically create seamless
                            synergy rather than excellent value.
                        </p>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  }
}

export default App;
