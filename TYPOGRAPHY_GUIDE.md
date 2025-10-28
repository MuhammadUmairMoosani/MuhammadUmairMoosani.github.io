# Typography & Spacing Guide

## 🎨 Professional Typography System

### Font Families

```css
/* Primary Font - Body Text */
font-family: var(--font-primary); /* Inter */

/* Heading Font */
font-family: var(--font-heading); /* Poppins */

/* Display Font - Hero Sections */
font-family: var(--font-display); /* Space Grotesk */

/* Monospace - Code */
font-family: var(--font-mono); /* SF Mono */
```

### Font Sizes

| Class       | Size | Use Case                 |
| ----------- | ---- | ------------------------ |
| `text-xs`   | 12px | Small labels, captions   |
| `text-sm`   | 14px | Secondary text, metadata |
| `text-base` | 16px | Body text (default)      |
| `text-lg`   | 18px | Emphasized body text     |
| `text-xl`   | 20px | Large body text          |
| `text-2xl`  | 24px | Small headings           |
| `text-3xl`  | 30px | Medium headings          |
| `text-4xl`  | 36px | Large headings           |
| `text-5xl`  | 48px | Extra large headings     |
| `text-6xl`  | 60px | Hero headings            |
| `text-7xl`  | 72px | Display headings         |

### Headings

```jsx
<h1 className="text-h1">Main Heading</h1>          // 60px, extrabold
<h2 className="text-h2">Section Heading</h2>       // 48px, bold
<h3 className="text-h3">Subsection</h3>            // 36px, bold
<h4 className="text-h4">Card Title</h4>            // 30px, semibold
<h5 className="text-h5">Small Title</h5>           // 24px, semibold
<h6 className="text-h6">Tiny Title</h6>            // 20px, semibold
```

### Special Text Styles

```jsx
// Display text for hero sections
<h1 className="text-display">Hero Title</h1>

// Lead paragraph
<p className="text-lead">Introduction paragraph...</p>

// Section title (uppercase)
<span className="section-title">About Me</span>

// Gradient text
<h2 className="text-gradient">Highlighted Text</h2>
```

## 📏 Spacing System

### Margin Bottom

```jsx
<div className="mb-1">  // 4px
<div className="mb-2">  // 8px
<div className="mb-3">  // 12px
<div className="mb-4">  // 16px
<div className="mb-5">  // 20px
<div className="mb-6">  // 24px
<div className="mb-8">  // 32px
<div className="mb-10"> // 40px
<div className="mb-12"> // 48px
<div className="mb-16"> // 64px
<div className="mb-20"> // 80px
```

### Padding

```jsx
// Vertical padding
<div className="py-4">  // 16px top & bottom
<div className="py-8">  // 32px top & bottom
<div className="py-12"> // 48px top & bottom

// Horizontal padding
<div className="px-4">  // 16px left & right
<div className="px-6">  // 24px left & right
<div className="px-8">  // 32px left & right
```

### Gap (for Flexbox/Grid)

```jsx
<div className="gap-4">  // 16px gap
<div className="gap-6">  // 24px gap
<div className="gap-8">  // 32px gap
```

## 🎯 Font Weights

```jsx
<span className="font-light">Light (300)</span>
<span className="font-normal">Normal (400)</span>
<span className="font-medium">Medium (500)</span>
<span className="font-semibold">Semibold (600)</span>
<span className="font-bold">Bold (700)</span>
<span className="font-extrabold">Extra Bold (800)</span>
<span className="font-black">Black (900)</span>
```

## 📐 Line Heights

```jsx
<p className="leading-none">1.0 - Tight headings</p>
<p className="leading-tight">1.25 - Headings</p>
<p className="leading-snug">1.375 - Short paragraphs</p>
<p className="leading-normal">1.5 - Default</p>
<p className="leading-relaxed">1.625 - Long-form content</p>
<p className="leading-loose">2.0 - Spacious</p>
```

## 🔤 Letter Spacing

```jsx
<h1 className="tracking-tighter">Tight (-0.05em)</h1>
<h2 className="tracking-tight">Slightly tight (-0.025em)</h2>
<p className="tracking-normal">Normal (0)</p>
<span className="tracking-wide">Wide (0.025em)</span>
<span className="tracking-wider">Wider (0.05em)</span>
<span className="tracking-widest">Widest (0.1em)</span>
```

## ✨ Text Effects

```jsx
// Gradient text
<h1 className="text-gradient">Amazing Title</h1>

// Text shadows
<h1 className="text-shadow-sm">Small shadow</h1>
<h1 className="text-shadow-md">Medium shadow</h1>
<h1 className="text-shadow-lg">Large shadow</h1>
```

## 📱 Responsive Behavior

- **Desktop (>1024px)**: Full sizes
- **Tablet (768px - 1024px)**: 10-15% smaller
- **Mobile (<768px)**: 20-30% smaller
- **Small Mobile (<480px)**: 30-40% smaller

All spacing also reduces proportionally on smaller screens!

## 🎨 Example Usage

### Hero Section

```jsx
<div className="section-spacing">
  <span className="section-title">HELLO, I'M</span>
  <h1 className="text-display text-gradient mb-6">Muhammad Umair</h1>
  <p className="text-lead leading-relaxed mb-8">
    Full Stack Developer & Mobile App Expert
  </p>
</div>
```

### Card Component

```jsx
<div className="py-6 px-6 gap-4">
  <h3 className="text-h4 font-bold mb-3">Project Title</h3>
  <p className="text-base leading-relaxed mb-4">
    Description of the project...
  </p>
  <span className="text-sm font-medium tracking-wide">
    REACT NATIVE • NODE.JS
  </span>
</div>
```

### Section Title

```jsx
<div className="section-spacing">
  <div className="mb-12 text-center">
    <span className="section-title">MY WORK</span>
    <h2 className="text-h2 font-bold mb-4">
      Featured <span className="text-gradient">Projects</span>
    </h2>
    <p className="text-lg leading-relaxed">A showcase of my best work</p>
  </div>
</div>
```

## 🚀 Pro Tips

1. **Use consistent spacing**: Stick to the spacing scale (4, 8, 12, 16, 24, 32, etc.)
2. **Font pairing**:
   - Headings: Poppins (bold, clear)
   - Body: Inter (readable, modern)
   - Display: Space Grotesk (unique, attention-grabbing)
3. **Hierarchy**: Use font sizes and weights to create clear visual hierarchy
4. **Mobile first**: Test on mobile - reduce font sizes if text feels too large
5. **Line length**: Keep paragraphs to 60-80 characters per line for readability
6. **Contrast**: Ensure text has sufficient contrast with background
7. **Whitespace**: Don't be afraid of whitespace - it improves readability

---

**Note**: All these classes are fully responsive and will automatically adjust on mobile devices!
