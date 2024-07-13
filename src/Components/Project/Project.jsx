import { useEffect } from "react";
import { motion } from "framer-motion"
import { FaGithubSquare} from "react-icons/fa";
import { Button } from "@material-tailwind/react";



export default function Project() {
  useEffect(() => {
    const textContainer = document.getElementById('rotating-text1');
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
        <h1 id="rotating-text1" className="text-2xl md:text-3xl lg:text-4xl">
          PROJECTS
        </h1>
        <p className="text-sm md:text-base">My Works</p>
      </div>
      <div className="flex items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      
                <motion.button
                        whileHover={{ scale: 1.9 }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <div className="card bg-base-100 w-96 shadow-xl bg-slate-100  shadow-[goldenrod] rounded">
                            <figure className="p-4 rounded">
                                <img
                                src="https://i.ibb.co/16PXC3t/Whats-App-Image-2024-07-13-at-10-22-24.jpg"
                                alt="Project 1" />
                            </figure>
                            <div className="card-body">
                            <h2 className="text-[goldenrod] playwrite-cl-title">
                                Halal Brothers
                                </h2>
                                <p>Total Restaurant Management System</p>
                                <div className="flex justify-end pr-4 pb-4 gap-3">
                                    <div className="text-3xl text-[goldenrod]">
                                        <FaGithubSquare/>
                                    </div>
                                    <div className="text-xl text-[goldenrod]">
                                        <Button>Live</Button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </motion.button>
                <motion.button
                        whileHover={{ scale: 1.9 }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <div className="card bg-base-100 w-96 shadow-xl bg-slate-100  shadow-[goldenrod] rounded">
                            <figure className="p-4 rounded">
                                <img
                                src="https://i.ibb.co/jZkg3dt/Whats-App-Image-2024-07-13-at-10-42-36.jpg"
                                alt="Project 1" />
                            </figure>
                            <div className="card-body">
                            <h2 className="text-[goldenrod] playwrite-cl-title">
                                CY-RENT
                                </h2>
                                <p>A Unique Project</p>
                                <div className="flex justify-end pr-4 pb-4 gap-3">
                                    <div className="text-3xl text-[goldenrod]">
                                        <FaGithubSquare/>
                                    </div>
                                    <div className="text-xl text-[goldenrod]">
                                        <Button>Live</Button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </motion.button>
                <motion.button
                        whileHover={{ scale: 1.9 }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <div className="card bg-base-100 w-96 shadow-xl bg-slate-100  shadow-[goldenrod] rounded">
                            <figure className="p-4 rounded">
                                <img
                                src="https://i.ibb.co/262RvHV/Whats-App-Image-2024-07-13-at-10-46-02.jpg"
                                alt="Project 1" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-[goldenrod] playwrite-cl-title">
                                Small E-Commerce
                                </h2>
                                <p>It is a small e-commerce website</p>
                                <div className="flex justify-end pr-4 pb-4 gap-3">
                                    <div className="text-3xl text-[goldenrod]">
                                        <FaGithubSquare/>
                                    </div>
                                    <div className="text-xl text-[goldenrod]">
                                        <Button>Live</Button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </motion.button>
                <motion.button
                        whileHover={{ scale: 1.9 }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <div className="card bg-base-100 w-96 shadow-xl bg-slate-100  shadow-[goldenrod] rounded">
                            <figure className="p-4 rounded">
                                <img
                                src="https://i.ibb.co/262RvHV/Whats-App-Image-2024-07-13-at-10-46-02.jpg"
                                alt="Project 1" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-[goldenrod] playwrite-cl-title">
                                Small E-Commerce
                                </h2>
                                <p>It is a small e-commerce website</p>
                                <div className="flex justify-end pr-4 pb-4 gap-3">
                                    <div className="text-3xl text-[goldenrod]">
                                        <FaGithubSquare/>
                                    </div>
                                    <div className="text-xl text-[goldenrod]">
                                        <Button>Live</Button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </motion.button>
                <motion.button
                        whileHover={{ scale: 1.9 }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <div className="card bg-base-100 w-96 shadow-xl bg-slate-100  shadow-[goldenrod] rounded">
                            <figure className="p-4 rounded">
                                <img
                                src="https://i.ibb.co/262RvHV/Whats-App-Image-2024-07-13-at-10-46-02.jpg"
                                alt="Project 1" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-[goldenrod] playwrite-cl-title">
                                Small E-Commerce
                                </h2>
                                <p>It is a small e-commerce website</p>
                                <div className="flex justify-end pr-4 pb-4 gap-3">
                                    <div className="text-3xl text-[goldenrod]">
                                        <FaGithubSquare/>
                                    </div>
                                    <div className="text-xl text-[goldenrod]">
                                        <Button>Live</Button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </motion.button>
                <motion.button
                        whileHover={{ scale: 1.9 }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <div className="card bg-base-100 w-96 shadow-xl bg-slate-100  shadow-[goldenrod] rounded">
                            <figure className="p-4 rounded">
                                <img
                                src="https://i.ibb.co/262RvHV/Whats-App-Image-2024-07-13-at-10-46-02.jpg"
                                alt="Project 1" />
                            </figure>
                            <div className="card-body">
                                <h2 className="text-[goldenrod] playwrite-cl-title">
                                Small E-Commerce
                                </h2>
                                <p>It is a small e-commerce website</p>
                                <div className="flex justify-end pr-4 pb-4 gap-3">
                                    <div className="text-3xl text-[goldenrod]">
                                        <FaGithubSquare/>
                                    </div>
                                    <div className="text-xl text-[goldenrod]">
                                        <Button>Live</Button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </motion.button>

           </div>
        
      </div>
    </div>
  );
}
