const HeroBlockB = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-highlight/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-float delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Building Tomorrow's Solutions Today
            </h1>
            <p className="text-xl text-secondary mb-8">
              Empowering businesses with cutting-edge technology and innovative solutions for sustainable growth.
            </p>
            <button className="px-8 py-3 bg-highlight text-primary font-semibold rounded-lg hover:bg-highlight/90 transition-colors">
              Schedule a Demo
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Technology Innovation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlockB;