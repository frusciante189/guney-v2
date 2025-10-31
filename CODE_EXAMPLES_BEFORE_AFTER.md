# CODE EXAMPLES: BEFORE & AFTER

## 1. Extract Duplicate "Book a Call" Button

### BEFORE (Currently duplicated 5+ times)

**navbar.tsx lines 35-36:**
```tsx
<Button variant="secondary" size="sm" icon={ArrowUpRight} className="p-1.5 gap-2 max-w-max">
  <span className="px-2 py-1">Book a Call</span>
</Button>
```

**footer.tsx line 30:**
```tsx
<Button variant="secondary" size="sm" icon={ArrowUpRight} className="p-1.5 gap-2 max-w-max">
  <span className="px-2 py-1">Book a Call</span>
</Button>
```

### AFTER (DRY)

**src/components/molecules/BookCallButton.tsx (NEW):**
```tsx
import { ArrowUpRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/atoms";

interface BookCallButtonProps extends Omit<ButtonProps, "children"> {
  text?: string;
}

export function BookCallButton({ 
  text = "Book a Call", 
  variant = "secondary",
  ...props 
}: BookCallButtonProps) {
  return (
    <Button 
      {...props}
      variant={variant}
      size="sm" 
      icon={ArrowUpRight} 
      className="p-1.5 gap-2 max-w-max"
    >
      <span className="px-2 py-1">{text}</span>
    </Button>
  );
}
```

**Then use everywhere:**
```tsx
import { BookCallButton } from "@/components/molecules";

// navbar.tsx
<BookCallButton onClick={handleBookCall} />

// footer.tsx
<BookCallButton onClick={handleBookCall} />

// faq-contact-card.tsx
<BookCallButton onClick={onBookCall} />
```

---

## 2. Move Hardcoded Data to Constants

### BEFORE (In component)

**src/components/organisms/testimonials.tsx:**
```tsx
interface Testimonial {
  id: string;
  quote: string;
  author: { name: string; title: string; avatar: string };
  metric?: { value: string; label: string };
  layout: "large" | "medium" | "small";
  quoteSize?: "default" | "small";
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "mehmet-yilmaz",
    quote: "Entering the German market seemed impossible with all the paperwork and regulations. Güney handled everything — from contracts to payment setup. We closed our first €500K deal within 6 months.",
    author: {
      name: "Mehmet Yılmaz",
      title: "CEO, Yılmaz Tekstil",
      avatar: "/w1.avif",
    },
    metric: {
      value: "€500K",
      label: "First year European revenue",
    },
    layout: "large",
  },
  // ... more data
];

export default function Testimonials() {
  return (
    <SectionContainer>
      <SectionContent>
        {/* ... */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {TESTIMONIALS.map((testimonial, index) => (
            // ...
          ))}
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
```

### AFTER (Extracted to constants)

**src/constants/content.ts (NEW):**
```tsx
// Types (can also go to types/content.ts)
export interface Testimonial {
  id: string;
  quote: string;
  author: { name: string; title: string; avatar: string };
  metric?: { value: string; label: string };
  layout: "large" | "medium" | "small";
  quoteSize?: "default" | "small";
}

export interface BlogPost {
  id: string;
  image: string;
  author: string;
  readTime: string;
  title: string;
  tags: string[];
  date: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
}

export interface Stat {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Content data
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "mehmet-yilmaz",
    quote: "Entering the German market seemed impossible with all the paperwork and regulations. Güney handled everything — from contracts to payment setup. We closed our first €500K deal within 6 months.",
    author: {
      name: "Mehmet Yılmaz",
      title: "CEO, Yılmaz Tekstil",
      avatar: "/w1.avif",
    },
    metric: {
      value: "€500K",
      label: "First year European revenue",
    },
    layout: "large",
  },
  // ... rest of testimonials
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "german-mistakes",
    image: "/b1.avif",
    author: "Güney Kılıç",
    readTime: "5 Min Read",
    title: "5 Common Mistakes Turkish Manufacturers Make When Entering Germany",
    tags: ["Market Entry", "Germany"],
    date: "Jan 25, 2025",
    featured: true,
  },
  // ... rest of blog posts
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "hannover-messe-2024",
    title: "Hannover Messe 2024",
    image: "/our-work/1.jpg",
    tags: ["Germany", "Industrial Tech"],
  },
  // ... rest of projects
];

export const STATS_DATA: Stat[] = [
  {
    number: "50+",
    title: "European Market Entries",
    description: "Successfully guided manufacturers through complex European market entry, from contracts to compliance, ensuring smooth and secure expansion.",
  },
  // ... rest of stats
];

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Market Assessment",
    description: "We analyze your product fit for European markets and identify the best entry strategy based on your capabilities and goals.",
  },
  // ... rest of process steps
];

export const FAQ_ITEMS_DATA: FAQItem[] = [
  {
    id: "item-1",
    question: "How do you help Turkish manufacturers enter European markets?",
    answer: "I provide end-to-end support for European expansion — from market assessment and contract setup to payment infrastructure and trade fair execution. My goal is to remove operational barriers so you can focus on winning clients.",
  },
  // ... rest of FAQ items
];
```

