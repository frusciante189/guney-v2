# Frontend Best Practices - React & Tailwind CSS v4

## İçindekiler
1. [Tailwind CSS v4 - Yenilikler ve Değişiklikler](#tailwind-css-v4)
2. [React + Tailwind CSS Best Practices](#react-tailwind-best-practices)
3. [Frontend System Design](#frontend-system-design)
4. [Component Architecture - Atomic Design](#atomic-design)
5. [Design Tokens ve Theming](#design-tokens)
6. [Clean Code Principles](#clean-code)

---

## Tailwind CSS v4 - Yenilikler ve Değişiklikler {#tailwind-css-v4}

### Temel Değişiklikler

#### 1. CSS-First Configuration (En Önemli Değişiklik)
Tailwind CSS v4, JavaScript tabanlı konfigürasyondan CSS-first konfigürasyona geçiş yaptı.

**Eski Yöntem (v3):**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6'
      }
    }
  }
}
```

**Yeni Yöntem (v4):**
```css
/* globals.css */
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --font-sans: 'Inter', sans-serif;
  --breakpoint-3xl: 1920px;
}
```

#### 2. @theme Directive
Tema değişkenlerini doğrudan CSS'de tanımlayabilirsiniz:

```css
@import "tailwindcss";

@theme {
  /* Font Families */
  --font-display: "Satoshi", "sans-serif";

  /* Custom Breakpoints */
  --breakpoint-3xl: 1920px;

  /* Custom Colors (OKLCH color space) */
  --color-neon-pink: oklch(71.7% 0.25 360);
  --color-neon-lime: oklch(91.5% 0.258 129);
  --color-neon-cyan: oklch(91.3% 0.139 195.8);

  /* Custom Animations */
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
}
```

#### 3. Custom Utilities (@utility)
```css
@theme {
  --tab-size-2: 2;
  --tab-size-4: 4;
  --tab-size-github: 8;
}

@utility tab-* {
  tab-size: --value(--tab-size-*);
}

/* Kullanım: class="tab-2" veya class="tab-github" */
```

#### 4. Component Utilities
v3'teki `@layer components` yerine `@utility` kullanılır:

```css
/* ESKI (v3) */
@layer components {
  .btn {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: ButtonFace;
  }
}

/* YENİ (v4) */
@utility btn {
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ButtonFace;
}
```

#### 5. CSS Variables ile Dynamic Theming
```jsx
export function BrandedButton({ buttonColor, buttonColorHover, textColor, children }) {
  return (
    <button
      style={{
        "--bg-color": buttonColor,
        "--bg-color-hover": buttonColorHover,
        "--text-color": textColor,
      }}
      className="bg-(--bg-color) text-(--text-color) hover:bg-(--bg-color-hover)"
    >
      {children}
    </button>
  );
}
```

#### 6. Performance İyileştirmeleri
- Full builds **5x daha hızlı**
- Incremental builds **100x daha hızlı** (mikrosaniye seviyesinde)
- Otomatik content detection (content array'e gerek yok)

#### 7. Modern CSS Features
- Cascade layers
- Registered custom properties (@property)
- color-mix()
- OKLCH color space

#### 8. Breaking Changes
- **Default border color:** gray-200 yerine `currentColor` kullanılıyor
- **Default ring size:** 3px yerine 1px, `currentColor` kullanıyor
- **@apply kısıtlaması:** `@layer` içinde oluşturulan custom class'lar v4'te `@apply` ile kullanılamaz

#### 9. Theme Değerlerine Erişim

**CSS'de:**
```css
.my-class {
  /* ESKI (v3) */
  background-color: theme(colors.red.500);

  /* YENİ (v4) */
  background-color: var(--color-red-500);
}

/* Media queries için */
@media (width >= theme(--breakpoint-xl)) {
  /* ... */
}
```

**JavaScript'te:**
```jsx
// Motion library ile
<motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />

// Vanilla JS ile
let styles = getComputedStyle(document.documentElement);
let shadow = styles.getPropertyValue("--shadow-xl");
```

#### 10. Vue/Svelte ile @reference Directive
```vue
<template>
  <h1>Hello world!</h1>
</template>

<style>
  @reference "../../app.css";

  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
```

---

## React + Tailwind CSS Best Practices {#react-tailwind-best-practices}

### 1. Utility-First Approach
Tailwind'in utility class'larını doğrudan JSX'te kullanın:

```jsx
// ✅ İYİ
function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      {children}
    </button>
  );
}

