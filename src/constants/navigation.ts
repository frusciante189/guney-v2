/**
 * Navigation constants for the application
 * Centralized navigation data for navbar, footer, and other components
 */

export interface NavItem {
  id: string;
  href: string;
  label: string;
}

export interface FooterLink {
  href: string;
  text: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

/**
 * Main navigation items (used in navbar)
 */
export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: "services", href: "#services", label: "Services" },
  { id: "work", href: "#work", label: "Work" },
  { id: "process", href: "#process", label: "Process" },
  { id: "pricing", href: "#pricing", label: "Pricing" },
  { id: "faq", href: "#faq", label: "FAQ" },
  { id: "blog", href: "#blog", label: "Blog" },
];

/**
 * Footer navigation sections
 */
export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { href: "#about", text: "About Us" },
  { href: "#pricing", text: "Pricing" },
  { href: "#contact", text: "Contact Us" },
  { href: "#work", text: "Case Studies" },
];

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
  { href: "https://facebook.com", text: "Facebook", external: true },
  { href: "https://instagram.com", text: "Instagram", external: true },
  { href: "https://linkedin.com", text: "LinkedIn", external: true },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { href: "/privacy-policy", text: "Privacy Policy" },
  { href: "/terms-of-service", text: "Terms of Service" },
];
