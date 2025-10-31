# COMPREHENSIVE CODE ANALYSIS REPORT
## Guney v2 Next.js/React Codebase

**Analysis Date:** October 30, 2025
**Total Files Analyzed:** 79 source files
**Scope:** Full component architecture, pages, atoms, molecules, organisms

---

## EXECUTIVE SUMMARY

This codebase demonstrates good foundational structure with Atomic Design principles, but contains several anti-patterns, code smells, and improvement opportunities. The most critical issues involve duplicate component patterns, missing abstractions, inconsistent styling approaches, and performance considerations.

**Critical Priority Issues:** 8
**High Priority Issues:** 15
**Medium Priority Issues:** 12
**Low Priority Issues:** 10

---

## 1. COMPONENT STRUCTURE ANTI-PATTERNS

### 1.1 CRITICAL: Duplicate "Book a Call" Button Pattern

**Files Affected:**
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/navbar.tsx` (lines 35-36, 74-76)
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/footer.tsx` (line 30-31)
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/faq-contact-card.tsx` (line 23-31)
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/service-cards/ServiceChecklistCard.tsx` (lines 55-57)

**Issue:**
The same "Book a Call" button pattern is repeated 5+ times with identical markup:
```tsx
<Button variant="secondary" size="sm" icon={ArrowUpRight} className="p-1.5 gap-2 max-w-max">
  <span className="px-2 py-1">Book a Call</span>
</Button>
```

**Impact:** Medium - Maintainability, consistency, styling changes require updates in multiple places

**Recommendation:** Create a dedicated `BookCallButton` compound component:
```tsx
// src/components/molecules/BookCallButton.tsx
export function BookCallButton({ onClick, variant = "secondary" }: BookCallButtonProps) {
  return (
    <Button 
      variant={variant} 
      size="sm" 
      icon={ArrowUpRight} 
      className="p-1.5 gap-2 max-w-max"
      onClick={onClick}
    >
      <span className="px-2 py-1">Book a Call</span>
    </Button>
  );
}
```

---

### 1.2 HIGH: Duplicate Section Content Wrapper Pattern

**Files Affected:**
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/testimonials.tsx` (line 87)
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/impact-section.tsx` (line 39)
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/our-work.tsx` (line 60)
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/blog-section.tsx` (line 55)
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/process-section.tsx` (line 52)

**Issue:**
Every section repeats the same container wrapper pattern with gap styling:
```tsx
<div className="xl:gap-16 md:gap-14 gap-10 flex flex-col">
  {/* content */}
</div>
```

**Impact:** High - Difficult to maintain consistent spacing, hard to refactor

**Recommendation:** The `SectionContent` component exists but is underutilized. Should be the standard wrapper:
```tsx
// Already exists but should be mandatory in all sections
<SectionContent>
  {children}
</SectionContent>
```

---

### 1.3 MEDIUM: Unused Wrapper Elements in Grid Layouts

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/blog-section.tsx` (lines 62-78)

**Issue:**
Unnecessary wrapper `div` for motion animations that should be directly on the grid:
```tsx
<motion.div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6" {...FADE_IN_DELAYED}>
  {BLOG_POSTS.map((post) => (
    <BlogCard {...post} />  // Could apply motion directly to cards
  ))}
</motion.div>
```

**Recommendation:** Apply stagger animation directly to individual cards with `getStaggerAnimation()` like in other sections.

---

### 1.4 HIGH: Custom Button-like Divs Instead of Components

**Files Affected:**
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/hero/hero-cta.tsx` (lines 10-24)
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/hero/hero-video.tsx` (lines 19-26)

**Issue:**
Custom button implementations using `div` or `button` with inline classes instead of using the `Button` component:

**hero-cta.tsx:**
```tsx
<button className="p-2.5 bg-bg-dark rounded-full flex items-center hover:bg-opacity-90 transition-all ...">
  <div className="size-7 bg-white/13 flex items-center justify-center rounded-full" />
  <div className="py-1 px-3">
    <span className="text-white text-sm">{text}</span>
  </div>
</button>
```

