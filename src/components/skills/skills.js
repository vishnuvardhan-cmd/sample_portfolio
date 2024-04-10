import React from "react";
import "./skills.css";
import uidesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import appdesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <br />
      <span className="skillDesc">
        I am a passianate full stack developer with 3 years of experience.
        I am a passianate full stack developer with 3 years of experience.
        I am a passianate full stack developer with 3 years of experience.
        I am a passianate full stack developer with 3 years of experience.
        I am a passianate full stack developer with 3 years of experience.
        I am a passianate full stack developer with 3 years of experience.
      </span>
      <div className="skillBar">
        <img src={uidesign} alt="uidesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2 className="imgTitle">UI/UX Design</h2>
          <p className="imgDesc">
            this is a demo,text you can write your own content here.
          </p>
        </div>
      </div>
      <div className="skillBar">
        <img src={webdesign} alt="webdesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2 className="imgTitle">App Design</h2>
          <p className="imgDesc">
            this is a demo,text you can write your own content here.
          </p>
        </div>
      </div>
      <div className="skillBar">
        <img src={appdesign} alt="appdesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2 className="imgTitle">Website Design</h2>
          <p className="imgDesc">
            this is a demo,text you can write your own content here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
