import React from 'react';
import './intro.css';
import head_shot from '../../assets/head_shot.jpg'

const Intro = () => {
    return (
        <section id="home">
            <div className="introContent">
                <span className="hello">Hello! <br /></span>
                <p className="introText">My name is Justin Mende. I am currently a second-year Biomedical Engineering student-athlete at the University of Waterloo. Welcome to my personal portfolio website.
                    For more information about me, my past professional and volunteer experiences, personal projects, and contact information, use the navigation bar or dropdown menu found in the top right.
                </p>
            </div>
            <img src={head_shot} alt="Profile" className="photo"/>
        </section>
    )
}

export default Intro