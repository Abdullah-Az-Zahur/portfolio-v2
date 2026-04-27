import { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
