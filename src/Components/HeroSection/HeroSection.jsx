import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiCodeforces, SiHackerrank, SiLeetcode } from "react-icons/si";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center p-4 md:flex-row md:justify-center md:space-x-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-6/12 flex justify-center md:justify-end mb-4 md:mb-0 pr-4 animated"
        >
          <img
            className="w-3/4 md:w-1/2 rounded-md py-10"
            src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/438301459_2478369702550969_5250834645199073879_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExya5algHCh56bpZB9wFtM8Oh9iN5liZfw6H2I3mWJl5CJ6KGAbIf9d7U6IktTMAthdXEBi6biR2uBDbWuYldB&_nc_ohc=MJhiX4lvpXgQ7kNvgF6Ve59&_nc_ht=scontent.fdac8-1.fna&oh=00_AYDHB_Q4OVX8W-DO-UTWm3wLVjvov6Tj2AOuKl2MgZ1eUA&oe=66955D01"
            alt="Profile Image"
          />
        </motion.div>
      <div className="w-full text-center md:w-6/12 md:text-left">
        <section id="hero">
          <div className="hero container">
            <div>
              <h1>Hello, <span></span></h1>
              <h1>My Name is <span></span></h1>
              <h1 className="roboto-condensed-heading">Md. Econozzaman Econ <span></span></h1>
              <a href="#" className="cta rounded" type="button">My Resume</a>
              <div className="flex mt-6 gap-3 text-3xl text-[goldenrod]">
                <FaGithub />
                <FaLinkedin />
                <SiCodeforces />
                <SiHackerrank />
                <SiLeetcode />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
