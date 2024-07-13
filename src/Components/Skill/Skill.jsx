import { useEffect } from "react";
import Web from "./Web";
import Programming from "./Programming";
import Machine from "./Machine";

export default function Skill() {
  useEffect(() => {
    const textContainer = document.getElementById('rotating-text');
    if (textContainer) {
      const text = textContainer.innerText;
      const chars = text.split('');

      const newText = chars.map((char, index) => `<span key=${index}>${char}</span>`).join('');
      textContainer.innerHTML = newText;
    }
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="text-center text-3xl mt-20 text-[goldenrod]">
        <h1 id="rotating-text" className="text-2xl md:text-3xl lg:text-4xl">
          SKILLS
        </h1>
        <p className="text-sm md:text-base">My Technical Knowledge</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center  md:space-y-0 md:space-x-4">
        <Web />
        <Programming />
        <Machine />
      </div>
    </div>
  );
}
