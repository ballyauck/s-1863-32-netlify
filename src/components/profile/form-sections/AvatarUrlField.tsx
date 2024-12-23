import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/types/profile";

interface AvatarUrlFieldProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const AvatarUrlField = ({ form }: AvatarUrlFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="avatar_url"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Avatar URL</FormLabel>
          <FormControl>
            <Input placeholder="https://example.com/avatar.jpg" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};