
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { name: 'Home', href: '/', isExternal: false },
    { name: 'About', href: '/#about', isExternal: false },
    { name: 'Skills', href: '/#skills', isExternal: false },
    { name: 'Projects', href: '/#projects', isExternal: false },
    { name: 'Certifications', href: '/certifications', isExternal: false },
    { name: 'Contact', href: '/#contact', isExternal: false }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect py-3' : 'bg-transparent py-5'}`}>
      <div className="container-wrapper flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-portfolio-blue">
          Mahesh<span className="text-foreground">waran</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.isExternal ? (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`nav-link font-medium ${
                  (location.pathname === item.href || 
                   (location.pathname === '/' && item.href.startsWith('/#')))
                    ? 'text-portfolio-blue'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted text-foreground hover:text-portfolio-blue transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link 
            to="/#contact" 
            className="btn-primary"
          >
            Let's Talk
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted text-foreground hover:text-portfolio-blue transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden glass-effect py-6 px-6 shadow-lg absolute top-full left-0 w-full">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.isExternal ? (
                  <a 
                    href={item.href} 
                    className="nav-link block py-2 font-medium"
                    onClick={toggleMenu}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    to={item.href} 
                    className="nav-link block py-2 font-medium"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-4">
              <Link 
                to="/#contact" 
                className="btn-primary block text-center"
                onClick={toggleMenu}
              >
                Let's Talk
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
