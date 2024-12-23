import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignInForm from './auth/SignInForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="w-[25rem] h-20 flex items-center justify-center">
            <img 
              src="/lovable-uploads/923f72ac-68ff-4281-b991-9c4d2bde01ba.png" 
              alt="Yuccan Technologies Logo" 
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">About</Link>
          <Link to="/services" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Services</Link>
          <Link to="/solutions" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Solutions</Link>
          <Link to="/contact" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Contact Us</Link>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="text-[#141413] font-medium hover:text-[#141413]/80 transition-colors">
              Sign in
            </button>
          </DialogTrigger>
          <DialogContent>
            <SignInForm />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;