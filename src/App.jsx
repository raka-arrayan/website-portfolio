import Navbar from "./Navbar.jsx";
import Welcome from "./Welcome.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skill from "./Skills.jsx";
import Project  from "./Project.jsx"; 
import Contact from "./Contact.jsx";

export default function App() {
  return (
    <div>
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
