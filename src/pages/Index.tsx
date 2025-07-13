
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Database, Globe, ChevronDown, Coffee, Server, Terminal, Brush, LeafyGreenIcon, LucideLeafyGreen, LeafIcon, ComputerIcon, PersonStanding, Code2Icon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LoadingScreen from '@/components/LoadingScreen';
import CircularProgress3D from '@/components/CircularProgress3D';

const Index = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isLoading]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Java', level: 90, icon: Coffee, color: 'lime' },
    { name: 'Spring Boot', level: 40, icon: LeafIcon, color: 'lime' },
    { name: 'MySQL', level: 50, icon: Database, color: 'lime' },
    { name: 'JavaScript', level: 25, icon: Code2, color: 'blue' },
    { name: 'Shell Script', level: 20, icon: Terminal, color: 'lime' },
    { name: 'Canva', level: 90, icon: Brush, color: 'blue' }
  ];

  const projects = [
    {
      title: 'Employee Management System',
      description: 'Full-stack Employee Management System with Spring Boot backend and MySQL database',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=250&fit=crop',
      tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
      link: '#',
      github: 'https://github.com/KOUSHAMBHA15IT/ems-backend'
    },
    {
      title: 'Expense/Income Tracker',
      description: 'A web-based Expense Tracker application built with Spring Boot, Spring Data JPA, and Lombok to help users efficiently track their daily expenses, categorize them, and generate financial reports.',
      image: 'https://images.unsplash.com/photo-1650821414390-276561abd95a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=250&fit=crop',
      tech: ['Java', 'Spring Boot', 'Lombok', 'MySQL'],
      link: '#',
      github: 'https://github.com/KOUSHAMBHA15IT/expense-tracker'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A sleek and modern real-time chat application built with Spring Boot, WebSocket (STOMP over SockJS), and Thymeleaf. It supports emojis, futuristic UI elements, and smooth bi-directional communication between users via WebSocket technology.',
      image: 'https://plus.unsplash.com/premium_photo-1721697080473-8281f165fbfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&h=250&fit=crop',
      tech: ['Java', 'Spring Boot', 'WebSocket', 'Thymeleaf'],
      link: '#',
      github: 'https://github.com/KOUSHAMBHA15IT/chat-socket'
    }
    // ,
    // {
    //   title: 'Task Management Dashboard',
    //   description: 'Interactive dashboard for project and task management with analytics',
    //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    //   tech: ['JavaScript', 'Spring Boot', 'MySQL', 'Canva'],
    //   link: '#',
    //   github: '#'
    // }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, link: 'https://github.com/KOUSHAMBHA15IT', color: 'hover:text-lime-400' },
    { name: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/koushambha-das-972507259', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, link: 'mailto:koushambhadas1506@gmail.com', color: 'hover:text-lime-400' }
  ];

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-lime-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-lime-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-lime-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-lime-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-blue-500/10"></div>
        <div className="container mx-auto px-4 text-center z-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Koushambha Das</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Full-Stack Developer & Backend Specialist crafting robust digital solutions with Java & Spring Boot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button 
                size="lg" 
                className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-lime-500 text-lime-400 hover:bg-lime-500 hover:text-black px-8" 
              onClick={() => window.open("https://drive.google.com/file/d/1zaGBn3SCfH9iag6FQDQPNRGHeIQZ0T6m/view?usp=sharing", "_blank")}>
                Download CV
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <ChevronDown className="w-6 h-6 text-lime-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative" data-animate>
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              Who am <span className="gradient-text">I</span> ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with expertise in Java ecosystem and modern web technologies. 
                  I specialize in building scalable backend systems with Spring Boot and creating efficient database 
                  solutions with MySQL.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, optimizing system performance, 
                  or automating workflows with shell scripts. I believe in creating solutions that are both 
                  technically sound and user-friendly.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 border border-lime-500/20 rounded-lg glow-border">
                    <div className="text-3xl font-bold text-lime-400">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 border border-blue-500/20 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-lime-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-card rounded-full flex items-center justify-center border border-lime-500/30">
                    <Code2Icon className="w-32 h-32 text-lime-400 animate-glow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/50" data-animate>
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="p-6 bg-card rounded-lg border border-border hover:border-lime-500/50 transition-all duration-300 card-hover">
                  <div className="flex items-center space-x-4 mb-6">
                    <skill.icon className={`w-8 h-8 ${skill.color === 'lime' ? 'text-lime-400' : 'text-blue-400'}`} />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="flex justify-center">
                    <CircularProgress3D 
                      progress={isVisible.skills ? skill.level : 0}
                      size={100}
                      strokeWidth={6}
                      color={skill.color === 'lime' ? '#84cc16' : '#3b82f6'}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20" data-animate>
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="overflow-hidden bg-card border-border hover:border-lime-500/50 card-hover">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <a
                          href={project.github}
                           target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="p-2">
                            <Github className="w-4 h-4" />
                          </Button>
                        </a>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-lime-500/20 text-lime-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50" data-animate>
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className={`p-4 bg-card rounded-full border border-border hover:border-lime-500/50 transition-all duration-300 ${social.color} transform hover:scale-110`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
            <Button size="lg" className="bg-gradient-to-r from-lime-500 to-blue-500 hover:from-lime-600 hover:to-blue-600 text-black font-semibold px-12">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Koushambha Das. Built with React, TypeScript, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
