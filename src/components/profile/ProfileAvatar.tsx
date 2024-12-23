import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileAvatarProps {
  avatarUrl: string;
  displayName: string;
  email?: string;
}

export const ProfileAvatar = ({ avatarUrl, displayName, email }: ProfileAvatarProps) => {
  return (
    <div className="mb-8 flex items-center space-x-4">
      <Avatar className="h-20 w-20">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>
          {displayName?.charAt(0) || email?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};