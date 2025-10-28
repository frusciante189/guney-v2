interface BlogMetadataProps {
  author: string;
  readTime: string;
}

export function BlogMetadata({ author, readTime }: BlogMetadataProps) {
  return (
    <div className="flex items-center gap-2.5">
      <p className="text-text-tertiary text-xs font-medium">{author}</p>
      <div className="size-[3px] bg-bg-separator-dot rounded-full" />
      <p className="text-text-tertiary text-xs font-medium">{readTime}</p>
    </div>
  );
}
