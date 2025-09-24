import React from 'react';
import './experience.css';

import wsp_logo_png from '../../assets/wsp_logo.png'
import baseball_ontario_logo from '../../assets/baseball_ontario_logo.png'
import j_athletics_logo from '../../assets/j_athletics_canada_logo.png'
import jays_logo from '../../assets/blue_jays_logo.jpg'
import vpci_logo from '../../assets/vpci_logo.png'
import tdsb_logo from '../../assets/tdsb_logo.png'
import ootc_logo from '../../assets/ootc_logo.png'
import markham_logo from '../../assets/markham_logo.png'

const Experience = () => {
    return (
        <section id="experience">
            <div className="experienceContent">
                <span className="experienceTitle">Experience<br /></span>
                <div className="work">
                    <span className="workTitle">Work Experience</span>
                    <p className="jobTitle">Engineering Student - City of Markham</p>
                    <div className="workContent">
                        <ul className="jobDescription">
                            <li className="listItem">September 2025 - December 2025</li>
                            <li className="listItem">Processed 100+ Backflow Preventer Test Reports weekly using BPMS software and generated compliance notices with 100% accuracy, supporting the City’s Backflow Prevention Program</li>
                            <li className="listItem">Reviewed and validated Qualified Person registrations, reducing approval turnaround time by 20% through efficient coordination and attention to detail.</li>
                            <li className="listItem">Handled daily customer service inquiries through email with an average response time of less than 24 hours, improving stakeholder satisfaction.</li>
                            <li className="listItem">Applied engineering problem-solving and process optimization skills to real-world municipal programs, strengthening ability to analyze complex systems and propose data-driven solutions</li>
                            <li className="listItem">Gained hands-on experience in technical communication, regulatory compliance, and cross-departmental collaboration, skills directly transferable to engineering roles in other fields</li>
                            <li className="listItem">Technical Skills Used: Database Development and Management, Microsoft Office Suite, Technical Documentation</li>
                            </ul>
                        <img src={markham_logo} alt="City of Markham Logo" className="markham_logo" />
                    </div>
                    <p className="jobTitle">Data Science and Analyst Co-op Student - WSP Canada</p>
                    <div className="workContent">
                        <ul className="jobDescription">
                            <li className="listItem">May 2024 - August 2024</li>
                            <li className="listItem">Developed and designed over 15 Python scripts to analyze and display large datasets of patterns, identifying key trends and anomalies to improve planning decisions</li>
                            <li className="listItem">Created three interactive dashboards using R, Python, and Power BI to visualize data from over 100,000 rows of Excel data, provide clients with clear insights into geographical zone characteristics, such as population and workplace trends, and traffic flow data</li>
                            <li className="listItem">Collaborated with a team of eight multidisciplinary professionals, including civil engineers, data scientists, and city planners, to integrate data analysis into reports and presentations, providing actionable insights</li>
                            <li className="listItem">Technical Skills Used: Python, R Programming, Power BI, Git, GitHub, Jupyter Notebooks, Data Analysis, Data Science, Excel</li>
                        </ul>
                        <img src={wsp_logo_png} alt="WSP Logo" className="wsp_logo" />
                    </div>
                    <p className="jobTitle">Level Two Umpire - Baseball Ontario</p>
                    <div className="workContent">
                        <ul className="jobDescription">
                            <li className="listItem">February 2016 - August 2022</li>
                            <li className="listItem">Served as an umpire for over 100 youth baseball games from house league to elite levels</li>
                            <li className="listItem">Communicated with high efficiency with 300+ parents, players, coaches, and other umpires to enforce game rules and maintain order while under pressure</li>
                        </ul>
                        <img src={baseball_ontario_logo} alt="Baseball Ontario Logo" className="oba_logo" />
                    </div>
                </div>
                <div className="volunteer">
                    <span className="volunteerTitle">Volunteer Experience</span>
                    <p className="volunteerName">Assistant Baseball Coach - J Athletics Canada</p>
                    <div className="volunteerContent">
                        <ul className="volunteerDescription">
                            <li className="listItem">February 2025 - April 2025</li>
                            <li className="listItem">Collaborated with the head coach and coaching staff to design and implement practice plans and training drills focused on player development and individual skill improvement for over 20 participants from ages six to 11</li>
                            <li className="listItem">Fostered a positive environment, encouraging sportsmanship, communication, and a strong work ethic among all participants throughout 10+ training sessions</li>
                        </ul>
                        <img src={j_athletics_logo} alt="J Athletics Canada Logo" className="j_athletics_logo" />
                    </div>
                    <p className="volunteerName">Founder and Student Leader - Victoria Park Collegiate Institute's Blue Jays Rookie League Program</p>
                    <div className="volunteerContent">
                        <ul className="volunteerDescription">
                            <li className="listItem">November 2022 - June 2023</li>
                            <li className="listItem">Partnered with the Jays Care Foundation, the charitable arm of the Toronto Blue Jays, to bring their Rookie League Program to Victoria Park Collegiate Institute, engaging over 30 youth in biweekly sport-based activities</li>
                            <li className="listItem">Coordinated and led over 10 inclusive sessions focused on fostering teamwork and a sense of belonging</li>
                        </ul>
                        <img src={jays_logo} alt="Blue Jays Logo" className="jays_logo" />
                    </div>
                    <p className="volunteerName">Camp Counselor - Camp Tamarack and Victoria Park Collegiate Institute</p>
                    <div className="volunteerContent">
                        <ul className="volunteerDescription">
                            <li className="listItem">May 2022 - September 2022</li>
                            <li className="listItem">Provided mentorship, supervision, and support to students during an overnight trip with a ratio of four students to one counselor</li>
                            <li className="listItem">Involved in the planning process for the trip, coordinating a variety of events and activities to integrate new students into the high school community</li>
                            <li className="listItem">Exercised leadership by organizing collaborative programming that encouraged team-building, student interaction, and a welcoming environment</li>
                        </ul>
                        <img src={vpci_logo} alt="VPCI Logo" className="vpci_logo" />
                    </div>
                    <p className="volunteerName">Athletic Council - Victoria Park Collegiate Institute</p>
                    <div className="volunteerContent">
                        <ul className="volunteerDescription">
                            <li className="listItem">September 2019 - June 2023</li>
                            <li className="listItem">Served on the executive and provided leadership for the school-wide athletics program</li>
                            <li className="listItem">Organized events for over 1000 students, such as orientation for grade 9 students, Spirit Weeks, Athletic Banquet, and the Terry Fox Run</li>
                            <li className="listItem">Coordinated team sports and planned various fundraising events for athletics</li>
                            <li className="listItem">Developed and implemented ideas to improve school spirit and increase participation in school athletics</li>
                        </ul>
                        <img src={vpci_logo} alt="VPCI Logo" className="vpci_logo" />
                    </div>
                    <p className="volunteerName">Assistant Volleyball Coach - Toronto District School Board</p>
                    <div className="volunteerContent">
                        <ul className="volunteerDescription">
                            <li className="listItem">September 2016 - March 2023</li>
                            <li className="listItem">Assisted the volleyball team at Victoria Park Collegiate Institute, Milne Valley Middle School, and Cassandra Public School through demonstrating drills and giving advice during practice sessions</li>
                            <li className="listItem">Demonstrated strong leadership and communication for over 100 individuals through the creation of a motivated and positive team environment</li>
                        </ul>
                        <img src={tdsb_logo} alt="TDSB Logo" className="tdsb_logo" />
                    </div>
                    <p className="volunteerName">Student Volunteer - Out of the Cold Foundation</p>
                    <div className="volunteerContent">
                        <ul className="volunteerDescription">
                            <li className="listItem">March 2017 - February 2019</li>
                            <li className="listItem">Supported the delivery of meals, shelter, and essential services to individuals experiencing homelessness in a compassionate, respectful manner</li>
                            <li className="listItem">Assisted with meal preparation, serving, and cleanup to ensure a welcoming and dignified environment for guests</li>
                            <li className="listItem">Collaborated with fellow volunteers and program coordinators to maintain safety, organization, and hospitality throughout the facility</li>
                        </ul>
                        <img src={ootc_logo} alt="Out of the Cold Logo" className="ootc_logo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience