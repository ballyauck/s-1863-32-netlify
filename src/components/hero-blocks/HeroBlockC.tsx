const HeroBlockC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/30"></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Innovate. Transform.<br />Succeed.
        </h1>
        
        <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12">
          Partner with us to leverage cutting-edge technology solutions that drive growth and innovation for your business.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass p-6 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="opacity-75">Cutting-edge solutions for modern challenges</p>
          </div>
          
          <div className="glass p-6 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="opacity-75">Industry-leading technical knowledge</p>
          </div>
          
          <div className="glass p-6 rounded-xl backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-2">Results</h3>
            <p className="opacity-75">Measurable impact on your business</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlockC;