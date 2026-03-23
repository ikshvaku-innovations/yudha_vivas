# Design Language Documentation

## Overview
This design system uses a modern, minimal aesthetic with a focus on clarity, accessibility, and smooth interactions. Built on Next.js, React, Tailwind CSS v4, and uses OKLCH color space for consistent, perceptually uniform colors.

---

## Color System

### Color Space
**OKLCH** (OK Lightness Chroma Hue) - A perceptually uniform color space that ensures consistent visual appearance across all hues.

### Color Palette

#### Light Mode
```css
--background: oklch(1 0 0)                    /* Pure white */
--foreground: oklch(0.145 0 0)                /* Near black text */
--card: oklch(1 0 0)                          /* White cards */
--card-foreground: oklch(0.145 0 0)           /* Dark text on cards */
--primary: oklch(0.205 0 0)                   /* Dark primary (almost black) */
--primary-foreground: oklch(0.985 0 0)         /* Light text on primary */
--secondary: oklch(0.97 0 0)                   /* Light gray */
--secondary-foreground: oklch(0.205 0 0)       /* Dark text on secondary */
--muted: oklch(0.97 0 0)                      /* Subtle background */
--muted-foreground: oklch(0.556 0 0)          /* Medium gray text */
--accent: oklch(0.97 0 0)                     /* Light accent background */
--accent-foreground: oklch(0.205 0 0)          /* Dark text on accent */
--destructive: oklch(0.577 0.245 27.325)      /* Red/orange */
--border: oklch(0.922 0 0)                     /* Light border */
--input: oklch(0.922 0 0)                     /* Input border */
--ring: oklch(0.708 0 0)                       /* Focus ring */
```

#### Dark Mode
```css
--background: oklch(0.145 0 0)                 /* Dark background */
--foreground: oklch(0.985 0 0)                 /* Light text */
--card: oklch(0.205 0 0)                      /* Dark card */
--card-foreground: oklch(0.985 0 0)           /* Light text on cards */
--primary: oklch(0.922 0 0)                   /* Light primary */
--primary-foreground: oklch(0.205 0 0)         /* Dark text on primary */
--secondary: oklch(0.269 0 0)                  /* Medium dark */
--secondary-foreground: oklch(0.985 0 0)       /* Light text */
--muted: oklch(0.269 0 0)                      /* Muted dark */
--muted-foreground: oklch(0.708 0 0)           /* Medium light text */
--accent: oklch(0.371 0 0)                     /* Dark accent */
--accent-foreground: oklch(0.985 0 0)          /* Light text */
--destructive: oklch(0.704 0.191 22.216)       /* Brighter red */
--border: oklch(1 0 0 / 10%)                   /* Subtle border */
--input: oklch(1 0 0 / 15%)                    /* Input border */
--ring: oklch(0.556 0 0)                       /* Focus ring */
```

### Color Usage Patterns
- **Background**: Use `bg-background` for main page backgrounds
- **Cards**: Use `bg-card` with `border` for container backgrounds
- **Text**: Use `text-foreground` for primary text, `text-muted-foreground` for secondary
- **Primary Actions**: Use `bg-primary text-primary-foreground`
- **Destructive Actions**: Use `bg-destructive/10 text-destructive` (light) or `text-destructive` with hover states
- **Opacity Modifiers**: Use `/10`, `/20`, `/50` etc. for transparency (e.g., `bg-primary/10`)

---

## Typography

### Font Families
1. **Primary (Sans)**: Public Sans (Google Fonts)
   - Variable: `--font-public-sans`
   - Usage: Body text, headings, UI elements
   - Class: `font-sans`

2. **Monospace**: Commit Mono (Local font)
   - Variable: `--font-commit-mono`
   - Weights: 400 (Regular), 700 (Bold)
   - Styles: Regular, Italic
   - Usage: Code, technical text, button labels
   - Class: `font-mono`

