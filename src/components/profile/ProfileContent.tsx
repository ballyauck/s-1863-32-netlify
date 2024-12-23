import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileFormFields } from "./ProfileForm";
import { ProfileFormValues } from "@/types/profile";
import { profileFormSchema } from "@/schemas/profileSchema";
import { useProfile } from "@/hooks/useProfile";
import { useEffect } from "react";

export const ProfileContent = () => {
  const { user, loading, fetchProfile, updateProfile } = useProfile();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      display_name: "",
      bio: "",
      avatar_url: "",
      email_notifications: true,
      theme_preference: "light",
    },
  });

  useEffect(() => {
    const loadProfile = async () => {
      const profile = await fetchProfile();
      if (profile) {
        form.reset({
          display_name: profile.display_name || "",
          bio: profile.bio || "",
          avatar_url: profile.avatar_url || "",
          email_notifications: profile.email_notifications,
          theme_preference: profile.theme_preference || "light",
        });
      }
    };

    loadProfile();
  }, [fetchProfile, form]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <ProfileAvatar 
          avatarUrl={form.watch("avatar_url")}
          displayName={form.watch("display_name")}
          email={user?.email}
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(updateProfile)} className="space-y-6">
            <ProfileFormFields form={form} />
            <Button type="submit" className="w-full">
              Save Changes
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};