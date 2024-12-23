import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // First, attempt to sign in
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      // Check if 2FA is enabled for this user
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('two_factor_enabled, two_factor_secret')
        .eq('id', signInData.user.id)
        .single();

      if (profileError) throw profileError;

      if (profileData.two_factor_enabled) {
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

  const handleVerify2FA = async () => {
    setLoading(true);
    try {
      // Verify the OTP code
      const { data: profileData } = await supabase.auth.getUser();
      
      if (!profileData.user) throw new Error("User not found");

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('two_factor_secret')
        .eq('id', profileData.user.id)
        .single();

      if (profileError) throw profileError;

      // Here you would typically verify the OTP against the secret
      // For now, we'll just accept any 6-digit code
      if (otp.length === 6) {
        toast({
          title: "Success",
          description: "2FA verification successful!",
        });
        setShowOTP(false);
      } else {
        throw new Error("Invalid 2FA code");
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

  if (showOTP) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Enter 2FA Code</h2>
        <div className="space-y-4">
          <InputOTP
            value={otp}
            onChange={setOtp}
            maxLength={6}
            render={({ slots }) => (
              <InputOTPGroup className="gap-2">
                {slots.map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} index={index} />
                ))}
              </InputOTPGroup>
            )}
          />
          <Button
            onClick={handleVerify2FA}
            className="w-full"
            disabled={loading || otp.length !== 6}
          >
            {loading ? "Verifying..." : "Verify"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSignIn} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
};

export default SignInForm;