
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/lib/animations';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isHeadingVisible, headingRef] = useIntersectionObserver();
  const [isProjectsVisible, projectsRef] = useIntersectionObserver();

  const projects = [
    {
      title: 'Modern E-commerce Platform',
      description: 'A complete e-commerce solution with shopping cart, payment processing, and order management.',
      tags: ['React', 'Node.js', 'Stripe', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800&q=80',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Personal Finance Dashboard',
      description: 'Interactive dashboard for tracking expenses, investments, and financial goals with data visualization.',
      tags: ['Vue.js', 'D3.js', 'Firebase', 'Figma'],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800&q=80',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Healthcare Appointment System',
      description: 'Platform for patients to schedule appointments with healthcare providers and manage medical records.',
      tags: ['TypeScript', 'NextJS', 'PostgreSQL', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800&q=80',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/50">
      <div className="section-container">
        <div 
          ref={headingRef as React.RefCallback<HTMLDivElement>}
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-smooth",
            isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1 chip">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Selected Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and approach to solving design and development challenges.
          </p>
        </div>

        <div 
          ref={projectsRef as React.RefCallback<HTMLDivElement>}
          className={cn(
            "transition-all duration-700 ease-smooth",
            isProjectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={cn(
                "mb-24 last:mb-0 transition-all duration-700 ease-smooth",
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
                isProjectsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Project image */}
                <div className="w-full lg:w-7/12 overflow-hidden rounded-xl">
                  <div 
                    className="relative aspect-video overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] group cursor-pointer"
                    onMouseEnter={() => setActiveProject(index)}
                    onClick={() => window.open(project.demoLink, '_blank')}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="glass-panel px-6 py-3 rounded-full text-white font-medium text-sm">
                        View Project
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project details */}
                <div className="w-full lg:w-5/12">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="chip">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm btn-hover-effect"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm btn-hover-effect"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
