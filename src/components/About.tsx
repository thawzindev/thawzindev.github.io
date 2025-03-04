
import React from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Code, Database, Layout, Server, Laptop, Braces, Globe, LineChart } from 'lucide-react';

const About: React.FC = () => {
  const [isIntroVisible, introRef] = useIntersectionObserver();
  const [isSkillsVisible, skillsRef] = useIntersectionObserver();

  const skills = [
    {
      title: 'Backend Development',
      description: 'API design, system optimization, and database management for scalable applications.',
      icon: <Server className="w-8 h-8 mb-4 text-primary" />,
    },
    {
      title: 'Frontend Development',
      description: 'Creating responsive and intuitive user interfaces that enhance the overall user experience.',
      icon: <Braces className="w-8 h-8 mb-4 text-primary" />,
    },
    {
      title: 'Database Management',
      description: 'Designing efficient database structures and optimizing queries for better performance.',
      icon: <Database className="w-8 h-8 mb-4 text-primary" />,
    },
    {
      title: 'Responsive Design',
      description: 'Ensuring websites look and function perfectly across all devices and screen sizes.',
      icon: <Layout className="w-8 h-8 mb-4 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Vector decoration elements */}
      <div className="absolute -z-10 top-0 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.3,-76.1C58.2,-69.5,71.2,-59.6,79.9,-46.2C88.7,-32.8,93.2,-16.4,92.9,-0.2C92.6,16,87.4,32,78.5,45C69.6,58,56.9,68.1,43,74.6C29.1,81.1,14.6,84.1,0.3,83.6C-13.9,83.1,-27.8,79.2,-41.1,72.7C-54.4,66.2,-67,57.2,-76.2,44.8C-85.4,32.4,-91,16.2,-90.9,0.1C-90.7,-16.1,-84.9,-32.1,-75.6,-45.4C-66.3,-58.7,-53.5,-69.2,-39.5,-75.7C-25.5,-82.2,-12.7,-84.6,1.3,-87C15.3,-89.4,30.5,-82.7,44.3,-76.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="absolute -z-10 bottom-0 left-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-80.9C62.9,-72.2,77.2,-62.1,84.6,-48.1C91.9,-34.2,92.3,-17.1,89.9,-1.4C87.5,14.4,82.4,28.7,74.6,41.8C66.8,54.9,56.3,66.7,43.4,75.8C30.5,84.9,15.2,91.3,-0.2,91.6C-15.6,92,-31.3,86.3,-44.8,77.6C-58.4,68.9,-69.8,57.2,-78.3,43.3C-86.7,29.4,-92.1,13.2,-91.2,-2.5C-90.4,-18.3,-83.3,-34.5,-73.1,-48.3C-62.8,-62.1,-49.3,-73.3,-34.8,-81.9C-20.2,-90.5,-5.4,-96.4,9.1,-93.9C23.6,-91.3,32.5,-89.5,47.7,-80.9Z" transform="translate(100 100)" />
        </svg>
      </div>
      
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
                <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Senior Full-stack Developer from Bangkok, Thailand</h2>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a versatile full-stack developer, I specialize in building secure and scalable web applications. My expertise spans backend development, including API design, system optimization, and database management.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                On the frontend, I excel at creating intuitive, responsive user interfaces that enhance the user experience. My comprehensive skill set enables me to deliver end-to-end solutions, seamlessly integrating backend architecture with refined frontend design for cohesive, high-performing products.
              </p>
              
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  <span>HTML/CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Web Dev</span>
                </div>
                <div className="flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-primary" />
                  <span>SEO</span>
                </div>
              </div>
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
                    "glass-panel p-6 transition-all duration-500 relative overflow-hidden",
                    isSkillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10">
                    {skill.icon}
                    <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                  <div className="absolute -right-3 -bottom-3 w-20 h-20 opacity-5">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M42.8,-73.1C54.9,-67.7,63.7,-54.9,72.1,-41.4C80.6,-27.9,88.7,-14,89.4,0.4C90,14.8,83.3,29.6,74.5,42.6C65.8,55.6,55,66.9,41.9,73.9C28.7,81,14.4,83.7,-0.2,84C-14.8,84.4,-29.6,82.3,-44.1,76.3C-58.5,70.2,-72.6,60.1,-79.4,46.4C-86.2,32.7,-85.6,15.3,-82.3,0C-79,-15.4,-73,-30.8,-64.2,-43.9C-55.5,-57,-44,-67.8,-31,-71.2C-18,-74.6,-3.6,-70.8,10.2,-67.3C23.9,-63.9,30.6,-78.6,42.8,-73.1Z" transform="translate(100 100)" />
                    </svg>
                  </div>
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
