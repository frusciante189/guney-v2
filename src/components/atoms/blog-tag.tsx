interface BlogTagProps {
  text: string;
}

export function BlogTag({ text }: BlogTagProps) {
  return (
    <button className="px-3 py-1.5 border border-border-gray rounded-full text-[11px] leading-4 text-text-primary">
      {text}
    </button>
  );
}
