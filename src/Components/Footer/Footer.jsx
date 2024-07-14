import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border-t-2 border-t-[goldenrod] pt-6">
      <div className="flex flex-col items-center justify-center">
        <div className="flex-1 water-text text-center relative pb-24">
          <h2 className="font-bold sm:text-lg md:text-2xl">ECONOZZAMAN</h2>
          <h2 className="font-bold sm:text-lg md:text-2xl">ECONOZZAMAN</h2>
        </div>
        <div className="flex space-x-4 mb-6">
          <a 
            href="https://facebook.com/econozzaman.econ" 
            className="p-2 rounded-full text-secondary-foreground"
            aria-label="Facebook"
          >
            <FaFacebookSquare className="text-4xl text-[goldenrod]" />
          </a>
          <a 
            href="https://instagram.com/ez_econ" 
            className="p-2 rounded-full text-secondary-foreground"
            aria-label="Instagram"
          >
            <FaInstagramSquare className="text-4xl text-[goldenrod]" />
          </a>
          <a 
            href="https://twitter.com/ezecon_" 
            className="p-2 rounded-full text-secondary-foreground"
            aria-label="Twitter"
          >
            <FaTwitterSquare className="text-4xl text-[goldenrod]" />
          </a>
        </div>
        <footer className="text-muted-foreground text-sm text-center mb-24">
          © Md. Econozzaman Econ. All rights reserved
        </footer>
      </div>
    </div>
  );
}
