import React from "react";
import "./About.css"; // Assuming you have a separate CSS file for styling
import about_img from "./images/about.png";
const About = ({ mode, theme }) => {

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


  const getBorderStyle = () => {
    return {
      border: mode === "dark" ? "1px solid #eee" : "1px solid #333",
    };
  };

  // const skills = [
  //   { skill: "HTML", level: 90 },
  //   { skill: "CSS", level: 85 },
  //   { skill: "JavaScript", level: 80 },
  //   { skill: "Bootstrap", level: 75 },
  //   { skill: "jQuery", level: 70 },
  //   { skill: "React", level: 40 },
  //   { skill: "C/C++", level: 35 },
  //   { skill: "Java", level: 50 },
  //   { skill: "SQL", level: 25 },
  //   { skill: "PostgreSQL", level: 20 },
  //   { skill: "Python", level: 20 },
  //   { skill: "UI/UX", level: 75 },
  // ];
  return (
    <div className="about-container container " id="About">
      <section className="intro-section row mt-5">
        <img
          src={about_img}
          alt="about-img"
          className="col-md-4 img-fluid"
          data-aos="fade-right"
        />
        <div className="col-md-6 intro">
          <h1 style={{ color: mode === "dark" ? "#eee" : "#333" }}>
            About <span>Me</span>
          </h1>
          <p>
            Hi, I'm Aadi Prakash, a passionate frontend developer with a keen
            eye for detail and a love for creating intuitive and responsive web
            designs. With a strong foundation in HTML, CSS, and JavaScript, and
            expertise in React, I strive to build web applications that provide
            an excellent user experience.
          </p>
          <a
            href="#Project"
            className="btn2"
            style={{
              backgroundColor: mode === "dark" ? "#333" : "white",
              ...getBorderStyle(),
              ...getColorStyle(),
              ...getShadow(),
            }}
          >
            Explore My Project
          </a>
        </div>
      </section>
      <section className="skills-section mt-5 pb-3 col-md-11">
        <h2>
          <span>My</span> Skills
        </h2>
        <div className="skills-container row pt-4 col-md-12">
          {/* {skills.map((skillObj, index) => (
            <li
              key={index}
              className="skill"
              style={{
                ...getBorderStyle(),
              }}
            >
              {skillObj.skill} <span>{skillObj.level}%</span>
            </li>
          ))} */}
          <div class="skill-card" style={{...getBorderStyle(), ...getShadow(),}}>
            <h2>Frontend</h2>
            <div class="skills-grid">
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/color/100/html-5--v1.png"
                  alt="html-5--v1"
                />
                HTML
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/fluency/100/css3.png"
                  alt="css3"
                />
                CSS
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                {" "}
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/color/100/javascript--v1.png"
                  alt="javascript--v1"
                />
                JavaScript
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                {" "}
                <img
                  // width="30"
                  // height="30"
                  src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/100/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png"
                  alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo"
                />
                JQuery
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/color/100/bootstrap--v2.png"
                  alt="bootstrap--v2"
                />
                Bootstrap
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/plasticine/100/react.png"
                  alt="react"
                />
                React Js
              </div>
            </div>
          </div>
          <div class="skill-card" style={{...getBorderStyle(), ...getShadow(),}}>
            <h2>Programming</h2>
            <div class="skills-grid">
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/color/100/git.png"
                  alt="git"
                />
                Git
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/color/100/linux--v1.png"
                  alt="linux--v1"
                />
                Linux
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/color/100/python.png"
                  alt="python"
                />
                Python
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/color/100/java-coffee-cup-logo--v1.png"
                  alt="java-coffee-cup-logo--v1"
                />
                Java
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/fluency/100/c-programming.png"
                  alt="c-plus-plus-logo"
                />
                C
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/fluency/100/c-plus-plus-logo.png"
                  alt="c-plus-plus-logo"
                />
                C++
              </div>
            </div>
          </div>
          <div class="skill-card" style={{...getBorderStyle(), ...getShadow(),}}>
            <h2>Design</h2>
            <div class="skills-grid">
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/color/100/figma--v1.png"
                  alt="figma--v1"
                />
                Figma
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="40"
                  // height="40"
                  src="https://img.icons8.com/color/100/lunacy-new.png"
                  alt="lunacy-new"
                />
                Lunacy
              </div>
              <div class="skill-item" style={{...getBorderStyle(), ...getShadow(),}}>
                <img
                  // width="100"
                  // height="100"
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-adobe-dreamweaver-a-proprietary-web-development-tool-from-adobe-logo-shadow-tal-revivo.png"
                  alt="external-adobe-dreamweaver-a-proprietary-web-development-tool-from-adobe-logo-shadow-tal-revivo"
                />
                Adobe
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
