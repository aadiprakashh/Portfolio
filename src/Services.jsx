import React from "react";
import "./Services.css";

const Services = ({mode}) => {
  // Function to dynamically set border styles
  const getBorderStyle = () => {
    return {
      border: mode === "dark" ? "1px solid #eee" : "1px solid #333",
    };
  };

    const getShadow = () => {
      return {
        boxShadow:
          mode === "dark" ? "3px 3px 1px #eee" : "3px 3px 1px #0000004a",
      };
    };

  const getBgColor = () => {
    return {
      backgroundColor: mode === "dark" ? "#333" : "#eee",
    };
  };

  // Function to dynamically set text color
  const getColorStyle = () => {
    return {
      color: mode === "dark" ? "#eee" : "#333",
    };
  };



  return (
    <div className="container-fluid col-md-12" id="Services">
      <div className="row mt-5 mb-5 m-auto">
        <div className="service">
          <div
            className="card col-md-3  rounded-3 shadow-sm"
            // data-aos="flip-left"
            style={{
              ...getBgColor(),
              ...getColorStyle(),
              ...getBorderStyle(),
              ...getShadow(),
              borderBottom:
                mode === "dark" ? "1px solid #eee" : "1px solid #333",
            }}
          >
            <h4
              className="card-header py-3 my-0 fw-bolder"
              style={{
                borderBottom:
                  mode === "dark" ? "1px solid #eee" : "1px solid #333",
              }}
            >
              Basic
            </h4>
            <div
              className="card-body"
              style={{
                ...getBgColor(),
              }}
            >
              <h3 className="card-title pricing-card-title">
                $19<small className=" fw-light">/mo</small>
              </h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Graphics
                  Design
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Web Design
                </li>
                <li>
                  <i className="fa fa-times" aria-hidden="true"></i> UI/UX
                </li>
                <li>
                  <i className="fa fa-times" aria-hidden="true"></i> HTML/CSS
                </li>
                <li>
                  <i className="fa fa-times" aria-hidden="true"></i> SEO
                  Marketting
                </li>
                <li>
                  <i className="fa fa-times" aria-hidden="true"></i> Help center
                  access
                </li>
              </ul>
              <button
                type="button"
                className="rounded-3 btn3"
                
              >
                Hire Me
              </button>
            </div>
          </div>

          <div
            className="card col-md-3 rounded-3 shadow-sm"
            // data-aos="zoom-in"
            style={{
              ...getBgColor(),
              ...getColorStyle(),
              ...getBorderStyle(),
              borderBottom:
                mode === "dark" ? "1px solid #eee" : "1px solid #333",
            }}
          >
            <h4
              className="card-header py-3 my-0 fw-bolder"
              style={{
                borderBottom:
                  mode === "dark" ? "1px solid #eee" : "1px solid #333",
                backgroundColor: "#FFA500",
                color: "#eee",
              }}
            >
              Best 
            </h4>
            <div
              className="card-body"
              style={{
                ...getBgColor(),
              }}
            >
              <h3 className="card-title pricing-card-title">
                $29<small className=" fw-light">/mo</small>
              </h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Graphics
                  Design
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Web Design
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> UI/UX
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> HTML/CSS
                </li>
                <li>
                  <i className="fa fa-times" aria-hidden="true"></i> SEO
                  Marketting
                </li>
                <li>
                  <i className="fa fa-times" aria-hidden="true"></i> Help center
                  access
                </li>
              </ul>
              <button
                type="button"
                className="rounded-3 btn3"
                style={{ backgroundColor: "#FFA500", color: "#eee" }}
              >
                Hire Me
              </button>
            </div>
          </div>

          <div
            className="card col-md-3 rounded-3 shadow-sm"
            // data-aos="flip-right"
            style={{
              ...getBgColor(),
              ...getColorStyle(),
              ...getBorderStyle(),
              borderBottom:
                mode === "dark" ? "1px solid #eee" : "1px solid #333",
            }}
          >
            <h4
              className="card-header py-3 my-0 fw-bolder"
              style={{
                borderBottom:
                  mode === "dark" ? "1px solid #eee" : "1px solid #333",
              }}
            >
              Enterprise
            </h4>
            <div
              className="card-body"
              style={{
                ...getBgColor(),
              }}
            >
              <h3 className="card-title pricing-card-title">
                $39<small className=" fw-light">/mo</small>
              </h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Graphics
                  Design
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Web Design
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> UI/UX
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> HTML/CSS
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> SEO
                  Marketting
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Help center
                  access
                </li>
              </ul>
              <button type="button" className="rounded-3 btn3">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
