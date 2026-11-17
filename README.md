# Portfolio v2

> A modern, VS Code-inspired portfolio and content management system for Md. Abdullah Az-Zahur.

[![Live Site](https://img.shields.io/badge/Live%20Site-abdullahzahur.vercel.app-111827?style=flat-square&logo=vercel&logoColor=white)](https://abdullahzahur.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Overview

Portfolio v2 is a full-stack personal portfolio built to present software engineering work through a focused, developer-friendly interface. The public website combines a VS Code-inspired layout, responsive design, motion, theme preferences, project filtering, and a contact workflow.

The project also includes a protected admin dashboard for maintaining portfolio content without editing source files. Projects, About entries, project ordering, settings, and Cloudinary-hosted images can be managed from the dashboard.

**Links:** [Live portfolio](https://abdullahzahur.vercel.app/) · [Projects](https://abdullahzahur.vercel.app/project) · [Contact](https://abdullahzahur.vercel.app/contact) · [GitHub](https://github.com/Abdullah-Az-Zahur/portfolio-v2)

## Highlights

- Responsive portfolio pages for Home, About, Projects, and Contact
- VS Code-inspired navigation, tabs, sidebar, and typography
- Dark, light, and system theme modes
- Framer Motion animations and typing role presentation
- Redux-powered project filtering by skills
- Auth.js credentials-based admin authentication
- Admin CMS for projects, About content, settings, and project ordering
- MongoDB persistence with static fallback data for public content
- Cloudinary uploads for project images
- Nodemailer-powered contact form delivery
- ESLint, Prettier, Husky, and lint-staged development workflow

## Technology

| Area            | Technologies                                    |
| --------------- | ----------------------------------------------- |
| Application     | Next.js 16 App Router, React 19, TypeScript 5.9 |
| Styling         | Tailwind CSS, PostCSS                           |
| UI and motion   | Framer Motion, React Icons, next-themes         |
| State           | Redux Toolkit, React Redux                      |
| Data and auth   | MongoDB, Mongoose, Auth.js                      |
| Media and email | Cloudinary, Nodemailer                          |
| Quality         | ESLint, Prettier, Husky, lint-staged            |

## Project Structure

```text
portfolio-v2/
├── src/
│   ├── app/
│   │   ├── (web)/          # Public portfolio experience
│   │   │   ├── about/      # About page
│   │   │   ├── contact/    # Contact page
│   │   │   ├── project/    # Project showcase
│   │   │   └── page.tsx    # Home page
│   │   ├── (admin)/        # Login and protected CMS pages
│   │   │   ├── dashboard/  # Dashboard, profile, projects, settings
│   │   │   └── login/      # Admin authentication
│   │   └── (backend)/api/  # Server-side API route handlers
│   ├── features/           # Domain-specific feature components
│   ├── lib/                # Auth, database, media, and data access
│   ├── models/             # Mongoose data models
│   ├── providers/          # Theme and navigation providers
│   ├── shared/             # Reusable layout, UI, data, and hooks
│   └── store/              # Redux store and client-side state
├── public/                 # Static assets and public images
├── next.config.ts          # Next.js configuration
├── package.json            # Scripts and dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18.18 or newer
- npm 9 or newer

### Installation

```bash
git clone https://github.com/Abdullah-Az-Zahur/portfolio-v2.git
cd portfolio-v2
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The public experience includes fallback content for local exploration. Optional CMS, email, persistence, and media capabilities are available in configured deployments.

## Application Routes

| Route                 | Description                                   |
| --------------------- | --------------------------------------------- |
| `/`                   | Portfolio landing page                        |
| `/about`              | Personal, professional, and hobby information |
| `/project`            | Project showcase with skill filtering         |
| `/contact`            | Contact form                                  |
| `/login`              | Admin login                                   |
| `/dashboard`          | Protected CMS dashboard                       |
| `/dashboard/profile`  | Manage About content                          |
| `/dashboard/projects` | Manage projects, images, and ordering         |
| `/dashboard/settings` | Manage site settings                          |

## API Routes

| Endpoint                          | Methods                        | Purpose                               |
| --------------------------------- | ------------------------------ | ------------------------------------- |
| `/api/about`                      | `GET`                          | Public About metadata                 |
| `/api/send`                       | `POST`                         | Send contact form messages            |
| `/api/dashboard/projects`         | `GET`, `POST`                  | List and create projects              |
| `/api/dashboard/projects/[id]`    | `GET`, `PATCH`, `DELETE`       | Manage one project                    |
| `/api/dashboard/projects/reorder` | `PATCH`                        | Persist project ordering              |
| `/api/dashboard/profile/about`    | `GET`, `POST`, `PUT`, `DELETE` | Manage About entries                  |
| `/api/upload`                     | `POST`                         | Upload an authenticated project image |

Dashboard endpoints require an authenticated admin session.

## Available Scripts

```bash
npm run dev        # Start the development server with Turbopack
npm run build      # Create a production build
npm start          # Start the production server
npm run lint       # Run ESLint
npm run lint:stage # Run lint-staged checks
npm run prepare    # Initialize Husky hooks
```

## Deployment

The production site is deployed on [Vercel](https://vercel.com/). To deploy your own instance:

1. Import the repository into Vercel.
2. Connect the required production services through the deployment platform.
3. Configure the production domain in your application settings.
4. Deploy using the default Next.js build settings.

For a self-hosted deployment:

```bash
npm run build
npm start
```

## Content Management

The dashboard is the preferred way to update portfolio content:

- Use **Projects** to create, edit, delete, reorder, and upload project images.
- Use **Profile** to manage About sections, entries, icons, colors, and document links.
- Use **Settings** to update supported site-level configuration.

Uploaded images are stored in Cloudinary, while MongoDB stores the associated project data and image URLs.

## Contact

- **Website:** [abdullahzahur.vercel.app](https://abdullahzahur.vercel.app/)
- **GitHub:** [@Abdullah-Az-Zahur](https://github.com/Abdullah-Az-Zahur)
- **LinkedIn:** [Md. Abdullah Az-Zahur](https://www.linkedin.com/in/md-abdullah-az-zahur/)
- **Facebook:** [Abdullah Az-Zahur](https://www.facebook.com/abdullah.az.zahur)

---

<div align="center">
  Built with Next.js, TypeScript, and a lot of curiosity by <a href="https://github.com/Abdullah-Az-Zahur">Md. Abdullah Az-Zahur</a>.
</div>
