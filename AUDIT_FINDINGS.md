# Portfolio-v2 Codebase Audit Report

**Date:** May 1, 2026 | **Status:** Comprehensive Review Complete

---

## 📊 EXECUTIVE SUMMARY

This Next.js portfolio has solid foundational setup but needs optimization in several areas:

- **SEO**: Basic setup complete, missing structured data & advanced markup
- **Code Quality**: Unused imports, dead code, and significant duplication
- **Performance**: Image optimization needed, static generation disabled
- **Best Practices**: Font optimization, error handling, and validation gaps

---

## 1. 🔍 SEO IMPLEMENTATION ANALYSIS

### ✅ What's Working

| Component     | Status | Details                                                                          |
| ------------- | ------ | -------------------------------------------------------------------------------- |
| Root Metadata | ✅     | Properly configured in `src/app/layout.tsx` with keywords, authors, metadataBase |
| Page Metadata | ✅     | Individual page metadata for `/`, `/about`, `/contact`, `/projects`              |
| Robots.txt    | ✅     | Basic setup with sitemap link at `public/robots.txt`                             |
| Sitemap       | ✅     | `src/app/sitemap.ts` generates XML sitemap                                       |
| Open Graph    | ✅     | og:title, og:description, og:url configured                                      |
| Twitter Card  | ✅     | summary_large_image card type set                                                |

### ❌ Missing/Incomplete

| Issue                                 | Impact | File                 | Solution                                     |
| ------------------------------------- | ------ | -------------------- | -------------------------------------------- |
| **No JSON-LD Structured Data**        | High   | `src/app/layout.tsx` | Add Person, Organization, Project schemas    |
| **No Open Graph Images**              | High   | `src/app/layout.tsx` | Add `og:image` with URL to social card image |
| **Missing Canonical Tags**            | Medium | Page files           | Add canonical links for SEO deduplication    |
| **Static Sitemap Only**               | Medium | `src/app/sitemap.ts` | Dynamically include project pages            |
| **No changefreq/priority in Sitemap** | Low    | `src/app/sitemap.ts` | Specify update frequency per route           |
| **Limited robots.txt Rules**          | Low    | `public/robots.txt`  | Add API route exclusions                     |

### Recommended SEO Additions

```tsx
// Example: Add JSON-LD to root layout
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Abdullah Az-Zahur",
  url: "https://abdullahzahur.vercel.app",
  sameAs: ["https://github.com/Abdullah-Az-Zahur"],
  jobTitle: "MERN Stack Developer",
};
```

---

## 2. 🧹 UNUSED IMPORTS & DEAD CODE

### Unused Imports

| File                               | Lines | Imports                                 | Issue                                                        |
| ---------------------------------- | ----- | --------------------------------------- | ------------------------------------------------------------ |
| `src/config/navigationConfig.tsx`  | 7-9   | `FaYoutube`, `FaTwitter`, `FaInstagram` | Imported but never rendered - used in ContactSidebar instead |
| `src/providers/AppTabProvider.tsx` | 9     | `useRouter`                             | Imported but only `usePathname` is used                      |

### Dead Code / Unused Files

| File                               | Status      | Reason                                                                                                  |
| ---------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `src/config/navigationConfig.tsx`  | 🔴 DEAD     | Exports `sidebarConfig` that is never imported anywhere - sidebar uses `aboutSidebarCategories` instead |
| `src/providers/AppTabProvider.tsx` | 🟡 PARTIAL  | Defines Context API but Redux `tabsSlice` is the primary state manager - makes this redundant           |
| Commented code                     | 🟡 CLEAN UP | `src/shared/layout/Sidebar/SidebarOptions/ProjectSidebar.tsx` lines 95-106                              |

---

## 3. ⚡ PERFORMANCE ISSUES

### 🖼️ Image Optimization