// ❌ KÖTÜ - Gereksiz CSS dosyası
// button.css
.custom-button {
  padding: 1rem;
  background: blue;
}
```

### 2. Component-Based Organization
Tutarlı stil için reusable component'ler oluşturun:

```jsx
// components/Button.jsx
export function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const baseStyles = 'rounded-lg font-semibold transition-colors';

  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

### 3. @apply Kullanımı (Stratejik)
@apply'i **sadece tekrar eden pattern'ler için** kullanın:

```css
/* globals.css */
@layer components {
  .btn-primary {
    border-radius: calc(infinity * 1px);
    background-color: var(--color-violet-500);
    padding-inline: --spacing(5);
    padding-block: --spacing(2);
    font-weight: var(--font-weight-semibold);
    color: var(--color-white);
    box-shadow: var(--shadow-md);

    &:hover {
      @media (hover: hover) {
        background-color: var(--color-violet-700);
      }
    }
  }
}
```

```jsx
// Kullanım
<button className="btn-primary">Save changes</button>
```

### 4. Responsive Design - Mobile First
```jsx
function Card() {
  return (
    <div className="
      w-full           /* Base: Mobile */
      sm:w-1/2         /* Small screens */
      md:w-1/3         /* Medium screens */
      lg:w-1/4         /* Large screens */
      xl:w-1/5         /* Extra large screens */
      p-4
      bg-white
      rounded-lg
      shadow-md
    ">
      Content
    </div>
  );
}
```

### 5. Dynamic Class Names (clsx/classnames)
```jsx
import clsx from 'clsx';

function Alert({ type, message }) {
  return (
    <div className={clsx(
      'p-4 rounded-lg',
      {
        'bg-red-100 text-red-800': type === 'error',
        'bg-green-100 text-green-800': type === 'success',
        'bg-blue-100 text-blue-800': type === 'info',
      }
    )}>
      {message}
    </div>
  );
}
```

### 6. Conditional Styling
```jsx
function NavigationLink({ isActive, children }) {
  return (
    <a
      className={`
        px-4 py-2 rounded-lg transition-colors
        ${isActive
          ? 'bg-blue-500 text-white'
          : 'text-gray-700 hover:bg-gray-100'
        }
      `}
    >
      {children}
    </a>
  );
}
```

### 7. State-Based Styling
```jsx
function Input({ error, ...props }) {
  return (
    <div className="space-y-1">
      <input
        className={`
          w-full px-4 py-2 rounded-lg border
          focus:outline-none focus:ring-2
          ${error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-500'
          }
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
```

### 8. Data Attributes ile Advanced Styling
```jsx
function Field({ children }) {
  return (
    <div className="data-[slot=description]:*:mt-4 space-y-2">
      {children}
    </div>
  );
}

function Description({ children }) {
  return (
    <p data-slot="description" className="text-sm text-gray-600">
      {children}
    </p>
  );
}
```

### 9. Performance Optimization
```jsx
// ✅ İYİ - Class names static
const staticClasses = 'px-4 py-2 bg-blue-500 text-white';

function Button({ children }) {
  return <button className={staticClasses}>{children}</button>;
}

// ❌ KÖTÜ - Her render'da yeni string
function Button({ children }) {
  return <button className={'px-4 py-2 bg-blue-500 text-white'}>{children}</button>;
}
```

### 10. Tailwind Config Best Practices
```js
// tailwind.config.js (v3) veya CSS (v4)
// Design system değerlerinizi merkezi bir yerde tanımlayın

