import HomeBackgroundBlobs from "@/features/home/components/HomeBackgroundBlobs";
import TypingAnimation from "@/shared/ui/TypingAnimation/TypingAnimation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { TbSlashes } from "react-icons/tb";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Md. Abdullah Az-Zahur's home page. Discover a software engineer's Next.js portfolio showcasing MERN stack projects, front-end development skills, and contact information.",
  keywords: [
    "Md. Abdullah Az-Zahur",
    "Home",
    "Portfolio",
    "Portfolio Home",
    "Software Engineer",
    "Software Engineering",
    "MERN Stack Developer",
    "Front-End Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Web Developer Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
};

const HomePage = () => {
  return (
    <div className="relative flex min-h-svh w-full flex-col justify-between overflow-hidden bg-[#011627] text-[#607b96] transition-colors duration-200 light:bg-[#eef3f8] light:text-[#314158]">
      {/* Atmosphere layers (Gradient Backgrounds) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_85%_at_20%_15%,rgba(67,217,173,0.16)_0%,transparent_62%),radial-gradient(110%_80%_at_80%_35%,rgba(77,91,206,0.2)_0%,transparent_66%)] light:opacity-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[radial-gradient(75%_100%_at_50%_100%,rgba(67,217,173,0.12)_0%,rgba(77,91,206,0.1)_34%,transparent_72%)] light:opacity-0 md:hidden"
        aria-hidden="true"
      />
      <HomeBackgroundBlobs />

      {/* Main Hero Content */}
      <div className="relative z-10 grid h-full w-full flex-1 items-center gap-4 px-4 py-4 sm:px-8 md:grid-cols-2 md:gap-6 md:px-12 md:py-6">
        {/* Portrait Section (Dynamic Responsive Rings & Image) */}
        <section
          aria-labelledby="portrait-heading"
          className="relative order-1 flex w-full flex-[1.4] min-h-0 items-center justify-center overflow-visible py-2 md:order-2 md:h-full md:py-0"
        >
          {/* Halo Aura */}
          <div
            className="absolute h-[clamp(16rem,70vw,34rem)] w-[clamp(16rem,70vw,34rem)] animate-pulse rounded-full bg-[radial-gradient(circle,rgba(67,217,173,0.25),rgba(77,91,206,0.15)_42%,transparent_72%)] blur-xl light:bg-[radial-gradient(circle,rgba(91,143,196,0.2),rgba(67,160,145,0.12)_45%,transparent_72%)]"
            aria-hidden="true"
          />

          {/* Portrait Guide Rings */}
          <div
            className="absolute h-[clamp(15rem,66vw,32rem)] w-[clamp(15rem,66vw,32rem)] max-h-92 max-w-92 -rotate-18 rounded-full border border-[rgba(103,232,249,0.22)] light:border-[rgba(91,143,196,0.28)] md:max-h-none md:max-w-none"
            aria-hidden="true"
          />
          <div
            className="absolute h-[clamp(12rem,54vw,26rem)] w-[clamp(12rem,54vw,26rem)] max-h-72 max-w-72 rotate-28 rounded-full border border-[rgba(110,231,183,0.22)] light:border-[rgba(67,160,145,0.22)] md:max-h-none md:max-w-none"
            aria-hidden="true"
          />

          {/* Dynamic Scaling Image */}
          <Image
            src="/assets/images/My half Photo.png"
            alt="Md. Abdullah Az-Zahur, Software Engineer"
            width={720}
            height={900}
            priority
            className="relative z-10 h-auto max-h-[clamp(280px,50vh,640px)] w-[clamp(240px,75vw,480px)] object-contain drop-shadow-[0_28px_35px_rgba(0,0,0,0.35)] sm:w-auto md:max-h-none"
          />
          <span id="portrait-heading" className="sr-only">
            Portrait of Md. Abdullah Az-Zahur
          </span>

          <div className="absolute bottom-[8%] left-[5%] z-20 hidden rounded-lg border border-(--app-border-color) bg-[rgba(6,17,31,0.75)] px-3 py-2 text-xs text-[#cbd5e1] backdrop-blur light:border-[#7a8fa5] light:bg-[rgba(248,251,254,0.85)] light:text-[#314158] md:block">
            <span className="text-[#43d9ad] light:text-[#087f67]">status</span>{" "}
            = building useful things
          </div>
        </section>

        {/* Text Content Area */}
        <div className="order-2 flex w-full max-w-2xl flex-col justify-end space-y-2 shrink-0 pt-0 sm:space-y-4 md:order-1 md:justify-center">
          <div className="space-y-1 sm:space-y-2">
            <span className="block text-xs text-[#e5e9f0] light:text-[#172337] sm:text-lg lg:text-xl">
              Hi all. I am
            </span>
            <h1 className="text-xl font-bold text-[#e5e9f0] light:text-[#172337] sm:text-3xl md:text-5xl lg:text-7xl leading-tight">
              Md. Abdullah Az&#8209;Zahur
            </h1>
            <p className="sr-only">
              Md. Abdullah Az-Zahur is a software engineer, web developer, and
              AI and machine learning researcher who builds reliable digital
              products with modern technologies.
            </p>
            <div className="flex items-center text-xs text-[#4d5bce] light:text-[#3b4fbb] sm:text-base md:text-lg">
              <IoIosArrowForward
                className="mr-1 font-bold sm:mr-2"
                aria-hidden="true"
              />
              <TypingAnimation
                texts={[
                  { text: "Software Engineer" },
                  { text: "Front-End Developer" },
                  { text: "Back-End Developer" },
                  { text: "MERN Stack Developer" },
                  { text: "Full-Stack Developer" },
                  { text: "JavaScript Developer" },
                  { text: "React.js Developer" },
                  { text: "Node.js Developer" },
                ]}
              />
            </div>
          </div>

          <div className="hidden text-sm text-[#607b96] light:text-[#52657d] md:block space-y-1">
            <p className="flex items-center">
              <TbSlashes className="mr-2" aria-hidden="true" /> complete the
              game to continue
            </p>
            <p className="flex items-center">
              <TbSlashes className="mr-2" aria-hidden="true" /> you can also see
              it on my Github page
            </p>
          </div>

          <div className="font-mono text-[11px] sm:text-sm">
            <span className="text-[#4d5bce] light:text-[#3b4fbb]">const</span>{" "}
            <span className="text-[#43d9ad] light:text-[#087f67]">
              githubLink
            </span>{" "}
            ={" "}
            <Link
              href="https://github.com/Abdullah-Az-Zahur"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-[#e99287] underline light:text-[#b4534d] break-all sm:break-normal"
            >
              &quot;https://github.com/Abdullah-Az-Zahur&quot;
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 sm:gap-3">
            <Link
              href="/project"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[rgba(34,211,238,0.4)] bg-[rgba(34,211,238,0.1)] px-3.5 py-2 text-xs font-medium text-[#a5f3fc] transition hover:border-[#67e8f9] hover:bg-[rgba(34,211,238,0.2)] light:border-[rgba(14,116,144,0.45)] light:bg-[rgba(14,116,144,0.08)] light:text-[#0e7490] light:hover:border-[#0e7490] light:hover:bg-[rgba(14,116,144,0.16)] light:hover:text-[#075985] sm:px-4 sm:py-2.5 sm:text-sm"
            >
              Explore projects <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link
              href="https://github.com/Abdullah-Az-Zahur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-(--app-border-color) px-3.5 py-2 text-xs font-medium text-[#cbd5e1] transition hover:border-[rgba(103,232,249,0.6)] hover:text-white light:border-[#7a8fa5] light:text-[#314158] light:hover:border-[#0e7490] light:hover:text-[#0e7490] sm:px-4 sm:py-2.5 sm:text-sm"
            >
              <FiGithub aria-hidden="true" /> GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
