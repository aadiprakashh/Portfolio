import React from "react";
import "./Contact.css";

const Contact = ({ mode }) => {
  const getBgColor = () => {
    return {
      backgroundColor: mode === "dark" ? "#333" : "#eee",
    };
  };

  const getInverseBgColor = () => {
    return {
      backgroundColor: mode === "dark" ? "#eee" : "#333",
    };
  };

  const getInverseColorStyle = () => {
    return {
      color: mode === "dark" ? "#333" : "#eee",
    };
  };

  const getInverseBorderStyle = () => {
    return {
      border: mode === "dark" ? "1px solid #333" : "1px solid #eee",
    };
  };

  // Function to dynamically set text color
  const getColorStyle = () => {
    return {
      color: mode === "dark" ? "#eee" : "#333",
    };
  };

  return (
    <div className="contact-container" style={{ ...getBgColor() }} id="Contact">
      <div className="contact-header ">
        <h1 style={{ ...getColorStyle() }}>
          Contact <span>Me</span>
        </h1>
        <p style={{ ...getColorStyle() }}>
          I'd love to hear from you. Whether you have a question or just want to
          say hi, feel free to drop a message!
        </p>
      </div>

      <div
        className="contact-form"
        style={{
          ...getInverseBgColor(),
        }}
      >
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="56362fab-8287-4be2-8606-4ead555cc964"
          />
          <div className="form-group">
            <label htmlFor="name" style={{ ...getInverseColorStyle() }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{
                ...getInverseBorderStyle(),
                caretColor: mode === "dark" ? "#333" : "#eee",
                ...getInverseColorStyle(),
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ ...getInverseColorStyle() }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                ...getInverseBorderStyle(),
                caretColor: mode === "dark" ? "#333" : "#eee",
                ...getInverseColorStyle(),
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" style={{ ...getInverseColorStyle() }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              style={{
                ...getInverseBorderStyle(),
                caretColor: mode === "dark" ? "#333" : "#eee",
                ...getInverseColorStyle(),
              }}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-socials">
        <a
          href="https://github.com/aadiprakashh"
          className="fab bi-github"
          style={{ ...getColorStyle() }}
          aria-label="GitHub Profile"
        ></a>

        <a
          href="https://www.linkedin.com/in/aadi-prakash-961513251/"
          className="fab fa-linkedin"
          style={{ ...getColorStyle() }}
          aria-label="Linkedin Profile"
        ></a>

        <a
          href="mailto:aadiprakash4319@gmail.com"
          className="fab bi-envelope-at-fill"
          style={{ ...getColorStyle() }}
          aria-label="Email"
        ></a>
      </div>

      <footer>
        <div className="conact-menubar" style={{ ...getColorStyle() }}>
          <a href="#Home" className="item " style={{ ...getColorStyle() }}>
            Home
          </a>
          <a href="#About" className="item" style={{ ...getColorStyle() }}>
            About
          </a>
          <a href="#Project" className="item" style={{ ...getColorStyle() }}>
            Portfolio
          </a>
          <a href="#Services" className="item" style={{ ...getColorStyle() }}>
            Services
          </a>
          <a href="#Contact" className="item" style={{ ...getColorStyle() }}>
            Contact
          </a>
        </div>
      </footer>

      <p>© 2024 AADI PRAKASH. All rights reserved.</p>
    </div>
  );
};

export default Contact;
