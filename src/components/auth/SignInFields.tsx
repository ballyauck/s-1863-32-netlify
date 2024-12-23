import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SignInFieldsProps {
  email: string;
  password: string;
  loading: boolean;
  showResendButton: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onResendConfirmation: () => void;
}

const SignInFields = ({
  email,
  password,
  loading,
  showResendButton,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onResendConfirmation,
}: SignInFieldsProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
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
          onChange={(e) => onPasswordChange(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Signing in..." : "Sign in"}
      </Button>
      
      {showResendButton && (
        <Button
          type="button"
          variant="outline"
          className="w-full mt-2"
          onClick={onResendConfirmation}
        >
          Resend Confirmation Email
        </Button>
      )}
    </form>
  );
};

export default SignInFields;