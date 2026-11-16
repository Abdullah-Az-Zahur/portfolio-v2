import HomeBackgroundBlobs from "@/features/home/components/HomeBackgroundBlobs";
import TypingAnimation from "@/shared/ui/TypingAnimation/TypingAnimation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { TbSlashes } from "react-icons/tb";

const GITHUB_URL = "https://github.com/Abdullah-Az-Zahur";

const DEVELOPER_ROLES = [
  { text: "Software Engineer" },
  { text: "Front-End Developer" },
  { text: "Back-End Developer" },
  { text: "MERN Stack Developer" },
  { text: "Full-Stack Developer" },
  { text: "JavaScript Developer" },
  { text: "React.js Developer" },
  { text: "Node.js Developer" },
];

export const metadata: Metadata = {
  title: "Home",
  description:
    "Md. Abdullah Az-Zahur's home page. Discover a software engineer's Next.js portfolio showcasing MERN stack projects, front-end development skills, and contact information.",
  keywords: [
    "Md. Abdullah Az-Zahur",
    "Home",
    "Portfolio",
    "Software Engineer",
    "MERN Stack Developer",
    "Front-End Developer",
    "Next.js Developer",
    "Full Stack Developer",
  ],
  alternates: {
    canonical: "/",
  },
};

const HomePage = () => {
  return (
    <main className="relative flex min-h-[calc(100svh-3.5rem)] w-full flex-col justify-center overflow-x-hidden bg-slate-950 pb-14 text-slate-400 transition-colors duration-200 light:bg-slate-50 light:text-slate-600 md:pb-12">
      {/* Dynamic Roaming Background Blobs */}
      <HomeBackgroundBlobs />

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-4 px-4 py-4 sm:gap-8 sm:px-8 sm:py-8 md:grid-cols-2 md:gap-12 lg:px-12">
        {/* Hero Portrait Section */}
        <section
          aria-labelledby="portrait-heading"
          className="relative order-1 flex items-center justify-center md:order-2"
        >
          <h2 id="portrait-heading" className="sr-only">
            Portrait of Md. Abdullah Az-Zahur
          </h2>

          {/* Decorative Rings */}
          <div
            aria-hidden="true"
            className="absolute aspect-square w-44 -rotate-12 rounded-full border border-cyan-300/25 sm:w-72 lg:w-96 light:border-sky-500/30"
          />
          <div
            aria-hidden="true"
            className="absolute aspect-square w-36 rotate-12 rounded-full border border-emerald-300/25 sm:w-60 lg:w-80 light:border-teal-500/30"
          />

          {/* Portrait Image */}
          <div className="relative z-10 w-44 sm:w-72 md:w-80 lg:w-104">
            <Image
              src="/assets/images/My half Photo.png"
              alt="Md. Abdullah Az-Zahur, Software Engineer"
              width={720}
              height={900}
              priority
              sizes="(max-width: 640px) 176px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 416px"
              className="h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating Status Badge */}
          <div className="absolute bottom-4 left-4 z-20 hidden rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 font-mono text-xs text-slate-200 backdrop-blur-md md:block light:border-slate-300 light:bg-white/85 light:text-slate-700">
            <span className="text-emerald-400 light:text-teal-700">status</span>{" "}
            = &quot;building useful things&quot;
          </div>
        </section>

        {/* Hero Text & CTA Section */}
        <section className="order-2 flex w-full flex-col justify-center space-y-3 sm:space-y-5 md:order-1 lg:space-y-6">
          <header className="space-y-1 sm:space-y-2">
            <p className="text-xs font-medium text-slate-200 sm:text-base lg:text-lg light:text-slate-800">
              Hi all. I am
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl light:text-slate-900">
              Md. Abdullah Az&#8209;Zahur
            </h1>
            <p className="sr-only">
              Md. Abdullah Az-Zahur is a software engineer, web developer, and
              AI and machine learning researcher who builds reliable digital
              products with modern technologies.
            </p>

            {/* Animated Role Subtitle */}
            <div className="flex items-center pt-0.5 text-sm font-medium text-indigo-400 sm:pt-1 sm:text-lg lg:text-xl light:text-indigo-600">
              <IoIosArrowForward
                className="mr-1.5 shrink-0"
                aria-hidden="true"
              />
              <TypingAnimation texts={DEVELOPER_ROLES} />
            </div>
          </header>

          {/* Code-style Bio & GitHub Link */}
          <div className="space-y-1.5 pt-1 sm:space-y-2 sm:pt-2">
            <p className="hidden items-center font-mono text-xs text-slate-400 md:flex lg:text-sm light:text-slate-500">
              <TbSlashes className="mr-2 shrink-0" aria-hidden="true" />
              find my source code and projects on GitHub
            </p>

            <div className="font-mono text-xs sm:text-sm">
              <span className="text-indigo-400 light:text-indigo-600">
                const
              </span>{" "}
              <span className="text-emerald-400 light:text-teal-700">
                githubLink
              </span>{" "}
              ={" "}
              <Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-rose-300 underline underline-offset-4 transition-colors hover:text-rose-200 sm:break-normal light:text-rose-700 light:hover:text-rose-800"
              >
                &quot;{GITHUB_URL}&quot;
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 sm:py-2.5 sm:text-sm light:border-cyan-700/40 light:bg-cyan-700/10 light:text-cyan-800 light:hover:border-cyan-700 light:hover:bg-cyan-700/20"
            >
              Explore projects
              <FiArrowUpRight aria-hidden="true" />
            </Link>

            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/60 hover:text-white sm:py-2.5 sm:text-sm light:border-slate-300 light:text-slate-700 light:hover:border-cyan-700 light:hover:text-cyan-800"
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
