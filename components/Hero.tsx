
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-light">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-4">
              Achieve Your Target <span className="text-accent">IELTS</span> Band Score
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Join thousands of successful students who unlocked their global opportunities with our expert guidance, AI-powered tools, and personalized study plans.
            </p>
            <a
              href="#signup"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-hover transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
          </div>
          <div>
            <img 
              src="https://picsum.photos/seed/ielts-study/800/600" 
              alt="Students studying for IELTS" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
