import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/types/profile";
import { DisplayNameField } from "./form-sections/DisplayNameField";
import { BioField } from "./form-sections/BioField";
import { AvatarUrlField } from "./form-sections/AvatarUrlField";
import { NotificationsField } from "./form-sections/NotificationsField";
import { ThemeField } from "./form-sections/ThemeField";

interface ProfileFormFieldsProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const ProfileFormFields = ({ form }: ProfileFormFieldsProps) => {
  return (
    <>
      <DisplayNameField form={form} />
      <BioField form={form} />
      <AvatarUrlField form={form} />
      <NotificationsField form={form} />
      <ThemeField form={form} />
    </>
  );
};