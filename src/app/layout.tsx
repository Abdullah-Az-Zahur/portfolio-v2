import { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

// Optimize font loading
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap", // Shows fallback while loading
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Md. Abdullah Az-Zahur",
    template: "%s | Md. Abdullah Az-Zahur",
  },
  metadataBase: new URL("https://abdullahzahur.vercel.app"),
  applicationName: "Md. Abdullah Az-Zahur Portfolio",
  description:
    "Md. Abdullah Az-Zahur's portfolio website — a Next.js-powered showcase of a software engineer's MERN stack, front-end, and full-stack web development projects, skills, and contact details.",
  keywords: [
    "Md. Abdullah Az-Zahur",
    "Portfolio",
    "Portfolio Website",
    "Software Engineer",
    "Software Engineering",
    "Front-End Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Full Stack Web Developer",
    "Bangladesh Web Developer",
    "Bangladesh Software Engineer",
    "Web Developer Portfolio",
    "MERN Stack Portfolio",
  ],
  authors: [{ name: "Md. Abdullah Az-Zahur" }],
  creator: "Md. Abdullah Az-Zahur",
  category: "portfolio",
  classification: "Personal Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/window.svg",
    shortcut: "/window.svg",
    apple: "/window.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Md. Abdullah Az-Zahur | MERN Stack & Front-End Developer",
    description:
      "Explore Md. Abdullah Az-Zahur's portfolio to see MERN stack projects, front-end work, skills, and contact information.",
    url: "https://abdullahzahur.vercel.app",
    siteName: "Md. Abdullah Az-Zahur Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/images/My%20half%20Photo.png",
        width: 1200,
        height: 630,
        alt: "Md. Abdullah Az-Zahur portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Abdullah Az-Zahur | MERN Stack & Front-End Developer",
    description:
      "Explore Md. Abdullah Az-Zahur's web developer portfolio, featured projects, and contact details.",
    images: ["/assets/images/My%20half%20Photo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Abdullah Az-Zahur",
    url: "https://abdullahzahur.vercel.app",
    description:
      "Md. Abdullah Az-Zahur is a Bangladesh-based software engineer and MERN stack developer.",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://www.linkedin.com/in/md-abdullah-az-zahur/",
      "https://github.com/Abdullah-Az-Zahur",
      "https://www.facebook.com/abdullah.az.zahur",
    ],
    email: "mailto:abdullah.az.zahur@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Personal",
      telephone: "+880-1705697897",
      email: "abdullah.az.zahur@gmail.com",
    },
    knowsAbout: [
      "Software Engineering",
      "MERN Stack",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Front-End Development",
      "Back-End Development",
      "Full Stack Development",
      "Web Application Development",
      "AI/ML",
    ],
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Md. Abdullah Az-Zahur Portfolio",
    url: "https://abdullahzahur.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://abdullahzahur.vercel.app/project",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={firaCode.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
