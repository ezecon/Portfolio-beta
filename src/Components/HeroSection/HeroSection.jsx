import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiCodeforces, SiHackerrank, SiLeetcode } from "react-icons/si";


export default function HeroSection() {
  const handleDownload = () => {
    const fileUrl = './res.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
   <div>
     <div className="mt-6 md:mt-10 flex justify-center items-center gap-3 text-3xl text-[goldenrod]">
      <a href="https://github.com/ezecon"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/ezecon/"><FaLinkedin /></a>
      <a href="https://codeforces.com/profile/H3XU5"><SiCodeforces /></a>
      <a href="https://www.hackerrank.com/profile/ezecon"><SiHackerrank /></a>
      <a href=""><SiLeetcode /></a>
    </div>

      
     <div className="flex flex-col items-center p-4 md:flex-row md:justify-center md:space-x-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-6/12 flex flex-col items-center md:items-end mb-4 md:mb-0 pr-4 animated"
      >
        <img
          className="w-3/4 md:w-1/2 rounded-md py-4"
          src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/438301459_2478369702550969_5250834645199073879_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExya5algHCh56bpZB9wFtM8Oh9iN5liZfw6H2I3mWJl5CJ6KGAbIf9d7U6IktTMAthdXEBi6biR2uBDbWuYldB&_nc_ohc=MJhiX4lvpXgQ7kNvgF6Ve59&_nc_ht=scontent.fdac8-1.fna&oh=00_AYDHB_Q4OVX8W-DO-UTWm3wLVjvov6Tj2AOuKl2MgZ1eUA&oe=66955D01"
          alt="Profile Image"
        />
      </motion.div>
      
      <div className="w-full text-center md:w-6/12 md:text-left">
        <section id="hero" className="relative">
          <div className="hero container max-w-xl mx-auto px-4">
            <div>
              <h1>Hello, <span></span></h1>
              <h1>My Name is <span></span></h1>
              <h1 className="roboto-condensed-heading">Econozzaman<span></span></h1>
              <a href="" onClick={handleDownload} className="cta rounded inline-block mt-6 md:mt-10 py-2 px-6 text-lg md:text-xl">My Resume</a>
            </div>
          </div>
        </section>
      </div>
    </div>
   </div>
  );
}
