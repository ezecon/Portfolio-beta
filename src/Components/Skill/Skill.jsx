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
    <div >
       <div className="text-center text-3xl mt-20 text-[goldenrod]">
       <h1 id="rotating-text">
            SKILLS
        </h1>
        <p className=" text-sm">My Technical Knowledge</p>
       </div>
        <div>
           <Web/>
           <Programming/>
           <Machine/>
        </div>
    </div>
  )
}
