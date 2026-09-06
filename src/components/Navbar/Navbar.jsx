import { useState } from "react";
import { motion } from "motion/react";


const Navbar = () => {
  const links = ["Home", "About", "Portfolio"];
  const [activate, setActivate] = useState("Home");

  return (
    <motion.div 
    className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.3,
      }}>
      <nav className="relative flex items-center justify-between px-6 py-3 border border-white/10 rounded-full bg-black/30 backdrop-blur-md">
        <div className="border border-white/20 rounded-full px-4 py-1.5">
          <span className="font-['Press_Start_2P'] text-xs text-white">
            Az.dev
          </span>
        </div>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              
              <a href={`#${link.toLowerCase()}`}
                onClick={() => setActivate(link)}
                className={`font-['Press_Start_2P'] text-xs pb-1 border-b-2 transition-colors ${
                  activate === link
                    ? "text-white border-white"
                    : "text-white/50 border-transparent hover:text-white"
                }`}
              >
                  {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;