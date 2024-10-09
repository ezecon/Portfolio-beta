import { useEffect } from "react";
import { MdOutlineVerified } from "react-icons/md";
import { motion } from "framer-motion";

export default function Machine() {
  useEffect(() => {
    const textContainer = document.getElementById('rotating-p1');
    if (textContainer) {
      const text = textContainer.innerText;
      const chars = text.split('');

      const newText = chars.map((char, index) => `<span key=${index}>${char}</span>`).join('');
      textContainer.innerHTML = newText;
    }
  }, []);

  return (
    <div className="text-center text-3xl mt-24 md:pt-28 text-[goldenrod] ">
        
          <motion.button
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className="border border-[goldenrod] rounded py-28 px-10 bg-none"
              >
                <ul className="list-none text-left pl-6 space-y-2">
                  {["Pandas", "Keras", "OpenCV", "Tensorflow", "Scikit-learn", "PYTHON"].map(lang => (
                    <li key={lang} className="flex items-center text-sm md:text-base">
                      <MdOutlineVerified className="text-goldenrod mr-2" /> {lang}
                    </li>
                  ))}
                  </ul>
              </motion.button>
    </div>
  );
}
