import { Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DesktopMenu = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <div className="hidden md:flex items-center gap-8">
      {!isMainPage && (
        <Link 
          to="/" 
          className="menu-link text-[#141413] hover:text-menu-hover transition-colors flex items-center gap-2"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>
      )}
      <a href="#about" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">About</a>
      <a href="#services" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Services</a>
      <a href="#solutions" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Solutions</a>
      <a href="#contact" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Contact Us</a>
    </div>
  );
};

export default DesktopMenu;