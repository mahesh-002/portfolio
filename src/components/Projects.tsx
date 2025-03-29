import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Hospital Management Web App',
      description: 'A comprehensive web application for managing hospital operations, patient records, and appointments.',
      image: 'https://maheshwaran.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frecipeabook.ba4bde38.png&w=3840&q=75',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'personal',
      githubLink: 'https://github.com/mahesh-002/Hospital-Management.git',
      liveLink: '',
    },
    {
      id: 2,
      title: 'E-commerce Web App',
      description: 'A full-featured e-commerce web application with product listings, cart functionality, and checkout process.',
      image: 'https://maheshwaran.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.6f4bf42f.png&w=3840&q=75',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'personal',
      githubLink: 'https://github.com/mahesh-002/Ecommerce-website.git',
      liveLink: '',
    },
    {
      id: 3,
      title: 'Ohm Shield (Website)',
      description: 'A professional website for Ohm Shield, showcasing their products and services.',
      image: 'https://maheshwaran.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftravelbuddy.b8bdd30a.png&w=3840&q=75',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
      category: 'industry',
      githubLink: '',
      liveLink: 'https://ohmshield.com/',
    },
    {
      id: 4,
      title: 'Ohm Shield ESD Certificate (Website)',
      description: "A specialized website for Ohm Shield's ESD certification services.",
      image: 'https://maheshwaran.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard.c7fb45ef.png&w=3840&q=75',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
      category: 'industry',
      githubLink: '',
      liveLink: 'https://www.ohmshield-esdcertificate.in/home',
    },
    {
      id: 5,
      title: 'Pro ESD (Website)',
      description: 'A website for Pro ESD, featuring their electrostatic discharge protection products and services.',
      image: 'https://maheshwaran.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcovid-tracker.26fe3ec3.png&w=3840&q=75',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
      category: 'industry',
      githubLink: '',
      liveLink: 'https://proesd.in/',
    },
    {
      id: 6,
      title: 'ProESD (Android App)',
      description: 'A native Android application for ProESD, providing mobile access to their services and information.',
      image: 'https://maheshwaran.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsecretmessage.45a8c72d.png&w=3840&q=75',
      technologies: ['Dart', 'Flutter', 'Firebase'],
      category: 'industry',
      githubLink: '',
      liveLink: 'https://www.linkedin.com/posts/maheshwaran002_proesd-appdevelopment-androiddevelopment-activity-7308379314872336385-xyZn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADm4y_oBMeu5jhhmdfQjbPpgZ3Se9ga3z_E',
      isComplete: true,
      demoVideo: true
    },
    {
      id: 7,
      title: 'Employee Expense Management App',
      description: 'A mobile application for managing employee expenses, tracking receipts, and approving reimbursements.',
      image: 'https://maheshwaran.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdashboard.c7fb45ef.png&w=3840&q=75',
      technologies: ['Dart', 'Flutter', 'Firebase'],
      category: 'ongoing',
      githubLink: '',
      liveLink: '',
      isComplete: false
    },
    {
      id: 8,
      title: 'Employee To-Do App',
      description: 'A task management application for employees to organize and track their work items.',
      image: 'https://maheshwaran.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftravelbuddy.b8bdd30a.png&w=3840&q=75',
      technologies: ['Dart', 'Flutter', 'Firebase'],
      category: 'ongoing',
      githubLink: '',
      liveLink: '',
      isComplete: false
    },
    {
      id: 9,
      title: 'Employee Working Time for OT',
      description: 'An application to track employee working hours and calculate overtime.',
      image: 'https://maheshwaran.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frecipeabook.ba4bde38.png&w=3840&q=75',
      technologies: ['Dart', 'Flutter', 'Firebase'],
      category: 'ongoing',
      githubLink: '',
      liveLink: '',
      isComplete: false
    },
  ];
  
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'personal', label: 'Personal' },
    { value: 'industry', label: 'Industry' },
    { value: 'ongoing', label: 'Ongoing' },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-muted">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="title-underline">My Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                filter === category.value 
                  ? 'bg-portfolio-blue text-white' 
                  : 'bg-white text-portfolio-darkGray hover:bg-portfolio-blue/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-portfolio-darkBlue/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full text-portfolio-darkBlue hover:bg-portfolio-blue hover:text-white transition-colors duration-200"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full text-portfolio-darkBlue hover:bg-portfolio-blue hover:text-white transition-colors duration-200"
                      aria-label={project.demoVideo ? `View ${project.title} demo video` : `View ${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {project.isComplete === false && (
                  <div className="mb-3">
                    <span className="text-amber-500 font-medium text-sm">🚧 Ongoing Development</span>
                  </div>
                )}
                
                {project.isComplete === true && (
                  <div className="mb-3">
                    <span className="text-green-500 font-medium text-sm">🎉 App is Ready!</span>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-portfolio-blue/10 text-portfolio-blue px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
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
