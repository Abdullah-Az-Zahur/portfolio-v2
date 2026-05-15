# 🎨 Portfolio v2 — Md. Abdullah Az-Zahur, Software Engineer

A clean, minimalistic software engineer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Framer Motion**. Inspired by VS Code UI, this project showcases my software engineering journey, MERN stack work, and AI/ML research background with smooth animations, skill-based project filtering, a contact form with email backend, and a professional component architecture.

**[🌐 Live Demo](https://abdullahzahur.vercel.app/)** • **[📧 Contact](https://abdullahzahur.vercel.app/contact)** • **[🔗 GitHub](https://github.com/Abdullah-Az-Zahur/portfolio-v2)**

---

## 👤 About This Portfolio

I built this portfolio as a personal project to showcase my **software engineering skills**, **13+ projects**, and the way I approach real-world product work. It reflects my journey from beginner to intermediate/advanced levels in full-stack development, with a focus on:

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
- **🎯 Production-Ready** — Pre-commit hooks, code linting, and optimized builds

---

## 🎨 Featured Projects

This portfolio showcases **13+ projects** spanning from beginner to advanced levels and reflects the kind of software engineering work I enjoy building:

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

- **[Next.js 16.2.4](https://nextjs.org)** — React framework with App Router and Turbopack
- **[React 19.2.4](https://react.dev)** — UI library with Server Components support
- **[TypeScript 5](https://www.typescriptlang.org)** — Static typing for JavaScript

### Styling & Animation

- **[Tailwind CSS 3.4.17](https://tailwindcss.com)** — Utility-first CSS framework
- **[@tailwindcss/postcss 4.0.7](https://tailwindcss.com)** — Modern PostCSS integration
- **[Framer Motion 12.5.0](https://www.framer.com/motion)** — Smooth animations and transitions
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons)** — SVG icon library

### State Management

- **[@reduxjs/toolkit 2.7.0](https://redux-toolkit.js.org)** — State management library
- **[React Redux 9.2.0](https://react-redux.js.org)** — Official React bindings for Redux

### Backend & APIs

- **Node.js/Express** — Backend API routes with Next.js
- **[Nodemailer 8.0.5](https://nodemailer.com)** — Email sending via SMTP
- **[Dotenv 16.5.0](https://github.com/motdotla/dotenv)** — Environment variable management

### Development Tools

- **[ESLint 9](https://eslint.org)** — Code linting and quality checking
- **[Prettier 3.8.3](https://prettier.io)** — Code formatter
- **[Husky 9.1.7](https://typicode.github.io/husky)** — Git hooks for pre-commit checks
- **[Lint-staged 16.4.0](https://github.com/lint-staged/lint-staged)** — Run linters on staged files

---

## 📂 Project Structure

```
portfolio-v2/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── globals.css              # Global styles
│   │   ├── layout.tsx               # Root layout
│   │   ├── (auth)/                  # Auth routes group
│   │   ├── (backend)/               # Backend API routes
│   │   │   └── api/send/route.ts    # Email contact endpoint
│   │   └── (web)/                   # Public web pages
│   │       ├── page.tsx             # Home page
│   │       ├── layout.tsx           # Web layout with sidebar
│   │       ├── about/page.tsx       # About page
│   │       ├── contact/page.tsx     # Contact page
│   │       └── project/page.tsx     # Projects page
│   │
│   ├── features/                    # Feature-based components
│   │   ├── about/                   # About feature
│   │   │   └── components/
│   │   │       ├── AboutClient.tsx
│   │   │       ├── PersonalInfo/    # Bio, Education, Interests
│   │   │       ├── ProfessionalInfo/ # Skills, Experience, Certificates
│   │   │       └── Hobbies/         # Creative, Outdoor, Wellness
│   │   ├── contact/                 # Contact feature
│   │   │   └── components/
│   │   │       ├── ContactForm.tsx
│   │   │       └── SuccessMessage.tsx
│   │   ├── home/                    # Home feature
│   │   │   └── components/
│   │   │       └── HomeBackgroundBlobs.tsx
│   │   └── projects/                # Projects feature
│   │       └── components/
│   │           └── ProjectCard.tsx
│   │
│   ├── shared/                      # Shared components & utilities
│   │   ├── layout/
│   │   │   ├── NavBar/
│   │   │   ├── Sidebar/
│   │   │   ├── TabBar/
│   │   │   └── Footer/
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── CommentText/
│   │   │   └── TypingAnimation/
│   │   ├── data/
│   │   │   ├── projects.ts          # Project data configuration
│   │   │   └── index.ts
│   │   └── utils/
│   │       └── animationVariants.ts
│   │
│   ├── store/                       # Redux store
│   │   ├── store.ts                 # Store configuration
│   │   ├── hooks.ts                 # Custom Redux hooks
│   │   └── features/
│   │       ├── tabs/
│   │       │   └── tabsSlice.ts     # Tab state management
│   │       └── projects/
│   │           └── projectsSlice.ts # Projects & filtering state
│   │
│   ├── providers/
│   │   └── AppTabProvider.tsx       # Redux provider wrapper
│   │
│   └── config/                      # Configuration files
│
├── public/
│   ├── robots.txt
│   └── assets/
│       └── images/                  # Project images
│
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript configuration
├── next.config.ts                   # Next.js configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── postcss.config.mjs               # PostCSS configuration
└── eslint.config.mjs                # ESLint configuration
```

---

## 🚀 Quick Start

### 🎯 Want to See It Live?

**No need to set up locally!** The portfolio is already deployed and live:

👉 **[Visit Live Portfolio →](https://abdullahzahur.vercel.app/)**

Explore all 13+ projects, about page, and contact form directly on the live site!

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

3. **Set up environment variables**

   Create a `.env.local` file in the root directory for email configuration:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   EMAIL_TO=recipient@example.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📄 Pages Overview

### 🏠 Home Page (`/`)

- Hero section with animated typing effect cycling through multiple roles
- Dynamic background blobs for visual depth
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
  - Creative — Books and music interests
  - Outdoor — Gaming and hiking activities
  - Wellness — Nature walks and well-being

### 🎯 Projects Page (`/project`)

- Portfolio of **13+ projects** with skill-based filtering
- **Interactive Filtering** — Select multiple skills to filter projects
- **Project Details** — Name, description, live link, GitHub repository
- **Skill Tags** — Technology stack for each project
- Redux-powered state management for efficient filtering

### 📧 Contact Page (`/contact`)

- **Contact Form** — Name, email, and message fields
- **Form Validation** — Client-side validation with user feedback
- **Email Backend** — Server-side email sending via Nodemailer
- **Success Message** — Confirmation after email is sent
- **Loading States** — Visual feedback during email transmission

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
- **Environment Variables** — Secure credential management with `.env.local`
- **Error Handling** — Graceful error messages and retry logic

**Location:** [src/app/(backend)/api/send/route.ts](<src/app/(backend)/api/send/route.ts>)

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

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add the same variables from your `.env.local`:
     - `EMAIL_USER`
     - `EMAIL_PASSWORD`
     - `EMAIL_TO`

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

Projects are defined in [src/shared/data/projects.ts](src/shared/data/projects.ts). Each project includes:

```typescript
{
  id: number,
  name: string,
  liveLink: string,
  repoLink: string,
  image: string,
  description: string,
  skills: string[]  // Used for filtering
}
```

Simply add a new object to the `projects` array to include it on the Projects page.

---

## 📞 Contact & Connect

- **Website** — [abdullahzahur.vercel.app](https://abdullahzahur.vercel.app/)
- **GitHub** — [@Abdullah-Az-Zahur](https://github.com/Abdullah-Az-Zahur)
- **LinkedIn** — [Md. Abdullah Az-Zahur](https://www.linkedin.com/in/md-abdullah-az-zahur/)
- **Facebook** — [Abdullah Az-Zahur](https://www.facebook.com/abdullah.az.zahur)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

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
  <sub>Last Updated: May 2026</sub><br>
  <sub><a href="https://github.com/Abdullah-Az-Zahur/portfolio-v2">View on GitHub</a></sub>
</div>

## Admin & Backend Quick Start

1. Copy the example env file and fill the values:

```bash
cp .env.local.example .env.local
# Edit .env.local and add your MongoDB and Cloudinary values
```

2. Start the dev server:

```bash
npm install
npm run dev
```

3. To populate MongoDB with the initial project/profile/skills dataset, sign in using the admin credentials (or hit the credentials flow), then POST to the bootstrap endpoint:

```
POST /api/admin/bootstrap

# Example using curl (replace host if needed):
curl -X POST http://localhost:3000/api/admin/bootstrap
```

The bootstrap route is protected and requires admin auth (NextAuth Credentials). Use it to load the static `src/shared/data/projects.ts` dataset into MongoDB.
