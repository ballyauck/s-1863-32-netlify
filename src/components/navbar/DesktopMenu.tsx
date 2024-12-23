import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SignInForm from '../auth/SignInForm';

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center gap-8">
      <a href="#about" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">About</a>
      <a href="#services" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Services</a>
      <a href="#solutions" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Solutions</a>
      <a href="#contact" className="menu-link text-[#141413] hover:text-menu-hover transition-colors">Contact Us</a>

      <Dialog>
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
  );
};

export default DesktopMenu;