### Typography Scale
```css
/* Headings */
text-4xl font-bold      /* Large page titles */
text-2xl font-semibold  /* Section headings */
text-xl font-semibold   /* Subsection headings */

/* Body */
text-lg                 /* Large body text */
text-sm                 /* Small body text */
text-xs                 /* Extra small text (buttons, labels) */

/* Line Height */
leading-relaxed         /* Comfortable reading (1.625) */
leading-normal          /* Default (1.5) */

/* Letter Spacing */
tracking-tight          /* Headings */
tracking-wider          /* Uppercase text (buttons) */
```

### Text Opacity Patterns
- Primary text: `text-foreground`
- Secondary text: `text-foreground/80` or `text-muted-foreground`
- Tertiary text: `text-foreground/60`
- Disabled text: `text-muted-foreground` or `opacity-50`

---

## Spacing & Layout

### Spacing Scale (Tailwind default)
- **Padding**: `p-3` (12px), `p-4` (16px), `p-5` (20px), `p-6` (24px)
- **Gap**: `gap-1` (4px), `gap-2` (8px), `gap-3` (12px), `gap-4` (16px), `gap-6` (24px), `gap-8` (32px), `gap-12` (48px)
- **Margin**: Follows same scale

### Container Patterns
```tsx
/* Max width containers */
max-w-2xl mx-auto    /* Small content areas */
max-w-4xl mx-auto     /* Medium content areas */
max-w-5xl mx-auto     /* Large content areas */
max-w-7xl mx-auto     /* Extra large (full width on large screens) */

/* Responsive padding */
px-4 md:px-6 lg:px-8  /* Horizontal padding */
py-8 md:py-12          /* Vertical padding */
```

### Layout Patterns
```tsx
/* Centered content */
flex items-center justify-center

/* Full height layouts */
min-h-screen flex items-center

/* Grid layouts */
grid gap-6 md:grid-cols-2

/* Flex spacing */
flex gap-2 items-center
```

---

## Border Radius

### Radius Patterns
```css
rounded-sm      /* 2px - Small elements */
rounded        /* 4px - Default */
rounded-md     /* 6px - Inputs, small cards */
rounded-lg     /* 8px - Cards, buttons */
rounded-xl     /* 12px - Larger cards */
rounded-2xl     /* 16px - Large cards, containers */
rounded-3xl     /* 24px - Video tiles, special containers */
rounded-[31px]  /* 31px - Ultra-pill shape (control bars) */
rounded-full   /* 50% - Pills, circular elements */
```

**Common Usage**:
- Buttons: `rounded-full`
- Cards: `rounded-lg` to `rounded-2xl`
- Inputs: `rounded-md` or `rounded-full`
- Video tiles: `rounded-3xl`
- Control bars: `rounded-[31px]`

---

## Shadows & Depth

### Shadow Patterns
```css
drop-shadow-md/3        /* Subtle medium shadow (30% opacity) */
drop-shadow-xl/5        /* Large shadow (50% opacity) */
shadow-lg               /* Large shadow */
shadow-xl               /* Extra large shadow */
shadow-lg shadow-primary/20  /* Colored shadow */
```

### Ring (Focus States)
```css
focus-visible:ring-[3px]           /* 3px ring width */
focus-visible:ring-ring/50         /* Ring color at 50% opacity */
focus-visible:ring-destructive/20  /* Destructive state ring */
```

---

## Component Patterns

### Button Component

#### Base Styles
- **Shape**: `rounded-full` (pill shape)
- **Typography**: `text-xs font-bold tracking-wider uppercase whitespace-nowrap`
- **Sizing**: Uses `h-9` (default), `h-8` (sm), `h-10` (lg), `h-11` (custom large)
- **Padding**: `px-4 py-2` (default), adjusts for icons with `has-[>svg]:px-3`

#### Variants
```tsx
variant="default"     // bg-muted text-foreground hover:bg-foreground/10
variant="primary"     // bg-primary text-primary-foreground hover:bg-primary/70
variant="destructive" // bg-destructive/10 text-destructive hover:bg-destructive/20
variant="outline"     // border border-input bg-background hover:bg-accent
variant="secondary"   // bg-foreground/15 text-secondary-foreground hover:bg-foreground/20
variant="ghost"       // hover:bg-accent hover:text-accent-foreground
```

