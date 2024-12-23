import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from '@/lib/supabase';
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        setShowOTP(true);
        toast({
          title: "Check your authenticator app",
          description: "Enter the code to complete sign in",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to sign in. Please check your credentials.",
      });
    }
  };

  const verifyOTP = async () => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otpCode,
        type: 'totp'
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You have successfully signed in.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid verification code.",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      {!showOTP ? (
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-lg font-semibold">Enter Authentication Code</h2>
            <p className="text-sm text-gray-500">
              Enter the code from your authenticator app
            </p>
          </div>
          <InputOTP
            value={otpCode}
            onChange={setOtpCode}
            maxLength={6}
            render={({ slots }) => (
              <InputOTPGroup className="gap-2 flex justify-center">
                {slots.map((slot, index) => (
                  <InputOTPSlot key={index} {...slot} />
                ))}
              </InputOTPGroup>
            )}
          />
          <Button onClick={verifyOTP} className="w-full">
            Verify
          </Button>
        </div>
      )}
    </div>
  );
};

export default SignInForm;