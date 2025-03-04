import React from "react";
import { useIntersectionObserver } from "@/lib/animations";
import { cn } from "@/lib/utils";
import {
  Code,
  Database,
  Layout,
  Server,
  Laptop,
  Braces,
  Globe,
  LineChart,
} from "lucide-react";

const About: React.FC = () => {
  const [isIntroVisible, introRef] = useIntersectionObserver();
  const [isSkillsVisible, skillsRef] = useIntersectionObserver();

  const skills = [
    {
      title: "Backend Development",
      description:
        "API design, system optimization, and database management for scalable applications.",
      icon: <Server className="w-8 h-8 mb-4 text-primary" />,
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive and intuitive user interfaces that enhance the overall user experience.",
      icon: <Braces className="w-8 h-8 mb-4 text-primary" />,
    },
    {
      title: "Database Management",
      description:
        "Designing efficient database structures and optimizing queries for better performance.",
      icon: <Database className="w-8 h-8 mb-4 text-primary" />,
    },
    {
      title: "Responsive Design",
      description:
        "Ensuring websites look and function perfectly across all devices and screen sizes.",
      icon: <Layout className="w-8 h-8 mb-4 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-18 sm:py-24 relative overflow-hidden">
      {/* Vector decoration elements */}

      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div
            ref={introRef as React.RefCallback<HTMLDivElement>}
            className={cn(
              "w-full md:w-1/2 transition-all duration-700 ease-smooth",
              isIntroVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3 chip">
                  About me
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
                  Senior Full-stack Developer from Bangkok, Thailand
                </h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                As a versatile full-stack developer, I specialize in building
                secure and scalable web applications. My expertise spans backend
                development, including API design, system optimization, and
                database management.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                On the frontend, I excel at creating intuitive, responsive user
                interfaces that enhance the user experience. My comprehensive
                skill set enables me to deliver end-to-end solutions, seamlessly
                integrating backend architecture with refined frontend design
                for cohesive, high-performing products.
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
              isSkillsVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={skill.title}
                  className={cn(
                    "glass-panel p-6 transition-all duration-500 relative overflow-hidden",
                    isSkillsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative z-10">
                    {skill.icon}
                    <h3 className="text-lg font-semibold mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                  {/* <div className="absolute -right-3 -bottom-3 w-20 h-20 opacity-5">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-red-900"
                    >
                      <path
                        fill="currentColor"
                        d="M42.8,-73.1C54.9,-67.7,63.7,-54.9,72.1,-41.4C80.6,-27.9,88.7,-14,89.4,0.4C90,14.8,83.3,29.6,74.5,42.6C65.8,55.6,55,66.9,41.9,73.9C28.7,81,14.4,83.7,-0.2,84C-14.8,84.4,-29.6,82.3,-44.1,76.3C-58.5,70.2,-72.6,60.1,-79.4,46.4C-86.2,32.7,-85.6,15.3,-82.3,0C-79,-15.4,-73,-30.8,-64.2,-43.9C-55.5,-57,-44,-67.8,-31,-71.2C-18,-74.6,-3.6,-70.8,10.2,-67.3C23.9,-63.9,30.6,-78.6,42.8,-73.1Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div> */}
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
