
import React from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Code, Database, Layout, Server } from 'lucide-react';

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
      icon: <Code className="w-8 h-8 mb-4 text-primary" />,
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
                <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Senior Full-stack Developer from Bangkok, Thailand</h2>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                As a versatile full-stack developer, I specialize in building secure and scalable web applications. My expertise spans backend development, including API design, system optimization, and database management.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                On the frontend, I excel at creating intuitive, responsive user interfaces that enhance the user experience. My comprehensive skill set enables me to deliver end-to-end solutions, seamlessly integrating backend architecture with refined frontend design for cohesive, high-performing products.
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
