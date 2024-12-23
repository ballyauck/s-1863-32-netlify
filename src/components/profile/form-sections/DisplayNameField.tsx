import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/types/profile";

interface DisplayNameFieldProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const DisplayNameField = ({ form }: DisplayNameFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="display_name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Display Name</FormLabel>
          <FormControl>
            <Input placeholder="Your display name" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};