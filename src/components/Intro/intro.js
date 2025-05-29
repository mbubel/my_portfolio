import React from 'react';
import './intro.css';
import bg from '../../assets/michaelbubel.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Michael</span>. <br />React Developer</span>
                <p className="introPara">I'm a skilled web designer with a strong <br />background in WordPress and a growing focus <br />on front-end development with React.</p>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;