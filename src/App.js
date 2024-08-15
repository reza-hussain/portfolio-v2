import React, { useState } from "react";
import Landing from "./containers/Landing";
import QuickLook from "./containers/QuickLook";
import Projects from "./containers/Projects";
import Experience from "./containers/Experience";
import About from "./containers/About";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <BrowserRouter>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <div>
        <Landing setNavOpen={setNavOpen} />
        <QuickLook />
        <Projects />
        <Experience />
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
