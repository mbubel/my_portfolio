import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">I’m a skilled and passionate web designer with experience creating visually appealing, user-friendly websites. I specialize in WordPress design and site creation, and I work confidently with modern front-end technologies like HTML, CSS, JavaScript, and React. I also have experience with PHP and deploying applications using AWS services. I take pride in clean, responsive design and delivering polished, functional websites.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>User Interface & Experience</h2>
                        <p>I focus on creating clean, intuitive user interfaces that prioritize usability and accessibility across all device types.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Responsive Web Development</h2>
                        <p>I design and build responsive, user-friendly websites using tools like WordPress, HTML, CSS, JavaScript, and React.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Modern Web Applications</h2>
                        <p>I have experience developing and deploying full-featured web apps using React, integrating APIs, and utilizing cloud services like AWS.</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;