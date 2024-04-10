import React from "react";
import hire from "../../assets/hireme.png";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Vishnuvardhan Bandlamudi</span>
          <br />
          FullStack JavaDeveloper
        </span>
        <p className="introPara">
          I am a skilled and passionate web designer with experience in creating<br/>
          visually appealing and user-friendly websites
        </p>
        <Link>
          <button className="btn">
            <img src={hire} alt="hireme" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
