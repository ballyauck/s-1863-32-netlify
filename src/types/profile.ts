export type ThemePreference = "light" | "dark";

export interface ProfileFormValues {
  display_name: string;
  bio: string;
  avatar_url: string;
  email_notifications: boolean;
  theme_preference: ThemePreference;
}