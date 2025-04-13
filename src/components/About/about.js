import React from 'react';
import './about.css';

import baseball_head_shot from '../../assets/head_shot_year_two.jpg'
import high_school_head_shot from '../../assets/high_school_head_shot.jpg'

import { FaPython, FaJava, FaReact, FaGitSquare, FaChalkboardTeacher, FaTools, FaRegClock, FaRocket } from "react-icons/fa";
import { SiCplusplus, SiJupyter } from "react-icons/si";
import { PiFileCSharpBold, PiFileSqlDuotone, PiMicrosoftExcelLogoBold, PiMathOperationsFill } from "react-icons/pi";
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt, FaGithub, FaPeopleGroup, FaGears } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import { Gi3dStairs } from "react-icons/gi";
import { BiConversation } from "react-icons/bi";

const About = () => {
    return (
        <section id="about">
            <div className="aboutContent">
                <span className="aboutTitle">About Me<br /></span>
                <div className="summary">
                    <span className="summaryTitle">Summary</span>
                    <ul className="summaryList">
                        <li className="listItem">Second-year Biomedical Engineering student-athlete</li>
                        <li className="listItem">Strong technical proficiency in programming languages (Python, Java, C#, R) and analytical tools (Power BI, Excel) with hands-on experience in data analysis and visualization</li>
                        <li className="listItem">Demonstrated leadership and communication skills through coaching roles, volunteer programs, and collaborative projects with an emphasis on building strong relationships and delivering positive outcomes</li>
                        <li className="listItem">Proven ability to work effectively in multidisciplinary teams, contributing to real-world projects involving engineers, city planners, and data scientists</li>
                        <li className="listItem">Passionate about applying engineering principles to solve real-world problems, with a strong interest in leveraging data-driven solutions to improve efficiency, performance, and decision-making in various fields, including healthcare and sports analytics</li>
                    </ul>
                </div>
                <div className="education">
                    <span className="educationTitle">Education</span>
                    <div className="educationContent">
                        <div className="universityText">
                            <p className="education">University of Waterloo (2023 - Present)</p>
                            <ul className="educationList">
                                <li className="listItem">Student in the Biomedical Engineering Undergraduate Program, recently completed my 2A term</li>
                                <li className="listItem">Working towards a Bachelor's of Applied Science, expected graduation in 2028</li>
                                <li className="listItem">Member of the Varsity Baseball Team</li>
                                <li className="listItem">Obtained a culminative average of 86.94%, demonstrating a strong academic track record</li>
                            </ul>
                        </div>
                        <img src={baseball_head_shot} alt="University of Waterloo Baseball Head Shot" className="baseball_photo" />
                    </div>
                    <div className="educationContent">
                        <img src={high_school_head_shot} alt="High School Graduation Head Shot" className="high_school_photo" />
                        <div className="highSchoolText">
                            <p className="education">Victoria Park Collegiate Institute (2019 - 2023)</p>
                            <ul className="educationList">
                                <li className="listItem">Recipient of Ontario Secondary School Diploma (OSSD), achieving an average of 98% in grade 12</li>
                                <li className="listItem">Completed the pre-IB program</li>
                                <li className="listItem">Extracurricular Activities: Athletic Council, Varsity Badminton Team (Captain), Varsity Baseball Team (Captain), Varsity Volleyball Team, Camp Tamarack Counsellor, Peer Tutor, Assistant Coach for Junior Volleyball and Varsity Softball Teams, Science Olympics, Wind Ensemble, CETA Line Follower Team, Cybersecurity Team.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <span className="skillsTitle">Skills</span>
                    <p className="skills">Programming Languages</p>
                    <ul className="skillsList">
                        <li className="listItem">
                            Python <FaPython className="icon" />
                        </li>
                        <li className="listItem">
                            Java <FaJava className="icon" />
                        </li>
                        <li className="listItem">
                            C++ <SiCplusplus className="icon" />
                        </li>
                        <li className="listItem">
                            C# <PiFileCSharpBold className="icon" />
                        </li>
                        <li className="listItem">R <i className="fa-brands fa-r-project" style={{ color: 'white' }}></i></li>
                        <li className="listItem">SQL <PiFileSqlDuotone className="icon" /></li> 
                        <li className="listItem">HTML <DiHtml5 className="icon"/></li>
                        <li className="listItem">CSS <FaCss3Alt className="icon"/></li>
                        <li className="listItem">JavaScript <IoLogoJavascript className="icon"/></li>
                        <li className="listItem">React JS <FaReact className="icon"/></li>
                    </ul>
                    <p className="skills">Analytical Tools</p>
                    <ul className="skillsList">
                        <li className="listItem">Excel <PiMicrosoftExcelLogoBold className="icon"/></li>
                        <li className="listItem">Power BI <MdDashboard className="icon"/></li>
                    </ul>
                    <p className="skills">Version Control and Developer Tools</p>
                    <ul className="skillsList">
                        <li className="listItem">Git <FaGitSquare className="icon"/></li>
                        <li className="listItem">GitHub <FaGithub className="icon"/></li>
                        <li className="listItem">VS Code <VscVscode className="icon"/></li>
                        <li className="listItem">Jupyter Notebook <SiJupyter className="icon"/></li>
                    </ul>
                    <p className="skills">Computer-Aided Design</p>
                    <ul className="skillsList">
                        <li className="listItem">SolidWorks <Gi3dStairs className="icon"/></li>
                    </ul>
                    <p className="skills">Soft Skills</p>
                    <ul className="skillsList">
                        <li className="listItem">Communication <BiConversation className="icon"/></li>
                        <li className="listItem">Leadership <FaChalkboardTeacher className="icon"/></li>
                        <li className="listItem">Collaboration <FaPeopleGroup className="icon"/></li>
                        <li className="listItem">Strong Work Ethic <FaTools className="icon"/></li>
                        <li className="listItem">Adaptability <FaGears className="icon"/></li>
                        <li className="listItem">Time Management <FaRegClock className="icon"/></li>
                        <li className="listItem">Problem Solving <PiMathOperationsFill className="icon"/></li>
                        <li className="listItem">Initiative <FaRocket className="icon"/></li>
                    </ul>
                </div>
                <div className="awards">
                    <span className="awardsTitle">Awards and Achievements</span>
                    <p className="awards">Japanese Canadian Legacies Sports Fund:</p>
                    <ul className="awardsList">
                        <li>Issued by Japanese Canadian Legacies in February of 2024</li>
                        <li>Awarded to a high-performance athlete of Japanese Canaidan descent to support their development and pursuit of excellence within their sport</li>
                    </ul>
                    <p className="awards">President's Scholarship of Distinction:</p>
                    <ul className="awardsList">
                        <li>Awarded by the University of Waterloo in September of 2023</li>
                        <li>Given to admitted students with an admission average of 95% or greater</li>
                    </ul>
                    <p className="awards">MPP Award:</p>
                    <ul className="awardsList">
                        <li>Issued by Victoria Park Collegiate Institute in June of 2023</li>
                        <li>Presented to a graduating student to recognize their exemplary academic performance, community service, and leadership within the school</li>
                    </ul>
                    <p className="awards">Brian Maxwell Award and Scholarship:</p>
                    <ul className="awardsList">
                        <li>Recognized by the Brian Maxwell Memorial Fund and Victoria Park Collegiate Institute in June of 2023</li>
                        <li>Awarded to a graduating student at Victoria Park Collegiate Institute who demonstrates excellence in academics and athletics</li>
                        <li>Recognizes the discipline, work-ethic and commitment of the students and their contributions to the community</li>
                    </ul>
                    <p className="awards">Computer Technology Award:</p>
                    <ul className="awardsList">
                        <li>Given by Victoria Park Collegiate Institute in June of 2023</li>
                        <li>Honors a graduating student at Victoria park CI for their achievements in computer engineering and computer science</li>
                    </ul>
                    <p className="awards">Science Award:</p>
                    <ul className="awardsList">
                        <li>Awarded by Victoria Park Collegiate Institute in June of 2023</li>
                        <li>Acknowledges the achievements and contributions of a graduating student to the University Science Program</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About