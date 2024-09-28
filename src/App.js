import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import "aos/dist/aos.css";
import AOS from "aos";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  
function App() {
  const [mode, setMode] = useState("light");
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once while scrolling down
      easing: "ease-in-out", // Animation easing
    });
  }, []);
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#eee";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#eee";
      document.body.style.color = "#333";
    }
  };
  
  return (
    <div>
      <Home mode={mode} theme={toggleMode} />
      <About mode={mode} theme={toggleMode} />
      <Project mode={mode} theme={toggleMode} />
      <Contact mode={mode} theme={toggleMode} />
    </div>
  );
}
  
export default App;
