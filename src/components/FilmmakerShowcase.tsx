
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Clapperboard } from 'lucide-react';
import { cn } from '@/lib/utils';

// Data for filmmakers
const filmmakers = [
  {
    id: 1,
    name: "Steven Spielberg",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
    role: "Director & Producer",
    description: "Known for iconic films like Jurassic Park, E.T., and Schindler's List. Pioneered the blockbuster film era and co-founded DreamWorks Studios.",
    accolades: "3 Academy Awards, AFI Lifetime Achievement Award",
    quote: "I dream for a living."
  },
  {
    id: 2,
    name: "Martin Scorsese",
    image: "https://images.unsplash.com/photo-1603380070253-64d54d83f811?q=80&w=2070&auto=format&fit=crop",
    role: "Director & Screenwriter",
    description: "Legendary filmmaker behind classics like Goodfellas, Taxi Driver, and The Departed. Known for gritty characters, complex narratives, and innovative camera techniques.",
    accolades: "Academy Award for Best Director, AFI Lifetime Achievement Award",
    quote: "Cinema is a matter of what's in the frame and what's out."
  },
  {
    id: 3,
    name: "Christopher Nolan",
    image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2065&auto=format&fit=crop",
    role: "Director & Screenwriter",
    description: "Visionary behind mind-bending films like Inception, Interstellar, and The Dark Knight trilogy. Known for his non-linear storytelling and practical effects.",
    accolades: "5 Academy Award nominations, BAFTA Awards",
    quote: "I've always been interested in trying to find new ways to get across ideas."
  },
  {
    id: 4,
    name: "Kathryn Bigelow",
    image: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=2070&auto=format&fit=crop",
    role: "Director & Producer",
    description: "Groundbreaking director of The Hurt Locker, Zero Dark Thirty, and Point Break. First woman to win the Academy Award for Best Director.",
    accolades: "Academy Award for Best Director, Directors Guild of America Award",
    quote: "If there's specific resistance to women making movies, I just choose to ignore that as an obstacle."
  }
];

interface FilmmakerCardProps {
  filmmaker: typeof filmmakers[0];
  isActive: boolean;
  index: number;
  totalSlides: number;
}

const FilmmakerCard: React.FC<FilmmakerCardProps> = ({ filmmaker, isActive, index, totalSlides }) => {
  // Calculate the position based on the index
  const getCardStyles = () => {
    if (isActive) return "z-10 scale-100 opacity-100";
    
    // If this card is to the left of the active card
    if (index < filmmakers.findIndex(f => f.id === filmmaker.id)) {
      return "scale-95 opacity-40 -translate-x-[50%] rotate-[-5deg]";
    }
    
    // If this card is to the right of the active card
    return "scale-95 opacity-40 translate-x-[50%] rotate-[5deg]";
  };
  
  return (
    <div 
      className={cn(
        "film-slide absolute inset-0 flex flex-col md:flex-row overflow-hidden rounded-xl bg-film-slate/60 backdrop-blur-sm",
        getCardStyles()
      )}
    >
      <div className="w-full md:w-1/2 h-60 md:h-full relative overflow-hidden">
        <img 
          src={filmmaker.image} 
          alt={filmmaker.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-film-dark/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 flex items-center gap-2">
          <Clapperboard className="text-film-gold" size={24} />
          <span className="text-film-accent font-semibold">{filmmaker.role}</span>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{filmmaker.name}</h2>
          <p className="text-gray-300 mb-4 text-sm md:text-base">{filmmaker.description}</p>
          <div className="mb-4">
            <h3 className="text-film-gold text-sm font-semibold mb-1">ACCOLADES</h3>
            <p className="text-gray-300 text-sm">{filmmaker.accolades}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <blockquote className="border-l-2 border-film-gold pl-4 italic text-gray-300">
            "{filmmaker.quote}"
          </blockquote>
        </div>
      </div>
    </div>
  );
};

const FilmmakerShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  
  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filmmakers.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoSlide]);
  
  // Pause auto-slide on user interaction
  const handleManualNavigation = (index: number) => {
    setAutoSlide(false);
    setActiveIndex(index);
    
    // Resume auto-slide after 10 seconds of inactivity
    const timeout = setTimeout(() => setAutoSlide(true), 10000);
    return () => clearTimeout(timeout);
  };
  
  // Navigation handlers
  const goToNext = () => {
    handleManualNavigation((activeIndex + 1) % filmmakers.length);
  };
  
  const goToPrev = () => {
    handleManualNavigation((activeIndex - 1 + filmmakers.length) % filmmakers.length);
  };
  
  return (
    <div className="relative w-full h-[600px] md:h-[500px] my-10">
      <div className="absolute inset-0 flex items-center justify-center">
        {filmmakers.map((filmmaker, index) => (
          <FilmmakerCard 
            key={filmmaker.id}
            filmmaker={filmmaker}
            isActive={index === activeIndex}
            index={index}
            totalSlides={filmmakers.length}
          />
        ))}
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button 
          className="w-10 h-10 rounded-full bg-film-dark/70 hover:bg-film-gold/90 flex items-center justify-center text-white transition-colors"
          onClick={goToPrev}
          aria-label="Previous filmmaker"
        >
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex items-center gap-2">
          {filmmakers.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualNavigation(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "w-8 bg-film-gold" : "bg-gray-500 hover:bg-gray-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          className="w-10 h-10 rounded-full bg-film-dark/70 hover:bg-film-gold/90 flex items-center justify-center text-white transition-colors"
          onClick={goToNext}
          aria-label="Next filmmaker"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default FilmmakerShowcase;
