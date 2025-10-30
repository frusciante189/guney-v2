import Image from "next/image";
import { AvatarBadge } from "@/components/atoms";

interface AvatarItem {
  src: string;
  alt: string;
}

interface AvatarGroupProps {
  items: AvatarItem[];
  max?: number;
  totalCount?: string;
  size?: number;
}

export function AvatarGroup({
  items,
  max,
  totalCount,
  size = 36,
}: AvatarGroupProps) {
  const displayItems = max ? items.slice(0, max) : items;

  return (
    <div className="flex items-center -space-x-2">
      {displayItems.map((item) => (
        <Image
          key={item.src}
          src={item.src}
          width={size}
          height={size}
          className="size-9 rounded-full shadow-avatar-ring object-cover"
          alt={item.alt}
        />
      ))}
      {totalCount && (
        <div aria-label={`More than ${totalCount} reviewers`}>
          <AvatarBadge count={totalCount} />
        </div>
      )}
    </div>
  );
}
