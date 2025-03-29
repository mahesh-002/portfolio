import React from 'react';
import { Code, Database, Globe, Layout, Layers, Smartphone, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-8 w-8 text-portfolio-blue" />,
      items: ["Dart", "Flutter (Android, iOS)"]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8 text-portfolio-blue" />,
      items: ["HTML", "CSS", "JavaScript (Basics)"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-8 w-8 text-portfolio-blue" />,
      items: ["Firebase", "MySQL", "REST APIs"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-portfolio-blue" />,
      items: ["Dart", "Java", "SQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="h-8 w-8 text-portfolio-blue" />, // Changed from Tool to Wrench
      items: ["Android Studio", "Git", "Figma", "Adobe Illustrator", "Photoshop"]
    },
    {
      title: "State Management",
      icon: <Layers className="h-8 w-8 text-portfolio-blue" />,
      items: ["GetX", "Provider"]
    }
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="title-underline">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies, tools, and skills I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground flex items-center justify-center">
                    <span className="w-2 h-2 bg-portfolio-blue rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Layout className="mr-2 h-5 w-5 text-portfolio-blue" />
              Interpersonal Skills
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Communication Skills</li>
              <li className="text-muted-foreground">Leadership</li>
              <li className="text-muted-foreground">Always willing to learn</li>
              <li className="text-muted-foreground">Environmentally adjustable</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Wrench className="mr-2 h-5 w-5 text-portfolio-blue" />
              Software Proficiency
            </h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Android Studio (Flutter & Native App)</li>
              <li className="text-muted-foreground">Figma (UI Design)</li>
              <li className="text-muted-foreground">Adobe Photoshop & Adobe Illustrator</li>
              <li className="text-muted-foreground">WordPress (Blog & Web Deployment)</li>
              <li className="text-muted-foreground">Git | GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
