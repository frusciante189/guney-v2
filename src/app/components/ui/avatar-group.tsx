import Image from "next/image";

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
        <div
          className="size-9 flex items-center justify-center font-medium text-text-primary outline outline-border-gray shadow-avatar-ring rounded-full bg-bg-gray-lighter text-xs"
          aria-label={`More than ${totalCount} reviewers`}
        >
          {totalCount}
        </div>
      )}
    </div>
  );
}
