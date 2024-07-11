import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % 3); // Change 3 to the number of gradient colors you have
    }, 2000); // Change 2000 to the interval in milliseconds for color change

    return () => clearInterval(interval);
  }, []);

  // Function to get gradient colors based on index
  const getGradientColor = (index) => {
    const colors = [
      "from-red-500 to-yellow-500",
      "from-purple-500 to-pink-500",
      "from-blue-500 to-green-500",
    ];
    const currentIndex = (gradientIndex + index) % colors.length;
    return colors[currentIndex];
  };


  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Home", "About", "Skills", "Projects",  "Contacts"].map((item, index) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="blue-gray"
          className={`p-1 font-normal ${
           "text-transparent bg-clip-text bg-gradient-to-r" 
          } ${getGradientColor(index)} transition duration-300 ease-in-out hover:bg-transparent hover:text-blue-500`}
        >
          <a href="#" className="flex items-center">
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );

  
  return (
    <Navbar className="sticky top-0 z-10 h-max w-full px-4 py-2 lg:px-8 lg:py-4 bg-white shadow-md">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-lg lg:text-2xl"
        >
          Md. Econozzaman Econ
        </Typography>
        <div className="flex-1 flex justify-center lg:justify-center">
          <div className="hidden lg:block">{navList}</div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-blue-gray-900 hover:text-blue-500 focus:text-blue-500 active:text-blue-500 lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
