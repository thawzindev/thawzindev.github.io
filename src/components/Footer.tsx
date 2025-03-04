
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container flex flex-col md:flex-row justify-between items-center py-0">
        <div className="mb-6 md:mb-0">
          <p className="text-muted-foreground">
            © {currentYear} Thaw Zin Htoo. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
