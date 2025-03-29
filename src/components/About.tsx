
import { Calendar, GraduationCap, Home } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-muted">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="title-underline">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I'm Maheshwaran M, a passionate Mobile & Web App Developer with 
              expertise in Flutter, Firebase, and Java. I'm eager to contribute 
              my technical skills and innovation to a dynamic team while continuously
               learning and growing in software development.
            </p>
            <p className="text-muted-foreground">
              I'm committed to delivering impactful solutions that drive both personal
               and organizational success. With experience in mobile development and 
               a strong foundation in web technologies, I enjoy building responsive and intuitive applications.
            </p>            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="btn-primary"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-right">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-portfolio-blue/10 p-3 rounded-full text-portfolio-blue">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">B.Tech in Information Technology (2020 - 2024)</p>
                  <p className="text-muted-foreground">Tagore Engineering College, Chennai | CGPA: 8.4</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-portfolio-blue/10 p-3 rounded-full text-portfolio-blue">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-muted-foreground">Android App Development Intern</p>
                  <p className="text-muted-foreground">NSIC, Chennai (July 2023)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-portfolio-blue/10 p-3 rounded-full text-portfolio-blue">
                  <Home size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-muted-foreground">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
