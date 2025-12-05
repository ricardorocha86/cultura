import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';
import { useNavigate } from 'react-router-dom';

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-slate-900">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
             <img 
               src={slide.image} 
               alt={slide.title} 
               className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start">
             <div className="max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100">
                <span className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider rounded mb-4 backdrop-blur-sm border border-brand-accent/30">
                  Destaque
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-lg">
                  {slide.description}
                </p>
                <button 
                  onClick={() => navigate(slide.link)}
                  className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-secondary transition-all duration-300 transform hover:translate-x-1 cursor-pointer"
                >
                  {slide.cta}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
             </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-brand-accent' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};