**src/components/organisms/testimonials.tsx (Simplified):**
```tsx
import { SectionHeader } from "@/components/molecules";
import { SectionContainer, SectionContent } from "@/components/organisms/section-container";
import { TestimonialCard } from "@/components/organisms/testimonial-card";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { getStaggerAnimation } from "@/constants/animations";
import { TESTIMONIALS_DATA } from "@/constants/content";

export default function Testimonials() {
  return (
    <SectionContainer className="xl:pb-24 md:pb-14 pb-10">
      <SectionContent className="items-center">
        <SectionHeader
          badge="Client Testimonials"
          title="Trusted by Turkish manufacturers"
          titleAccent="expanding into Europe"
          description="Real stories from manufacturers who successfully entered European markets."
          alignment="center"
        />
        <div className="w-full bg-bg-gray-lighter rounded-section p-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                {...getStaggerAnimation(index)}
                className={cn(
                  "h-full",
                  testimonial.layout === "large" && "md:col-span-2 md:row-span-2",
                  testimonial.layout === "medium" && "md:col-span-2"
                )}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  metric={testimonial.metric}
                  layout={testimonial.layout}
                  quoteSize={testimonial.quoteSize}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
```

**Same approach for:**
- blog-section.tsx → use BLOG_POSTS_DATA
- our-work.tsx → use PROJECTS_DATA
- impact-section.tsx → use STATS_DATA
- process-section.tsx → use PROCESS_STEPS_DATA
- faq.tsx → use FAQ_ITEMS_DATA

---

## 3. Create Spacing Constants

### BEFORE (Repeated patterns)

**All section components:**
```tsx
// hero.tsx
className="xl:gap-20 gap-16"
className="xl:gap-14 md:gap-11 gap-10"

// testimonials.tsx
className="xl:gap-16 md:gap-14 gap-10"

// impact-section.tsx
className="xl:gap-16 md:gap-14 gap-10"

// footer.tsx
className="xl:gap-20 md:gap-16 gap-12"

// process-section.tsx
className="xl:gap-16 lg:gap-14 gap-10"
```

### AFTER (DRY)

**src/constants/spacing.ts (NEW):**
```tsx
/**
 * Section spacing values for consistent gaps across responsive breakpoints
 */
export const SECTION_SPACING = {
  vertical: {
    // Large gap: For major section dividers
    lg: "xl:gap-20 md:gap-14 gap-10",
    
    // Medium gap: For most section content
    md: "xl:gap-16 md:gap-14 gap-10",
    
    // Small gap: For tight layouts
    sm: "xl:gap-12 md:gap-10 gap-8",
  },
  
  horizontal: {
    // Comfortable: Default spacing
    default: "gap-8",
    
    // Compact: For dense layouts
    compact: "gap-4",
    
    // Comfortable: Readable spacing
    comfortable: "gap-6",
  }
} as const;

/**
 * Grid gap patterns (for grid-based layouts)
 */
export const GRID_GAPS = {
  cards: "gap-4",      // Card grids
  tight: "gap-2",      // Compact items
  comfortable: "gap-6", // Readable spacing
  large: "gap-8",      // Spacious layouts
} as const;
```

**Then use everywhere:**
```tsx
import { SECTION_SPACING, GRID_GAPS } from "@/constants/spacing";

// hero.tsx
<div className={`flex flex-col ${SECTION_SPACING.vertical.lg}`}>
  {/* content */}
</div>

// testimonials.tsx
<div className={`flex flex-col ${SECTION_SPACING.vertical.md}`}>
  {/* content */}
</div>

// footer.tsx
<div className={`flex flex-col ${SECTION_SPACING.vertical.lg}`}>
  {/* content */}
</div>
```

---

## 4. Fix Map Keys

### BEFORE (Using index)

**blog-card.tsx lines 57-59:**
```tsx
{tags.map((tag, index) => (
  <BlogTag key={index} text={tag} />  // BAD: index changes if items reorder
))}
```

**project-card.tsx lines 35-37:**
```tsx
{tags.map((tag, index) => (
  <ProjectTag key={index} text={tag} />  // BAD
))}
```

### AFTER (Using stable identifier)

**blog-card.tsx:**
```tsx
{tags.map((tag) => (
  <BlogTag key={tag} text={tag} />  // GOOD: tag is stable identifier
))}
```

**project-card.tsx:**
```tsx
{tags.map((tag) => (
  <ProjectTag key={tag} text={tag} />  // GOOD
))}
```

**If tag is not unique (rare), use ID:**
```tsx
interface TagData {
  id: string;
  text: string;
}

{tags.map((tag) => (
  <BlogTag key={tag.id} text={tag.text} />
))}
```

---

## 5. Fix Service Card Type Safety

### BEFORE (Weak typing)

**src/constants/services.ts:**
```tsx
interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  type: "image" | "tags" | "checklist" | "chat" | "dark";
  gridClass: string;
  image?: string;          // Optional but required for type="image"
  tags?: ServiceTagData[]; // Optional but required for type="tags"
  checklist?: ChecklistItemData[];
  chat?: ChatMessage;
  showButton?: boolean;
}
```

