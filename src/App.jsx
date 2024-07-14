import About from "./Components/About/About";
import HeroSection from "./Components/HeroSection/HeroSection";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";

export default function App() {
  return (
    <div className="bg-white">
      <div className="navbar bg-white flex flex-wrap justify-between items-center px-4 py-2">
        <div className="flex-1 water-text text-center relative md:left-[-28rem]">
          <h2 className=" font-bold sm:text-lg md:text-2xl">ECONOZZAMAN</h2>
          <h2 className=" font-bold sm:text-lg md:text-2xl">ECONOZZAMAN</h2>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal space-x-2"> {/* Reduced space-x to 2 */}
            <li>
              <a
                className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-goldenrod"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-goldenrod"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-goldenrod"
                href="#skill"
              >
                Skill
              </a>
            </li>
            <li>
              <a
                className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-[goldenrod]"
                href="#projects"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="home" className="px-4 py-8 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
      <div id="about" className="px-4 py-8 sm:px-6 lg:px-8">
        <About />
      </div>
      <div id="skill" className="px-4 py-8 sm:px-6 lg:px-8">
        <Skill />
      </div>
      <div id="projects" className="px-4 py-8 sm:px-6 lg:px-8">
        <Project />
      </div>
    </div>
  );
}
