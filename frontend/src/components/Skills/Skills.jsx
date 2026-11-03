import { useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { FaServer, FaDatabase } from "react-icons/fa";
import { BsTools } from "react-icons/bs";

import "./Skills.css";

function Skills() {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <section id="skills" className="skills-education-section">
            <div className="container">

                {/* Heading */}

                <div className="text-center mb-5">
                    <h3>
                        Explore My Professional
                        <span> Journey</span>
                    </h3>

                    <p>
                        From learning to building — my skills and education journey so far
                    </p>
                </div>

                {/* Toggle */}

                <div className="switch-tabs mx-auto mb-5">

                    <button
                        className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
                        onClick={() => setActiveTab("skills")}
                    >
                        Skills
                    </button>

                    <button
                        className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
                        onClick={() => setActiveTab("education")}
                    >
                        Education
                    </button>

                </div>

                {/* Skills */}

                {activeTab === "skills" && (
                    <div className="row g-2 p-2">
                        <div class="col-lg-6 ">
                            <div class="skill-card">
                                <div class="icon-box">
                                    <BiCodeAlt />
                                </div>
                                <div class="card-text">
                                    <h4>Frontend</h4>
                                    <p>
                                        HTML5, CSS3, JavaScript,
                                        React.js, Bootstrap,
                                        Tailwind CSS
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="skill-card">
                                <div class="icon-box">
                                    <FaServer />
                                </div>
                                <div class="card-text">

                                    <h4>Backend</h4>

                                    <p>
                                        Python, FastAPI, Django,
                                        REST API, JWT,
                                        SQLAlchemy
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">

                            <div class="skill-card">

                                <div class="icon-box">
                                    <BsTools />
                                </div>

                                <div class="card-text">

                                    <h4>Tools & Technologies</h4>

                                    <p>
                                        Git, GitHub, VSCode,
                                        Postman

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6">

                            <div class="skill-card">

                                <div class="icon-box">
                                    <FaDatabase />
                                </div>

                                <div class="card-text">

                                    <h4>Database</h4>

                                    <p>
                                        MySQL, PostgreSQL,
                                        MongoDB
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                )}

                {/* Education */}

                {activeTab === "education" && (
                    <div className="row justify-content-center p-2 m-2 gap-3">
                        <div class="col-lg-6 education-card">
                            
                                <h5>
                                    B.Tech in Computer Science & Engineering
                                </h5>
                                <h6>
                                    [ JNTUH University ]
                                </h6>
                                <span>
                                    2022 - 2026
                                </span>
                                <p>
                                    Completed B.Tech in Computer Science & Engineering from <b>Global Institute of
                                        Engineering and Technology</b>, Hyderabad (JNTUH), Telangana.
                                </p>
                            
                        </div>



                        <div class="col-lg-6 education-card">
                            

                                <h5>
                                    Higher Secondary (12th)
                                </h5>
                                <h6>
                                    [ WBCHSE ]
                                </h6>
                                <span>
                                    2020 - 2022
                                </span>
                                <p>
                                    Completed Higher Secondary in Science from <b>Itagoria High School</b>, Birbhum
                                    (WBCHSE), West Bengal.
                                </p>
                            
                        </div>



                        <div class="col-lg-6 education-card">

                            

                                <h5>Secondary (10th)</h5>

                                <h6>
                                    [ WBBSE ]
                                </h6>

                                <span>
                                    2018 - 2020
                                </span>
                                <p>
                                    Completed Secondary Education from <b>Joyenpur High School</b>, Malda (WBBSE), West
                                    Bengal.
                                </p>
                          
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default Skills;