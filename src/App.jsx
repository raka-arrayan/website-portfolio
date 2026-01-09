import Navbar from "./navbar";
import Welcome from "./Welcome";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skills";
import Project  from "./Project"; 
import Contact from "./Contact";

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