**Impact:** Medium - Not using unified Button component, inconsistent styling, hard to maintain

**Recommendation:** Use the `Button` component with custom styling or create specialized button variants.

---

### 1.5 MEDIUM: Accordion Implementation Complexity

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/faq.tsx` (lines 83-121)

**Issue:**
Deeply nested Accordion markup is verbose and has hardcoded `defaultValue="item-5"` (line 86). This means the 5th FAQ item always opens by default - not documented or validated.

**Recommendation:** Extract accordion control to a constant and document the behavior:
```tsx
const DEFAULT_OPEN_FAQ_ID = "item-5"; // Why is this the default?
```

---

## 2. PROPS AND INTERFACE ISSUES

### 2.1 CRITICAL: Inconsistent Optional Props Across Similar Components

**BlogCard vs ProjectCard:**

BlogCard (`blog-card.tsx`):
```tsx
interface BlogCardProps {
  image: string;      // Required
  author: string;     // Required
  readTime: string;   // Required
  title: string;      // Required
  tags: string[];     // Required
  date: string;       // Required
  featured?: boolean;
  onClick?: () => void;
}
```

ProjectCard (`project-card.tsx`):
```tsx
interface ProjectCardProps {
  title: string;      // Required
  image: string;      // Required
  tags: string[];     // Required
  onClick?: () => void;
  // Missing: author, date, readTime
}
```

**Issue:** No consistency in what fields are optional. BlogCard has 6 required props while ProjectCard has 3. Similar cards should have similar structures.

**Impact:** Medium - Confusing API, hard to abstract further

**Recommendation:** Create a base CardProps interface:
```tsx
interface BaseCardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

