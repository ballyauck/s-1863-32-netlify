const HeroBlockA = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Gradient background with dot pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #E2E8F3 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
          opacity: 0.5
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary mb-6">
          Transform Your Business<br />with Technology
        </h1>
        
        <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
          Innovative solutions for modern enterprises. We help businesses scale, grow, and succeed in the digital age.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlockA;