import Navbar from "./Navbar.jsx";
import Welcome from "./Welcome.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skill from "./Skills.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Welcome />
      <Education />
      <Experience />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}
