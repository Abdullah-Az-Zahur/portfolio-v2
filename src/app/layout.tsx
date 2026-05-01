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
  description:
    "Portfolio of Md. Abdullah Az-Zahur — MERN Stack and Front-End Developer from Bangladesh. Explore my projects, skills, and contact information.",
  keywords: [
    "Md. Abdullah Az-Zahur",
    "Portfolio",
    "Front-End Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Bangladesh Web Developer",
  ],
  authors: [{ name: "Md. Abdullah Az-Zahur" }],
  creator: "Md. Abdullah Az-Zahur",
  metadataBase: new URL("https://abdullahzahur.vercel.app"),
  openGraph: {
    title: "Md. Abdullah Az-Zahur | MERN Stack & Front-End Developer",
    description:
      "Welcome to my portfolio! I’m Md. Abdullah Az-Zahur, a passionate MERN Stack and Front-End Developer. Discover my projects, skills, and experience in modern web development.",
    url: "https://abdullahzahur.vercel.app",
    siteName: "Md. Abdullah Az-Zahur Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Abdullah Az-Zahur | MERN Stack & Front-End Developer",
    description:
      "Explore the portfolio of Md. Abdullah Az-Zahur — MERN Stack and Front-End Developer. See projects, skills, and get in touch.",
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
    image:
      "https://abdullahzahur.vercel.app/assets/images/My%20half%20Photo.png",
    description: "Software Engineer from Bangladesh",
    jobTitle: "Full Stack Developer",
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
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={firaCode.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
