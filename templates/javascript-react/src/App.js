import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";

import "./App.css";

const App = () => {
  return (
    <div className="mc-wrapper">
      <div className="mc-contents">
        <Header />
        <div className="mc-components">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
