import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectTag } from "@/components/atoms/project-tag";
import { IconButton } from "@/components/atoms";
import type { ProjectCardProps } from "@/types/cards";

export function ProjectCard({ title, image, tags, onClick }: ProjectCardProps) {
  return (
    <div
      className="border border-border-gray bg-white rounded-4xl p-3.5 flex flex-col gap-3 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full aspect-4/3 overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3 flex flex-col gap-2">
        <div className="flex gap-3 items-start">
          <h6 className="text-text-primary xl:text-xl text-lg font-medium flex-1">
            {title}
          </h6>
          <IconButton icon={ArrowUpRight} size="md" aria-label="View project" />
        </div>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <ProjectTag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
