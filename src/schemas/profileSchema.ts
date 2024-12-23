import * as z from "zod";
import { ThemePreference } from "@/types/profile";

export const profileFormSchema = z.object({
  display_name: z.string().min(2, "Display name must be at least 2 characters"),
  bio: z.string().max(500, "Bio must be less than 500 characters"),
  avatar_url: z.string().url("Must be a valid URL").or(z.string().length(0)),
  email_notifications: z.boolean(),
  theme_preference: z.enum(["light", "dark"] as const),
});