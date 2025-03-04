
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Vector decoration */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg className="absolute bottom-0 right-0 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M39.9,-65.7C47.5,-53.1,46.9,-35.6,50.2,-21.7C53.5,-7.9,60.6,2.3,61.4,14.3C62.1,26.3,56.5,40,45.7,47.8C34.9,55.5,18.9,57.3,2.7,54.9C-13.6,52.5,-30.2,45.9,-42.1,35C-54.1,24.1,-61.6,8.9,-65.1,-9.1C-68.6,-27.2,-68.1,-48.1,-58,-61.9C-47.9,-75.8,-27.9,-82.6,-8.4,-77C11.1,-71.5,32.3,-78.3,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="section-container flex flex-col md:flex-row justify-between items-center py-0">
        <div className="mb-6 md:mb-0">
          <div className="flex flex-col">
            <p className="text-muted-foreground">
              © {currentYear} Thaw Zin Htoo. All rights reserved.
            </p>
            
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/thawzin.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/thawzinhtoo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:thawzin99777@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors relative overflow-hidden group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="relative z-10 transition-transform group-hover:-translate-y-1" />
            <svg className="absolute inset-0 w-full h-full text-secondary-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M45.3,-78.1C58.4,-70.3,68.9,-58.1,76.3,-44.4C83.7,-30.7,88,-15.3,87.6,-0.2C87.1,14.9,81.9,29.8,73.5,42.4C65.1,55,53.5,65.3,40.2,72.3C26.9,79.2,13.4,82.9,-0.2,83.3C-13.9,83.7,-27.8,80.9,-40.8,74.4C-53.8,67.9,-66,57.8,-74.9,44.7C-83.9,31.6,-89.5,15.8,-89.9,-0.2C-90.3,-16.2,-85.5,-32.5,-76.6,-45.9C-67.7,-59.3,-54.8,-69.9,-40.8,-77.1C-26.9,-84.3,-13.4,-88.3,1.2,-90.4C15.9,-92.5,32.1,-85.9,45.3,-78.1Z" transform="translate(100 100)" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
