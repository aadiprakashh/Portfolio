import React from "react";
import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h2>Contact Me</h2>
          <p>Email: youremail@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className={styles.socials}>
          <h2>Follow Me</h2>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className={styles.nav}>
          <h2>Navigation</h2>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
