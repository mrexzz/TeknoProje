import {  Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Question from "./pages/ProjectMath1";
import About from "./pages/About";
import Home from "./pages/Home";
import ProjectMath from "./pages/Project";
import InputPage from "./pages/InputPage";
import Form from "./pages/AgeInput";
import ProfilePage from "./pages/ProfilePage";


export default function Routing() {
  return (
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inputpage" element={<InputPage />} />
          <Route path="/project" element={<ProjectMath />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectmath" element={<Question />} />
          <Route path="/form" element={<Form />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Route>
      </Routes>
  );
}
//devam edilecek