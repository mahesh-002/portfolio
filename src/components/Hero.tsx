
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-28 pb-20">
      <div className="absolute top-0 right-0 w-4/5 h-full z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-portfolio-blue/5 to-transparent"></div>
      </div>
      
      <div className="container-wrapper grid md:grid-cols-2 gap-10 items-center z-10">
        <div className="space-y-6">
          <div className="opacity-0 animate-fade-in-delay-1">
            <p className="inline-block bg-portfolio-blue/10 text-portfolio-blue px-4 py-2 rounded-full font-medium mb-4">
              Mobile App | Web Developer
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-in-delay-2">
            Hi, I'm <span className="text-portfolio-blue">Maheshwaran</span>
          </h1>
          
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in-delay-3">
            I build exceptional and accessible digital experiences for the web. Focused on creating intuitive and responsive web applications with modern frameworks.
          </p>
          
          <div className="pt-4 space-y-6 opacity-0 animate-fade-in-delay-3">
            <div className="flex gap-6">
              <a href="https://github.com/mahesh-002/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-portfolio-blue transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/maheshwaran002/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-portfolio-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/maheshwaran_in" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-portfolio-blue transition-colors">
                <Twitter size={24} />
              </a>
            </div>
            
            <div className="flex gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="border border-portfolio-blue text-portfolio-blue px-6 py-3 rounded-md hover:bg-portfolio-blue hover:text-white transition-all duration-200 inline-flex items-center gap-2">
                View Projects
              </a>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block relative">
          <div className="relative bg-gradient-to-tr from-portfolio-blue to-portfolio-lightBlue rounded-full w-80 h-80 mx-auto overflow-hidden opacity-0 animate-fade-in">
            <img 
              src="assets/profile.jpg" 
              alt="Maheshwaran M" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-portfolio-blue"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
