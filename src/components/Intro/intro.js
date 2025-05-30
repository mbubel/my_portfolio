import React from 'react';
import './intro.css';
import bg from '../../assets/michaelbubel.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Michael</span>. <br /><span className="introTitle">Full Stack Developer</span></span>
                <p className="introPara">I bring WordPress experience and a growing focus<br /> on React to create fast, modern web interfaces.</p>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;