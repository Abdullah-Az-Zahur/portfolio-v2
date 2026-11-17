# 🎨 Portfolio v2 — Md. Abdullah Az-Zahur, Software Engineer

A clean, minimalistic software engineer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Framer Motion**. Inspired by VS Code UI, this project showcases my software engineering journey, MERN stack work, and AI/ML research background with smooth animations, skill-based project filtering, a contact form with email backend, and a professional component architecture.

**[🌐 Live Demo](https://abdullahzahur.vercel.app/)** • **[📧 Contact](https://abdullahzahur.vercel.app/contact)** • **[🔗 GitHub](https://github.com/Abdullah-Az-Zahur/portfolio-v2)**

---

## 👤 About This Portfolio

I built this portfolio as a personal project to showcase my **software engineering skills**, selected projects, and the way I approach real-world product work. It reflects my journey from beginner to intermediate/advanced levels in full-stack development, with a focus on:

- **MERN Stack Development** — Building scalable, feature-rich web applications
- **Modern React Patterns** — Server Components, hooks, and state management with Redux
- **UI/UX Design** — Clean, minimalistic design inspired by VS Code aesthetics
- **TypeScript & Best Practices** — Strong typing and professional code quality
- **Continuous Learning** — Self-taught Next.js, Redux Toolkit, and advanced patterns through free resources
- **Research Mindset** — Applied academic learning from M.Sc. ICT work and thesis-driven problem solving

### 🎯 Key Achievement

This portfolio is built with **Next.js 16, TypeScript, Redux Toolkit, and Framer Motion** — skills that I independently learned and applied as a software engineer. These technologies were not part of my initial course curriculum, so I:

- 📚 Explored official documentation
- 🎥 Watched free tutorials and guides
- 🛠️ Built this project from scratch to practice and master these technologies
- 🚀 Created a production-ready application deployed on Vercel

This demonstrates my ability to **self-learn**, **problem-solve**, and **build modern web applications** independently.

It also reflects the kind of work I value most as a software engineer: clean systems, thoughtful UX, and practical features that feel simple to use.

---

## ✨ Key Features

- **🎯 Animated Typing Effect** — Dynamic role showcase with smooth typing/deleting animations
- **🎨 Smooth Animations** — Built with Framer Motion for fluid page transitions and interactive elements
- **🔍 Smart Project Filtering** — Redux-powered skill-based filtering system to showcase relevant projects
- **📧 Contact Form** — Full-stack email integration using Nodemailer with Gmail SMTP
- **📱 Fully Responsive** — Mobile-first design that looks great on all devices
- **⚡ Modern Stack** — Next.js 16 with Turbopack, React 19, TypeScript, and Tailwind CSS
- **🎯 Production-Ready** — Auth-protected CMS, MongoDB persistence, Cloudinary uploads, theme modes, linting, and optimized builds
- **🌓 Theme Modes** — Dark (default), light, and system theme selection
- **🛠️ Content Management Dashboard** — Edit About content, manage projects, reorder projects, and upload project images

---

## 🎨 Featured Projects

The portfolio includes a growing collection of projects spanning beginner to advanced levels. Project entries are managed through the authenticated dashboard and can be updated without changing the public UI.

### Advanced MERN Stack Projects

- **[Jobify](https://jobify-13db1.web.app/)** — Advanced job portal with role-based access control, payment integration, and real-time WebSocket features
- **[Survey Vista](https://survey-vista.web.app/)** — Feature-rich survey platform with charts, graphs, and role management
- **[Job Nest](https://job-nest-391e1.web.app/)** — Full-stack job-seeking platform with search, filtering, and theme toggle

### Full-Stack Projects

- **[BD Art Gallery](https://bd-art-gallery.firebaseapp.com/)** — Art & Craft Store with Firebase authentication and data management
- **[Book Vibe](https://playful-gingersnap-532cbd.netlify.app/)** — Modern book discovery and management application
- **[Chef's Table](https://teal-pegasus-af4f19.netlify.app/)** — Dynamic recipe management web application

### Frontend & UI Projects

- **[Retro Forum](https://resonant-bublanina-05cc2c.netlify.app/)** — Search integration with intermediate JavaScript patterns
- **[Bus Ticket Landing](https://abdullah-az-zahur.github.io/bus-ticket-landing/)** — Bus ticket management website
- **[Hockeys](https://hockeys-with-daisyui.netlify.app/)** — Hockey website with carousel and progress visualization
- **[Luxury Travel](https://luxury-travel-responsive.netlify.app/)** — Fully responsive travel website

### Starter Projects

- **[New Year Party](https://new-year-party-celebration-html-css.netlify.app/)** — New Year celebration website
- **[Portfolio v1](https://abdullah-az-zahur.github.io/web-developer-portfolio/)** — First portfolio version

👉 **View all projects** — [abdullahzahur.vercel.app/project](https://abdullahzahur.vercel.app/project)

---

## 📦 Tech Stack

### Frontend

- **[Next.js 16.4.6](https://nextjs.org)** — React framework with App Router and Turbopack
- **[React 19.3.1](https://react.dev)** — UI library with Server Components support
- **[TypeScript 5.9](https://www.typescriptlang.org)** — Static typing for JavaScript

### Styling & Animation

- **[Tailwind CSS 4.3.3](https://tailwindcss.com)** — Utility-first CSS framework
- **[@tailwindcss/postcss 4.3.3](https://tailwindcss.com)** — Modern PostCSS integration
- **[Framer Motion 14.7.1](https://www.framer.com/motion)** — Smooth animations and transitions
- **[React Icons 5.7.0](https://react-icons.github.io/react-icons)** — SVG icon library

### State Management

- **[@reduxjs/toolkit 2.13.0](https://redux-toolkit.js.org)** — State management library
- **[React Redux 9.3.1](https://react-redux.js.org)** — Official React bindings for Redux

### Backend & APIs

- **Next.js Route Handlers** — Server-side API routes with authentication and validation
- **[Auth.js / NextAuth](https://authjs.dev/)** — Credentials-based admin authentication
- **[Mongoose](https://mongoosejs.com/)** — MongoDB connection, models, and CRUD operations
- **[Cloudinary](https://cloudinary.com/)** — Server-side project image uploads
- **[Nodemailer 8.0.5](https://nodemailer.com)** — Email sending via SMTP

### Theme & UI

- **[next-themes](https://github.com/pacocoursey/next-themes)** — System, light, and dark theme persistence
- **VS Code-inspired UI** — Sidebar navigation, tabs, code-like typography, and focused CMS surfaces

### Development Tools

- **[ESLint 10](https://eslint.org)** — Code linting and quality checking
- **[Prettier 3.9.10](https://prettier.io)** — Code formatter
- **[Husky 9.1.7](https://typicode.github.io/husky)** — Git hooks for pre-commit checks
- **[Lint-staged 17.6.0](https://github.com/lint-staged/lint-staged)** — Run linters on staged files

---

## 📂 Project Structure

```text
portfolio-v2/                                                            # Project root
├── public/                                                        # Static assets and public images
├── src/                                                           # Application source code
│   ├── app/                                                     # Next.js App Router
│   │   ├── (web)/                                             # Public portfolio experience
│   │   ├── (admin)/                                           # Protected admin dashboard
│   │   ├── (backend)/api/                                     # Server-side API routes
│   │   ├── globals.css                                        # Global styles and theme tokens
│   │   └── layout.tsx                                         # Root layout and providers
│   ├── features/                                                # Domain-specific components
│   ├── lib/                                                     # Auth, database, media, and data access
│   ├── models/                                                  # Mongoose schemas and models
│   ├── providers/                                               # Theme and navigation providers
│   ├── shared/                                                  # Shared UI, layout, hooks, and data
│   └── store/                                                   # Redux store and client state
├── eslint.config.mjs                                              # ESLint configuration
├── next.config.ts                                                 # Next.js configuration
├── package.json                                                   # Scripts and dependencies
├── postcss.config.mjs                                             # PostCSS configuration
├── tailwind.config.ts                                             # Tailwind configuration
├── tsconfig.json                                                  # TypeScript configuration
└── README.md                                                      # Project documentation
```

---

## 🚀 Quick Start

### 🎯 Want to See It Live?

**No need to set up locally!** The portfolio is already deployed and live:

👉 **[Visit Live Portfolio →](https://abdullahzahur.vercel.app/)**

Explore the dynamic project catalog, About page, and contact form directly on the live site!

---

### Prerequisites (For Local Development)

- **Node.js** 18.17+ or 20+
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abdullah-Az-Zahur/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📄 Pages Overview

### 🏠 Home Page (`/`)

- Hero section with animated typing effect cycling through multiple roles
- Transparent profile portrait with responsive hero composition
- Smooth motion background accents in dark mode and a soft light-mode surface
- Quick navigation to main sections
- Smooth entry animations with Framer Motion

### 👤 About Page (`/about`)

- **Personal Information**
  - Bio — Brief personal introduction
  - Education — High school, bachelor's degree, master's degree, and thesis details
  - Interests — Skills and interests showcase
- **Professional Information**
  - Skills — Technical skills breakdown
  - Experience — Work history and achievements
  - Certificates — Professional certifications
- **Hobbies**
  - Sports, technology, gaming, travel, books, and outdoor interests
- **Dynamic About CMS** — Edit content, add items, choose icons/colors, and attach optional certificates or documents

### 🎯 Projects Page (`/project`)

- Dynamic project catalog with skill-based filtering
- **Interactive Filtering** — Select multiple skills to filter projects
- **Project Details** — Name, description, live link, GitHub repository
- **Skill Tags** — Technology stack for each project
- **MongoDB-backed content** — Dashboard changes are reflected on the public project page
- **Cloudinary images** — Upload files from the dashboard; MongoDB stores only the returned URL
- **Project ordering** — Drag projects or use move controls, then persist the order
- Redux-powered state management for efficient filtering

### 📧 Contact Page (`/contact`)

- **Contact Form** — Name, email, and message fields
- **Form Validation** — Client-side validation with user feedback
- **Email Backend** — Server-side email sending via Nodemailer
- **Success Message** — Confirmation after email is sent
- **Loading States** — Visual feedback during email transmission

### 🔐 Dashboard (`/dashboard`)

- **Credentials authentication** — Auth.js protects the administration surface
- **Protected routes** — Unauthenticated visitors are redirected to
  `/login`
- **Logout** — Clears the Auth.js session and returns to the public home page
- **Projects CMS** — Create, edit, delete, reorder, preview, and upload project images
- **About CMS** — Edit CV-based Professional, Personal, and Hobbies content
- **Dynamic items** — Add About items to existing groups with controlled icon/color choices
- **Certificates** — Attach Google Drive or other document URLs with public show/hide control
- **Protected APIs** — Dashboard API routes require the authenticated admin session
- **Theme controls** — System, dark, and light modes; dark is the default

### 🔌 API Overview

| Endpoint                          | Methods                        | Purpose                                 |
| --------------------------------- | ------------------------------ | --------------------------------------- |
| `/api/dashboard/projects`         | `GET`, `POST`                  | List and create MongoDB-backed projects |
| `/api/dashboard/projects/[id]`    | `GET`, `PATCH`, `DELETE`       | Read, update, and delete one project    |
| `/api/dashboard/projects/reorder` | `PATCH`                        | Persist project order in MongoDB        |
| `/api/dashboard/profile/about`    | `GET`, `POST`, `PUT`, `DELETE` | About content management                |
| `/api/upload`                     | `POST`                         | Authenticated Cloudinary image upload   |
| `/api/about`                      | `GET`                          | Public About sidebar metadata           |
| `/api/send`                       | `POST`                         | Contact form email delivery             |

All dashboard endpoints require an authenticated Auth.js session. Public loaders
read the current published content from the application data layer.

---

## 🎯 Key Features Deep Dive

### ✨ Typing Animation

The homepage features a custom typing animation component that cycles through multiple role titles:

- **Dynamic Text** — Sequentially displays: "Software Engineer", "Front-End Developer", "Back-End Developer", "MERN Stack Developer"
- **Smooth Animation** — Uses Framer Motion for realistic typing/deleting effects
- **Custom Timing** — Configurable delays between typing, display, and deletion

**Location:** [src/shared/ui/TypingAnimation/TypingAnimation.tsx](src/shared/ui/TypingAnimation/TypingAnimation.tsx)

### 🔍 Redux-Powered Project Filtering

Smart filtering system to showcase relevant projects based on selected skills:

- **Multi-Skill Selection** — Filter by one or multiple skills simultaneously
- **AND Logic** — Shows only projects that contain ALL selected skills
- **Real-time Updates** — Instant filtering with smooth transitions
- **State Persistence** — Redux manages filter state across navigation

**Location:** [src/store/features/projects/projectsSlice.ts](src/store/features/projects/projectsSlice.ts)

### 📧 Email Contact Integration

Full-stack email sending with Nodemailer:

- **Backend API** — Next.js API route at `(backend)/api/send`
- **Gmail SMTP** — Uses Gmail's SMTP server via Nodemailer
- **Server-side delivery** — Email credentials remain outside the client bundle
- **Error Handling** — Clear validation and failure responses

**Location:** [src/app/(backend)/api/send/route.ts](<src/app/(backend)/api/send/route.ts>)

### 🗃️ MongoDB and Cloudinary Content Flow

The application stores structured project and About content in MongoDB and keeps
uploaded image binaries in Cloudinary. Project documents store the project
metadata and Cloudinary image URL, while the public project loader orders entries
before rendering them.

Dashboard mutations update the database and revalidate the public project cache,
so content changes become available without rebuilding the application.

### 🌓 Theme Behavior

Dark mode is the default because the public interface is designed around a VS
Code-inspired dark workspace. Users can switch to light mode or follow the
operating system through the compact theme menu in the navigation bar.

### 📱 Responsive Layout

Mobile-first responsive design:

- **Adaptive Sidebar** — Shows/hides based on viewport size
- **Flexible Grid** — Content adapts from single to multi-column layouts
- **Touch-Optimized** — Larger touch targets on mobile devices
- **Viewport Detection** — Uses Tailwind CSS breakpoints (sm, md, lg, xl)

---

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint on all files
npm run lint:stage       # Run linters on staged files (pre-commit)
```

### Pre-commit Hooks

This project uses **Husky** and **lint-staged** to automatically:

- Run ESLint with auto-fix on staged `.ts`, `.tsx`, `.js`, `.jsx` files
- Format code with Prettier on all staged files (`.json`, `.yml`, `.yaml`, `.md`, `.css`, `.scss`)

---

## 🌐 Deployment

### Current Deployment ✅

This portfolio is **already live** on Vercel at [abdullahzahur.vercel.app](https://abdullahzahur.vercel.app/)

Deployments happen automatically on every push to the `main` branch.

### Deploying Your Own Version

The easiest way to deploy this Next.js app:

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Connect production services**
   - Ensure the deployment has access to the configured database, media storage,
     authentication, and email services.

4. **Deploy**
   - Vercel automatically builds and deploys on every push to `main`

### Deploy on Other Platforms

- **Netlify** — [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/overview)
- **Railway** — [Railway.app Deployment](https://railway.app)
- **Self-hosted** — Run `npm run build && npm start` on your server

---

## 🛠️ Development Workflow

### Setting Up Pre-commit Hooks

Husky is already configured, but to reinitialize:

```bash
npm run prepare
```

### Code Formatting

Format all files with Prettier:

```bash
npx prettier --write .
```

### Linting

Check for ESLint issues:

```bash
npm run lint
```

Auto-fix ESLint issues:

```bash
npx eslint . --fix
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) — Learn about Next.js features
- [React Documentation](https://react.dev) — React concepts and hooks
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — Utility-first CSS
- [Framer Motion Docs](https://www.framer.com/motion) — Animation library
- [Redux Toolkit Guide](https://redux-toolkit.js.org) — State management

---

## 📝 Project Data Configuration

### Adding/Editing Projects

The dashboard is the primary project editor. Project records are stored in
MongoDB and displayed on the public Projects page in their configured order.
Each project contains:

```typescript
{
  name: string,
  liveLink: string,
  repoLink: string,
  image: string,
  description: string,
  skills: string[]   // Use the shared skill catalog for consistent filtering
}
```

Use `/dashboard/projects` to create or edit projects. Images are uploaded to
Cloudinary, and the returned image URL is stored with the project record. The
public project page reads the current collection and supports skill-based
filtering.

### Adding About Content

Use `/dashboard/profile` to edit the CV-based About content. The root sections
are Professional Info, Personal Info, and Hobbies. Existing groups support new
items with controlled icons, colors, order, and optional document links. New
entries are validated and saved through the protected About API. Available icon
choices are defined in
[src/shared/data/aboutIconOptions.ts](src/shared/data/aboutIconOptions.ts).

---

## 📞 Contact & Connect

- **Website** — [abdullahzahur.vercel.app](https://abdullahzahur.vercel.app/)
- **GitHub** — [@Abdullah-Az-Zahur](https://github.com/Abdullah-Az-Zahur)
- **LinkedIn** — [Md. Abdullah Az-Zahur](https://www.linkedin.com/in/md-abdullah-az-zahur/)
- **Facebook** — [Abdullah Az-Zahur](https://www.facebook.com/abdullah.az.zahur)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com)
- Animations powered by [Framer Motion](https://www.framer.com/motion)
- Icons from [React Icons](https://react-icons.github.io/react-icons)
- State management with [Redux Toolkit](https://redux-toolkit.js.org)

---

<div align="center">
  <strong>Made with ❤️ by Md. Abdullah Az-Zahur</strong><br>
  <sub>Live at <a href="https://abdullahzahur.vercel.app/">abdullahzahur.vercel.app</a></sub><br>
   <sub>Last Updated: November 2026</sub><br>
  <sub><a href="https://github.com/Abdullah-Az-Zahur/portfolio-v2">View on GitHub</a></sub>
</div>