@theme {
  /* Brand Colors */
  --color-brand-primary: #3b82f6;
  --color-brand-secondary: #8b5cf6;

  /* Spacing Scale */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

---

## Frontend System Design {#frontend-system-design}

### RADIO Framework
Frontend system design için kullanılan framework:

1. **R**equirements exploration
2. **A**rchitecture / High-level design
3. **D**ata model
4. **I**nterface definition (API)
5. **O**ptimizations and deep dive

### Core Principles

#### 1. Modularity
Uygulamayı küçük, yeniden kullanılabilir component'lere bölün:

```jsx
// ❌ KÖTÜ - Monolithic component
function Dashboard() {
  return (
    <div>
      <header>{/* 100 lines */}</header>
      <nav>{/* 50 lines */}</nav>
      <main>{/* 200 lines */}</main>
      <footer>{/* 30 lines */}</footer>
    </div>
  );
}

// ✅ İYİ - Modular components
function Dashboard() {
  return (
    <div>
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
}
```

#### 2. Separation of Concerns
Container/Presentational Pattern:

```jsx
// Container (Logic)
function UserListContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return <UserList users={users} loading={loading} />;
}

// Presentational (UI)
function UserList({ users, loading }) {
  if (loading) return <LoadingSpinner />;

  return (
    <ul className="space-y-4">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}
```

#### 3. Visual Hierarchy
Boyut, renk ve kontrast kullanarak önemli elementleri vurgulayın:

```jsx
function PricingCard({ featured }) {
  return (
    <div className={`
      p-6 rounded-lg
      ${featured
        ? 'bg-blue-500 text-white scale-105 shadow-2xl'
        : 'bg-white text-gray-900 shadow-md'
      }
    `}>
      <h3 className={`
        font-bold
        ${featured ? 'text-3xl' : 'text-2xl'}
      `}>
        Premium Plan
      </h3>
      <p className={`
        mt-4
        ${featured ? 'text-4xl' : 'text-3xl'}
      `}>
        $99/mo
      </p>
    </div>
  );
}
```

#### 4. Consistency
Design system kullanarak tutarlılık sağlayın:

```jsx
// design-system/colors.js
export const colors = {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  },
  // ...
};

// design-system/spacing.js
export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  // ...
};
```

#### 5. Accessibility
```jsx
function AccessibleButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Submit form"
      role="button"
    >
      {children}
    </button>
  );
}
```

### Documentation Best Practices

#### Storybook Kullanımı
```jsx
// Button.stories.jsx
export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};
```

---

## Component Architecture - Atomic Design {#atomic-design}

### Atomic Design Methodology
Brad Frost tarafından geliştirilmiş, 5 temel building block içeren metodoloji:

```
Atoms → Molecules → Organisms → Templates → Pages
```

### 1. Atoms
En küçük UI bileşenleri:

```jsx
// atoms/Button.jsx
export function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      {...props}
    >
      {children}
    </button>
  );
}

// atoms/Input.jsx
export function Input({ ...props }) {
  return (
    <input
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}

// atoms/Label.jsx
export function Label({ children, ...props }) {
  return (
    <label className="block text-sm font-medium text-gray-700" {...props}>
      {children}
    </label>
  );
}
```

### 2. Molecules
2 veya daha fazla atom'dan oluşur:

```jsx
// molecules/TextField.jsx
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

export function TextField({ label, error, ...props }) {
  return (
    <div className="space-y-1">
      {label && <Label>{label}</Label>}
      <Input {...props} />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}

// molecules/SearchBox.jsx
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

export function SearchBox({ onSearch }) {
  return (
    <div className="flex gap-2">
      <Input placeholder="Search..." />
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
}
```

### 3. Organisms
Molecule ve atom gruplarından oluşan karmaşık UI component'leri:

```jsx
// organisms/Header.jsx
import { Logo } from '../atoms/Logo';
import { Navigation } from '../molecules/Navigation';
import { SearchBox } from '../molecules/SearchBox';
import { UserMenu } from '../molecules/UserMenu';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-4">
          <SearchBox />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}

// organisms/ProductCard.jsx
import { Image } from '../atoms/Image';
import { Heading } from '../atoms/Heading';
import { Price } from '../atoms/Price';
import { Button } from '../atoms/Button';
import { Rating } from '../molecules/Rating';

export function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={product.image} alt={product.name} />
      <div className="p-4 space-y-2">
        <Heading level={3}>{product.name}</Heading>
        <Rating value={product.rating} />
        <Price amount={product.price} />
        <Button variant="primary" className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
```

### 4. Templates
Component'leri layout içine yerleştirir:

```jsx
// templates/DashboardLayout.jsx
export function DashboardLayout({ sidebar, header, main, footer }) {
  return (
    <div className="min-h-screen flex flex-col">
      {header}
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100">
          {sidebar}
        </aside>
        <main className="flex-1 p-6">
          {main}
        </main>
      </div>
      {footer}
    </div>
  );
}

// templates/ProductListTemplate.jsx
export function ProductListTemplate({ filters, products, pagination }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <aside className="w-64">
          {filters}
        </aside>
        <div className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products}
          </div>
          {pagination}
        </div>
      </div>
    </div>
  );
}
```

### 5. Pages
Template'lerin gerçek data ile doldurulmuş hali:

```jsx
// pages/ProductsPage.jsx
import { DashboardLayout } from '../templates/DashboardLayout';
import { ProductListTemplate } from '../templates/ProductListTemplate';
import { Header } from '../organisms/Header';
import { Sidebar } from '../organisms/Sidebar';
import { ProductCard } from '../organisms/ProductCard';
import { Pagination } from '../molecules/Pagination';
import { FilterPanel } from '../organisms/FilterPanel';

export function ProductsPage() {
  const products = useProducts();

  return (
    <DashboardLayout
      header={<Header />}
      sidebar={<Sidebar />}
      main={
        <ProductListTemplate
          filters={<FilterPanel />}
          products={products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          pagination={<Pagination />}
        />
      }
    />
  );
}
```

### Folder Structure
```
src/
├── components/
│   ├── atoms/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Label.jsx
│   │   └── index.js
│   ├── molecules/
│   │   ├── TextField.jsx
│   │   ├── SearchBox.jsx
│   │   └── index.js
│   ├── organisms/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   └── index.js
│   ├── templates/
│   │   ├── DashboardLayout.jsx
│   │   ├── ProductListTemplate.jsx
│   │   └── index.js
│   └── pages/
│       ├── ProductsPage.jsx
│       └── index.js
```

---

## Design Tokens ve Theming {#design-tokens}

### Design Tokens Nedir?
Design token'lar, design system'inizin temel değerlerini (renkler, tipografi, spacing vb.) agnostic bir şekilde saklamanızı sağlar.

### Tailwind v4 ile Design Tokens
```css
@import "tailwindcss";

@theme {
  /* Color Tokens */
  --color-brand-primary: oklch(71.7% 0.25 360);
  --color-brand-secondary: oklch(91.5% 0.258 129);
  --color-text-primary: oklch(20% 0 0);
  --color-text-secondary: oklch(45% 0 0);
  --color-bg-primary: oklch(100% 0 0);
  --color-bg-secondary: oklch(98% 0 0);

  /* Typography Tokens */
  --font-family-primary: 'Inter', system-ui, sans-serif;
  --font-family-heading: 'Satoshi', sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing Tokens */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;

  /* Border Radius Tokens */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;

  /* Shadow Tokens */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);

  /* Breakpoint Tokens */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
  --breakpoint-3xl: 1920px;

  /* Animation Tokens */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Semantic Tokens
```css
@theme {
  /* Base Tokens */
  --color-blue-500: #3b82f6;
  --color-red-500: #ef4444;
  --color-green-500: #10b981;

  /* Semantic Tokens */
  --color-primary: var(--color-blue-500);
  --color-error: var(--color-red-500);
  --color-success: var(--color-green-500);
}
```

### Dark Mode ile Semantic Tokens
```css
@theme {
  /* Light Mode */
  --color-bg-primary: oklch(100% 0 0);
  --color-text-primary: oklch(20% 0 0);
}

@media (prefers-color-scheme: dark) {
  @theme {
    /* Dark Mode */
    --color-bg-primary: oklch(20% 0 0);
    --color-text-primary: oklch(95% 0 0);
  }
}
```

### Token Naming Convention
McAfee'de kullanılan yapı:
```
[Component][Variant][Kind][Modifier][Property]

Örnekler:
--button-primary-bg-default
--button-primary-bg-hover
--button-secondary-text-default
--input-error-border-focus
```

### React ile Token Kullanımı
```jsx
function ThemedCard({ theme }) {
  return (
    <div
      style={{
        '--card-bg': theme === 'dark' ? 'var(--color-gray-900)' : 'var(--color-white)',
        '--card-text': theme === 'dark' ? 'var(--color-white)' : 'var(--color-gray-900)',
      }}
      className="bg-(--card-bg) text-(--card-text) p-6 rounded-lg"
    >
      Content
    </div>
  );
}
```

---

## Clean Code Principles {#clean-code}

### 1. Single Responsibility Principle
Her component tek bir sorumluluğa sahip olmalı:

```jsx
// ❌ KÖTÜ - Çok fazla sorumluluk
function UserProfile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  // Fetch user, posts, comments
  // Render profile, posts, comments
  // Handle edit user
  // Handle delete post
  // Handle add comment

  return (/* 300 lines of JSX */);
}

