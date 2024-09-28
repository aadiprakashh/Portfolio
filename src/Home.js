import React, { useState } from "react";
import "./Home.css"; // Custom styling file (to be created)
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css";
import hero_img from "./images/sitting.svg"; // Image import example
import menu_logo from "./images/istockphoto-1167770705-2048x2048.jpg"; // Image import example

export default function Home({ mode, theme }) {
  // State for menu visibility toggle
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  // Function to dynamically set border styles
  const getBorderStyle = () => {
    return {
      border: mode === "dark" ? "1px solid #eee" : "1px solid #333",
    };
  };

  const getBgColor = () => {
    return {
      backgroundColor: mode === "dark" ? "#eee" : "#333",
    };
  };

  // Function to dynamically set right border styles
  const getRightBorderStyle = () => {
    return {
      borderRight: mode === "dark" ? "1px solid #eee" : "1px solid #333",
    };
  };

  // hover
  const getMouseOver = () => {
    return {
      borderBottom: mode === "dark" ? "1px solid #333" : "1px solid #eee",
      transition: "all 0.2s ease-in",
    };
  };

  const getShadow = () => {
    return {
      boxShadow: mode === "dark" ? "3px 3px 1px #eee" : "5px 5px 3px #0000004a",
    };
  };

  // Function to dynamically set text color
  const getColorStyle = () => {
    return {
      color: mode === "dark" ? "#eee" : "#333",
    };
  };

  const getAcolorStyle = () => {
    return {
      color: mode === "dark" ? "#333" : "#eee",
    };
  };

  return (
    <>
      {/* Menu toggle button */}
      <div>
        <i
          id="obtn"
          onClick={toggleMenu}
          style={{
            display: isMenuVisible ? "none" : "block",
            ...getColorStyle(),
          }}
          className="fa-solid fa-bars-staggered"
        ></i>
        {/* Navigation */}
        <nav>
          <div
            className={`menu ${isMenuVisible ? "show" : ""}`}
            id="menu"
            style={{ ...getBgColor(), ...getAcolorStyle() }}
          >
            <i
              className="fa-solid fa-xmark"
              id="cbtn"
              onClick={toggleMenu}
              style={{
                display: isMenuVisible ? "block" : "none",
                ...getAcolorStyle(),
              }}
            ></i>
            <img
              src={menu_logo}
              alt="Logo"
              className="logo"
              style={{ border: mode === "dark" ? "#333" : "#eee" }}
            />
            {/* Social links */}
            <div className="social">
              <a
                className="fab bi-github"
                href="https://github.com/aadiprakashh"
                style={{ ...getAcolorStyle() }}
                aria-label="GitHub Profile"
              >

              </a>
              <a
                className="fab bi-instagram"
                href="https://instagram.com"
                style={{ ...getAcolorStyle() }}
                aria-label="Instagram Profile"
              ></a>
              {/* <i className="fab fa-twitter"></i> */}
              <a
                href="mailto:aadiprakash4319@gmail.com"
                class="fab bi-envelope-at-fill"
                style={{ ...getAcolorStyle() }}
                aria-label="GitHub Profile"
              ></a>
              <a
                href="https://www.linkedin.com/in/aadi-prakash-961513251/"
                className="fab bi-linkedin"
                style={{ ...getAcolorStyle() }}
                aria-label="GitHub Profile"
              ></a>
            </div>
            {/* Menu items */}
            <div className="menubar">
              <a
                href="#Home"
                className="menu-item active"
                style={{ ...getAcolorStyle() }}
                onMouseEnter={getMouseOver}
              >
                Home
              </a>
              <a
                href="#About"
                className="menu-item"
                style={{ ...getAcolorStyle() }}
                onMouseEnter={getMouseOver}
              >
                About
              </a>
              <a
                href="#Project"
                className="menu-item"
                style={{ ...getAcolorStyle() }}
                onMouseEnter={getMouseOver}
              >
                Portfolio
              </a>
              {/* <a
                href="#Services"
                className="menu-item"
                style={{ ...getAcolorStyle() }}
                onMouseEnter={getMouseOver}
              >
                Services
              </a> */}
              <a
                href="#Contact"
                className="menu-item"
                style={{ ...getAcolorStyle() }}
                onMouseEnter={getMouseOver}
              >
                Contact
              </a>
            </div>
            {/* Download CV button */}
            <a href="https://via.placeholder.com/150" id="btn" download>
              Download CV
            </a>
          </div>
        </nav>
      </div>

      {/* Dark mode toggle button */}
      <i className="fa-regular fa-moon" onClick={theme}></i>
      {/* Main content */}

      <div className="container" id="Home">
        <div className="row d-flex home align-items-center h-100 pt-5  justify-content-center">
          <div className="col-md-7 hero ">
            <h4>
              Hello <span>My Name is</span>
            </h4>
            {/* Name with dynamically styled text stroke */}
            <h1
              style={{
                WebkitTextStroke:
                  mode === "dark" ? "0.1rem grey" : "0.1rem #21283294",
              }}
            >
              AADI PRAKASH
            </h1>
            <h2>
              I am a <span className="typing-effect"> Web Developer</span>
            </h2>
            {/* Description paragraph */}
            <p style={getColorStyle()}>
              I am a skilled Web Designer and Front-End Developer, passionate
              about crafting responsive, visually striking websites. With
              expertise in HTML, CSS, JavaScript, and Bootstrap, I create
              seamless user experiences. Proficient in jQuery and expanding my
              React knowledge, I build dynamic, modern web applications that
              engage and inspire.
            </p>
            {/* Download CV link */}
            <a
              className="btn1"
              href="download"
              style={{
                backgroundColor: mode === "dark" ? "#333" : "white",
                ...getBorderStyle(),
                ...getColorStyle(),
                ...getShadow(),
              }}
              download
            >
              Download CV
            </a>
          </div>
          {/* Hero image */}
          <img
            src={hero_img}
            className="img-responsive hero-img col-md-5"
            alt="hero-img"
            data-aos="fade-down"
          />
        </div>
        {/* Experience row */}
        <div className="row exp pt-3">
          <li
            className="col-md-3"
            // data-aos="fade-in"
            style={{ ...getRightBorderStyle() }}
          >
            <p>
              <span>1 +</span> Years Experience
            </p>
          </li>
          <li
            className="col-md-3"
            // data-aos="fade-in"
            style={{ ...getRightBorderStyle() }}
          >
            <p>
              <span>20 +</span> Projects Completed
            </p>
          </li>
          <li
            className="col-md-3"
            // data-aos="fade-in"
            style={{ borderRight: "1px solid transparent" }}
          >
            <p>
              <span>123 +</span> Client Worldwide
            </p>
          </li>
        </div>
      </div>
    </>
  );
}