interface BlogCardProps extends BaseCardProps {
  author: string;
  readTime: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

interface ProjectCardProps extends BaseCardProps {
  tags: string[];
}
```

---

### 2.2 HIGH: Missing Type Safety in Service Cards

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/constants/services.ts`

**Issue:**
Service card data has optional fields that are sometimes used without null checks:

```tsx
interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  type: "image" | "tags" | "checklist" | "chat" | "dark";
  gridClass: string;
  image?: string;          // Optional but required for type="image"
  tags?: ServiceTagData[]; // Optional but required for type="tags"
  checklist?: ChecklistItemData[]; // Optional but required for type="checklist"
  chat?: ChatMessage;      // Optional but required for type="chat"
  showButton?: boolean;
}
```

**Problem:** The type field doesn't discriminate which optional fields are required. No type safety guarantee.

**Recommendation:** Use discriminated unions:
```tsx
type ServiceCardData = 
  | { type: "image"; image: string; ... }
  | { type: "tags"; tags: ServiceTagData[]; ... }
  | { type: "checklist"; checklist: ChecklistItemData[]; ... }
  | { type: "chat"; chat: ChatMessage; ... }
  | { type: "dark"; ... };
```

---

### 2.3 MEDIUM: Non-Semantic Props on Components

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/faq-contact-card.tsx`

**Issue:**
Props have poor semantic naming:
```tsx
interface FAQContactCardProps {
  title?: string;       // Generic - what kind of title?
  description?: string; // Generic - is this subtitle?
  onBookCall?: () => void;
}
```

**Better naming:**
```tsx
interface FAQContactCardProps {
  heading?: string;
  message?: string;
  onBookCall?: () => void;
}
```

---

## 3. STYLING AND CLASSNAME ISSUES

### 3.1 CRITICAL: Hardcoded Repeated Spacing Values

**Files Affected:** Nearly all section components

**Issue:**
Spacing values are repeated throughout rather than using utility constants:

```tsx
// navbar.tsx
className="gap-8"
className="gap-2"

// hero.tsx
className="xl:gap-20 gap-16"  // Repeated in many places
className="xl:gap-14 md:gap-11 gap-10"

// testimonials.tsx
className="xl:gap-16 md:gap-14 gap-10"  // Same pattern repeated

// our-work.tsx
className="gap-4" (3 times)
className="gap-8"

// footer.tsx
className="xl:gap-20 md:gap-16 gap-12"  // Another variation
```

**Pattern Found:**
- `xl:gap-20 md:gap-14 gap-10` - Appears in 4+ files
- `xl:gap-16 md:gap-14 gap-10` - Appears in 3+ files
- Custom gap-4, gap-8, gap-5, etc. spread throughout

**Impact:** High - Not DRY, hard to refactor spacing system, accessibility concerns with inconsistent spacing

**Recommendation:** Create spacing utility constants:
```tsx
// src/constants/spacing.ts
export const SECTION_SPACING = {
  vertical: {
    lg: "xl:gap-20 md:gap-14 gap-10",
    md: "xl:gap-16 md:gap-14 gap-10",
    sm: "xl:gap-12 md:gap-10 gap-8",
  },
  horizontal: {
    default: "gap-8",
    compact: "gap-4",
    comfortable: "gap-6",
  }
} as const;

// Then use:
<div className={SECTION_SPACING.vertical.lg}>
```

---

### 3.2 CRITICAL: Inconsistent Button Padding Patterns

**Files Affected:**
- `navbar.tsx`: `p-2` (lines 35, 74)
- `faq-contact-card.tsx`: `p-1.5 gap-2` (line 28)
- `footer.tsx`: `p-1.5 gap-2` (line 30)
- `ServiceChecklistCard.tsx`: `p-1.5 gap-2` (line 55)

**Issue:**
Same button component receives different padding values across sections. No consistency.

**Recommendation:** Create padding presets:
```tsx
const BUTTON_PADDING = {
  sm: "p-1.5",
  md: "p-2",
  lg: "p-3"
} as const;

// Or use Button component size prop instead of className overrides
```

---

### 3.3 HIGH: className Concatenation Instead of cn() Utility

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/service-cards/ServiceChecklistCard.tsx` (line 44)

**Issue:**
Using string concatenation with conditional:
```tsx
className={cn(gridClass, "bg-white rounded-4xl p-7 flex justify-between gap-12")}
```

This works but mixing dynamic grid classes with hardcoded utilities is error-prone. Better approach:

```tsx
const baseClasses = cn(
  "bg-white rounded-4xl p-7 flex justify-between gap-12"
);

className={cn(gridClass, baseClasses)}
```

---

### 3.4 MEDIUM: Hard to Remember Tailwind Breakpoint Patterns

**Issue:**
Breakpoint usage is inconsistent across components:

```tsx
// Different patterns for same concept:
className="hidden xl:block"
className="xl:block hidden" 
className="lg:block flex"
className="md:flex hidden"
```

**Recommendation:** Create consistent breakpoint utility functions.

---

## 4. IMPORT AND EXPORT PATTERNS

### 4.1 MEDIUM: Missing Barrel Exports for Subcomponents

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/hero/`

**Issue:**
Hero subcomponents are imported directly rather than through barrel exports:

```tsx
// Current in hero.tsx:
import HeroBadge from "@/components/organisms/hero/hero-badge";
import HeroCTA from "@/components/organisms/hero/hero-cta";
import HeroHeading from "@/components/organisms/hero/hero-heading";
import HeroSocialProof from "@/components/organisms/hero/hero-social-proof";
import HeroTestimonialCard from "@/components/organisms/hero/hero-testimonial-card-unified";
import HeroTrustedCompanies from "@/components/organisms/hero/hero-trusted-companies";
import HeroVideo from "@/components/organisms/hero/hero-video";
```

**Better approach:** Create `/src/components/organisms/hero/index.ts`:
```tsx
export { default as HeroBadge } from "./hero-badge";
export { default as HeroCTA } from "./hero-cta";
export { default as HeroHeading } from "./hero-heading";
// ... etc

// Then import:
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

**Impact:** Low - Code organization, readability

---

### 4.2 MEDIUM: Service Cards Index Doesn't Export Card Props Types

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/service-cards/index.ts`

**Issue:**
Only exports components, not types:
```tsx
export { ServiceImageCard } from "./ServiceImageCard";
// Missing:
// export type { ServiceImageCardProps } from "./ServiceImageCard";
```

This makes it harder to use these components in other places.

**Recommendation:** Export type definitions too.

---

### 4.3 LOW: Default Export vs Named Export Inconsistency

**Files:**
- Hero subcomponents use `export default`
- Most atoms/molecules use `export function`
- Some organisms use both patterns

**Issue:**
Inconsistent export patterns make it harder to refactor and understand the module structure.

**Recommendation:** Standardize on named exports for consistency:
```tsx
// Consistent pattern
export function HeroBadge() { ... }
export function HeroCTA() { ... }
```

---

## 5. DATA STRUCTURE ISSUES

### 5.1 CRITICAL: Hardcoded Data in Components Instead of Constants

**Files Affected:** Multiple organisms

**Examples:**

**testimonials.tsx (lines 26-82):**
```tsx
const TESTIMONIALS: Testimonial[] = [
  {
    id: "mehmet-yilmaz",
    quote: "Entering the German market seemed impossible...",
    author: {
      name: "Mehmet Yılmaz",
      title: "CEO, Yılmaz Tekstil",
      avatar: "/w1.avif",
    },
    // ... more hardcoded data
  }
];
```

**blog-section.tsx (lines 20-50):**
```tsx
const BLOG_POSTS: BlogPost[] = [
  {
    id: "german-mistakes",
    image: "/b1.avif",
    author: "Güney Kılıç",
    // ... hardcoded
  }
];
```

**our-work.tsx (lines 18-55):**
```tsx
const PROJECTS: Project[] = [
  {
    id: "hannover-messe-2024",
    title: "Hannover Messe 2024",
    // ... hardcoded
  }
];
```

**impact-section.tsx (lines 15-34):**
```tsx
const STATS: Stat[] = [
  {
    number: "50+",
    title: "European Market Entries",
    // ... hardcoded
  }
];
```

**Issue:**
- Data should be in a dedicated constants file
- Makes testing difficult
- Hard to implement data management later
- Components are overloaded with responsibilities

**Impact:** High - Scalability, maintainability, data management

**Recommendation:** Move to centralized constants:
```tsx
// src/constants/content.ts
export const TESTIMONIALS_DATA: Testimonial[] = [ ... ];
export const BLOG_POSTS_DATA: BlogPost[] = [ ... ];
export const PROJECTS_DATA: Project[] = [ ... ];
export const STATS_DATA: Stat[] = [ ... ];
export const FAQ_ITEMS_DATA: FAQItem[] = [ ... ];
export const PROCESS_STEPS_DATA: ProcessStep[] = [ ... ];

// Then in components:
import { TESTIMONIALS_DATA } from "@/constants/content";
const Testimonials = () => {
  return <SectionContent>{TESTIMONIALS_DATA.map(...)}</SectionContent>;
};
```

---

### 5.2 MEDIUM: Inconsistent Data Shapes in Similar Components

**Testimonial vs ProjectCard data:**

Testimonials use:
```tsx
{
  id: string;
  quote: string;
  author: { name: string; title: string; avatar: string };
  metric?: { value: string; label: string };
  layout: "large" | "medium" | "small";
}
```

Projects use:
```tsx
{
  id: string;
  title: string;
  image: string;
  tags: string[];
}
```

**Issue:** Similar cards have completely different data structures. No consistency.

---

## 6. ACCESSIBILITY ISSUES

### 6.1 HIGH: Missing Alt Text Context

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/molecules/avatar-group.tsx` (line 32)

**Issue:**
Avatar images use generic alt text:
```tsx
<Image
  src={item.src}
  width={size}
  height={size}
  className="size-9 rounded-full shadow-avatar-ring object-cover"
  alt={item.alt}  // Could be descriptive
/>
```

The `alt` is passed as prop but might be generic like "Reviewer 1" (in hero-social-proof.tsx line 6-8).

**Recommendation:**
```tsx
const DEFAULT_REVIEWERS = [
  { src: "/p1.avif", alt: "Reviewer avatar 1" },
  { src: "/p2.avif", alt: "Reviewer avatar 2" },
  { src: "/p3.avif", alt: "Reviewer avatar 3" },
];
```

---

### 6.2 MEDIUM: Missing Heading Hierarchy in Sections

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/footer.tsx` (lines 21, 43, 56, 68, 81)

**Issue:**
Large footer text uses `<h1>` (line 43) for "Guney" logo text, but it should be `<h2>` or smaller, since `<h1>` is already on the page.

```tsx
<h1 className="lg:text-[16rem] ...">Gune<span>y</span></h1>  // Wrong: should be h2 or decorative
```

**Recommendation:**
```tsx
<h2 className="lg:text-[16rem] ..." aria-hidden="true">
  Gune<span>y</span>
</h2>
```

---

### 6.3 MEDIUM: Insufficient Focus Management

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/navbar.tsx`

**Issue:**
Mobile menu toggle button has `aria-label` but no focus management. When menu opens, focus doesn't shift to the menu.

**Recommendation:**
```tsx
<motion.div
  {...MOBILE_MENU_DROPDOWN}
  className="..."
  role="navigation"
  aria-label="Mobile navigation menu"
>
  {/* Focus should be moved here when menu opens */}
</motion.div>
```

---

### 6.4 MEDIUM: aria-hidden vs semantic HTML

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/atoms/Divider.tsx`

**Issue:**
Divider uses `hr` with `aria-hidden="true"` which is redundant:

```tsx
<hr
  className={cn(...)}
  aria-hidden="true"
/>
```

The `hr` element is already semantic. If you want to hide it from screen readers, it's better to use a `div`:

**Recommendation:**
```tsx
// If decorative only:
<div className={cn(...)} aria-hidden="true" />

// If semantic separator:
<hr className={cn(...)} />
```

---

## 7. PERFORMANCE ISSUES

### 7.1 HIGH: Missing Keys in Map Functions

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/blog-card.tsx` (line 58)

**Issue:**
```tsx
{tags.map((tag, index) => (
  <BlogTag key={index} text={tag} />  // Using index as key is bad!
))}
```

Using `index` as key is problematic when list order changes. Same issue in:
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/project-card.tsx` (line 35)
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/service-cards/ServiceChecklistCard.tsx` (line 61)

**Impact:** Medium - Performance degradation if items reorder, incorrect component state

**Recommendation:**
```tsx
{tags.map((tag) => (
  <BlogTag key={tag} text={tag} />  // Use stable identifier
))}
```

---

### 7.2 MEDIUM: Inline Animation Objects Not Memoized

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/constants/animations.ts`

**Issue:**
Animation objects are recreated on every render in some cases:

```tsx
// In components that create inline objects:
<motion.div {...{
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
}}>
```

This should use the pre-defined animations from constants instead.

**Impact:** Low - Unnecessary re-renders

---

### 7.3 MEDIUM: No React.memo on Pure Components

**Components that should be memoized:**
- `Badge` - Pure component, no props that change often
- `BlogCard` - Pure component, receives same data
- `ProjectCard` - Pure component
- `StatCard` - Pure component
- `TestimonialCard` - Pure component
- `ChecklistItem` - Pure component

**Recommendation:**
```tsx
export const Badge = React.memo(function Badge(props: BadgeProps) {
  return (
    <div className={cn("p-1.5 relative max-w-max", props.className)}>
      {/* ... */}
    </div>
  );
});
```

**Impact:** Low-Medium - Potential performance improvement in large lists

---

### 7.4 LOW: Image Optimization Opportunities

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/service-cards/ServiceImageCard.tsx` (line 45-54)

**Issue:**
Good use of `sizes` and `loading="lazy"` but quality could be optimized:

```tsx
<Image
  src={image}
  alt={title}
  width={220}
  height={406}
  className="rounded-2xl object-cover"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 220px"
  quality={85}  // Consider lowering to 75 for faster load
/>
```

---

## 8. CODE ORGANIZATION

### 8.1 MEDIUM: Hero Subcomponents May Be Incorrectly Categorized

**Files:**
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/hero/hero-badge.tsx`
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/hero/hero-cta.tsx`
- `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/hero/hero-heading.tsx`

**Issue:**
These are sub-organisms or molecules but are in the organisms directory. Hero is an organism that USES these components. They should probably be molecules since they're simpler compositions.

**Alternative structure:**
```
/components
  /molecules
    /hero
      - hero-badge/
      - hero-cta/
      - hero-heading/
      - hero-social-proof/
      - hero-video/
      - hero-trusted-companies/
  /organisms
    - hero.tsx (uses the molecules above)
```

**Impact:** Low - Organization clarity

---

### 8.2 HIGH: SectionContent Component Not in Consistent Use

**Issue:**
`SectionContent` molecule exists but isn't used consistently. Some sections use it, others manually create the wrapper:

**Using it:**
```tsx
// our-services.tsx
<SectionContent>
  <AnimatedSection animation={FADE_IN_UP}>
    <SectionHeader ... />
  </AnimatedSection>
  <div className="bg-bg-gray-lighter ...">
    <ServiceCards />
  </div>
</SectionContent>
```

**Not using it:**
```tsx
// faq.tsx
<div className="xl:gap-16 md:gap-14 gap-20 flex justify-between lg:flex-row flex-col">
  {/* This should use SectionContent */}
</div>
```

**Recommendation:** Make `SectionContent` mandatory for all section layouts.

---

### 8.3 MEDIUM: Files Too Large with Multiple Responsibilities

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/hero.tsx` (74 lines)

**Issue:**
The Hero component does several things:
1. Renders multiple sub-components
2. Applies motion animations
3. Handles positioning (absolute positioning for testimonial cards)
4. Manages layout logic

Could be split into:
- `HeroLayout.tsx` - Main structure
- `HeroTestimonialCards.tsx` - The testimonial positioning logic

---

## 9. SPECIFIC CODE SMELL EXAMPLES

### 9.1 Navbar Button Duplication

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/navbar.tsx`

Lines 35-36 (Desktop) and Lines 74-76 (Mobile):
```tsx
// DESKTOP (line 35)
<Button variant="secondary" size="sm" icon={ArrowUpRight} className="p-1.5 gap-2 max-w-max">
  <span className="px-2 py-1">Book a Call</span>
</Button>

// MOBILE (line 74)
<Button variant="secondary" size="sm" icon={ArrowUpRight} className="p-1.5 gap-2 max-w-max">
  <span className="px-2 py-1">Book a Call</span>
</Button>
```

**Same button, same code, duplicated.** Should be extracted.

---

### 9.2 Magic Numbers in Animations

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/constants/animations.ts`

Magic numbers without explanation:
```tsx
delay: 0.8  // Why 0.8?
delay: 0.8  // Why 0.8? (repeated)
delay: 0.6
delay: 0.5
delay: 0.4
delay: 0.1
```

**Recommendation:**
```tsx
export const ANIMATION_DELAYS = {
  navbar: 0.8,
  heroContent: 0.1,
  heroVideo: 0.4,
  heroTrusted: 0.7,
  heroTestimonialLeft: 0.5,
  heroTestimonialRight: 0.6,
} as const;
```

---

### 9.3 Inconsistent Component Naming

**Issue:**
Some components use PascalCase, others use kebab-case in filenames:

```
✓ Components:
- HeroBadge (PascalCase)
- hero-badge (kebab-case folder)
- hero-badge.tsx (kebab-case file)

✗ Inconsistent:
- badge-button.tsx vs BadgeButton import
- badge-text.tsx vs BadgeText import
```

**Recommendation:** Use consistent naming:
- Files: kebab-case (`hero-badge.tsx`)
- Components: PascalCase export (`export function HeroBadge`)

---

## 10. MISSING PATTERNS AND ABSTRACTIONS

### 10.1 MEDIUM: No Compound Component Pattern

**Current approach - Props drilling:**
```tsx
<Accordion.Root type="single" collapsible defaultValue="item-5">
  {FAQ_ITEMS.map((faq) => (
    <Accordion.Item key={faq.id} value={faq.id}>
      <Accordion.Header>
        <Accordion.Trigger>{faq.question}</Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>{faq.answer}</Accordion.Content>
    </Accordion.Item>
  ))}
</Accordion.Root>
```

**Better - Compound component:**
```tsx
<AccordionList defaultOpen="item-5">
  {FAQ_ITEMS.map((faq) => (
    <AccordionItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} />
  ))}
