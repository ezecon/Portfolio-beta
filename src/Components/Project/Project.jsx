import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CgDetailsMore } from "react-icons/cg";
import { Button, Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";

export default function Project() {
  useEffect(() => {
    const textContainer = document.getElementById('rotating-text9');
    if (textContainer) {
      const text = textContainer.innerText;
      const chars = text.split('');

      const newText = chars.map((char, index) => `<span key=${index}>${char}</span>`).join('');
      textContainer.innerHTML = newText;
    }
  }, []);
  
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
  
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="px-4 py-36 md:px-8 lg:px-16">
        <div className="text-center mt-20 text-[goldenrod]">
          <h1 id="rotating-text9" className="text-2xl md:text-3xl lg:text-4xl">
            PROJECTS
          </h1>
          <p className="text-sm md:text-base">My Works</p>
        </div>
        <div className="flex items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Responsive grid */}
            {[
              {
                img: "https://i.ibb.co/16PXC3t/Whats-App-Image-2024-07-13-at-10-22-24.jpg",
                title: "Halal Brothers",
                description: "Total Restaurant Management System",
              },
              {
                img: "https://i.ibb.co/jZkg3dt/Whats-App-Image-2024-07-13-at-10-42-36.jpg",
                title: "CY-RENT",
                description: "A Unique Project",
              },
              {
                img: "https://i.ibb.co/262RvHV/Whats-App-Image-2024-07-13-at-10-46-02.jpg",
                title: "Small E-Commerce",
                description: "It is a small e-commerce website",
              },
              {
                img: "https://i.ibb.co/HpTfgL0/Whats-App-Image-2024-07-13-at-11-05-49.jpg",
                title: "2.74",
                description: "Another project of a restaurant",
              },
              {
                img: "https://i.ibb.co/tKKqWXz/Owner-dash-Board.png",
                title: "BARI-WALA",
                description: "A Unique Project",
                link: "https://github.com/ezecon/Bari-Wala-a-Home-Security",
                demo: "https://bari-wala-a-home-security.vercel.app/",
              },
              {
                img: "https://i.ibb.co/z82pTJq/Whats-App-Image-2024-07-13-at-10-54-17.jpg",
                title: "Weather ForeCasting",
                description: "It is a small e-commerce website",
              },
              {
                img: "https://i.ibb.co/vxDRt24/Whats-App-Image-2024-07-13-at-17-45-10.jpg",
                title: "Econ Book Shop Management System",
                description: "A C# Project",
              },
              {
                img: "https://i.ibb.co/whwdfPn/Whats-App-Image-2024-07-13-at-20-16-30.jpg",
                title: "Free Thought",
                description: "A project like sujood.co",
              },
              {
                img: "https://i.ibb.co/M5qBXV8/Whats-App-Image-2024-07-13-at-20-18-43.jpg",
                title: "SOFIEEE",
                description: "Website of an restaurant",
              },
              {
                img: "https://i.ibb.co/Wp2V5Dx/Whats-App-Image-2024-07-13-at-20-21-12.jpg",
                title: "HexoConverter",
                description: "Here you can convert .docx to .pdf",
              },
              {
                img: "https://i.ibb.co/8gKPqbJ/737d76a5-2033-43c1-a984-e4d5229b89d8.jpg",
                title: "IFF",
                description: "Website of Islamia Football Federation",
              },
            ].map((project, index) => (
              <motion.button
                whileHover={{ scale: 1.1 }} // Reduced the scale for better responsiveness
                whileTap={{ scale: 0.9 }}
                key={index}
                onClick={handleOpen}
              >
                <div className="card w-full sm:w-80 shadow-xl bg-slate-100 shadow-[goldenrod] rounded"> {/* Adjusted width */}
                  <figure className="p-4 rounded">
                    <img src={project.img} alt={project.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-[goldenrod] playwrite-cl-title">
                      {project.title}
                    </h2>
                    <p>{project.description}</p>
                    <div className="flex justify-end pr-4 pb-4">
                      <div className="text-3xl text-[goldenrod]">
                        <CgDetailsMore />
                      </div>
                      <div className="text-xl text-[goldenrod]">
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button className="text-[goldenrod]">Details</Button>
                          </a>
                        ) : (
                          <Button>Details</Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          <Dialog
            open={open}
            handler={handleOpen}
            className="fixed inset-0 flex items-center justify-center bg-transparent"
          >
            <div className="bg-white rounded-lg p-4 w-full max-w-md mx-auto">
              <DialogHeader>Details</DialogHeader>
              <DialogBody>
                <Button onClick={handleClose}>Exit</Button>
              </DialogBody>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
