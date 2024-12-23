import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const AuthDialog = () => {
  const { isLoggedIn, handleSignOut } = useAuth();
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!isLoggedIn) return;
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profile } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", user.id)
        .single();

      if (profile?.display_name) {
        setDisplayName(profile.display_name);
      }
    };

    fetchUserProfile();
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
        <Link 
          to="/profile" 
          className="text-sm font-medium text-primary hover:underline"
        >
          {displayName || "My Profile"}
        </Link>
        <Button 
          variant="ghost" 
          onClick={handleSignOut}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
        >
          Sign Out
        </Button>
      </div>
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

export default AuthDialog;