#### Sizes
```tsx
size="sm"      // h-8 gap-1.5 px-3
size="default" // h-9 px-4 py-2
size="lg"      // h-10 px-6
size="icon"    // size-9 (square)
```

#### Icon Integration
- Icons: `size-4` by default, `size-5` for larger buttons
- SVG classes: `pointer-events-none shrink-0`
- Gap between icon and text: `gap-2`

---

### Toggle Component

#### Base Styles
- **Shape**: `rounded-full`
- **Typography**: `text-sm font-medium whitespace-nowrap`
- **Transition**: `transition-[color,box-shadow,background-color]`

#### Variants
```tsx
variant="default"   // bg-transparent
variant="primary"   // bg-muted data-[state=on]:bg-muted
variant="secondary" // bg-muted with blue accent when on
variant="outline"    // border border-input
```

#### States
- **Hover**: `hover:bg-muted hover:text-muted-foreground`
- **Active/On**: `data-[state=on]:bg-accent data-[state=on]:text-accent-foreground`
- **Secondary On**: `data-[state=on]:bg-blue-500/20 data-[state=on]:text-blue-700`

---

### Input Component

#### Base Styles
```css
h-10 rounded-md border border-input bg-background px-3 py-2 text-sm
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
placeholder:text-muted-foreground
```

#### Sizes
```tsx
size="sm"      // h-8 px-2 py-1 text-xs
size="default" // h-10 px-3 py-2 text-sm
size="lg"      // h-12 px-4 py-3 text-base
```

---

### Select Component

#### Base Styles
- **Shape**: `rounded-full` (trigger), `rounded-md` (content)
- **Trigger**: `px-3 py-2 text-sm`, `bg-muted`
- **Hover**: `hover:bg-foreground/10`
- **Focus**: `focus-visible:ring-[3px] focus-visible:ring-ring/50`

#### Sizes
```tsx
size="sm"      // h-8
size="default" // h-9
```

---

### Card Patterns

#### Base Card
```tsx
className="bg-card rounded-lg p-6 border"
```

#### Enhanced Cards
```tsx
// With backdrop blur
className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6"

// With hover effects
className="transition-all duration-300 hover:border-border hover:shadow-lg"

// With gradients
className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50"
```

---

## Border Patterns

### Border Usage
```css
border                      /* Default 1px solid border-border */
border-2                    /* 2px border */
border-input/50             /* Border at 50% opacity */
border-border/50            /* Subtle borders */
border-primary/50            /* Colored borders */
ring-1 ring-white/10        /* Thin ring for dark overlays */
```

---

## Animation & Transitions

### Animation Library
**Motion (Framer Motion)** - `motion/react`

### Common Transitions
```tsx
// Duration patterns
duration-300    /* Quick (300ms) */
duration-500     /* Medium (500ms) */
duration-700     /* Slow (700ms) */

// Easing
ease-out         /* Default easing */
ease-in-out      /* Smooth */
linear           /* Linear */

// Property transitions
transition-all duration-300
transition-[color,box-shadow,background-color]
```

### Spring Animations
```tsx
{
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 0.8
}
```

### Common Animation Patterns
```tsx
// Fade in/out
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}

// Scale + fade
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.9 }}

// Slide up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}

// Slide from bottom
translateY: '0%' → '100%'
```

### Hover Effects
```tsx
hover:scale-[1.02]          /* Subtle scale */
hover:scale-105             /* Button scale */
hover:rotate-3              /* Icon rotation */
hover:shadow-lg              /* Shadow on hover */
group-hover:opacity-100     /* Group hover pattern */
```

---

## Icon System

### Library
**Phosphor Icons** - `@phosphor-icons/react/dist/ssr`

### Icon Patterns
```tsx
// Standard sizing
weight="bold"               /* Always use bold weight */
className="size-4"          /* Default 16px */
className="size-5"          /* Medium 20px */
className="w-6 h-6"         /* Large 24px */
className="w-10 h-10"       /* Extra large 40px */

// Icon in buttons
[&_svg]:pointer-events-none [&_svg]:shrink-0
```

