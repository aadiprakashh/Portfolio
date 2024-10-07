import React, { useState } from "react";
import "./Project.css";
import Ecommerce from "./images/Apex-ecommerce-website.png";
import Gaming from "./images/Gaming-website.jpg";
import Resort from "./images/resort.png";
import Interior from "./images/interior.png";
import Men from "./images/mens-fashion-website.jpg";
import Wild from "./images/wild.png";
import Todo from "./images/todo.png";
import Seller from "./images/Seller.png";
const Project = ({ mode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState(null); // New state for hover

  const getColorStyle = () => ({
    color: mode === "dark" ? "#eee" : "#333",
  });

  const getShadow = () => {
    return {
      boxShadow: mode === "dark" ? "3px 3px 1px #eee" : "5px 5px 3px #0000004a",
    };
  };

  const getBgColor = () => ({
    backgroundColor: mode === "dark" ? "#333" : "#eee",
  });

  const getBorderStyle = () => ({
    border: mode === "dark" ? "1px solid #eee" : "1px solid #333",
  });

  const categories = ["All", "HTML & CSS", "JavaScript", "Bootstrap", "React"];

  // Your projects array here...
  // All your projects with their respective categories
  const projects = [
    {
      image: Ecommerce,
      title: "Apex Ecommerce Website",
      description: "An Ecommerce website template",
      technologies: "HTML, CSS, JavaScript",
      link: "http://example.com/project1",
      category: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: Gaming,
      title: "EPIX",
      description: "A Gaming website template",
      technologies: "HTML, CSS",
      link: "http://example.com/project2",
      category: ["HTML", "CSS"],
    },
    {
      image: Men,
      title: "Urban Edge",
      description: "An Ecommerce website template",
      technologies: "HTML, CSS, JavaScript",
      link: "http://example.com/project1",
      category: ["HTML", "CSS", "JavaScript"],
    },
    {
      image: Resort,
      title: "Dune Heaven",
      description: "A Vacation Resort website template",
      technologies: "HTML, CSS",
      link: "https://github.com/aadiprakashh/Html-Css-Projects/tree/main/Resort",
      site:"https://github.com/aadiprakashh/Html-Css-Projects/tree/main/Resort",
      category: ["HTML", "CSS"],
    },
    {
      image: Interior,
      title: "Livedge",
      description: "Interior Design website template",
      technologies: "HTML, CSS",
      link: "http://example.com/project2",
      category: ["HTML", "CSS"],
    },
    {
      image: Wild,
      title: "India's Wild Relam",
      description:
        "An Educational website that showcases all the detail about Indian wild life",
      technologies: "HTML, CSS, JavaScript, Bootstrap, React",
      link: "https://github.com/aadiprakashh/Wild-Relam",
      site: "https://aadiprakashh.github.io/Wild-Relam/",
      category: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
    },
    {
      image: Todo,
      title: "Todo List App",
      description:
        "Organize tasks, set deadlines, track progress, and stay productive efficiently.",
      technologies: "HTML, CSS, JavaScript, Bootstrap, React",
      link: "https://github.com/aadiprakashh/Todo",
      site: "https://aadiprakashh.github.io/Todo/",
      category: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
    },
    {
      image: Seller,
      title: "Dashboard",
      description: "Seller Admin Dashboard template",
      technologies: "HTML, CSS, JavaScript, Bootstrap, React",
      link: "https://github.com/aadiprakashh/Seller",
      site: "https://aadiprakashh.github.io/Seller/",
      category: ["HTML", "CSS", "JavaScript","Bootstrap","React"],
    },
  ];
  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => {
          if (selectedCategory === "HTML & CSS") {
            return (
              project.category.includes("HTML") &&
              project.category.includes("CSS")
            );
          }
          return project.category.includes(selectedCategory);
        });

  return (
    <div className="container mt-5 pt-5" id="Project">
      {/* Categories menu */}
      <div className="categories-menu">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${
              selectedCategory === category
                ? "active"
                : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            style={{
              backgroundColor: mode === "dark" ? "#333" : "#fff",
              ...getColorStyle(),
              ...getBorderStyle(),
              ...getShadow(),
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects display */}
      <div className="row">
        <div className="projects-container mb-5">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="fade-up"
              style={{ ...getBgColor(), ...getBorderStyle() }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                <div className="github-logo">
                  <a href={project.link}>
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h2 style={getColorStyle()}>{project.title}</h2>
                <p style={{ color: mode === "dark" ? "#dcdcdc" : "#36454F" }}>
                  {project.description}
                </p>
                <p style={{ color: mode === "dark" ? "#dcdcdc" : "#36454F" }}>
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <button
                  className="view-button"
                  style={{
                    backgroundColor: mode === "dark" ? "#333" : "#fff",
                    ...getColorStyle(),
                    ...getBorderStyle(),
                    ...getShadow(),
                  }}
                >
                  <a style={{ ...getColorStyle() }} href={project.site}>
                    View
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
