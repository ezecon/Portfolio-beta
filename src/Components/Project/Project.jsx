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
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('main');

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };


  // Sample project data
  const projects = {
    mini: [
      {
        img: "https://i.ibb.co/z82pTJq/Whats-App-Image-2024-07-13-at-10-54-17.jpg",
        title: "Weather ForeCasting",
        description: "It is a small e-commerce website",
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
      // Add more mini projects here
    ],
    main: [
      {
        img: "https://i.ibb.co/tKKqWXz/Owner-dash-Board.png",
        title: "BARI-WALA",
        description: "A Unique Project",
        link: "https://github.com/ezecon/Bari-Wala-a-Home-Security",
      },
      {
        img: "https://i.ibb.co/vxDRt24/Whats-App-Image-2024-07-13-at-17-45-10.jpg",
        title: "Econ Book Shop Management System",
        description: "A C# Project",
        link:''
      },
      {
        img: "askrashana.jpg",
        title: "ASK-Rashana",
        description: "Total Restaurant Management System",
        link: "https://github.com/ezecon/ASK-Rashana", // example link
      },
      {
        img: "farma.jpg",
        title: "FARMA-RIDE",
        description: "Total Restaurant Management System",
        link: "https://github.com/ezecon/Farma-Ride", // example link
      },
      {
        img: "halal-shop.jpg",
        title: "HALAL BRO SHOP",
        description: "Total Restaurant Management System",
        link: "https://github.com/ezecon/HALAL-BRO", // example link
      },
      {
        img: "burger.jpg",
        title: "BURGER la-Vista",
        description: "Total Restaurant Management System",
        link: "https://github.com/ezecon/Burger-El-Vista", // example link
      },
      {
        img: "blabkit.jpg",
        title: "BLANK iT",
        description: "Total Restaurant Management System",
        link: "https://github.com/ezecon/BLANK-IT", // example link
      },
      {
        img: "https://i.ibb.co/jZkg3dt/Whats-App-Image-2024-07-13-at-10-42-36.jpg",
        title: "CY-RENT",
        description: "A Unique Project",
        link: "https://github.com/ezecon/cy-rent", // example link
      },
      {
        img: "https://i.ibb.co/262RvHV/Whats-App-Image-2024-07-13-at-10-46-02.jpg",
        title: "Small E-Commerce",
        description: "It is a small e-commerce website",
        link:''
      },
      {
        img: "https://i.ibb.co/HpTfgL0/Whats-App-Image-2024-07-13-at-11-05-49.jpg",
        title: "2.74",
        description: "Another project of a restaurant",
        link:''
      },
      {
        img: "halalbrothers.jpg",
        title: "Halal Brothers",
        description: "Another project of a restaurant",
        link:'https://github.com/ezecon/Halal-Brother-MERN'
      },
      
    ],
  };

  return (
    <div>
      <div className="px-4 py-36 md:px-8 lg:px-16">
        <div className="text-center mt-20 text-[goldenrod]">
          <h1 id="rotating-text9" className="text-2xl md:text-3xl lg:text-4xl">
            PROJECTS
          </h1>
          <p className="text-sm md:text-base">My Works</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mt-4 my-10">
          <Button onClick={() => setActiveTab('mini')} className={activeTab === 'mini' ? 'py-2 px-4 bg-[goldenrod] rounded-none text-white' : ''}>
            Mini Projects
          </Button>
          <Button onClick={() => setActiveTab('main')} className={activeTab === 'main' ? 'py-2 px-4 bg-[goldenrod] rounded-none text-white' : ''}>
            Main Projects
          </Button>
        </div>

        {/* Card Grid */}
        <div className="flex items-center justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects[activeTab].map((project, index) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                onClick={() => handleOpen(project)}
              >
                <div className="card w-full h-96 sm:w-80 sm:h-96 shadow-xl bg-slate-100 shadow-[goldenrod] rounded overflow-hidden">
                  <figure className="h-2/3">
                    <img src={project.img} alt={project.title} className="object-cover w-full h-full" />
                  </figure>
                  <div className="card-body h-1/3 p-4">
                    <h2 className="text-[goldenrod] text-lg font-semibold ">
                      {project.title}
                    </h2>
                    <div className="flex justify-end pr-4 pb-4">
                      <CgDetailsMore className="text-3xl text-[goldenrod]" />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Dialog for Project Details */}
        <Dialog
          open={open}
          handler={handleClose}
          className="fixed inset-0 flex items-center justify-center bg-transparent"
        >
          <div className="bg-white rounded-lg p-4 w-full max-w-md mx-auto">
            <DialogHeader>{selectedProject?.title}</DialogHeader>
            <DialogBody>
              <p>{selectedProject?.description}</p>
              {selectedProject?.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4 bg-[goldenrod]">GitHub Link</Button>
                </a>
              )}
              <Button onClick={handleClose} className="mt-2 bg-[goldenrod]">Exit</Button>
            </DialogBody>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
