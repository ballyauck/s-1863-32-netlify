import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues, ThemePreference } from "@/types/profile";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ThemeFieldProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const ThemeField = ({ form }: ThemeFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="theme_preference"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Theme Preference</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};