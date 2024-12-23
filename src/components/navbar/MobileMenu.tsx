import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SignInForm from '../auth/SignInForm';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div className={`md:hidden fixed inset-x-0 top-[50px] bg-white shadow-lg transition-transform duration-300 ${
      isOpen ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="px-6 py-4 space-y-4">
        <a href="#about" className="block menu-link text-[#141413] hover:text-menu-hover transition-colors">About</a>
        <a href="#services" className="block menu-link text-[#141413] hover:text-menu-hover transition-colors">Services</a>
        <a href="#solutions" className="block menu-link text-[#141413] hover:text-menu-hover transition-colors">Solutions</a>
        <a href="#contact" className="block menu-link text-[#141413] hover:text-menu-hover transition-colors">Contact Us</a>
      </div>
    </div>
  );
};

export default MobileMenu;