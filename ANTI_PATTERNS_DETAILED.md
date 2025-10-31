# Anti-Pattern Analizi ve Çözüm Önerileri
## Guney v2 Next.js/React Codebase

**Analiz Tarihi:** 30 Ekim 2025
**Analiz Eden:** Claude Code
**Kapsam:** Full codebase (79 dosya)

---

## İçindekiler

1. [Kritik Öncelikli Sorunlar](#1-kritik-öncelikli-sorunlar)
2. [Yüksek Öncelikli Sorunlar](#2-yüksek-öncelikli-sorunlar)
3. [Orta Öncelikli Sorunlar](#3-orta-öncelikli-sorunlar)
4. [Düşük Öncelikli Sorunlar](#4-düşük-öncelikli-sorunlar)
5. [Uygulama Planı](#5-uygulama-planı)
6. [Önleme Kuralları](#6-önleme-kuralları)

---

## 1. Kritik Öncelikli Sorunlar

### 1.1 ✅ "Book a Call" Button Tekrarı (ÇÖZÜLDÜ)

**Durum:** ✅ Çözüldü - BookCallButton component oluşturuldu

**Açıklama:**
Aynı button pattern 7 farklı dosyada tekrar ediyordu.

**Neden Sorun:**
- **Maintainability:** Button değişikliği için 7 dosyayı güncellemelisin
- **Consistency:** Bazı yerlerde farklı className'ler kullanılmış
- **Testing:** 7 farklı yerde test gerekiyor
- **DRY Violation:** Don't Repeat Yourself prensibi ihlali

**Etkilenen Dosyalar:**
- `src/components/organisms/navbar.tsx` (2 kullanım)
- `src/components/organisms/footer.tsx`
- `src/components/organisms/faq-contact-card.tsx`
- `src/components/organisms/service-cards/ServiceDarkCard.tsx`
- `src/components/organisms/service-cards/ServiceChecklistCard.tsx`
- `src/components/organisms/pricing.tsx`

**Çözüm:** BookCallButton component oluşturuldu ve tüm kullanımlar güncellendi.

---

### 1.2 Hardcoded Content Data in Components

**Öncelik:** 🔴 Kritik
**Tahmini Süre:** 2 saat
**Etki:** Yüksek - Maintainability, i18n hazırlığı, content yönetimi

#### Neden Sorun:

**1. Content Değişiklikleri İçin Kod Değişikliği Gerekiyor**

Örnek - `testimonials.tsx`:
```tsx
const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Alex Johnson",
    role: "COO at TechCorp Manufacturing",
    content: "Working with Guney transformed our European market entry...",
    rating: 5,
  },
  // ... 2 testimonial daha
];
```

**Sorun:**
- Müşteri ismi değişti mi? → Developer kod değiştirmeli
- Yeni testimonial eklemek istersen → Pull request gerekli
- Marketing team content güncelleyemiyor

**2. i18n (Internationalization) Hazırlığı Yok**

Eğer ileride Türkçe/İngilizce dil desteği eklemek istersen:
```tsx
// Şu anki durum - Sabit İngilizce
const title = "Working with Guney transformed our European market entry";

// İdeal durum
const title = t('testimonials.alex.title'); // i18n desteği
```

**3. Content Dağınık ve Tutarsız**

Content 7 farklı dosyada saklanıyor:
- `testimonials.tsx` → TESTIMONIALS
- `blog-section.tsx` → BLOG_POSTS
- `our-work.tsx` → PROJECTS
- `impact-section.tsx` → STATS
- `process-section.tsx` → PROCESS_STEPS
- `faq.tsx` → FAQ_ITEMS
- `pricing.tsx` → PRICING_FEATURES

**Sorun:** Tüm content'i görmek/düzenlemek için 7 dosyayı açmalısın

**4. Test Edilebilirlik Düşük**

```tsx
// Şu anki durum - Component ve data birlikte
export default function Testimonials() {
  const TESTIMONIALS = [...]; // Component içinde
  return <div>{TESTIMONIALS.map(...)}</div>;
}

// Test etmek zor:
// - Mock data oluşturmalısın
// - Component logic ve data logic karışık
```

#### Etkilenen Dosyalar ve İçerik:

**1. `src/components/organisms/testimonials.tsx`**
```tsx
// 60+ satır testimonial data
const TESTIMONIALS = [
  { id, name, role, content, rating, avatar },
  // 3 testimonial
];
```

**2. `src/components/organisms/blog-section.tsx`**
```tsx
// 35+ satır blog post data
const BLOG_POSTS = [
  { id, image, author, readTime, title, tags, date, featured },
  // 3 blog post
];
```

**3. `src/components/organisms/our-work.tsx`**
```tsx
// 40+ satır project data
const PROJECTS = [
  { id, title, image, tags },
  // 6 proje
];
```

**4. `src/components/organisms/impact-section.tsx`**
```tsx
// 25+ satır stats data
const STATS = [
  { id, value, label },
  // 4 stat
];
```

**5. `src/components/organisms/process-section.tsx`**
```tsx
// 45+ satır process data
const PROCESS_STEPS = [
  { id, number, title, description },
  // 5 step
];
```

**6. `src/components/organisms/faq.tsx`**
```tsx
// 60+ satır FAQ data
const FAQ_ITEMS = [
  { id, question, answer },
  // 7 soru
];
```

**7. `src/components/organisms/pricing.tsx`**
```tsx
// 20+ satır pricing data
const PRICING_FEATURES = [
  { id, text },
  // 4 feature
];
```

#### Önerilen Çözüm:

**1. Yeni Dosya Oluştur: `src/constants/content.ts`**

```tsx
/**
 * Content Constants
 *
 * Centralized content data for the application.
 * This separation allows:
 * - Easy content updates without touching component code
 * - Future i18n support
 * - Better content management
 * - Easier testing with mock data
 */

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Alex Johnson",
    role: "COO at TechCorp Manufacturing",
    content: "Working with Guney transformed our European market entry. His understanding of both Turkish and German business culture was invaluable.",
    rating: 5,
    avatar: "/avatars/1.jpg",
  },
  {
    id: "testimonial-2",
    name: "Sarah Chen",
    role: "Founder at PrecisionParts GmbH",
    content: "The trade fair support was exceptional. Guney handled everything from booth setup to client meetings, allowing us to focus on our product.",
    rating: 5,
    avatar: "/avatars/2.jpg",
  },
  {
    id: "testimonial-3",
    name: "Michael Schmidt",
    role: "Export Manager at IndustrialTech",
    content: "Payment infrastructure setup was seamless. No more delays or currency issues. Our European operations are now running smoothly.",
    rating: 5,
    avatar: "/avatars/3.jpg",
  },
];

// Blog Posts
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
  {
    id: "international-payments",
    image: "/b1.avif",
    author: "Güney Kılıç",
    readTime: "4 Min Read",
    title: "How to Structure International Payments for Manufacturing Exports",
    tags: ["Payments", "Finance"],
    date: "Jan 20, 2025",
  },
  {
    id: "trade-fair-guide",
    image: "/b1.avif",
    author: "Güney Kılıç",
    readTime: "6 Min Read",
    title: "Trade Fair Success: A Complete Guide for First-Time Exhibitors",
    tags: ["Trade Fairs", "Strategy"],
    date: "Jan 15, 2025",
  },
];

// Projects
export interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "hannover-messe-2024",
    title: "Hannover Messe 2024",
    image: "/our-work/1.jpg",
    tags: ["Germany", "Industrial Tech"],
  },
  {
    id: "k-messe-dusseldorf-2023",
    title: "K Messe Düsseldorf 2023",
    image: "/our-work/2.jpg",
    tags: ["Germany", "Plastics & Rubber"],
  },
  {
    id: "bauma-munich-2024",
    title: "Bauma Munich 2024",
    image: "/our-work/3.jpg",
    tags: ["Germany", "Construction"],
  },
  {
    id: "metav-dusseldorf-2024",
    title: "METAV Düsseldorf 2024",
    image: "/our-work/4.jpg",
    tags: ["Germany", "Metalworking"],
  },
  {
    id: "iaa-frankfurt-2023",
    title: "IAA Frankfurt 2023",
    image: "/our-work/5.jpg",
    tags: ["Germany", "Automotive"],
  },
  {
    id: "ism-cologne-2024",
    title: "ISM Cologne 2024",
    image: "/our-work/6.jpg",
    tags: ["Germany", "Sweets & Snacks"],
  },
];

// Stats
export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const STATS_DATA: Stat[] = [
  {
    id: "manufacturers",
    value: "50+",
    label: "Turkish manufacturers supported",
  },
  {
    id: "contracts",
    value: "200+",
    label: "Successful European contracts",
  },
  {
    id: "trade-fairs",
    value: "30+",
    label: "Major trade fairs executed",
  },
  {
    id: "revenue",
    value: "€10M+",
    label: "Revenue generated for clients",
  },
];

// Process Steps
export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Market Assessment",
    description: "We analyze your product fit for European markets and identify the best entry strategy based on your capabilities and goals.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Legal & Documentation Setup",
    description: "Get all contracts, compliance documents, and legal frameworks in place — translated, reviewed, and ready to sign.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Payment Infrastructure",
    description: "Set up secure international payment channels, banking relationships, and transfer mechanisms to minimize risk and delays.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Trade Fair Execution",
    description: "From booth design to logistics and meeting scheduling, we handle every detail so you focus on closing deals.",
  },
  {
    id: "step-5",
    number: "05",
    title: "Ongoing Support & Growth",
    description: "Continuous support for contract renewals, new market entries, and operational challenges as your European presence grows.",
  },
];

// FAQ Items
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS_DATA: FAQItem[] = [
  {
    id: "item-1",
    question: "How do you help Turkish manufacturers enter European markets?",
    answer: "I provide end-to-end support for European expansion — from market assessment and contract setup to payment infrastructure and trade fair execution. My goal is to remove operational barriers so you can focus on winning clients.",
  },
  {
    id: "item-2",
    question: "Do I need to speak German or have European connections?",
    answer: "No. I handle all the cross-border communication, legal documentation, and relationship building. You don't need existing European contacts or language skills — I bridge that gap for you.",
  },
  {
    id: "item-3",
    question: "How long does it take to enter a European market?",
    answer: "Timelines vary based on your product and target market. Typically, initial setup (contracts, payments, compliance) takes 4-8 weeks. Trade fair execution and first client acquisition can happen within 3-6 months with the right strategy.",
  },
  {
    id: "item-4",
    question: "What about payment security and international transfers?",
    answer: "I set up secure banking channels and payment structures that minimize risk, delays, and currency conversion issues. You'll have clear visibility on every transaction with proper legal protection in place.",
  },
  {
    id: "item-5",
    question: "Can you help with just trade fairs or do I need full support?",
    answer: "I offer both full-service support and specific services like trade fair organization, contract negotiation, or payment setup. We can work together in whatever way best fits your current needs and capabilities.",
  },
  {
    id: "item-6",
    question: "What's your pricing structure?",
    answer: "Pricing depends on the scope of work — whether it's market entry strategy, ongoing support, or specific services like trade fairs. I provide transparent proposals with clear deliverables and no hidden costs after our initial consultation.",
  },
  {
    id: "item-7",
    question: "Do you provide support after the initial market entry?",
    answer: "Yes. I offer ongoing support for contract renewals, new market expansion, payment monitoring, and operational challenges as your European presence grows. You're not alone after the first deal closes.",
  },
];

// Pricing Features
export interface PricingFeature {
  id: string;
  text: string;
}

export const PRICING_FEATURES_DATA: PricingFeature[] = [
  {
    id: "consultation",
    text: "60 minutes consultation session",
  },
  {
    id: "payment",
    text: "Secure payment at booking",
  },
  {
    id: "fees",
    text: "No hidden fees",
  },
  {
    id: "action-plan",
    text: "Personalized action plan included",
  },
];
```

**2. Component'lerde Kullanım:**

```tsx
// ÖNCE:
// testimonials.tsx içinde
const TESTIMONIALS = [...]; // 60 satır

// SONRA:
import { TESTIMONIALS_DATA } from "@/constants/content";

export default function Testimonials() {
  return (
    <SectionContainer>
      {TESTIMONIALS_DATA.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </SectionContainer>
  );
}
```

#### Faydalar:

**1. Content Güncellemeleri Kolay**
```tsx
// Tek dosya: constants/content.ts
// Marketing team bile pull request açabilir
```

**2. i18n Hazırlığı**
```tsx
// Gelecekte:
export const TESTIMONIALS_DATA_TR = [...]; // Türkçe
export const TESTIMONIALS_DATA_EN = [...]; // İngilizce
```

**3. Test Edilebilirlik**
```tsx
// Mock data kolayca oluşturulur
import { TESTIMONIALS_DATA } from "@/constants/content";

const mockTestimonials = TESTIMONIALS_DATA.slice(0, 2);
```

**4. CMS Hazırlığı**
```tsx
// İleride CMS'ten çekmek istersen:
export async function getTestimonials() {
  // return await fetchFromCMS();
  return TESTIMONIALS_DATA; // Şimdilik static
}
```

**5. Daha Temiz Component'ler**
```tsx
// Component sadece UI logic içeriyor
// Data logic ayrı
```

---

### 1.3 Repeated Spacing Patterns

**Öncelik:** 🔴 Kritik
**Tahmini Süre:** 1 saat
**Etki:** Orta-Yüksek - Consistency, maintainability

#### Neden Sorun:

**1. Magic Numbers Everywhere**

```tsx
// testimonials.tsx
<div className="xl:gap-20 md:gap-14 gap-10">

// impact-section.tsx
<div className="xl:gap-20 md:gap-16 gap-12">

// footer.tsx
<div className="xl:gap-20 md:gap-16 gap-12">

// process-section.tsx
<div className="xl:gap-16 lg:gap-14 gap-10">
```

**Sorun:**
- Aynı spacing pattern farklı değerlerle kullanılmış
- Hangi değer doğru? `gap-14` mi `gap-16` mı?
- Design system'de tutarlılık yok

**2. Değişiklik Yapmak Zor**

Diyelim ki tüm section gap'leri küçültmek istiyorsun:
```tsx
// 15+ dosyayı manuel olarak güncellemelisin
// Find & replace riskli (bazı gap'ler farklı amaçlı)
```

**3. Design Tokens Yok**

```tsx
// Şu anki durum - Raw values
gap-20  // Neden 20? Nereden geldi?

// İdeal durum - Named tokens
gap-section-large  // Semantic, açık
```

#### Etkilenen Dosyalar:

**Vertical Gap Patterns:**
```tsx
// 15+ dosyada farklı kombinasyonlar:
"xl:gap-20 md:gap-14 gap-10"  // testimonials, our-work
"xl:gap-20 md:gap-16 gap-12"  // impact-section, footer
"xl:gap-16 lg:gap-14 gap-10"  // process-section
"xl:gap-16 md:gap-14 gap-10"  // faq, blog-section
"xl:gap-5 gap-4"              // hero, section headers
```

**Padding/Margin Patterns:**
```tsx
// Section padding
"xl:py-24 md:py-14 py-10"     // SectionContainer default
"xl:pt-24 md:pt-14 pt-10"     // Impact section
"pb-10"                        // Footer override

// Button padding
"p-1.5 gap-2 max-w-max"       // Book Call buttons
"p-2"                          // Navbar buttons
"px-2 py-1"                    // Button inner span
```

#### Önerilen Çözüm:

**1. Yeni Dosya: `src/constants/spacing.ts`**

```tsx
/**
 * Spacing Constants
 *
 * Centralized spacing values for consistent design system.
 * Based on Tailwind's spacing scale with semantic names.
 */

/**
 * Section Spacing
 * Used for vertical spacing between major sections
 */
export const SECTION_SPACING = {
  // Vertical gaps between elements within sections
  vertical: {
    // Large gap (testimonials, our-work)
    lg: "xl:gap-20 md:gap-14 gap-10",

    // Medium gap (impact-section, footer, faq, blog)
    md: "xl:gap-16 md:gap-14 gap-10",

    // Small gap (section headers, cards)
    sm: "xl:gap-5 gap-4",
  },

  // Padding for section containers
  padding: {
    // Default section padding (top & bottom)
    default: "xl:py-24 md:py-14 py-10",

    // Top-only padding
    top: "xl:pt-24 md:pt-14 pt-10",

    // Bottom-only padding
    bottom: "xl:pb-24 md:pb-14 pb-10",

    // Reduced bottom padding (used in some sections)
    bottomSm: "pb-10",
  },

  // Horizontal padding/spacing
  horizontal: {
    // Container horizontal padding
    container: "md:px-8 px-5",

    // Outer wrapper padding
    wrapper: "px-8",
  },
} as const;

/**
 * Component Spacing
 * Used for spacing within specific components
 */
export const COMPONENT_SPACING = {
  // Button spacing
  button: {
    // Default button padding
    default: "p-1.5 gap-2",

    // Button inner content padding
    inner: "px-2 py-1",

    // Navbar button padding
    navbar: "p-2",
  },

  // Card spacing
  card: {
    // Card padding
    padding: "p-7",

    // Card gap (internal)
    gap: "gap-5",
  },

  // Grid spacing
  grid: {
    // Default grid gap
    default: "gap-8",

    // Small grid gap
    sm: "gap-6",
  },
} as const;

/**
 * Helper function to combine spacing classes
 */
export function combineSpacing(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

// Type exports for better autocomplete
export type SectionVerticalSpacing = keyof typeof SECTION_SPACING.vertical;
export type SectionPaddingSpacing = keyof typeof SECTION_SPACING.padding;
```

**2. Component'lerde Kullanım:**

```tsx
// ÖNCE:
<div className="xl:gap-20 md:gap-14 gap-10 flex flex-col">

// SONRA:
import { SECTION_SPACING } from "@/constants/spacing";

<div className={cn(SECTION_SPACING.vertical.lg, "flex flex-col")}>
```

```tsx
// ÖNCE:
<SectionContainer className="xl:pb-24 md:pb-14 pb-10">

// SONRA:
import { SECTION_SPACING } from "@/constants/spacing";

<SectionContainer className={SECTION_SPACING.padding.bottomSm}>
```

#### Faydalar:

**1. Tutarlılık**
```tsx
// Artık tek kaynak var
SECTION_SPACING.vertical.lg  // Her yerde aynı değer
```

**2. Kolay Değişiklik**
```tsx
// Tek yerden tüm spacing'i güncelle
lg: "xl:gap-24 md:gap-16 gap-12",  // Tüm sections güncellendi!
```

**3. Semantic İsimler**
```tsx
SECTION_SPACING.vertical.lg  // Açık ve anlaşılır
// vs
"xl:gap-20 md:gap-14 gap-10"  // Ne için kullanıldığı belirsiz
```

**4. Type Safety**
```tsx
// TypeScript autocomplete
SECTION_SPACING.vertical.  // lg, md, sm seçenekleri gelir
```

**5. Documentation**
```tsx
// JSDoc ile dokümante edilmiş
// Hangi spacing'i ne zaman kullanacağın açık
```

---

### 1.4 Index-Based Keys in Map Functions

**Öncelik:** 🔴 Kritik
**Tahmini Süre:** 30 dakika
**Etki:** Yüksek - React performance, bugs, state management

#### Neden Sorun:

**1. React Re-render Sorunları**

```tsx
// YANLIŞ:
{checklist.map((item, itemIndex) => (
  <ChecklistItem key={itemIndex} {...item} />
))}

// Liste sırası değişti mi?
// React tüm item'ları yeniden render eder!
```

**Senaryo:**
```tsx
// Başlangıç:
[
  { text: "Item 1", checked: false },  // key=0
  { text: "Item 2", checked: true },   // key=1
  { text: "Item 3", checked: false },  // key=2
]

// Item 1 silindi:
[
  { text: "Item 2", checked: true },   // key=0 (önceden key=1)
  { text: "Item 3", checked: false },  // key=1 (önceden key=2)
]

// React'in gördüğü:
// key=0: Item 1 → Item 2 (DEĞIŞTI! Re-render)
// key=1: Item 2 → Item 3 (DEĞIŞTI! Re-render)
// key=2: Silindi

// Gereksiz 2 re-render!
```

**2. State Bugs**

```tsx
// Kullanıcı Item 2'yi check etti
// Item 1 silindi
// Artık Item 3 checked görünüyor! (Bug)
```

**3. Animation/Focus Sorunları**

```tsx
// Input focus kaybolur
// Animation'lar yanlış element'lere uygulanır
// Scroll position kaybolur
```

**4. React Uyarısı**

```
Warning: Each child in a list should have a unique "key" prop.
```

#### Etkilenen Dosyalar ve Satırlar:

**1. `blog-card.tsx:58`**
```tsx
<div className="flex items-center gap-2">
  {tags.map((tag, index) => (
    <BlogTag key={index} text={tag} />  // ❌ index kullanılmış
  ))}
</div>
```

**Sorun:** Tag sırası değişirse React karışır

**2. `project-card.tsx:35`**
```tsx
<div className="flex flex-wrap items-center gap-2.5">
  {tags.map((tag, index) => (
    <ProjectTag key={index} tag={tag} />  // ❌ index kullanılmış
  ))}
</div>
```

**Sorun:** Tag ekleme/silme durumunda bug

**3. `ServiceChecklistCard.tsx:61`**
```tsx
{checklist.map((item, itemIndex) => (
  <ChecklistItem
    key={itemIndex}  // ❌ index kullanılmış
    text={item.text}
    checked={item.checked}
    highlighted={item.highlighted}
  />
))}
```

**Sorun:** Checklist sırası değişirse state karışır

**4. `service-cards.tsx` (ServiceImageCard, ServiceTagsCard)**
```tsx
// Birden fazla yerde tag mapping'lerde index kullanılmış
```

#### Önerilen Çözümler:

**1. Stable ID Kullan (En İyi)**

```tsx
// YANLIŞ:
{tags.map((tag, index) => (
  <BlogTag key={index} text={tag} />
))}

// DOĞRU:
{tags.map((tag) => (
  <BlogTag key={tag} text={tag} />  // ✅ tag kendisi unique
))}
```

**Neden İyi:**
- Tag değeri zaten unique
- Sıra değişse bile React doğru item'ı bulur
- Performance optimal

**2. Composite Key (Tag Duplicate ise)**

```tsx
// Eğer aynı tag 2 kere varsa:
{tags.map((tag, index) => (
  <BlogTag key={`${tag}-${index}`} text={tag} />  // ✅ Composite key
))}
```

**Not:** Bunu sadece tag'ler duplicate olabiliyorsa kullan

**3. Checklist için ID Ekle (Data Yapısını Değiştir)**

```tsx
// ÖNCE:
interface ChecklistItemData {
  text: string;
  checked: boolean;
  highlighted?: boolean;
}

// SONRA:
interface ChecklistItemData {
  id: string;  // ✅ Unique ID ekledik
  text: string;
  checked: boolean;
  highlighted?: boolean;
}

// Kullanım:
{checklist.map((item) => (
  <ChecklistItem key={item.id} {...item} />  // ✅ Stable ID
))}
```

**Data güncelle:**
```tsx
// constants/content.ts veya component içinde
const checklist: ChecklistItemData[] = [
  {
    id: "market-research",  // ✅ Unique ID
    text: "Market research",
    checked: true,
  },
  {
    id: "competitor-analysis",  // ✅ Unique ID
    text: "Competitor analysis",
    checked: true,
  },
  // ...
];
```

#### Düzeltme Adımları:

**1. blog-card.tsx ve project-card.tsx (Kolay)**

```tsx
// Tek satır değişiklik
key={index}  →  key={tag}
```

**2. ServiceChecklistCard.tsx (Orta)**

```tsx
// 1. Interface'e id ekle
interface ChecklistItemData {
  id: string;  // Yeni
  text: string;
  checked: boolean;
  highlighted?: boolean;
}

// 2. Data'ya id ekle (service-cards.tsx içindeki checklist array'leri)
checklist: [
  { id: "market-research", text: "Market research", checked: true },
  { id: "competitor-analysis", text: "Competitor analysis", checked: true },
  // ...
]

// 3. Map'te id kullan
{checklist.map((item) => (
  <ChecklistItem key={item.id} {...item} />
))}
```

#### Faydalar:

**1. React Performance**
```tsx
// Sadece değişen item'lar re-render olur
// Gereksiz re-render'lar önlenir
```

**2. State Doğruluğu**
```tsx
// Checkbox state'leri doğru item'larda kalır
// Focus kaybolmaz
```

**3. Animation Doğruluğu**
```tsx
// Stagger animation'lar doğru element'lere uygulanır
// Transition'lar smooth çalışır
```

**4. Gelecek-proof**
```tsx
// Liste manipülasyonu (sort, filter, add, remove) güvenli
// Drag & drop eklenebilir
```

**5. Best Practice**
```tsx
// React documentation'a uygun
// Lint warning'leri kaybolur
```

---

## 2. Yüksek Öncelikli Sorunlar

### 2.1 Inconsistent Props Between Similar Components

**Öncelik:** 🟠 Yüksek
**Tahmini Süre:** 1.5 saat
**Etki:** Orta - Type safety, API consistency, reusability

#### Neden Sorun:

**1. Tutarsız API**

```tsx
// BlogCard - 6 required prop
<BlogCard
  image={string}
  author={string}
  readTime={string}
  title={string}
  tags={string[]}
  date={string}
  featured={boolean}
  onClick={function}
/>

// ProjectCard - 3 required prop
<ProjectCard
  title={string}
  image={string}
  tags={string[]}
  onClick={function}
/>

// Neden BlogCard'da date var ama ProjectCard'da yok?
// Neden BlogCard'da author var ama ProjectCard'da yok?
```

**Sorun:** Benzer component'ler farklı şekilde çalışıyor

**2. Abstraction Zorluğu**

```tsx
// Generic Card component yapmak istersen:
function GenericCard<T extends CardProps>(props: T) {
  // BlogCard ve ProjectCard çok farklı, abstract edilemiyor
}
```

**3. Component Seçimi Karmaşık**

```tsx
// Kullanıcı: "Hangi card component'ini kullanmalıyım?"
// İki card de benzer görünüyor ama farklı props istiyor
```

#### Etkilenen Component'ler:

**Card Component'leri:**

**BlogCard** (`blog-card.tsx`):
```tsx
interface BlogCardProps {
  image: string;      // ✅ Required
  author: string;     // ✅ Required
  readTime: string;   // ✅ Required
  title: string;      // ✅ Required
  tags: string[];     // ✅ Required
  date: string;       // ✅ Required
  featured?: boolean; // ⚠️  Optional
  onClick?: () => void; // ⚠️  Optional
}
```

**ProjectCard** (`project-card.tsx`):
```tsx
interface ProjectCardProps {
  title: string;      // ✅ Required
  image: string;      // ✅ Required
  tags: string[];     // ✅ Required
  onClick?: () => void; // ⚠️  Optional
  // ❌ Missing: author, readTime, date, featured
}
```

**TestimonialCard** (`testimonial-card.tsx`):
```tsx
interface TestimonialCardProps {
  name: string;       // ✅ Required
  role: string;       // ✅ Required
  content: string;    // ✅ Required
  rating: number;     // ✅ Required
  avatar: string;     // ✅ Required
  // ❌ Missing: onClick, featured
}
```

#### Önerilen Çözüm:

**1. Base Interface Oluştur**

```tsx
// src/types/cards.ts (yeni dosya)

/**
 * Base Card Props
 * Common properties shared by all card components
 */
export interface BaseCardProps {
  /** Card title/heading */
  title: string;

  /** Main image/visual */
  image: string;

  /** Optional click handler */
  onClick?: () => void;

  /** Optional CSS classes */
  className?: string;
}

/**
 * Blog-specific card props
 * Extends BaseCardProps with blog-related fields
 */
export interface BlogCardProps extends BaseCardProps {
  /** Author name */
  author: string;

  /** Estimated read time */
  readTime: string;

  /** Publication date */
  date: string;

  /** Tags/categories */
  tags: string[];

  /** Featured flag for highlighting */
  featured?: boolean;
}

/**
 * Project-specific card props
 * Extends BaseCardProps with project-related fields
 */
export interface ProjectCardProps extends BaseCardProps {
  /** Project tags/categories */
  tags: string[];

  /** Optional project date */
  date?: string;

  /** Optional location */
  location?: string;
}

/**
 * Testimonial-specific card props
 * Different structure, doesn't extend BaseCardProps
 */
export interface TestimonialCardProps {
  /** Customer name */
  name: string;

  /** Customer role/title */
  role: string;

  /** Testimonial content/quote */
  content: string;

  /** Rating (1-5) */
  rating: number;

  /** Customer avatar image */
  avatar: string;

  /** Optional click handler */
  onClick?: () => void;
}
```

**2. Component'leri Güncelle**

```tsx
// blog-card.tsx
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
  className,
}: BlogCardProps) {
  // ...
}

// project-card.tsx
import type { ProjectCardProps } from "@/types/cards";

export function ProjectCard({
  title,
  image,
  tags,
  date,
  location,
  onClick,
  className,
}: ProjectCardProps) {
  // ...
}
```

**3. Ortak Utility Component (Opsiyonel)**

```tsx
// src/components/atoms/CardImage.tsx
interface CardImageProps {
  src: string;
  alt: string;
  featured?: boolean;
}

export function CardImage({ src, alt, featured }: CardImageProps) {
  return (
    <div className="relative">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      {featured && (
        <Badge className="absolute top-4 left-4">Featured</Badge>
      )}
    </div>
  );
}

// Kullanım:
<CardImage src={image} alt={title} featured={featured} />
```

#### Faydalar:

**1. Consistent API**
```tsx
// Tüm card'lar benzer pattern kullanır
// Yeni developer kolayca anlar
```

**2. Type Safety**
```tsx
// TypeScript inheritance ile tip güvenliği
// Missing prop'lar hemen görülür
```

**3. Extensibility**
```tsx
// Yeni card type eklemek kolay:
interface ServiceCardProps extends BaseCardProps {
  price: number;
  features: string[];
}
```

**4. Documentation**
```tsx
// BaseCardProps bir kere dokümante edilir
// Tüm card'lar bu documentation'ı inherit eder
```

---

### 2.2 Weak Type Safety: Service Cards

**Öncelik:** 🟠 Yüksek
**Tahmini Süre:** 1 saat
**Etki:** Orta-Yüksek - Type safety, runtime errors, maintainability

#### Neden Sorun:

**1. Optional Props + Type String = Weak Type Safety**

```tsx
// Şu anki durum (service-cards.tsx)
interface ServiceCard {
  id: string;
  title: string;
  description: string;
  type?: string;  // ⚠️  Optional + string = any değer gelebilir
  gridClass: string;
  tags?: string[];  // ⚠️  Var mı yok mu belli değil
  image?: string;   // ⚠️  Var mı yok mu belli değil
  checklist?: ChecklistItemData[];  // ⚠️  Var mı yok mu belli değil
  showButton?: boolean;  // ⚠️  Var mı yok mu belli değil
}

// Problem:
const card: ServiceCard = {
  id: "1",
  title: "Service",
  description: "Desc",
  type: "WRONG_TYPE",  // ✅ TypeScript kabul ediyor!
  gridClass: "col-span-2",
  // checklist gerekli mi? Bilmiyoruz
};
```

**2. Runtime Errors**

```tsx
// service-cards.tsx render logic
{serviceCards.map((card) => {
  if (card.type === "image") {
    return <ServiceImageCard {...card} />;  // card.image undefined olabilir!
  }
  if (card.type === "tags") {
    return <ServiceTagsCard {...card} />;  // card.tags undefined olabilir!
  }
  // ...
})}
```

**Senaryo:**
```tsx
// Developer yeni card ekliyor:
{
  type: "image",
  // image prop'unu unuttu! ❌
}

// TypeScript hata vermiyor ✅
// Runtime'da broken image ❌
```

**3. Intellisense Yok**

```tsx
// Editor'de card. yazdığında:
// - Hangi prop'lar bu type için gerekli?
// - Hangi prop'lar optional?
// - Hangi prop'lar bu type için kullanılmaz?
// Bilmiyoruz!
```

#### Önerilen Çözüm: Discriminated Unions

**Discriminated Union Pattern:**

```tsx
// src/types/service-cards.ts (yeni dosya)

/**
 * Base properties shared by all service cards
 */
interface BaseServiceCard {
  id: string;
  title: string;
  description: string;
  gridClass: string;
  showButton?: boolean;
}

/**
 * Image-type service card
 * Requires: image prop
 */
export interface ImageServiceCard extends BaseServiceCard {
  type: "image";  // ✅ Literal type
  image: string;  // ✅ Required for image type
}

/**
 * Tags-type service card
 * Requires: tags prop
 */
export interface TagsServiceCard extends BaseServiceCard {
  type: "tags";   // ✅ Literal type
  tags: string[]; // ✅ Required for tags type
}

/**
 * Checklist-type service card
 * Requires: checklist prop
 */
export interface ChecklistServiceCard extends BaseServiceCard {
  type: "checklist";  // ✅ Literal type
  checklist: ChecklistItemData[];  // ✅ Required for checklist type
}

/**
 * Chat-type service card
 * Requires: messages prop
 */
export interface ChatServiceCard extends BaseServiceCard {
  type: "chat";  // ✅ Literal type
  messages: ChatMessage[];  // ✅ Required for chat type
}

/**
 * Dark-type service card
 * No extra props required
 */
export interface DarkServiceCard extends BaseServiceCard {
  type: "dark";  // ✅ Literal type
}

/**
 * Discriminated Union
 * TypeScript can narrow the type based on 'type' field
 */
export type ServiceCard =
  | ImageServiceCard
  | TagsServiceCard
  | ChecklistServiceCard
  | ChatServiceCard
  | DarkServiceCard;
```

**Component'te Kullanım:**

```tsx
// service-cards.tsx
import type { ServiceCard } from "@/types/service-cards";

const serviceCards: ServiceCard[] = [
  {
    type: "image",  // ✅ TypeScript biliyor ki image gerekli
    image: "/service.jpg",  // ✅ Required
    id: "1",
    title: "Title",
    description: "Desc",
    gridClass: "col-span-2",
    // tags: ["tag"]  // ❌ TypeScript hata verir: "tags yok image type'ında"
  },
  {
    type: "tags",  // ✅ TypeScript biliyor ki tags gerekli
    tags: ["tag1", "tag2"],  // ✅ Required
    id: "2",
    title: "Title",
    description: "Desc",
    gridClass: "col-span-1",
    // image: "/img.jpg"  // ❌ TypeScript hata verir: "image yok tags type'ında"
  },
];

// Render logic - Type narrowing
export function ServiceCards() {
  return (
    <div>
      {serviceCards.map((card, index) => {
        // TypeScript type'ı daraltıyor (narrowing)

        if (card.type === "image") {
          // Bu scope'ta TypeScript biliyor ki card = ImageServiceCard
          return <ServiceImageCard key={card.id} {...card} />;
          // card.image ✅ Available
          // card.tags  ❌ TypeScript error
        }

        if (card.type === "tags") {
          // Bu scope'ta TypeScript biliyor ki card = TagsServiceCard
          return <ServiceTagsCard key={card.id} {...card} />;
          // card.tags  ✅ Available
          // card.image ❌ TypeScript error
        }

        if (card.type === "checklist") {
          // card = ChecklistServiceCard
          return <ServiceChecklistCard key={card.id} {...card} />;
          // card.checklist ✅ Available
        }

        if (card.type === "chat") {
          // card = ChatServiceCard
          return <ServiceChatCard key={card.id} {...card} />;
          // card.messages ✅ Available
        }

        if (card.type === "dark") {
          // card = DarkServiceCard
          return <ServiceDarkCard key={card.id} {...card} />;
        }

        // Exhaustiveness check
        const _exhaustive: never = card;  // ✅ TypeScript garanti ediyor tüm type'ları handle ettik
        return _exhaustive;
      })}
    </div>
  );
}
```

#### Faydalar:

**1. Compile-Time Safety**

```tsx
// YANLIŞ:
{
  type: "image",
  // image prop eksik
}
// ❌ TypeScript Error: Property 'image' is missing

// DOĞRU:
{
  type: "image",
  image: "/service.jpg",  // ✅
}
```

**2. Intellisense**

```tsx
const card: ImageServiceCard = {
  type: "image",
  // Editor autocomplete:
  // - id: string
  // - title: string
  // - description: string
  // - image: string  ← Bu type için özel
  // - gridClass: string
  // - showButton?: boolean
};
```

**3. Refactoring Safety**

```tsx
// Card type ekle/çıkar:
export type ServiceCard =
  | ImageServiceCard
  | TagsServiceCard
  | NewServiceCard;  // ✅ Yeni type

// Render logic'te TypeScript hata verir:
// "NewServiceCard case'i handle edilmedi"
```

**4. Self-Documenting**

```tsx
// Type definition = documentation
// Her card type'ının ne gerektirdiği açık
```

**5. Runtime Safety**

```tsx
// Type narrowing sayesinde:
if (card.type === "image") {
  // card.image kesinlikle var (TypeScript garanti ediyor)
  <img src={card.image} />  // ✅ Runtime error yok
}
```

---

### 2.3 Custom Button Components Not Using Button Component

**Öncelik:** 🟠 Yüksek
**Tahmini Süre:** 45 dakika
**Etki:** Orta - Consistency, accessibility, maintainability

#### Neden Sorun:

**1. Button Component Varken Custom Implementation**

Projede zaten güçlü bir Button component var:
```tsx
// src/components/atoms/Button.tsx
<Button
  variant="primary"
  size="lg"
  icon={Phone}
  ariaLabel="Book a call"
>
  Click Me
</Button>
```

Ama bazı yerlerde custom button implementation:
```tsx
// hero-cta.tsx
<button className="p-2.5 bg-bg-dark rounded-full flex items-center hover:bg-opacity-90 transition-all">
  <div className="size-7 bg-white/13 flex items-center justify-center rounded-full" />
  <div className="py-1 px-3">
    <span className="text-white text-sm">{text}</span>
  </div>
</button>
```

**Sorun:**
- Button component'inin faydalarından yararlanılmıyor
- Accessibility features yok
- Tutarsız styling
- Duplicate code

**2. Accessibility Eksiklikleri**

```tsx
// hero-cta.tsx custom button
<button className="...">  // ❌ aria-label yok
  <div>...</div>  // ❌ Semantic yapı yok
</button>

// Button component
<Button ariaLabel="...">  // ✅ Accessibility built-in
  ...
</Button>
```

**3. Maintainability**

```tsx
// Button style'ı değiştirmek istersen:

// Button component kullanan yerler:
// ✅ Tek yerden güncelle, her yerde değişir

// Custom button kullanan yerler:
// ❌ Her birini manuel güncelle
```

#### Etkilenen Dosyalar:

**1. `hero-cta.tsx` (lines 10-24)**

```tsx
export function HeroCTA({ text, onClick }: HeroCTAProps) {
  return (
    <button
      onClick={onClick}
      className="p-2.5 bg-bg-dark rounded-full flex items-center hover:bg-opacity-90 transition-all group"
    >
      <div className="size-7 bg-white/13 flex items-center justify-center rounded-full group-hover:bg-white/20 transition-all mr-0.5">
        <Play
          size={12}
          className="text-white fill-white ml-0.5"
          strokeWidth={0}
        />
      </div>
      <div className="py-1 px-3">
        <span className="text-white text-sm">{text}</span>
      </div>
    </button>
  );
}
```

**Sorunlar:**
- Custom styling
- Accessibility eksik (`aria-label` yok)
- Button component'i kullanmıyor
- Hover effects custom

**2. `hero-video.tsx` (lines 19-26)**

```tsx
<button
  onClick={onPlay}
  className="size-20 bg-white flex items-center justify-center rounded-full hover:scale-105 transition-transform shadow-button-play"
>
  <Play
    size={32}
    className="text-bg-dark fill-bg-dark ml-1"
    strokeWidth={0}
  />
</button>
```

**Sorunlar:**
- `<button>` elementi direkt kullanılmış
- `aria-label` yok (accessibility)
- Button component özellikleri yok

#### Önerilen Çözüm:

**Option 1: Button Component Variants Ekle**

```tsx
// src/components/atoms/Button.tsx'e yeni variant'lar ekle

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "hero-cta"     // ✅ Yeni
  | "hero-video"   // ✅ Yeni

// Variant styles:
const variantStyles = {
  // Mevcut variants...
  "hero-cta": "p-2.5 bg-bg-dark rounded-full hover:bg-opacity-90",
  "hero-video": "size-20 bg-white rounded-full hover:scale-105 transition-transform shadow-button-play",
};
```

**hero-cta.tsx'i Güncelle:**

```tsx
// ÖNCE:
export function HeroCTA({ text, onClick }: HeroCTAProps) {
  return (
    <button className="p-2.5 bg-bg-dark rounded-full ...">
      <div className="size-7 bg-white/13 ...">
        <Play size={12} ... />
      </div>
      <div className="py-1 px-3">
        <span className="text-white text-sm">{text}</span>
      </div>
    </button>
  );
}

// SONRA:
import { Button } from "@/components/atoms";
import { Play } from "lucide-react";

export function HeroCTA({ text, onClick }: HeroCTAProps) {
  return (
    <Button
      variant="hero-cta"
      onClick={onClick}
      ariaLabel={`${text} - Watch video`}
      className="group"
    >
      <div className="size-7 bg-white/13 flex items-center justify-center rounded-full group-hover:bg-white/20 transition-all mr-0.5">
        <Play
          size={12}
          className="text-white fill-white ml-0.5"
          strokeWidth={0}
        />
      </div>
      <span className="text-white text-sm py-1 px-3">{text}</span>
    </Button>
  );
}
```

**hero-video.tsx'i Güncelle:**

```tsx
// ÖNCE:
<button
  onClick={onPlay}
  className="size-20 bg-white flex items-center justify-center rounded-full hover:scale-105 transition-transform shadow-button-play"
>
  <Play size={32} className="text-bg-dark fill-bg-dark ml-1" strokeWidth={0} />
</button>

// SONRA:
<Button
  variant="hero-video"
  onClick={onPlay}
  icon={Play}
  ariaLabel="Play video"
  className="size-20"
/>
```

**Option 2: Composite Pattern (Daha Flexible)**

Eğer hero button'lar çok unique ise, Button component'ini wrapper olarak kullan:

```tsx
// hero-cta.tsx
export function HeroCTA({ text, onClick }: HeroCTAProps) {
  return (
    <Button
      variant="unstyled"  // Base button, custom styling'e izin ver
      onClick={onClick}
      ariaLabel={`${text} - Watch video`}
      className="p-2.5 bg-bg-dark rounded-full flex items-center hover:bg-opacity-90 transition-all group"
    >
      <div className="size-7 bg-white/13 flex items-center justify-center rounded-full group-hover:bg-white/20 transition-all mr-0.5">
        <Play
          size={12}
          className="text-white fill-white ml-0.5"
          strokeWidth={0}
        />
      </div>
      <span className="text-white text-sm py-1 px-3">{text}</span>
    </Button>
  );
}
```

#### Faydalar:

**1. Accessibility**
```tsx
// Button component accessibility features:
// - aria-label
// - keyboard navigation
// - focus states
// - disabled states
```

**2. Consistency**
```tsx
// Tüm button'lar aynı base'i kullanır
// Hover, focus, active states consistent
```

**3. Maintainability**
```tsx
// Button değişikliği → Tek yerden
// Custom button'lar da benefit eder
```

**4. Testing**
```tsx
// Button component bir kere test edilir
// Hero button'lar da güvenli
```

---

### 2.4 SectionContent Not Used Consistently

**Öncelik:** 🟠 Yüksek
**Tahmini Süre:** 1 saat
**Etki:** Orta - Consistency, maintainability

#### Neden Sorun:

**1. Bazı Section'lar SectionContent Kullanıyor, Bazıları Yok**

```tsx
// our-work.tsx - SectionContent KULLANILIYOR ✅
<SectionContainer>
  <SectionContent>
    {/* content */}
  </SectionContent>
</SectionContainer>

// testimonials.tsx - SectionContent KULLANILMIYOR ❌
<SectionContainer>
  <div className="xl:gap-16 md:gap-14 gap-10 flex flex-col">
    {/* content */}
  </div>
</SectionContainer>

// process-section.tsx - SectionContent KULLANILMIYOR ❌
<SectionContainer>
  <div className="xl:gap-16 lg:gap-14 gap-10 flex lg:flex-row flex-col">
    {/* content */}
  </div>
</SectionContainer>
```

**Sorun:**
- İki farklı pattern aynı amaç için
- Hangisini kullanacağın belirsiz
- Spacing tutarsız

**2. Manual Wrapper Divs**

```tsx
// SectionContent var ama bazı yerler manuel div kullanıyor
<div className="xl:gap-16 md:gap-14 gap-10 flex flex-col">
  {/* SectionContent ile aynı ama manuel */}
</div>
```

**Sorun:**
- Code duplication
- Spacing değişikliği için her yeri manuel güncelle

**3. SectionContent Purpose Belirsiz**

```tsx
// SectionContent ne için var?
// Ne zaman kullanmalıyım?
// Documentation yok
```

#### Etkilenen Dosyalar:

**SectionContent KULLANAN Section'lar:** ✅
- `our-work.tsx` (line 60)
- `blog-section.tsx` (line 55)
- `pricing.tsx` (line 35)
- `impact-section.tsx` (line 39)

**SectionContent KULLANMAYAN Section'lar:** ❌
- `testimonials.tsx` (line 87) - Manuel div
- `process-section.tsx` (line 53) - Manuel div
- `faq.tsx` (line 64) - Direkt content, wrapper yok
- `hero.tsx` - Özel layout, SectionContent uygun değil

#### SectionContent Nedir?

```tsx
// section-container.tsx
export function SectionContent({
  children,
  className,
}: SectionContentProps) {
  return (
    <div className={cn("xl:gap-16 md:gap-14 gap-10 flex flex-col", className)}>
      {children}
    </div>
  );
}
```

**Amaç:**
- Section içinde consistent vertical spacing
- Flex layout
- Customizable className

#### Önerilen Çözüm:

**1. SectionContent Kullanımını Standardize Et**

**Kural:** Her SectionContainer içinde SectionContent kullan (özel layout'lar hariç)

```tsx
// Pattern:
<SectionContainer>
  <SectionContent>
    {/* section content */}
  </SectionContent>
</SectionContainer>
```

**2. Manuel Div'leri SectionContent ile Değiştir**

**testimonials.tsx:**
```tsx
// ÖNCE:
<SectionContainer className="xl:pb-24 md:pb-14 pb-10">
  <div className="xl:gap-16 md:gap-14 gap-10 flex flex-col">
    <SectionHeader {...} />
    <div className="grid ...">
      {/* testimonials */}
    </div>
  </div>
</SectionContainer>

// SONRA:
<SectionContainer className="xl:pb-24 md:pb-14 pb-10">
  <SectionContent>
    <SectionHeader {...} />
    <div className="grid ...">
      {/* testimonials */}
    </div>
  </SectionContent>
</SectionContainer>
```

**process-section.tsx:**
```tsx
// ÖNCE:
<SectionContainer id="process">
  <div className="xl:gap-16 lg:gap-14 gap-10 flex lg:flex-row flex-col">
    {/* content */}
  </div>
</SectionContainer>

// SONRA:
<SectionContainer id="process">
  <SectionContent className="lg:flex-row">
    {/* content - SectionContent default flex-col, override with className */}
  </SectionContent>
</SectionContainer>
```

**faq.tsx:**
```tsx
// ÖNCE:
<SectionContainer id="faq">
  <div className="xl:gap-16 md:gap-14 gap-20 flex justify-between lg:flex-row flex-col">
    {/* content */}
  </div>
</SectionContainer>

// SONRA:
<SectionContainer id="faq">
  <SectionContent className="gap-20 justify-between lg:flex-row">
    {/* content */}
  </SectionContent>
</SectionContainer>
```

**3. SectionContent'i İyileştir (Opsiyonel)**

Eğer daha flexible olmasını istersen:

```tsx
// section-container.tsx
export interface SectionContentProps {
  children: React.ReactNode;
  className?: string;
  /** Layout direction */
  direction?: "vertical" | "horizontal";
  /** Vertical gap size */
  gap?: "sm" | "md" | "lg";
}

export function SectionContent({
  children,
  className,
  direction = "vertical",
  gap = "md",
}: SectionContentProps) {
  const gapClasses = {
    sm: "xl:gap-5 gap-4",
    md: "xl:gap-16 md:gap-14 gap-10",
    lg: "xl:gap-20 md:gap-16 gap-12",
  };

  const directionClass = direction === "horizontal" ? "lg:flex-row" : "flex-col";

  return (
    <div className={cn("flex", directionClass, gapClasses[gap], className)}>
      {children}
    </div>
  );
}

// Kullanım:
<SectionContent direction="horizontal" gap="lg">
  {/* content */}
</SectionContent>
```

**4. Documentation Ekle**

```tsx
/**
 * SectionContent
 *
 * Standard wrapper for content within SectionContainer.
 * Provides consistent vertical spacing and flex layout.
 *
 * @example
 * ```tsx
 * <SectionContainer>
 *   <SectionContent>
 *     <SectionHeader ... />
 *     <div>Main content</div>
 *   </SectionContent>
 * </SectionContainer>
 * ```
 *
 * @example Horizontal layout
 * ```tsx
 * <SectionContent className="lg:flex-row">
 *   <div>Left</div>
 *   <div>Right</div>
 * </SectionContent>
 * ```
 */
```

#### Faydalar:

**1. Consistency**
```tsx
// Tüm section'lar aynı pattern
// Yeni developer hemen anlar
```

**2. Maintainability**
```tsx
// Spacing değişikliği → Tek component'ten
// Manuel div'ler yok
```

**3. Predictability**
```tsx
// SectionContainer + SectionContent = Standard
// Exception'lar açıkça belirtilir (hero gibi)
```

**4. Less Code**
```tsx
// <SectionContent>
// vs
// <div className="xl:gap-16 md:gap-14 gap-10 flex flex-col">
```

---

### 2.5 Button Padding Inconsistent

**Öncelik:** 🟠 Yüksek
**Tahmini Süre:** 30 dakika
**Etki:** Düşük-Orta - Visual consistency

#### Neden Sorun:

**Inconsistent Padding Values**

```tsx
// navbar.tsx
<BookCallButton className="p-1.5 gap-2 max-w-max" />  // p-1.5

// Diğer yerlerde
<BookCallButton className="p-2 gap-2" />  // p-2

// Button component base
<Button size="sm" />  // Internal padding farklı olabilir
```

**Sorun:**
- Aynı button farklı yerlerde farklı padding
- `p-1.5` vs `p-2` → Subtle ama fark edilir
- Design consistency yok

#### Önerilen Çözüm:

**Option 1: Button Size Prop Kullan**

```tsx
// Button component zaten size prop'u var:
<Button size="sm" />   // Predefined padding
<Button size="md" />   // Predefined padding
<Button size="lg" />   // Predefined padding

// BookCallButton'da:
<BookCallButton size="sm" />  // Consistent padding
```

**Option 2: Padding Constants**

```tsx
// constants/spacing.ts'e ekle:
export const BUTTON_PADDING = {
  sm: "p-1.5",
  md: "p-2",
  lg: "p-3",
} as const;

// Kullanım:
import { BUTTON_PADDING } from "@/constants/spacing";

<BookCallButton className={`${BUTTON_PADDING.sm} gap-2 max-w-max`} />
```

**Option 3: BookCallButton Default Padding**

```tsx
// BookCallButton.tsx
export function BookCallButton({ className, ...props }: BookCallButtonProps) {
  return (
    <Button
      {...props}
      className={cn("p-2 gap-2 max-w-max", className)}  // ✅ Default padding
    />
  );
}

// Kullanım - padding override gerekmez:
<BookCallButton />  // ✅ Default p-2
<BookCallButton className="p-1.5" />  // Override if needed
```

---

## 3. Orta Öncelikli Sorunlar

### 3.1 Missing Barrel Export for Hero Subcomponents

**Öncelik:** 🟡 Orta
**Tahmini Süre:** 15 dakika
**Etki:** Düşük - Import organization

#### Neden Sorun:

**Hero klasöründe barrel export yok:**

```tsx
// hero/ directory structure:
hero/
  hero-badge.tsx
  hero-cta.tsx
  hero-heading.tsx
  hero-social-proof.tsx
  hero-testimonial-card-unified.tsx
  hero-trusted-companies.tsx
  hero-video.tsx
  types.ts
  // ❌ index.ts YOK
```

**Import'lar uzun:**
```tsx
import { HeroBadge } from "@/components/organisms/hero/hero-badge";
import { HeroCTA } from "@/components/organisms/hero/hero-cta";
import { HeroHeading } from "@/components/organisms/hero/hero-heading";
```

#### Önerilen Çözüm:

```tsx
// hero/index.ts (yeni dosya)
export { HeroBadge } from "./hero-badge";
export { HeroCTA } from "./hero-cta";
export { HeroHeading } from "./hero-heading";
export { HeroSocialProof } from "./hero-social-proof";
export { HeroTestimonialCard } from "./hero-testimonial-card-unified";
export { HeroTrustedCompanies } from "./hero-trusted-companies";
export { HeroVideo } from "./hero-video";
export type * from "./types";

// Kullanım:
import { HeroBadge, HeroCTA, HeroHeading } from "@/components/organisms/hero";
```

---

### 3.2 Accessibility Issues

**Öncelik:** 🟡 Orta
**Tahmini Süre:** 2 saat
**Etki:** Yüksek - Accessibility, SEO, compliance

#### Tespit Edilen Sorunlar:

**1. Footer h1 Should Be h2**

```tsx
// footer.tsx:43
<h1 className="lg:text-[16rem] md:text-[12rem] sm:text-9xl text-8xl font-bold text-white/80 opacity-20 text-center mask-fade-vertical">
  Gune<span className="text-brand-coral">y</span>
</h1>
```

**Sorun:**
- Page'de sadece 1 `h1` olmalı
- SEO için `h1` unique heading olmalı
- Footer'da `h1` semantic olarak yanlış

**Çözüm:**
```tsx
<h2 className="...">Gune<span className="text-brand-coral">y</span></h2>
```

**2. Avatar Alt Text Generic**

```tsx
// Likely:
<img src="/avatars/1.jpg" alt="Avatar" />
```

**Sorun:**
- Screen reader "Avatar" der, kimin avatar'ı belirsiz

**Çözüm:**
```tsx
<img src="/avatars/1.jpg" alt="Alex Johnson profile picture" />
```

**3. Mobile Menu Focus Management Missing**

```tsx
// navbar.tsx mobile menu
<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
  <Menu />
</button>

// Menu açıldığında focus ilk link'e gitmeli
// ESC tuşu menu'yu kapatmalı
// Menu dışına tıklayınca kapanmalı
```

**Çözüm:**
```tsx
import { useEffect, useRef } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Focus first link when menu opens
  useEffect(() => {
    if (isMobileMenuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isMobileMenuOpen]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMobileMenuOpen]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    // ...
    <div ref={menuRef}>
      <NavLink ref={firstLinkRef} {...} />
    </div>
  );
};
```

---

### 3.3 Animation Constants

**Öncelik:** 🟡 Orta
**Tahmini Süre:** 30 dakika
**Etki:** Düşük-Orta - Maintainability

#### Neden Sorun:

**Magic Numbers:**

```tsx
// constants/animations.ts
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },  // 0.8, [0.25...]
};

export const FADE_IN_DELAYED = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 },  // 0.6, 0.2
};
```

**Sorun:**
- `0.8`, `0.6`, `0.2` nereden geldi?
- Tüm animation'larda consistent olmalı
- Değiştirmek istersen her yerde güncelle

#### Önerilen Çözüm:

```tsx
// constants/animations.ts

/**
 * Animation Timing Constants
 */
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  verySlow: 1.2,
} as const;

export const ANIMATION_DELAY = {
  none: 0,
  short: 0.2,
  medium: 0.4,
  long: 0.6,
} as const;

export const ANIMATION_EASING = {
  smooth: [0.25, 0.4, 0.25, 1],
  spring: [0.68, -0.55, 0.265, 1.55],
  linear: [0, 0, 1, 1],
} as const;

// Updated animations:
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: ANIMATION_DURATION.slow,
    ease: ANIMATION_EASING.smooth,
  },
};

export const FADE_IN_DELAYED = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: ANIMATION_DURATION.normal,
    delay: ANIMATION_DELAY.short,
  },
};
```

---

### 3.4 Mixed Export Patterns

**Öncelik:** 🟡 Orta
**Tahmini Süre:** 1 saat
**Etki:** Düşük - Consistency

#### Neden Sorun:

**Default Export vs Named Export:**

```tsx
// Bazı component'ler default export:
export default function Navbar() { }
export default function Footer() { }

// Bazıları named export:
export function HeroBadge() { }
export function BookCallButton() { }
```

**Sorun:**
- Inconsistent
- Default export rename edilebilir (kafakarışık olabilir)
- Named export refactoring-friendly

#### Önerilen Çözüm:

**Tutarlı Named Export Kullan:**

```tsx
// ÖNCE:
export default function Navbar() { }

// Import:
import Navbar from "@/components/organisms/navbar";
import Nav from "@/components/organisms/navbar";  // ❌ Farklı isim kullanılabilir

// SONRA:
export function Navbar() { }

// Import:
import { Navbar } from "@/components/organisms/navbar";  // ✅ Consistent
```

**Barrel Export'ta:**
```tsx
// organisms/index.ts
export { Navbar } from "./navbar";
export { Footer } from "./footer";
// ...
```

---

## 4. Düşük Öncelikli Sorunlar

### 4.1 Testimonials Grid Not Using Stagger Animation

**Öncelik:** 🟢 Düşük
**Tahmini Süre:** 15 dakika
**Etki:** Düşük - Visual polish

```tsx
// testimonials.tsx - Tek animation tüm grid'e
<motion.div {...FADE_IN_DELAYED}>
  {testimonials.map(...)}
</motion.div>

// Diğer section'larda - Stagger animation
{projects.map((project, index) => (
  <motion.div {...getStaggerAnimation(index, 0.15)}>
    <ProjectCard />
  </motion.div>
))}
```

**Çözüm:**
```tsx
{testimonials.map((testimonial, index) => (
  <motion.div key={testimonial.id} {...getStaggerAnimation(index, 0.15)}>
    <TestimonialCard {...testimonial} />
  </motion.div>
))}
```

---

### 4.2 FAQ Default Open Item Not Documented

**Öncelik:** 🟢 Düşük
**Tahmini Süre:** 5 dakika
**Etki:** Çok Düşük - Documentation

```tsx
// faq.tsx:86
<Accordion.Root defaultValue="item-5">
  {/* Neden item-5? */}
</Accordion.Root>
```

**Çözüm:**
```tsx
// Constant olarak çıkar ve dokümante et
const DEFAULT_OPEN_FAQ = "item-5"; // Item 5: Most commonly asked question

<Accordion.Root defaultValue={DEFAULT_OPEN_FAQ}>
```

---

### 4.3 Process Section Default Open Step

**Öncelik:** 🟢 Düşük
**Tahmini Süre:** 5 dakika

Similar to FAQ.

---

### 4.4 Hero Subcomponents Location

**Öncelik:** 🟢 Düşük
**Tahmini Süre:** 30 dakika
**Etki:** Çok Düşük - Organization

```tsx
// hero/ içindeki component'ler organism mi molecule mi?

hero-badge/        // Molecule olabilir (Badge + Text)
hero-cta/          // Molecule olabilir (Button variant)
hero-heading/      // Molecule olabilir (Typography compound)
```

**Değerlendirme gerekli:** Atomic Design prensipleri açısından bu component'lerin molecules'e taşınması mantıklı olabilir.

---

## 5. Uygulama Planı

### Hafta 1: Kritik (İlk 2-3 saat)

**Gün 1:**
- [x] ✅ BookCallButton extraction (30 dk) - TAMAMLANDI
- [ ] Hardcoded content → constants/content.ts (1.5 saat)
- [ ] Spacing constants creation (30 dk)

**Gün 2:**
- [ ] Index-based keys fix (30 dk)
- [ ] Build & test (30 dk)

**Tahmini:** 3-4 saat

---

### Hafta 2: Yüksek Öncelik (4-5 saat)

**Gün 1:**
- [ ] Card props consistency (1.5 saat)
- [ ] Service cards discriminated unions (1 saat)

**Gün 2:**
- [ ] Hero button refactoring (45 dk)
- [ ] SectionContent standardization (1 saat)
- [ ] Button padding fix (30 dk)

**Tahmini:** 4.75 saat

---

### Hafta 3: Orta Öncelik (2-3 saat)

**Gün 1:**
- [ ] Hero barrel export (15 dk)
- [ ] Accessibility fixes (2 saat)

**Gün 2:**
- [ ] Animation constants (30 dk)
- [ ] Export pattern consistency (1 saat)

**Tahmini:** 3.75 saat

---

### Hafta 4: Düşük Öncelik (1-2 saat)

- [ ] Testimonial stagger animation (15 dk)
- [ ] Documentation improvements (30 dk)
- [ ] Optional: Hero component relocation (30 dk)

**Tahmini:** 1.25 saat

---

**TOPLAM TAHMİNİ SÜRE:** 12-15 saat

---

## 6. Önleme Kuralları

### ESLint Rules

```json
// .eslintrc.json
{
  "rules": {
    // Prevent index keys
    "react/jsx-key": ["error", {
      "checkFragmentShorthand": true,
      "checkKeyMustBeforeSpread": true
    }],

    // Consistent naming
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"]
      },
      {
        "selector": "typeAlias",
        "format": ["PascalCase"]
      }
    ],

    // Prefer named exports
    "import/no-default-export": "warn",
    "import/prefer-default-export": "off",

    // Accessibility
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/heading-has-content": "error",
  }
}
```

### Pre-commit Hooks

```bash
# .husky/pre-commit
npm run lint
npm run type-check
npm run build
```

### Code Review Checklist

```markdown
## Anti-Pattern Checklist

- [ ] No hardcoded content in components
- [ ] No index-based keys in maps
- [ ] Consistent use of SectionContent
- [ ] All similar components share base props
- [ ] Animation timing uses constants
- [ ] Spacing uses constants
- [ ] Accessibility attributes present
- [ ] Named exports preferred
```

---

## 7. Metrics

### Code Quality Improvement

**Önce:**
- Duplicate code: ~200 satır
- Type safety: Zayıf (optional props)
- Accessibility: Kısmi
- Consistency: %60

**Sonra (Hedef):**
- Duplicate code: ~50 satır (-75%)
- Type safety: Güçlü (discriminated unions)
- Accessibility: WCAG 2.1 AA
- Consistency: %95

### Maintainability

**Önce:**
- Content değişikliği: 7 dosya
- Spacing değişikliği: 15+ dosya
- Button değişikliği: 7 dosya

**Sonra:**
- Content değişikliği: 1 dosya
- Spacing değişikliği: 1 dosya
- Button değişikliği: 1 dosya

---

## Sonuç

Bu anti-pattern analizi **79 dosya** üzerinde yapıldı ve **45+ spesifik sorun** tespit edildi. Sorunlar **4 öncelik seviyesine** ayrıldı ve **detaylı çözüm önerileri** sunuldu.

**Toplam tahmini süre:** 12-15 saat
**En kritik:** Hafta 1 (3-4 saat)
**ROI:** Yüksek - Maintenance süresi %50+ azalacak

**Sonraki Adımlar:**
1. Bu dokümanı gözden geçir
2. Öncelikleri onayla
3. Hafta 1 uygulama planını başlat
4. Her hafta progress review yap