### AFTER (Strong typing with discriminated union)

**src/constants/services.ts:**
```tsx
type ServiceCardData = 
  | {
      type: "image";
      id: string;
      title: string;
      description: string;
      gridClass: string;
      image: string;  // REQUIRED
    }
  | {
      type: "tags";
      id: string;
      title: string;
      description: string;
      gridClass: string;
      tags: ServiceTagData[];  // REQUIRED
    }
  | {
      type: "checklist";
      id: string;
      title: string;
      description: string;
      gridClass: string;
      checklist: ChecklistItemData[];  // REQUIRED
      showButton?: boolean;
    }
  | {
      type: "chat";
      id: string;
      title: string;
      description: string;
      gridClass: string;
      chat: ChatMessage;  // REQUIRED
    }
  | {
      type: "dark";
      id: string;
      title: string;
      description: string;
      gridClass: string;
      showButton?: boolean;
    };
```

---

## 6. Use React.memo on Pure Components

### BEFORE (Potential unnecessary re-renders)

**src/components/atoms/Badge.tsx:**
```tsx
export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps): React.JSX.Element {
  const isDark = variant === "dark";
  return (
    <div className={cn("p-1.5 relative max-w-max", className)}>
      {/* ... */}
    </div>
  );
}
```

### AFTER (Memoized)

**src/components/atoms/Badge.tsx:**
```tsx
export const Badge = React.memo(function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps): React.JSX.Element {
  const isDark = variant === "dark";
  return (
    <div className={cn("p-1.5 relative max-w-max", className)}>
      {/* ... */}
    </div>
  );
});

// Or with display name for debugging:
Badge.displayName = "Badge";
```

**Apply to:**
- Badge
- BlogCard
- ProjectCard
- StatCard
- TestimonialCard
- ChecklistItem
- FooterLink
- NavLink

---

## 7. Create Hero Barrel Export

### BEFORE (Long import statements)

**src/components/organisms/hero.tsx:**
```tsx
import HeroBadge from "@/components/organisms/hero/hero-badge";
import HeroCTA from "@/components/organisms/hero/hero-cta";
import HeroHeading from "@/components/organisms/hero/hero-heading";
import HeroSocialProof from "@/components/organisms/hero/hero-social-proof";
import HeroTestimonialCard from "@/components/organisms/hero/hero-testimonial-card-unified";
import HeroTrustedCompanies from "@/components/organisms/hero/hero-trusted-companies";
import HeroVideo from "@/components/organisms/hero/hero-video";
```

### AFTER (Clean barrel export)

**src/components/organisms/hero/index.ts (NEW):**
```tsx
export { default as HeroBadge } from "./hero-badge";
export type { HeroBadgeProps } from "./types";

export { default as HeroCTA } from "./hero-cta";
export type { HeroCTAProps } from "./types";

export { default as HeroHeading } from "./hero-heading";

export { default as HeroSocialProof } from "./hero-social-proof";
export type { HeroSocialProofProps } from "./types";

export { default as HeroTestimonialCard } from "./hero-testimonial-card-unified";
export type { HeroTestimonialCardProps } from "./hero-testimonial-card-unified";

export { default as HeroTrustedCompanies } from "./hero-trusted-companies";
export type { HeroTrustedCompaniesProps } from "./types";

export { default as HeroVideo } from "./hero-video";
export type { HeroVideoProps } from "./types";
```

**Then in hero.tsx:**
```tsx
import {
  HeroBadge,
  HeroCTA,
  HeroHeading,
  HeroSocialProof,
  HeroTestimonialCard,
  HeroTrustedCompanies,
  HeroVideo,
} from "@/components/organisms/hero";
```

---

## 8. Standardize Section Content Usage

### BEFORE (Inconsistent)

**our-services.tsx (using SectionContent):**
```tsx
<SectionContainer id="services">
  <SectionContent>
    <AnimatedSection animation={FADE_IN_UP}>
      <SectionHeader {...} />
    </AnimatedSection>
    <div className="bg-bg-gray-lighter rounded-section p-5">
      <ServiceCards />
    </div>
  </SectionContent>
</SectionContainer>
```

**faq.tsx (NOT using SectionContent):**
```tsx
<SectionContainer id="faq">
  <div className="xl:gap-16 md:gap-14 gap-20 flex justify-between lg:flex-row flex-col">
    {/* content */}
  </div>
</SectionContainer>
```

### AFTER (Consistent)

**All sections use SectionContent:**
```tsx
<SectionContainer id="faq">
  <SectionContent>
    <div className="flex justify-between lg:flex-row flex-col">
      {/* content */}
    </div>
  </SectionContent>
</SectionContainer>
```

---

This comprehensive approach will make the codebase:
- DRY (Don't Repeat Yourself)
- Maintainable (easier to update)
- Testable (separate data from UI)
- Scalable (room for growth)
- Consistent (unified patterns)

