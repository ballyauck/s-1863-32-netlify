import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const Enable2FA = () => {
  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const { toast } = useToast();

  const handleEnable2FA = async () => {
    setLoading(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData.user) throw new Error("User not found");

      // For this example, we'll just enable 2FA without actual TOTP verification
      const { error } = await supabase
        .from('profiles')
        .update({
          two_factor_enabled: true,
          two_factor_secret: 'dummy_secret' // In a real app, this would be a proper TOTP secret
        })
        .eq('id', userData.user.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "2FA has been enabled for your account.",
      });
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
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Enable Two-Factor Authentication</h2>
        <p className="text-sm text-gray-500">
          Enhance your account security by enabling 2FA.
        </p>
      </div>
      <div className="space-y-4">
        <InputOTP
          value={verificationCode}
          onChange={setVerificationCode}
          maxLength={6}
          render={({ slots }) => (
            <InputOTPGroup className="gap-2">
              {slots.map((slot, i) => (
                <InputOTPSlot key={i} {...slot} index={i} />
              ))}
            </InputOTPGroup>
          )}
        />
        <Button
          onClick={handleEnable2FA}
          className="w-full"
          disabled={loading || verificationCode.length !== 6}
        >
          {loading ? "Enabling..." : "Enable 2FA"}
        </Button>
      </div>
    </div>
  );
};

export default Enable2FA;