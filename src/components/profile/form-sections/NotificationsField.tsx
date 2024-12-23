import { FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/types/profile";

interface NotificationsFieldProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const NotificationsField = ({ form }: NotificationsFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="email_notifications"
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <FormLabel className="text-base">
              Email Notifications
            </FormLabel>
            <FormDescription>
              Receive email notifications about account activity
            </FormDescription>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};