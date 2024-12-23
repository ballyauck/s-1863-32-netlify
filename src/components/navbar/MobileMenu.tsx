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
      {/* Intentionally left empty to remove menu items */}
    </div>
  );
};

export default MobileMenu;