### Icon Colors
- Inherit from parent: No explicit color (uses currentColor)
- Muted: `text-muted-foreground`
- Primary: `text-primary`
- Contextual: Match surrounding text color

---

## Responsive Design

### Breakpoints
```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktops */
xl: 1280px  /* Large desktops */
```

### Common Responsive Patterns
```tsx
// Padding
p-4 md:p-8                /* Increase padding on larger screens */

// Grid
grid-cols-1 md:grid-cols-2  /* Stack on mobile, 2 columns on desktop */

// Text
text-sm sm:text-base        /* Scale text size */

// Spacing
gap-6 md:gap-12            /* Increase gap on larger screens */

// Visibility
hidden md:flex             /* Hide on mobile, show on desktop */
inline md:hidden           /* Show on mobile only */
```

---

## Z-Index Scale

```css
z-10   /* Content layers */
z-40   /* Video tiles, overlays */
z-50   /* Fixed controls, modals, top bars */
```

---

## Component Variants Pattern

### Using CVA (Class Variance Authority)
```tsx
const componentVariants = cva(
  [
    // Base classes (always applied)
    'base-classes-here',
  ],
  {
    variants: {
      variant: {
        default: 'default-classes',
        primary: 'primary-classes',
      },
      size: {
        sm: 'small-classes',
        default: 'default-classes',
        lg: 'large-classes',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
```

---

## Utility Patterns

### Common Class Combinations
```tsx
// Flex centering
"flex items-center justify-center"

// Card container
"bg-card rounded-lg p-6 border"

// Text hierarchy
"text-2xl font-semibold text-primary mb-4"

// Interactive element
"transition-all duration-300 hover:scale-[1.02] cursor-pointer"

// Overlay pattern
"absolute inset-0 bg-black/60 backdrop-blur-md"

// Disabled state
"disabled:pointer-events-none disabled:opacity-50"

// Focus state
"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
```

---

## Accessibility Patterns

### ARIA Attributes
```tsx
aria-label="Descriptive label"
role="alert"
data-slot="component-name"  /* For component identification */
```

### Focus States
- Always include visible focus indicators
- Use `focus-visible:` prefix for keyboard navigation
- Ring width: `3px`
- Ring color: `ring-ring/50` or context-specific colors

### Semantic HTML
- Use proper heading hierarchy (h1, h2, h3)
- Button elements for interactive actions
- Label elements for form inputs
- Semantic sections and articles

---

## Special Patterns

### Video Tiles
```tsx
// Container
"rounded-3xl bg-black shadow-xl ring-1 ring-white/10 overflow-hidden"

// Overlay badges
"absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md"
```

### Control Bars
```tsx
// Base
"bg-background border-input/50 rounded-[31px] border p-5"

// Fixed positioning
"fixed inset-x-3 bottom-0 z-50 md:inset-x-12"
```

### Gradient Backgrounds
```tsx
"bg-gradient-to-br from-blue-50 to-indigo-50"
"bg-gradient-to-br from-primary/20 to-primary/10"
```

---

## Summary Checklist

When implementing this design language:

✅ Use OKLCH color space for all colors
✅ Apply Public Sans for UI, Commit Mono for code/technical
✅ Round corners: `rounded-full` for buttons, `rounded-lg` to `rounded-2xl` for cards
✅ Use `transition-all duration-300` for interactive elements
✅ Add `hover:scale-[1.02]` for card hover effects
✅ Use `focus-visible:ring-[3px]` for focus states
✅ Apply Phosphor icons with `weight="bold"` and consistent sizing
✅ Use opacity modifiers (`/10`, `/20`, `/50`) for subtle overlays
✅ Implement responsive spacing with `md:` breakpoints
✅ Use `data-slot` attributes for component identification
✅ Apply backdrop blur (`backdrop-blur-sm`) for glass-morphism effects
✅ Use spring animations for natural motion
✅ Implement proper ARIA labels and semantic HTML

---

**Note**: This design system prioritizes clarity, accessibility, and smooth interactions while maintaining a modern, minimal aesthetic suitable for professional applications.

