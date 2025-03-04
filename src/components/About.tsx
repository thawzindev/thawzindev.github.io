
import React from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Code, Layout, Layers, Palette } from 'lucide-react';

const About: React.FC = () => {
  const [isIntroVisible, introRef] = useIntersectionObserver();
  const [isSkillsVisible, skillsRef] = useIntersectionObserver();

  const skills = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually stunning user interfaces with careful attention to usability.',
      icon: <Palette className="w-8 h-8 mb-4 text-primary" />,
    },
    {
      title: 'Frontend Development',
      description: 'Building responsive, fast, and accessible web applications using modern technologies.',
      icon: <Code className="w-8 h-8 mb-4 text-primary" />,
    },
    {
      title: 'Responsive Design',
      description: 'Ensuring websites look and function perfectly across all devices and screen sizes.',
      icon: <Layout className="w-8 h-8 mb-4 text-primary" />,
    },
    {
      title: 'Creative Solutions',
      description: 'Solving complex problems with elegant solutions that balance form and function.',
      icon: <Layers className="w-8 h-8 mb-4 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div 
            ref={introRef as React.RefCallback<HTMLDivElement>}
            className={cn(
              "w-full md:w-1/2 transition-all duration-700 ease-smooth",
              isIntroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1 chip">About me</p>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Passionate about creating meaningful digital experiences</h2>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a designer and developer with a focus on creating elegant, functional, and user-centered digital experiences. With attention to detail and a commitment to quality, I approach each project as an opportunity to solve problems and deliver exceptional results.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                My design philosophy is centered around simplicity, clarity, and purpose. I believe that great design should be invisible, allowing users to intuitively accomplish their goals without friction or confusion.
              </p>
            </div>
          </div>
          
          <div 
            ref={skillsRef as React.RefCallback<HTMLDivElement>}
            className={cn(
              "w-full md:w-1/2 transition-all duration-700 ease-smooth",
              isSkillsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.title} 
                  className={cn(
                    "glass-panel p-6 transition-all duration-500",
                    isSkillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {skill.icon}
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
