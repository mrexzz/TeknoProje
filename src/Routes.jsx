import {  Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Question from "./pages/Project";
import About from "./pages/About";
import Home from "./pages/Home";
import ProjectMath from "./pages/ProjectMath";


export default function Routing() {
  return (
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Question />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectmath" element={<ProjectMath />} />
        </Route>
      </Routes>
  );
}
//devam edilecek