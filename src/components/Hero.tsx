
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDelayedMount } from '@/lib/animations';

const Hero: React.FC = () => {
  const isHeadingVisible = useDelayedMount(100);
  const isSubtitleVisible = useDelayedMount(400);
  const isButtonVisible = useDelayedMount(700);
  const isDecorVisible = useDelayedMount(1000);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="section-container relative flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            'transition-all duration-700 ease-smooth',
            isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
              Creative developer crafting digital experiences
            </h1>
          </div>
          
          <div className={cn(
            'transition-all duration-700 ease-smooth',
            isSubtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              I specialize in building beautiful, functional interfaces and experiences with meticulous attention to detail.
            </p>
          </div>
          
          <div className={cn(
            'transition-all duration-700 ease-smooth',
            isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300 btn-hover-effect"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View my work
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className={cn(
            "absolute bottom-10 animate-bounce transition-all duration-1000",
            isDecorVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <ArrowDownCircle size={36} className="text-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
