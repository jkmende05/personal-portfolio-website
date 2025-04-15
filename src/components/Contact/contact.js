import React from 'react';
import './contact.css';

import { FaGithubSquare, FaLinkedin  } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contactContent">
                <span className="contactTitle">Contact Information<br /></span>
                <div className="iconContent">
                    <a href="https://github.com/jkmende05" target="_blank" rel="noopener noreferrer">
                        < FaGithubSquare className="contactGithubIcon" />
                    </a>
                    <a href="https://www.linkedin.com/in/justin-mende/" target="_blank" rel="noopener noreferrer">
                        < FaLinkedin className="contactLinkedinIcon" />
                    </a>
                </div>
                <p className="awards">If you have any questions, please feel free to email me at jkmende05@gmail.com.</p>
            </div>
        </section>
    )
}

export default Contact