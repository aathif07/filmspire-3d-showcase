
import React, { useState, useEffect } from 'react';
import { Film, Clapperboard, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Detect scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "bg-film-dark/90 backdrop-blur-sm shadow-lg py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white">
          <Film className="h-8 w-8 text-film-gold animate-rotate-slow" />
          <span className="text-xl font-bold tracking-tight">BIG MAKERS</span>
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Filmmakers", "Gallery", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-film-gold transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-film-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="px-5 py-2 bg-film-dark border border-film-gold text-film-gold rounded hover:bg-film-gold hover:text-film-dark transition-colors">
            Join Studio
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-film-dark flex flex-col items-center justify-center transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center gap-8">
          <a href="/" className="flex items-center gap-2 text-white mb-8">
            <Clapperboard className="h-10 w-10 text-film-gold" />
            <span className="text-2xl font-bold">BIG MAKERS</span>
          </a>
          
          {["Home", "Filmmakers", "Gallery", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xl text-gray-300 hover:text-film-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          
          <button className="mt-4 px-6 py-3 bg-film-dark border border-film-gold text-film-gold rounded-full hover:bg-film-gold hover:text-film-dark transition-colors">
            Join Studio
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
