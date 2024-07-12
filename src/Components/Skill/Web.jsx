import { useEffect } from "react";
import { MdOutlineVerified } from "react-icons/md";

export default function Web() {
  useEffect(() => {
    const textContainer = document.getElementById('rotating-p');
    if (textContainer) {
      const text = textContainer.innerText;
      const chars = text.split('');

      const newText = chars.map((char, index) => `<span key=${index}>${char}</span>`).join('');
      textContainer.innerHTML = newText;
    }
  }, []);

  return (
    <div className="text-center text-3xl mt-20 text-[goldenrod]">
      <div className="bg-white border-2 rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto" style={{ borderColor: 'goldenrod' }}>
        <p className="text-lg md:text-xl font-semibold" id="rotating-p">WEB DEVELOPMENT</p>
        <ul className="list-none text-left pl-6 space-y-2">
          {["HTML", "CSS", "BOOTSTRAP", "REACT", "TAILWIND CSS", "JAVASCRIPT", "NODE JS", "EXPRESS JS", "MONGODB", "SQL"].map(lang => (
            <li key={lang} className="flex items-center text-sm md:text-base">
              <MdOutlineVerified className="text-goldenrod mr-2" /> {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
