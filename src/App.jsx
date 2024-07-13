import About from "./Components/About/About";
import HeroSection from "./Components/HeroSection/HeroSection";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";

export default function App() {
  return (
    <div className="grid grid-cols-1 bg-white">
      <div>
        <div className="navbar bg-white ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl animated-text">Md. Econozzaman Econ</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-goldenrod" href="#home">Home</a>
              </li>
              <li>
                <a className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-goldenrod" href="#about">About</a>
              </li>
              <li>
                <a className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-goldenrod" href="#skill">Skill</a>
              </li>
              <li>
                <a className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-[goldenrod]" href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="projects">
        <Project />
      </div>
    </div>
  );
}
