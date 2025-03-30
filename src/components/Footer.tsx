
import React from 'react';
import { Film, Instagram, Twitter, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-film-dark border-t border-gray-800" id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Film className="h-8 w-8 text-film-gold" />
              <span className="text-xl font-bold text-white">BIG MAKERS</span>
            </div>
            <p className="text-gray-400 mb-6">
              Celebrating the art and craft of cinema through the lens of legendary filmmakers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-film-slate/30 flex items-center justify-center text-gray-300 hover:bg-film-gold hover:text-film-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-film-slate/30 flex items-center justify-center text-gray-300 hover:bg-film-gold hover:text-film-dark transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-film-slate/30 flex items-center justify-center text-gray-300 hover:bg-film-gold hover:text-film-dark transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Links columns */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              {["Home", "Filmmakers", "Gallery", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-film-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {["Film History", "Cinematography", "Director's Craft", "Film Techniques", "Industry News"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-film-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates on filmmaking excellence.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-film-slate/30 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-film-gold flex-grow"
              />
              <button className="bg-film-gold text-film-dark px-4 py-3 rounded-r-lg hover:bg-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Big Makers Film Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
