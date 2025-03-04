
import React, { useState } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const [isHeadingVisible, headingRef] = useIntersectionObserver();
  const [isFormVisible, formRef] = useIntersectionObserver();
  const [isInfoVisible, infoRef] = useIntersectionObserver();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        <div 
          ref={headingRef as React.RefCallback<HTMLDivElement>}
          className={cn(
            "text-center mb-16 transition-all duration-700 ease-smooth",
            isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1 chip">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact form */}
          <div 
            ref={formRef as React.RefCallback<HTMLDivElement>}
            className={cn(
              "transition-all duration-700 ease-smooth",
              isFormVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full p-3 rounded-lg bg-primary text-primary-foreground font-medium inline-flex items-center justify-center gap-2 transition-all btn-hover-effect",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact info */}
          <div 
            ref={infoRef as React.RefCallback<HTMLDivElement>}
            className={cn(
              "transition-all duration-700 ease-smooth",
              isInfoVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="glass-panel p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Mail size={20} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:thawzin99777@gmail.com" className="font-medium hover:text-primary transition-colors">
                      thawzin99777@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <Phone size={20} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+66937900167" className="font-medium hover:text-primary transition-colors">
                      +66 937900167
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-full">
                    <MapPin size={20} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium">Bangkok, Thailand</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-sm font-medium mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/thawzinhtoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary/70 hover:bg-secondary w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/thawzin.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary/70 hover:bg-secondary w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