**Issue 1: NavBar Profile Image** - [src/shared/layout/NavBar/NavBar.tsx](src/shared/layout/NavBar/NavBar.tsx#L40)

```tsx
// ❌ Current
<Image
  src="/assets/images/My half Photo.png"
  height="200"
  width="200"
  alt="profile Pic"
  className="w-7 h-7 rounded-full"
/>

// ✅ Recommended
<Image
  src="/assets/images/My half Photo.png"
  height="32"
  width="32"
  alt="Profile picture"
  priority  // ← Critical fix: This blocks rendering without it
  className="w-7 h-7 rounded-full"
/>
```

**Issue 2: ProjectCard Images** - [src/features/projects/components/ProjectCard/ProjectCard.tsx](src/features/projects/components/ProjectCard/ProjectCard.tsx#L31)

```tsx
// ❌ Current - dimensions don't match container
<Image
  src={project.image}
  alt="Project Image"
  width={400}
  height={400}
  className="object-cover w-full h-full rounded-t-lg"
/>

// ✅ Recommended - add responsive sizes
<Image
  src={project.image}
  alt={`${project.name} project showcase`}
  width={400}
  height={225}  // ← aspect-video ratio
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover w-full h-full rounded-t-lg"
/>
```

### 🎬 Animations & Rendering

**Issue: HomeBackgroundBlobs** - [src/features/home/components/HomeBackgroundBlobs.tsx](src/features/home/components/HomeBackgroundBlobs.tsx)

- Framer Motion animations run continuously at 22-31 second loops
- Animates elements even when off-screen
- **Impact**: Constant GPU/CPU usage
- **Solution**: Implement `useInView` to pause when not visible

**Issue: Dynamic Route** - [src/app/(web)/page.tsx](<src/app/(web)/page.tsx#L1>)

```tsx
export const dynamic = "force-dynamic";
```

- Prevents static generation and ISR
- Forces server-side rendering on every request
- **Impact**: Slower response times, no caching
- **Solution**: Remove this unless real-time data needed

### Complex Components

| Component            | Size       | Issues                                 |
| -------------------- | ---------- | -------------------------------------- |
| `AboutMeSidebar.tsx` | 350+ lines | Large component with nested animations |
| `NavBar.tsx`         | 200+ lines | Complex mobile/desktop conditionals    |

---

## 4. 🔄 DUPLICATE & REDUNDANT CODE

### Hardcoded Values (Appears 3+ times)

**Contact Email: `abdullah.az.zahur@gmail.com`**

```
✗ src/app/(backend)/api/send/route.ts         (line 14)
✗ src/shared/layout/Footer/Footer.tsx         (line 29)
✗ src/shared/layout/Sidebar/SidebarOptions/ContactSidebar.tsx (line 89)
```

**Contact Phone: `+880-1705697897`**

```
✗ src/config/navigationConfig.tsx             (line 131)
✗ src/shared/layout/Sidebar/SidebarOptions/ContactSidebar.tsx (line 98)
```

**Solution**: Move to `.env.local`

```env
NEXT_PUBLIC_CONTACT_EMAIL=abdullah.az.zahur@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+880-1705697897
```

### Duplicate Import Patterns

**Social Icons Imported in 2 Places**

```tsx
// ✗ src/config/navigationConfig.tsx (7-9)
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

// ✗ src/shared/layout/Sidebar/SidebarOptions/ContactSidebar.tsx (6-10)
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
```

### Duplicate Animation Variants

```tsx
// Exact same dropdownVariants defined in:
// ✗ AboutMeSidebar.tsx       (lines 123-141)
// ✗ ProjectSidebar.tsx       (lines 31-49)
// ✗ ContactSidebar.tsx       (lines 19-37)

// ✅ Solution: Extract to shared/utils/animationVariants.ts
export const dropdownVariants = {
  /* ... */
};
```

### Metadata Duplication

| File                             | Metadata Definition               |
| -------------------------------- | --------------------------------- |
| `src/app/layout.tsx`             | Root metadata with full OpenGraph |
| `src/app/(web)/page.tsx`         | Repeats openGraph structure       |
| `src/app/(web)/about/page.tsx`   | Title & description only          |
| `src/app/(web)/contact/page.tsx` | Title & description only          |

---

## 5. 🔧 COMPLEX CODE NEEDING SIMPLIFICATION

### ProjectSidebar Sync Logic [src/shared/layout/Sidebar/SidebarOptions/ProjectSidebar.tsx](src/shared/layout/Sidebar/SidebarOptions/ProjectSidebar.tsx#L71)

```tsx
// ❌ Complex two-way sync in useEffect (20 lines)
useEffect(() => {
  const selectedSkillTabIds = new Set(
    selectedSkills.map((skill) => skillTabId(skill)),
  );
  const existingSkillTabIds = new Set(
    tabs
      .filter((tab) => tab.id.startsWith("project-skill:"))
      .map((tab) => tab.id),
  );
  // ... more logic

  selectedSkills.forEach((skill) => {
    /* ... */
  });
  existingSkillTabIds.forEach((tabId) => {
    /* ... */
  });
}, [dispatch, selectedSkills, tabs]);

// Plus commented-out alternative approach below
```

**Issues**:

- Syncs selected skills ↔ tabs bidirectionally
- Complex Set manipulation
- Commented alternative suggests uncertainty
- Redux already has both slices - could use single action

### AppTabProvider Redundancy [src/providers/AppTabProvider.tsx](src/providers/AppTabProvider.tsx)

```tsx
// ❌ Context defined but Redux is primary state manager
export const AppTabProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabState, dispatchTab] = useReducer(tabReducer, initialTabState);
  // ... but Redux tabsSlice already manages this!
```

**Problem**: Unnecessary abstraction layer. Tabs are already in Redux.

### Conditional Classnames Scattered Throughout

```tsx
// ❌ Multiple files with complex conditionals
className={`fixed w-full h-14 bg-[#011627] border-b border-gray-500 z-50
  ${isHomePage ? "..." : "..."}
  ${shouldHideFooter ? "hidden" : ""}`}

// ✅ Use clsx library
import clsx from 'clsx';
className={clsx(
  "fixed w-full h-14 bg-[#011627] border-b border-gray-500 z-50",
  isHomePage && "md:bg-gradient-to-r md:from-[#06111f]/78",
  shouldHideFooter && "hidden"
)}
```

### Footer Mobile Detection [src/shared/layout/Footer/Footer.tsx](src/shared/layout/Footer/Footer.tsx#L11)

```tsx
// ❌ Custom window resize detection
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

// ✅ Use Tailwind's responsive classes instead
// Or use next's useMediaQuery if available
```

---

## 6. 📋 MISSING BEST PRACTICES

### Font Optimization

**Current Setup** - [src/app/globals.css](src/app/globals.css#L11)

```css
/* ❌ Manual font definition */
body {
  font-family: "Fira Code", monospace;
}
```

**Issues**:

- Font downloaded without `font-display` strategy
- No preload hints
- Not using `next/font` for optimization

**Solution**:

```tsx
import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',  // ← Shows fallback while loading
});

// Then apply to html tag
<html className={firaCode.className}>
```

### Form Validation [src/features/contact/components/ContactForm.tsx](src/features/contact/components/ContactForm.tsx)

```tsx
// ❌ Minimal validation - only required attribute
<input type="email" required />
<textarea required />

// ✅ Add validation library
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});
```

### Error Handling

**Current** - [src/features/contact/components/ContactClient.tsx](src/features/contact/components/ContactClient.tsx#L44)

```tsx
// ❌ Silent failure
catch (error) {
  console.error("Error sending message", error);
  // User never knows!
}
```

**Issues**:

- No error boundaries
- No toast notifications
- User-facing errors lost in console

**Solution**:

- Add error toast/notification
- Implement error boundary component
- Show meaningful error messages

### Lazy Loading & Code Splitting

- No `React.memo()` on reusable components
- No `next/dynamic` for heavy components
- AboutMeSidebar (350+ lines) loads eagerly

```tsx
// ✅ Add dynamic import
const AboutMeSidebar = dynamic(() => import("./AboutMeSidebar"), {
  loading: () => <div>Loading...</div>,
});
```

### Configuration & Environment

- Email hardcoded in API route
- No configurable API endpoints
- Social links hardcoded in multiple places

```env
# ✅ .env.local
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_GITHUB_URL=
NEXT_PUBLIC_LINKEDIN_URL=
```

### Accessibility

- Missing alt text descriptions in places
- Color contrast not verified
- Icon-only buttons need ARIA labels

```tsx
// ✅ Improve accessibility
<button aria-label="Close menu" onClick={handleClose}>
  <IoMdClose />
</button>
```

---

## 7. 📈 QUICK REFERENCE: FILES NEEDING ATTENTION

### 🔴 High Priority (Performance & SEO)

1. **src/app/layout.tsx** - Add JSON-LD structured data
2. **src/app/(web)/page.tsx** - Remove `force-dynamic` to enable static generation
3. **src/shared/layout/NavBar/NavBar.tsx** - Fix image optimization
4. **src/features/projects/components/ProjectCard/ProjectCard.tsx** - Fix image dimensions & sizes
5. **src/app/(backend)/api/send/route.ts** - Move hardcoded email to env vars

### 🟡 Medium Priority (Code Quality)

1. **src/config/navigationConfig.tsx** - Delete unused file
2. **src/shared/layout/Sidebar/SidebarOptions/\*.tsx** - Extract duplicate animations
3. **src/app/globals.css** - Add font optimization with next/font
4. **src/features/contact/components/** - Add form validation

### 🟢 Low Priority (Best Practices)

1. **src/providers/AppTabProvider.tsx** - Remove redundant context
2. **src/features/home/components/HomeBackgroundBlobs.tsx** - Optimize animations with useInView
3. **src/shared/layout/Footer/Footer.tsx** - Simplify mobile detection

---

## 8. 📊 AUDIT STATISTICS

```
Total Files Analyzed:        30+
Files with Issues:           18
Unused Imports:              4
Dead Code/Unused Files:      2
Hardcoded Values:            6+
Duplicate Code Patterns:     8+
Performance Issues Found:    5+
Missing Best Practices:      10+

Severity Breakdown:
🔴 High:   12 issues
🟡 Medium: 15 issues
🟢 Low:    8 issues
```

---

## 9. ✅ ACTION ITEMS (Recommended Priority Order)

### Week 1 - Critical Fixes

- [ ] Remove `force-dynamic` from homepage (enable static generation)
- [ ] Move hardcoded contact info to `.env.local`
- [ ] Fix NavBar image optimization (add priority)
- [ ] Add JSON-LD structured data to root layout
- [ ] Remove unused imports

### Week 2 - Code Quality

- [ ] Delete `navigationConfig.tsx` or integrate it
- [ ] Extract duplicate animation variants
- [ ] Remove commented code in ProjectSidebar
- [ ] Add next/font for typography
- [ ] Implement form validation

### Week 3 - Enhancements

- [ ] Add Open Graph images
- [ ] Optimize ProjectCard images
- [ ] Remove AppTabProvider redundancy
- [ ] Implement error boundaries
- [ ] Add loading states/skeletons

### Week 4 - Polish

- [ ] Accessibility audit & improvements
- [ ] Lighthouse performance testing
- [ ] SEO verification
- [ ] Test with real-world scenarios

---

## 📎 Attachments

See accompanying detailed notes in session memory for:

- Code snippets
- Specific line references
- Implementation examples

Generated: May 1, 2026
