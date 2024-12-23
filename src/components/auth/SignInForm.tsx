import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import OTPVerification from "./OTPVerification";
import SignInFields from "./SignInFields";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showResendButton, setShowResendButton] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const { toast } = useToast();

  const handleResendConfirmation = async () => {
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });
      
      if (error) throw error;

      toast({
        title: "Success",
        description: "Confirmation email has been resent. Please check your inbox.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        if (signInError.message.includes("Email not confirmed")) {
          setShowResendButton(true);
          throw new Error("Please confirm your email address. Check your inbox for the confirmation link or click below to resend it.");
        }
        throw signInError;
      }

      if (!signInData.user) throw new Error("No user data returned");
      
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('two_factor_enabled')
        .eq('id', signInData.user.id)
        .single();

      if (profileError) throw profileError;

      if (profileData.two_factor_enabled) {
        setUserId(signInData.user.id);
        setShowOTP(true);
        toast({
          title: "2FA Required",
          description: "Please enter your 2FA code to continue.",
        });
      } else {
        toast({
          title: "Success",
          description: "Successfully signed in!",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOTPSuccess = () => {
    setShowOTP(false);
    toast({
      title: "Success",
      description: "Successfully signed in!",
    });
  };

  if (showOTP) {
    return <OTPVerification userId={userId} onSuccess={handleOTPSuccess} />;
  }

  return (
    <SignInFields
      email={email}
      password={password}
      loading={loading}
      showResendButton={showResendButton}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleSignIn}
      onResendConfirmation={handleResendConfirmation}
    />
  );
};

export default SignInForm;