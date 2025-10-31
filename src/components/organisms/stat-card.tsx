import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export const StatCard = ({
  number,
  title,
  description,
  className,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "bg-bg-gray-lighter rounded-4xl flex flex-col gap-5 p-10",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="xl:text-5xl md:text-4xl text-3xl text-text-primary font-bold">
          {number}
        </div>
        <h6 className="text-text-muted xl:text-xl text-lg xl:leading-7 leading-5 font-bold xl:whitespace-nowrap">
          {title}
        </h6>
      </div>
      <p className="text-text-tertiary text-sm">{description}</p>
    </div>
  );
}
