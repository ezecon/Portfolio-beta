import HeroSection from "./Components/HeroSection/HeroSection";
import { StickyNavbar } from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <div>
          <StickyNavbar/>
      </div>
      <div>
        <HeroSection/>
      </div>
    </div>
  )
}