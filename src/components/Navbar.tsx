const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8C21 5.23858 18.7614 3 16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8L8 12L12 16M16 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-xl text-[#141413]">Antimetal</span>
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