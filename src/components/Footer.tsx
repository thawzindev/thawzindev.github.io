import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="section-container flex flex-col md:flex-row justify-between items-center py-0">
        <div className="mb-6 md:mb-0">
          <div className="flex flex-col">
            <p className="text-muted-foreground">
              © {currentYear} Thaw Zin Htoo. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors relative overflow-hidden group"
            aria-label="Scroll to top"
          >
            <ArrowUp
              size={20}
              className="relative z-10 transition-transform group-hover:-translate-y-1"
            />
            <svg
              className="absolute inset-0 w-full h-full text-secondary-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M45.3,-78.1C58.4,-70.3,68.9,-58.1,76.3,-44.4C83.7,-30.7,88,-15.3,87.6,-0.2C87.1,14.9,81.9,29.8,73.5,42.4C65.1,55,53.5,65.3,40.2,72.3C26.9,79.2,13.4,82.9,-0.2,83.3C-13.9,83.7,-27.8,80.9,-40.8,74.4C-53.8,67.9,-66,57.8,-74.9,44.7C-83.9,31.6,-89.5,15.8,-89.9,-0.2C-90.3,-16.2,-85.5,-32.5,-76.6,-45.9C-67.7,-59.3,-54.8,-69.9,-40.8,-77.1C-26.9,-84.3,-13.4,-88.3,1.2,-90.4C15.9,-92.5,32.1,-85.9,45.3,-78.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
