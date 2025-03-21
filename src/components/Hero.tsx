
import React from "react";
import { ArrowDownCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Vector background decorations */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            y: [0, -20, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut",
            delay: 2 
          }}
        />
        <motion.svg
          className="absolute -bottom-24 -right-24 w-96 h-96 text-blue-300"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M45.3,-78.1C58.4,-70.3,68.9,-58.1,76.3,-44.4C83.7,-30.7,88,-15.3,87.6,-0.2C87.1,14.9,81.9,29.8,73.5,42.4C65.1,55,53.5,65.3,40.2,72.3C26.9,79.2,13.4,82.9,-0.2,83.3C-13.9,83.7,-27.8,80.9,-40.8,74.4C-53.8,67.9,-66,57.8,-74.9,44.7C-83.9,31.6,-89.5,15.8,-89.9,-0.2C-90.3,-16.2,-85.5,-32.5,-76.6,-45.9C-67.7,-59.3,-54.8,-69.9,-40.8,-77.1C-26.9,-84.3,-13.4,-88.3,1.2,-90.4C15.9,-92.5,32.1,-85.9,45.3,-78.1Z"
            transform="translate(100 100)"
          />
        </motion.svg>
        <motion.svg
          className="absolute -top-24 -left-24 w-96 h-96 text-blue-300"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <path
            fill="currentColor"
            d="M48.9,-75.9C64.2,-69.1,78.5,-58.7,85.8,-44.5C93.1,-30.2,93.4,-12.1,89.8,4.4C86.2,20.9,78.5,36,68.5,49.3C58.6,62.7,46.3,74.4,31.8,79.9C17.3,85.4,0.5,84.8,-16.6,81.3C-33.7,77.8,-51.1,71.5,-64.8,60.2C-78.5,48.9,-88.5,32.7,-89.8,16C-91.1,-0.7,-83.8,-17.9,-74.7,-32.7C-65.6,-47.4,-54.8,-59.8,-41.8,-67.7C-28.8,-75.7,-14.4,-79.4,0.9,-80.9C16.2,-82.5,33.5,-82.7,48.9,-75.9Z"
            transform="translate(100 100)"
          />
        </motion.svg>
      </div>

      <div className="section-container relative flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
              Thaw Zin Htoo
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-muted-foreground">
              Creative developer crafting digital experiences
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            className="mb-10 max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-muted-foreground">
              I'm a passionate full-stack developer from Myanmar with expertise in building 
              beautiful, functional interfaces and experiences. With a background in computer science 
              and a focus on modern web technologies, I bring ideas to life with meticulous attention to detail.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View my work
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.2,
            ease: "easeOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          <ArrowDownCircle size={36} className="text-muted-foreground/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
