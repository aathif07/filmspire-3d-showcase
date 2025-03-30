
import React from 'react';
import { Play, Film, Clapperboard, Video } from 'lucide-react';
import FilmScene3D from './FilmScene3D';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 bg-film-dark">
        {/* Abstract film elements in background */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-film-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-film-gold/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-film-dark/50 backdrop-blur-sm border border-film-gold/30 px-4 py-2 rounded-full mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Film className="text-film-gold h-4 w-4" />
              <span className="text-sm font-medium text-gray-300">Filmmaking Excellence</span>
            </div>
            
            <h1 className="film-heading text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Showcasing the World's
              <span className="block text-film-gold mt-2">Big Film Makers</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Explore the iconic styles, techniques, and visions of legendary directors who transformed the art of cinema.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <button className="px-8 py-3 bg-film-gold text-film-dark rounded-full font-medium flex items-center gap-2 hover:bg-white transition-colors group w-full sm:w-auto">
                <Play className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                Explore Stories
              </button>
              
              <button className="px-8 py-3 bg-transparent border border-gray-500 text-white rounded-full font-medium hover:border-film-gold hover:text-film-gold transition-colors w-full sm:w-auto">
                Our Collection
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative bg-gradient-to-br from-film-dark/80 to-black p-6 rounded-2xl border border-film-slate/20">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-red-500"></div>
              <div className="absolute top-4 left-12 w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="absolute top-4 left-20 w-3 h-3 rounded-full bg-green-500"></div>
              
              {/* 3D Scene */}
              <FilmScene3D />
              
              {/* Film industry stats */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center p-3 bg-film-slate/20 rounded-lg">
                  <Clapperboard className="h-5 w-5 mx-auto mb-1 text-film-gold" />
                  <p className="text-xs text-gray-400">Featured</p>
                  <p className="text-lg font-bold">4</p>
                </div>
                <div className="text-center p-3 bg-film-slate/20 rounded-lg">
                  <Film className="h-5 w-5 mx-auto mb-1 text-film-gold" />
                  <p className="text-xs text-gray-400">Academy Awards</p>
                  <p className="text-lg font-bold">12+</p>
                </div>
                <div className="text-center p-3 bg-film-slate/20 rounded-lg">
                  <Video className="h-5 w-5 mx-auto mb-1 text-film-gold" />
                  <p className="text-xs text-gray-400">Blockbusters</p>
                  <p className="text-lg font-bold">100+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