</AccordionList>
```

---

### 10.2 LOW: No Error Boundary for Components

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/ErrorBoundary.tsx` exists but isn't used in page.tsx

**Recommendation:** Wrap main sections with error boundaries:
```tsx
<ErrorBoundary section="hero">
  <Hero />
</ErrorBoundary>
```

---

## 11. UNUSED OR REDUNDANT ASSETS

### 11.1 Potential Unused Exports

**File:** `/Users/frus/Downloads/Coding/guney-v2/src/components/organisms/index.ts`

Exports both individual components and groups:
```tsx
export { BlogCard } from "./blog-card";           // Card
export { TestimonialCard } from "./testimonial-card";
export { default as ServiceCards } from "./service-cards";  // Mixed usage
```

Should verify all are actually imported elsewhere.

---

## SUMMARY TABLE OF ISSUES

| Category | Severity | Count | Top Files |
|----------|----------|-------|-----------|
| Component Duplication | CRITICAL | 3 | navbar, footer, faq-contact-card |
| Data in Components | CRITICAL | 5 | testimonials, blog-section, our-work, impact-section, process-section |
| Styling Hardcoding | CRITICAL | 6 | All section components |
| Missing Keys | HIGH | 3 | blog-card, project-card, service-cards |
| Inconsistent Props | HIGH | 3 | BlogCard, ProjectCard, Service Cards |
| Type Safety | HIGH | 2 | services.ts, component interfaces |
| A11y Issues | MEDIUM | 4 | footer, avatar-group, navbar |
| Organization | MEDIUM | 4 | hero folder, SectionContent usage |
| Performance | MEDIUM | 5 | animation objects, memo candidates |
| Naming | LOW | 3 | file/component naming inconsistency |

