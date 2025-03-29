
import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const Certifications = () => {
  useEffect(() => {
    document.title = 'Certifications - Maheshwaran M';
  }, []);
  
  const certifications = [
    {
      id: 1,
      title: 'Create a WordPress website with Hostinger',
      issuedBy: 'Udemy',
      date: 'Dec 2023',
      link: 'https://www.udemy.com/certificate/UC-cc849133-c248-495b-bfd6-cf6fa4d92203/'
    },
    {
      id: 2,
      title: 'Angular',
      issuedBy: 'Infosys',
      date: 'Oct 2022',
      link: 'https://drive.google.com/file/d/1GoRARzQkVb5O2ov8PA4yPcI1AMR6B-we/view?usp=drivesdk'
    }
  ];
  
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen">
        <Header />
        
        <section id="certifications" className="bg-muted py-20 px-6">
          <div className="container-wrapper">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="title-underline">My Certifications</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional certificates and credentials that validate my skills and knowledge.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="bg-card shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl opacity-0 animate-fade-in-delay-1"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      Issued by {cert.issuedBy} | {cert.date}
                    </p>
                    
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary mt-2 inline-flex items-center gap-2"
                    >
                      View Certificate <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Certifications;
