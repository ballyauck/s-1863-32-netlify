import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/types/profile";

interface BioFieldProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const BioField = ({ form }: BioFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="bio"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Bio</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us about yourself"
              {...field}
            />
          </FormControl>
          <FormDescription>
            Maximum 500 characters
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};