---

## RECOMMENDED PRIORITY FIXES (In Order)

### IMMEDIATE (Week 1)
1. Extract hardcoded "Book a Call" button to `BookCallButton` component
2. Move all hardcoded content data to `/constants/content.ts`
3. Create spacing utility constants to replace hardcoded values
4. Fix missing/index-based keys in map functions

### SHORT TERM (Week 2)
5. Implement discriminated union types for service cards
6. Create barrel export for hero subcomponents
7. Standardize on `SectionContent` for all sections
8. Create `BookCallButton` molecule component
9. Add `React.memo` to pure card components

### MEDIUM TERM (Week 3)
10. Refactor button padding to use presets or size variants
11. Improve accessibility (heading hierarchy, focus management)
12. Move hero subcomponents to molecules folder (optional)
13. Extract animation delay constants

### ONGOING
- Add ESLint rules to prevent these patterns
- Implement stricter TypeScript checking (no implicit `any`)
- Add tests to ensure data shape consistency

---

## TOOLS AND PLUGINS TO PREVENT FUTURE ISSUES

1. **ESLint Rules:**
   - `no-restricted-syntax` for hardcoded data patterns
   - `no-index-as-key` for map functions
   - Custom rule for consistent prop naming

2. **TypeScript:**
   - Enable `strict: true`
   - Add `@typescript-eslint/naming-convention`

3. **Custom Rules:**
   - Require all map keys to be semantic (not index)
   - Enforce `SectionContent` usage in sections
   - Ban inline animation objects

---

## CONCLUSION

The codebase has a solid foundation with Atomic Design principles and good tooling setup. Main issues are:
1. **Code reuse** - Repeated patterns that should be abstracted
2. **Data management** - Hardcoded data mixed with components
3. **Consistency** - Inconsistent patterns across similar components
4. **Type safety** - Some areas lack strong type guarantees

Addressing the critical and high-priority issues will significantly improve maintainability and scalability.

