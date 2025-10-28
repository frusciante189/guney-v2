import Image from "next/image";
import { Crown } from "lucide-react";

interface TestimonialAuthorProps {
  name: string;
  title: string;
  avatar: string;
  showCrown?: boolean;
}

export function TestimonialAuthor({
  name,
  title,
  avatar,
  showCrown = false,
}: TestimonialAuthorProps) {
  return (
    <div className="flex items-end gap-3">
      <div className="flex items-center gap-3 flex-1">
        <Image
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-full size-12 object-cover"
        />
        <div className="flex flex-col gap-1">
          <p className="text-text-primary font-medium">{name}</p>
          <p className="text-text-tertiary text-xs">{title}</p>
        </div>
      </div>
      {showCrown && (
        <div>
          <Crown size={24} className="text-text-tertiary" />
        </div>
      )}
    </div>
  );
}
