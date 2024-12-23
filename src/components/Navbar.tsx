import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './navbar/MobileMenu';
import DesktopMenu from './navbar/DesktopMenu';
import Logo from './navbar/Logo';
import AuthDialog from './auth/AuthDialog';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <nav 
        className={`md:hidden fixed w-full z-50 px-4 h-[50px] flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex-shrink-0 ml-2">
          <Logo />
        </div>
        <div className="flex items-center justify-center gap-4 flex-grow px-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>
        <div className="flex-shrink-0 mr-2">
          <AuthDialog />
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav 
        className={`fixed w-full z-50 px-6 h-[50px] transition-all duration-300 hidden md:block ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center h-full">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          
          {/* Desktop Menu */}
          <div className="flex items-center gap-4">
            <DesktopMenu />
            <AuthDialog />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
};

export default Navbar;