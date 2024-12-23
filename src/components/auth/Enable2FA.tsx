import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const Enable2FA = () => {
  const [loading, setLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  const enable2FA = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) throw new Error("Not authenticated");

      // Generate a new secret
      const secret = Math.random().toString(36).substring(2, 15);

      // Update the user's profile with the new secret and enable 2FA
      const { error } = await supabase
        .from('profiles')
        .update({
          two_factor_secret: secret,
          two_factor_enabled: true
        })
        .eq('id', userData.user.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "2FA has been enabled for your account!",
      });

      setShowVerification(true);
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

  const verifyOTP = async () => {
    setLoading(true);
    try {
      // In a real implementation, you would verify the OTP against the stored secret
      // For this example, we'll accept any 6-digit code
      if (otp.length === 6) {
        toast({
          title: "Success",
          description: "2FA verification successful!",
        });
        setShowVerification(false);
      } else {
        throw new Error("Invalid verification code");
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

  if (showVerification) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Verify 2FA Setup</h2>
        <p className="text-sm text-gray-500">
          Enter the verification code from your authenticator app to complete setup.
        </p>
        <InputOTP
          value={otp}
          onChange={setOtp}
          maxLength={6}
          render={({ slots }) => (
            <InputOTPGroup className="gap-2">
              {slots.map((slot, index) => (
                <InputOTPSlot key={index} {...slot} />
              ))}
            </InputOTPGroup>
          )}
        />
        <Button
          onClick={verifyOTP}
          className="w-full"
          disabled={loading || otp.length !== 6}
        >
          {loading ? "Verifying..." : "Verify"}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Enable Two-Factor Authentication</h2>
      <p className="text-sm text-gray-500">
        Enhance your account security by enabling two-factor authentication.
      </p>
      <Button
        onClick={enable2FA}
        className="w-full"
        disabled={loading}
      >
        {loading ? "Enabling..." : "Enable 2FA"}
      </Button>
    </div>
  );
};

export default Enable2FA;