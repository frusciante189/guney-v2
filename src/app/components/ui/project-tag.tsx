interface ProjectTagProps {
  text: string;
}

export function ProjectTag({ text }: ProjectTagProps) {
  return (
    <p className="text-text-tertiary text-xs font-medium">
      {text}
    </p>
  );
}
