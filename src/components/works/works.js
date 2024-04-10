import React from 'react';
import "./works.css";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-3.png";
import portfolio4 from "../../assets/portfolio-4.png";
import portfolio5 from "../../assets/portfolio-5.png";
import portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <p className='worksDesc'>I am consecutive learner in various aspects of coding parts intersted in learning new technologies adpative to new technologies</p>
        <div className='worksImg'>
            <img src={portfolio1} alt="portfolio1" />
            <img src={portfolio2} alt="portfolio2" />
            <img src={portfolio3} alt="portfolio3" />
            <img src={portfolio4} alt="portfolio4" />
            <img src={portfolio5} alt="portfolio5" />
            <img src={portfolio6} alt="portfolio6" />
        </div>
        <button className='workBtn'>See More</button>
    </section>

  )
}

export default Works