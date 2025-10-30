import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLinkProps {
  href: string;
  text: string;
  external?: boolean;
  variant?: "default" | "small";
}

export function FooterLink({
  href,
  text,
  external = false,
  variant = "default",
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white/60 hover:text-white transition-colors",
        variant === "small" ? "text-xs" : "text-sm",
        external && "flex items-center gap-2"
      )}
    >
      {text}
      {external && <ArrowUpRight size={14} />}
    </Link>
  );
}
