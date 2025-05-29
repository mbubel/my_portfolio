import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/GetItFree.png';
import Portfolio2 from '../../assets/TheSavvySampler.png';
import Portfolio3 from '../../assets/OkWow.png';
import Portfolio4 from '../../assets/ScoredIt.png';
import Portfolio5 from '../../assets/SeniorMedicalGuide.png';
import Portfolio6 from '../../assets/WorkNWell.png';
import { Link } from 'react-scroll';

const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">These are the websites I worked on professionally while at my previous employer. Each was built using WordPress and hosted on WP Engine and AWS. I was responsible for both front-end and back-end development, using Elementor for flexible design and PHP for deeper customization — including custom plugins and theme modifications tailored to each project’s needs.</span>

      <p className="portfolioNote">
        Want to know more about how I worked on these? {' '}
        <Link
          to="contact"
          smooth={true}
          offset={-50}
          duration={500}
          className="goldAccent contactLink"
        >
          Feel free to reach out below!
        </Link>
      </p>


      <div className="worksImgs">
        <a href="https://getitfree.us/" target="_blank" rel="noopener noreferrer">
          <img src={Portfolio1} alt="Get It Free" className="worksImg" />
        </a>
        <a href="https://thesavvysampler.com/" target="_blank" rel="noopener noreferrer">
          <img src={Portfolio2} alt="The Savvy Sampler" className="worksImg" />
        </a>
        <a href="https://okwow.com" target="_blank" rel="noopener noreferrer">
          <img src={Portfolio3} alt="OkWow" className="worksImg" />
        </a>
        <a href="https://scoredit.com" target="_blank" rel="noopener noreferrer">
          <img src={Portfolio4} alt="ScoredIt" className="worksImg" />
        </a>
        <a href="https://seniormedicalguide.com" target="_blank" rel="noopener noreferrer">
          <img src={Portfolio5} alt="Senior Medical Guide" className="worksImg" />
        </a>
        <a href="https://worknwell.com" target="_blank" rel="noopener noreferrer">
          <img src={Portfolio6} alt="WorkNWell" className="worksImg" />
        </a>
      </div>

    </section>
  );
}

export default Works;