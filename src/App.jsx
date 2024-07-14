import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


import About from "./Components/About/About";
import HeroSection from "./Components/HeroSection/HeroSection";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="navbar  flex flex-wrap justify-between items-center px-4 py-2">
        <div className="flex-1 water-text text-center relative md:left-[-28rem]">
          <h2 className="font-bold sm:text-lg md:text-2xl">ECONOZZAMAN</h2>
          <h2 className="font-bold sm:text-lg md:text-2xl">ECONOZZAMAN</h2>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal space-x-2">
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
            <li>
              <a
                className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-[goldenrod]"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-none md:hidden">
          <button onClick={toggleMenu} className="text-[goldenrod] focus:outline-none">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 py-2">
          <a className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-goldenrod" href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-goldenrod" href="#about" onClick={toggleMenu}>
            About
          </a>
          <a className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-goldenrod" href="#skill" onClick={toggleMenu}>
            Skill
          </a>
          <a className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-[goldenrod]" href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a className="text-[goldenrod] hover:underline hover:underline-offset-4 hover:decoration-[goldenrod]" href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
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
      <div id="projects" className="px-4 py-8 sm:px-6 lg:px-8">
        <Contact />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