// ✅ İYİ - Ayrılmış sorumluluklar
function UserProfile({ userId }) {
  const user = useUser(userId);

  return (
    <div>
      <UserInfo user={user} />
      <UserPosts userId={userId} />
      <UserComments userId={userId} />
    </div>
  );
}
```

### 2. DRY (Don't Repeat Yourself)
```jsx
// ❌ KÖTÜ - Tekrar
function ProductList() {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md">Product 1</div>
      <div className="bg-white p-4 rounded-lg shadow-md">Product 2</div>
      <div className="bg-white p-4 rounded-lg shadow-md">Product 3</div>
    </div>
  );
}

// ✅ İYİ - Reusable component
function Card({ children }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {children}
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <Card key={product.id}>{product.name}</Card>
      ))}
    </div>
  );
}
```

### 3. Composition Over Configuration
```jsx
// ❌ KÖTÜ - Configuration
function TextField({
  label,
  type,
  error,
  hint,
  prefix,
  suffix,
  // 20+ more props
}) {
  // Complex logic
}

// ✅ İYİ - Composition
function TextField({ children }) {
  return <div className="space-y-2">{children}</div>;
}

function TextField.Label({ children }) {
  return <label className="block text-sm font-medium">{children}</label>;
}

function TextField.Input(props) {
  return <input className="w-full px-4 py-2 border rounded-lg" {...props} />;
}

