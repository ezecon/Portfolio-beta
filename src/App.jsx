import HeroSection from "./Components/HeroSection/HeroSection";
import { StickyNavbar } from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import Skill from "./Components/Skill/Skill";

export default function App() {
  return (
    <div className="grid grid-cols-1">
      <div>
          <StickyNavbar/>
      </div>
      <div>
        <HeroSection/>
      </div>
      <div>
        <Skill/>
      </div>
      <div>
        <Project/>
      </div>
    </div>
  )
}