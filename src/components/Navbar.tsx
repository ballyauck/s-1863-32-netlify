const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-8 flex items-center justify-center">
            <img 
              src="/lovable-uploads/2106c699-32e1-46bf-afa5-0f8625a42533.png" 
              alt="Antimetal Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-bold text-xl text-[#dd2526]">Yuccan Technologies</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#enterprise" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Enterprise</a>
          <a href="#pricing" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Pricing</a>
          <a href="#docs" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Docs</a>
          <a href="#faq" className="text-[#141413] hover:text-[#141413]/80 transition-colors">FAQ</a>
        </div>

        <button className="text-[#141413] font-medium hover:text-[#141413]/80 transition-colors">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;