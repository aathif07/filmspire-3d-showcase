
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FilmmakerShowcase from '@/components/FilmmakerShowcase';
import Footer from '@/components/Footer';
import { Film, Clapperboard, Video, Camera } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-film-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Filmmaker Section */}
      <section className="py-20 relative" id="filmmakers">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-film-gold/10 px-4 py-2 rounded-full mb-4">
              <Clapperboard className="text-film-gold h-4 w-4" />
              <span className="text-sm font-medium text-film-gold">Industry Icons</span>
            </div>
            <h2 className="film-heading text-3xl md:text-4xl mb-4">Meet the Legendary Filmmakers</h2>
            <p className="text-gray-400">
              Explore the visionary directors who redefined cinema with their unique styles and groundbreaking techniques.
            </p>
          </div>
          
          <FilmmakerShowcase />
        </div>
      </section>
      
      {/* Film Industry Stats */}
      <section className="py-16 bg-film-slate/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 bg-film-dark/40 backdrop-blur-sm rounded-xl border border-film-slate/20">
              <Film className="h-10 w-10 mx-auto mb-4 text-film-gold" />
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-gray-400">Award Winning Films</p>
            </div>
            <div className="text-center p-6 bg-film-dark/40 backdrop-blur-sm rounded-xl border border-film-slate/20">
              <Clapperboard className="h-10 w-10 mx-auto mb-4 text-film-gold" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-400">Years of Influence</p>
            </div>
            <div className="text-center p-6 bg-film-dark/40 backdrop-blur-sm rounded-xl border border-film-slate/20">
              <Video className="h-10 w-10 mx-auto mb-4 text-film-gold" />
              <h3 className="text-3xl font-bold mb-2">$10B+</h3>
              <p className="text-gray-400">Box Office Revenue</p>
            </div>
            <div className="text-center p-6 bg-film-dark/40 backdrop-blur-sm rounded-xl border border-film-slate/20">
              <Camera className="h-10 w-10 mx-auto mb-4 text-film-gold" />
              <h3 className="text-3xl font-bold mb-2">12</h3>
              <p className="text-gray-400">Academy Awards</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Gallery Preview */}
      <section className="py-20" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-film-gold/10 px-4 py-2 rounded-full mb-4">
              <Camera className="text-film-gold h-4 w-4" />
              <span className="text-sm font-medium text-film-gold">Visual Journey</span>
            </div>
            <h2 className="film-heading text-3xl md:text-4xl mb-4">Behind the Scenes</h2>
            <p className="text-gray-400">
              Glimpses into the creative process and iconic moments from legendary filmmakers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Images */}
            {[
              "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1500454442483-8d883a276f21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-video hover-scale">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-film-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">On Set Magic</h3>
                    <p className="text-gray-300 text-sm">The creative process behind iconic scenes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-transparent border border-film-gold text-film-gold rounded-full font-medium hover:bg-film-gold hover:text-film-dark transition-colors">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>
      
      {/* Join CTA Section */}
      <section className="py-20 bg-gradient-to-b from-film-dark to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-film-slate/20 backdrop-blur-sm rounded-2xl border border-film-slate/10 p-8 md:p-12 text-center">
            <h2 className="film-heading text-3xl md:text-4xl mb-6">Join Our Filmmaking Community</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with fellow cinema enthusiasts, access exclusive content, and stay updated on the latest from legendary filmmakers.
            </p>
            <button className="px-8 py-4 bg-film-gold text-film-dark rounded-full font-medium hover:bg-white transition-colors">
              Become a Member
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