function TextField.Error({ children }) {
  return <p className="text-sm text-red-600">{children}</p>;
}

// Kullanım
<TextField>
  <TextField.Label>Email</TextField.Label>
  <TextField.Input type="email" />
  <TextField.Error>Invalid email</TextField.Error>
</TextField>
```

### 4. Custom Hooks
Karmaşık logic'i custom hook'lara ayırın:

```jsx
// hooks/useAuth.js
export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    // Login logic
  };

  const logout = async () => {
    // Logout logic
  };

  return { user, loading, login, logout };
}

// Component içinde kullanım
function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) return <LoadingSpinner />;
  if (!user) return <LoginPrompt />;

  return <DashboardContent user={user} />;
}
```

### 5. Props Destructuring
```jsx
// ❌ KÖTÜ
function UserCard(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>{props.user.email}</p>
    </div>
  );
}

// ✅ İYİ
function UserCard({ user: { name, email } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
```

### 6. Early Returns
```jsx
// ❌ KÖTÜ
function UserProfile({ user }) {
  if (user) {
    if (user.verified) {
      return (
        <div>
          {/* 100 lines */}
        </div>
      );
    } else {
      return <VerifyEmailPrompt />;
    }
  } else {
    return <LoginPrompt />;
  }
}

// ✅ İYİ
function UserProfile({ user }) {
  if (!user) return <LoginPrompt />;
  if (!user.verified) return <VerifyEmailPrompt />;

  return (
    <div>
      {/* 100 lines */}
    </div>
  );
}
```

### 7. Component File Structure
```jsx
// UserCard.jsx

// 1. Imports
import { useState } from 'react';
import { Avatar } from '../atoms/Avatar';
import { Button } from '../atoms/Button';

// 2. Types/Interfaces (TypeScript)
interface UserCardProps {
  user: User;
  onEdit?: () => void;
}

// 3. Helper functions
const formatDate = (date: Date) => {
  return date.toLocaleDateString();
};

// 4. Component
export function UserCard({ user, onEdit }: UserCardProps) {
  // 4.1. Hooks
  const [expanded, setExpanded] = useState(false);

  // 4.2. Handlers
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  // 4.3. Render
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Avatar src={user.avatar} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {expanded && (
        <div>
          <p>Joined: {formatDate(user.joinedAt)}</p>
        </div>
      )}
      <Button onClick={handleToggle}>
        {expanded ? 'Show Less' : 'Show More'}
      </Button>
      {onEdit && <Button onClick={onEdit}>Edit</Button>}
    </div>
  );
}

// 5. Exports
export default UserCard;
```

### 8. Avoid Magic Numbers
```jsx
// ❌ KÖTÜ
function Pagination({ page, totalPages }) {
  const visiblePages = 5;
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, page + 2);
  // ...
}

