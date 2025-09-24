import React from 'react';
import './projects.css';

import { FaGithubSquare } from "react-icons/fa";
import projectVideo from "../../assets/Prosthetic_Arm_Project.mp4";

const Projects = () => {
    return (
        <section id="projects">
            <div className="projectsContent">
                <span className="projectsTitle">Projects<br /></span>
                <span className="projectsName">EMG-Controlled Prosthetic Arm
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">May 2025 - August 2025</li>
                            <li className="listItem">Developed and designed a low-cost, EMG-controlled prosthetic, focusing on the signal-processing and firmware development aspects</li>
                            <li className="listItem">Took in raw EMG signals and processed them into clean, Arduino-readable voltage, using a custom-designed analog circuit with amplification and filtering</li>
                            <li className="listItem">Interpreted these signals to trigger motor actions, allowing for responsive control</li>
                            <li className="listItem">Tested the stability and mobility of the device through the ability to stack cups into a pyramid</li>

                            <video muted controls>
                                <source src={projectVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </ul>
                </div>
                <span className="projectsName">Personal Portfolio Website    <a
                    href="https://github.com/jkmende05/personal-portfolio-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">April 2025</li>
                            <li className="listItem">Developed and designed a responsive personal portfolio website using React.js, JavaScript, HTML, and CSS to showcase technical skills, projects, and experience</li>
                            <li className="listItem">Implemented reusable components and modern UI/UX design principles for seamless navigation and an engaging user experience</li>
                            <li className="listItem">Deployed the site using GitHub pages, integrating a responsive design for optimal performance across devices</li>
                        </ul>
                </div>
                <span className="projectsName">Pynpb    <a
                    href="https://github.com/jkmende05/pynpb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">March 2025</li>
                            <li className="listItem">Created a Python package for detailed statistical analysis of Nippon Professional Baseball (NPB) data, processing over 10,000 player-season statistics</li>
                            <li className="listItem">Automated data ingestion and analysis pipelines to reduce manual processing time by over 80%</li>
                            <li className="listItem">Optimized data pipelines to allow seamless integration of data from various sources, improving accessibility for both technical analysts and casual users</li>
                        </ul>
                </div>
                <span className="projectsName">MLB Performance Predictor    <a
                    href="https://github.com/jkmende05/MLB-Performance-Predictor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">February 2025</li>
                            <li className="listItem">Developed a machine learning model using R to predict future player stats based on historical data for over 15,000 players, focusing on baseball hitters</li>
                            <li className="listItem">Implemented clustering techniques to group current players to past players, adjusting for age-related performance changes, resulting in more accurate predictions for players in their prime vs. older players</li>
                            <li className="listItem">Leveraged XGBoost, a gradient boosting model, to train and test a predictive model, achieving over 80% accuracy in predicting player performance</li>
                            <li className="listItem">Averaged predictions from both the clustering method and XGBoost model to increase reliability and reduce prediction error by 10%.</li>
                        </ul>
                </div>
                <span className="projectsName">Re-creation of Tetris Using C#   <a
                    href="https://github.com/jkmende05/Tetris_C_Sharp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">February 2025</li>
                            <li className="listItem">Developed a fully functional Tetris game using C# and WPF, implementing core gameplay mechanics such as piece rotation, line clearing, scoring, and increasing difficulty levels</li>
                            <li className="listItem">Engineered game logic from scratch, including collision detection and grid management using object-oriented principles</li>
                            <li className="listItem">Enhanced debugging efficiency by incorporating logging and modular testing during development</li>
                        </ul>
                </div>
                <span className="projectsName">SQL Case Studies   <a
                    href="https://github.com/jkmende05/SQL-Case-Studies/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">February 2025</li>
                            <li className="listItem">Completed multiple real-world SQL case studies from the 8-Week SQL Challenge to strengthen data analysis, querying, and problem-solving skills</li>
                            <li className="listItem">Analyzed complex datasets across 8+ business domains, including marketing, sales, and digital subscriptions</li>
                            <li className="listItem">Wrote and optimized 100+ SQL queries involving joins, CTEs, window functions, aggregations, and subqueries</li>
                        </ul>
                </div>
                <span className="projectsName">Tennis Player and Ball Tracking   <a
                    href="https://github.com/jkmende05/Tennis-Player-Tracking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">February 2025</li>
                            <li className="listItem">Built a computer vision pipeline to track and analyze tennis players and ball movement using machine learning techniques</li>
                            <li className="listItem">Leveraged YOLOv8 object detection and custom Convolutional Neural Networks (CNNs) to identify players and track ball trajectories across video frames</li>
                            <li className="listItem">Created a real-time analysis system to calculate player speed, ball velocity, shot count, and court positioning</li>
                            <li className="listItem">Achieved greater than 90% detection accuracy in controlled environments and developed a modular codebase for future model upgrades.</li>
                        </ul>
                </div>
                <span className="projectsName">R Programming Machine Learning   <a
                    href="https://github.com/jkmende05/R-Programming"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">February 2025</li>
                            <li className="listItem">Built a portfolio of R programs progressing from foundational scripting to advanced statistical modeling and machine learning techniques</li>
                            <li className="listItem">Developed 10+ scripts exploring data manipulation, visualization, and supervised learning algorithms using R</li>
                            <li className="listItem">Leveraged packages like caret, tidyverse, ggplot2, and randomForest for modeling, cross-validation, and visual insights</li>
                            <li className="listItem">Applied concepts, such as linear regression, logistic regression, and random forest models for feature importance analysis and improving model accuracy through ensemble learning</li>
                        </ul>
                </div>
                <span className="projectsName">Breaking Point: An Interactive Power BI Dashboard   <a
                    href="https://github.com/jkmende05/Breaking-Point"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">January 2025</li>
                            <li className="listItem">Created an interactive baseball analytics dashboard to analyze breaking ball pitch types using Python and Power BI</li>
                            <li className="listItem">Retrieved and processed 1,000,000+ rows of Statcast data for sliders, sweepers, and slurves using Pybaseball and Pandas</li>
                            <li className="listItem">Built a fully interactive Power BI dashboard featuring custom measures, slicers, line charts, and KPIs to analyze trends in pitch velocity, movement, and usage</li>
                        </ul>
                </div>
                <span className="projectsName">3D Printed Puzzle Toy   
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">September 2023 - December 2023</li>
                            <li className="listItem">Designed a 3D printed toy using SolidWorks with more than five unique parts</li>
                            <li className="listItem">Used features, including lofting, chamfering, extruded cuts, and reference geometry</li>
                            <li className="listItem">Developed a comprehensive assembly manual for user-friendly guidance</li>
                        </ul>
                </div>
                <span className="projectsName">C++ A-mode Breamforming for Ultrasound  <a
                    href="https://github.com/jkmende05/C_Plus_Plus_Projects/tree/main/Ultrasound%20Calculations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">November 2023</li>
                            <li className="listItem">Created a C++ program designed to read ultrasound data to develop essential graphs and analyze the data</li>
                            <li className="listItem">Implemented A-mode beamforming, a technique used in medical ultrasound imaging to process ultrasound signals and create detailed images</li>
                        </ul>
                </div>
                <span className="projectsName">Re-creation of Super Mario Bros Using Java <a
                    href="https://github.com/jkmende05/java-super-mario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">June 2022</li>
                            <li className="listItem">Developed a 2D Super Mario clone in Java using object-oriented programming and custom game engine architecture</li>
                            <li className="listItem">Built core gameplay systems, including collision detection, gravity, jumping, enemy AI, and level transitions from scratch</li>
                            <li className="listItem">Managed game loop logic, frame rate control, and keyboard input handling for smooth and responsive gameplay through the use of over 1500 lines of clean, maintainable code</li>
                        </ul>
                </div>
                <span className="projectsName">Re-creation of Pac-Man Using Java  <a
                    href="https://github.com/jkmende05/java-pacman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="githubIconLink"
                >   
                    <FaGithubSquare className="githubIcon" />
                    </a>
                </span>
                <div className="projectsContent">
                        <ul className="projectDescription">
                            <li className="listItem">January 2021</li>
                            <li className="listItem">Recreated the classic Pac-Man game in Java with a focus on object-oriented design and real-time gameplay mechanics</li>
                            <li className="listItem">Implemented core systems, including player movement, ghost AI, collision detection, and power-up logic, using custom-built classes and interfaces</li>
                        </ul>
                </div>
            </div>
        </section>
    )
}

export default Projects