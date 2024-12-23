import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SignInForm from './auth/SignInForm';
import SignUpForm from './auth/SignUpForm';
import MobileMenu from './navbar/MobileMenu';
import DesktopMenu from './navbar/DesktopMenu';
import Logo from './navbar/Logo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

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

  useEffect(() => {
    // Check initial auth state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
      toast({
        title: "Success",
        description: "Successfully signed out",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  const AuthDialog = () => {
    if (isLoggedIn) {
      return (
        <Button 
          variant="ghost" 
          onClick={handleSignOut}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
        >
          Sign Out
        </Button>
      );
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium">
            Sign In
          </button>
        </DialogTrigger>
        <DialogContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <SignInForm />
            </TabsContent>
            <TabsContent value="signup">
              <SignUpForm />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    );
  };

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