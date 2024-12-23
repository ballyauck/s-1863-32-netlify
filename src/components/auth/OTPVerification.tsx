import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

interface OTPVerificationProps {
  userId: string;
  onSuccess: () => void;
}

const OTPVerification = ({ userId, onSuccess }: OTPVerificationProps) => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleVerify2FA = async () => {
    setLoading(true);
    try {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('two_factor_secret')
        .eq('id', userId)
        .single();

      if (profileError) throw profileError;

      // Here you would typically verify the OTP against the secret
      // For now, we'll just accept any 6-digit code
      if (otp.length === 6) {
        toast({
          title: "Success",
          description: "2FA verification successful!",
        });
        onSuccess();
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
};

export default OTPVerification;