import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useAuth } from "@/contexts/AuthContext";

const AuthDialog = () => {
  const { isLoggedIn, handleSignOut } = useAuth();

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

export default AuthDialog;