// ✅ İYİ
const PAGINATION_CONFIG = {
  VISIBLE_PAGES: 5,
  PAGES_BEFORE_CURRENT: 2,
  PAGES_AFTER_CURRENT: 2,
};

function Pagination({ page, totalPages }) {
  const start = Math.max(1, page - PAGINATION_CONFIG.PAGES_BEFORE_CURRENT);
  const end = Math.min(totalPages, page + PAGINATION_CONFIG.PAGES_AFTER_CURRENT);
  // ...
}
```

### 9. Error Boundaries
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
          <p className="mt-2 text-red-700">Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Kullanım
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### 10. Testing
```jsx
// UserCard.test.jsx
import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';

describe('UserCard', () => {
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://example.com/avatar.jpg',
  };

  it('renders user name', () => {
    render(<UserCard user={mockUser} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders user email', () => {
    render(<UserCard user={mockUser} />);
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('calls onEdit when edit button is clicked', () => {
    const onEdit = jest.fn();
    render(<UserCard user={mockUser} onEdit={onEdit} />);

    const editButton = screen.getByText('Edit');
    editButton.click();

    expect(onEdit).toHaveBeenCalledTimes(1);
  });
});
```

---

## Özet - Projeniz için Aksiyon Planı

### 1. Tailwind CSS v4'e Geçiş
- [ ] `tailwind.config.js` dosyasını kaldırın
- [ ] `@theme` directive ile CSS-first konfigürasyona geçin
- [ ] Design token'larınızı tanımlayın
- [ ] Custom utility'leri `@utility` ile tanımlayın

### 2. Component Architecture
- [ ] Atomic Design yapısını oluşturun (atoms, molecules, organisms, templates, pages)
- [ ] Her component'i tek sorumluluk prensibine göre ayırın
- [ ] Reusable component library oluşturun

### 3. Design System
- [ ] Design token'ları tanımlayın (colors, typography, spacing, shadows, etc.)
- [ ] Semantic token'lar oluşturun
- [ ] Dark mode desteği ekleyin
- [ ] Storybook ile dokümante edin

### 4. Clean Code Practices
- [ ] Custom hook'lar oluşturun
- [ ] Container/Presentational pattern uygulayın
- [ ] Composition over configuration kullanın
- [ ] Error boundary'ler ekleyin
- [ ] Unit testler yazın

### 5. Performance
- [ ] Code splitting uygulayın
- [ ] Lazy loading kullanın
- [ ] Memoization (React.memo, useMemo, useCallback)
- [ ] Image optimization

---

## Kaynaklar
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/blog/tailwindcss-v4)
- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [React Design Patterns](https://www.patterns.dev/react)
- [Frontend Interview Handbook](https://www.frontendinterviewhandbook.com/)
- [Web.dev - Best Practices](https://web.dev/learn)
