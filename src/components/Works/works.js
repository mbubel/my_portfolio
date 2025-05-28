import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">These are the websites I worked on professionally while at my previous employer. Each was built using WordPress and hosted on WP Engine and AWS. I was responsible for both front-end and back-end development, using Elementor for flexible design and PHP for deeper customization — including custom plugins and theme modifications tailored to each project’s needs.</span>
            <p className="portfolioNote">
  Want to know more about how I worked on these? 
  <span className="goldAccent"> Feel free to reach out below!</span>
</p>

            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
                <img src={Portfolio4} alt="" className="worksImg" />
                <img src={Portfolio5} alt="" className="worksImg" />
                <img src={Portfolio6} alt="" className="worksImg" />
            </div>
        </section>
    );
}

export default Works;