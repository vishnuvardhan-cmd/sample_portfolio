import React,{useState} from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contact from "../../assets/contact.png";
import "./navbar.css";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false)
  return (
    <nav className="desktopMenu">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenuList">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>

      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contactPage")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact} alt="contact" className="desktopBtnImg" />
        Contact Me
      </button>
      <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display:showMenu?'flex':'none'}}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={()=>setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={()=>setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={()=>setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={()=>setShowMenu(false)}
        >
          Clients
        </Link>
        <Link
        activeClass="active"
        to="contactPage"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="listItem"
        onClick={()=>setShowMenu(false)}
      >
        Contact
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
