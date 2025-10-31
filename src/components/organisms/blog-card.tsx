import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BlogMetadata } from "@/components/atoms/blog-metadata";
import { BlogTag } from "@/components/atoms/blog-tag";
import { cn } from "@/lib/utils";
import type { BlogCardProps } from "@/types/cards";

export function BlogCard({
  image,
  author,
  readTime,
  title,
  tags,
  date,
  featured = false,
  onClick,
}: BlogCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 cursor-pointer",
        featured && "xl:col-span-2"
      )}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-[20px] group">
        <Image
          src={image}
          width={556}
          height={372}
          alt={title}
          className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <BlogMetadata author={author} readTime={readTime} />
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-text-primary font-medium">{title}</p>
            </div>
            <ArrowUpRight className="text-text-primary" size={20} />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <BlogTag key={tag} text={tag} />
            ))}
          </div>
          <p className="text-text-muted text-xs font-medium">{date}</p>
        </div>
      </div>
    </div>
  );
}
