import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUserRound } from "lucide-react";

function ProfileAvatar() {
  const router = useRouter();
  return (
    <div
      role="button"
      onClick={() => {
        router.push("dashboard/profile");
      }}
      className="mx-auto flex w-fit flex-col items-center gap-[0.4rem] hover:text-primary"
    >
      <Avatar>
        <AvatarImage src="/images/passportPic.JPG" alt="profile" />
        <AvatarFallback>{<CircleUserRound />}</AvatarFallback>
      </Avatar>

      <p className="text-[1.2rem]">Profile</p>
    </div>
  );
}

export default ProfileAvatar;
