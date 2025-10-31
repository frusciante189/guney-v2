# QUICK REFERENCE: TOP ISSUES TO FIX

## Tier 1: CRITICAL (Fix Immediately)

### 1. "Book a Call" Button is Duplicated 5+ Times
**Files:** navbar.tsx, footer.tsx, faq-contact-card.tsx, ServiceChecklistCard.tsx
```tsx
// SOLUTION: Create BookCallButton.tsx component
<BookCallButton onClick={handleClick} />
```

### 2. Hardcoded Content Data in Components
**Files:** testimonials.tsx, blog-section.tsx, our-work.tsx, impact-section.tsx, process-section.tsx, faq.tsx, process-section.tsx
```tsx
// SOLUTION: Move to src/constants/content.ts
import { TESTIMONIALS_DATA, BLOG_POSTS_DATA, etc } from "@/constants/content";
```

### 3. Repeated Spacing Patterns Throughout Codebase
**Pattern:** `xl:gap-20 md:gap-14 gap-10` appears 4+ times
```tsx
// SOLUTION: Create src/constants/spacing.ts
export const SECTION_SPACING = {
  vertical: { lg: "xl:gap-20 md:gap-14 gap-10", ... }
}
```

### 4. Index-Based Keys in Map Functions
**Files:** blog-card.tsx:58, project-card.tsx:35, ServiceChecklistCard.tsx:61
```tsx
// WRONG: key={index}
// RIGHT: key={tag}  (use stable identifier)
```

## Tier 2: HIGH PRIORITY

### 5. Inconsistent Props Between Similar Components
- BlogCard: 6 required props
- ProjectCard: 3 required props
**Solution:** Create base CardProps interface and extend

### 6. Type Safety Issue: Service Cards
Use discriminated unions instead of optional fields with type string

### 7. Custom Button Components Not Using Button Component
- hero-cta.tsx: Custom button implementation
- hero-video.tsx: Custom button implementation
**Solution:** Use the Button component instead

### 8. SectionContent Not Used Consistently
Some sections use it, others create manual wrapper divs
**Solution:** Make it mandatory for all sections

### 9. Button Padding Inconsistent
- navbar: p-2
- Others: p-1.5
**Solution:** Use Button size prop or create padding constants

## Tier 3: MEDIUM PRIORITY

### 10. Missing Barrel Export for Hero Subcomponents
Create `/src/components/organisms/hero/index.ts`

### 11. Accessibility Issues
- Footer h1 should be h2
- Avatar alt text too generic
- Mobile menu focus management missing

### 12. Animation Constants
Magic numbers (0.8, 0.6, etc.) should be named constants

### 13. Mixed Export Patterns
Use consistent named exports throughout

## File-by-File Quick Fixes

### navbar.tsx
- [ ] Extract "Book a Call" button to BookCallButton
- [ ] Use SectionContent or consistent spacing constant
- [ ] Add focus management for mobile menu

### footer.tsx
- [ ] Extract "Book a Call" button
- [ ] Change h1 to h2 (line 43)
- [ ] Use consistent spacing

### testimonials.tsx
- [ ] Move TESTIMONIALS array to constants/content.ts
- [ ] Use SectionContent consistently

### blog-section.tsx
- [ ] Move BLOG_POSTS to constants/content.ts
- [ ] Fix tag map keys (use tag instead of index)
- [ ] Use stagger animation on individual cards

### our-work.tsx
- [ ] Move PROJECTS to constants/content.ts
- [ ] Fix tag map keys

### faq.tsx
- [ ] Move FAQ_ITEMS to constants/content.ts
- [ ] Document why item-5 is default

### impact-section.tsx
- [ ] Move STATS to constants/content.ts

### process-section.tsx
- [ ] Move PROCESS_STEPS to constants/content.ts

### service-cards/
- [ ] Use discriminated union types
- [ ] Fix checklist item map keys

### hero/ subcomponents
- [ ] Create index.ts barrel export
- [ ] Consider moving to molecules folder

## Implementation Priority

**Week 1 (Immediate):**
1. Extract BookCallButton component (30 min)
2. Create constants/content.ts and move data (1 hour)
3. Create constants/spacing.ts (30 min)
4. Fix map function keys (30 min)

**Week 2 (Short term):**
5. Standardize on SectionContent (1 hour)
6. Fix service card types (1 hour)
7. Add hero barrel exports (30 min)
8. Add React.memo to card components (1 hour)

**Week 3 (Medium term):**
9. A11y improvements (2 hours)
10. Animation delay constants (30 min)
11. Button padding standardization (1 hour)

## Prevention Rules

Add to ESLint config:
```json
{
  "rules": {
    "react/jsx-key": "error",
    "@typescript-eslint/naming-convention": ["error", { 
      "selector": "default", 
      "format": ["camelCase"] 
    }],
    "no-hardcoded-strings": "warn"
  }
}
```

---

**Total Critical Issues:** 4
**Total High Priority:** 5
**Total Medium Priority:** 4
**Estimated fix time:** 6-8 hours total
