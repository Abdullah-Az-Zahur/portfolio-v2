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
  openGraph: {
    title: "Md. Abdullah Az-Zahur | Home",
    description:
      "Visit Md. Abdullah Az-Zahur's home page to view his portfolio, role summary, and software engineer profile.",
    url: "https://abdullahzahur.vercel.app/",
    siteName: "Md. Abdullah Az-Zahur Portfolio",
    type: "website",
    images: ["/assets/images/My%20half%20Photo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Abdullah Az-Zahur | Home",
    description:
      "Visit the home page of Md. Abdullah Az-Zahur's portfolio and see his software engineer profile.",
    images: ["/assets/images/My%20half%20Photo.png"],
  },
};

const HomePage = () => {
  return (
    <div className="home-page relative min-h-[calc(100dvh-56px)] overflow-hidden md:min-h-[calc(100dvh-56px-48px)]">
      {/* Atmosphere layers */}
      <div
        className="home-atmosphere pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="home-atmosphere home-atmosphere-mobile pointer-events-none absolute inset-x-0 bottom-0 h-[42%] md:hidden"
        aria-hidden
      />
      <HomeBackgroundBlobs />

      {/* Content */}
      <div className="relative z-10 grid min-h-full place-items-center gap-4 px-5 py-8 md:grid-cols-2 md:items-center md:px-12 md:py-4">
        <div className="order-2 w-full max-w-2xl md:order-1">
          <div className="mt-10 space-y-3 md:mt-0 md:space-y-5">
            <h4 className="home-title text-xl">Hi all. I am</h4>
            <h2 className="home-title home-title-main text-3xl font-bold md:text-5xl lg:text-7xl">
              Md. Abdullah Az&#8209;Zahur
            </h2>
            <h4 className="home-role flex items-center text-center">
              <IoIosArrowForward className="mr-2 font-bold" />
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
            </h4>
          </div>

          <div className="home-hint hidden md:block">
            <p className="flex items-center">
              <TbSlashes className="mr-2" /> complete the game to continue
            </p>
            <p className="flex items-center">
              <TbSlashes className="mr-2" /> you can also see it on my Github
              page
            </p>
          </div>

          <div className="my-2">
            <span className="home-keyword">const</span>{" "}
            <span className="home-variable">githubLink</span> =
            <Link
              href="https://github.com/Abdullah-Az-Zahur"
              className="home-link ml-1 underline"
            >
              &quot;https://github.com/Abdullah-Az-Zahur&quot;
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/project"
              className="home-cta-primary inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition"
            >
              Explore projects <FiArrowUpRight />
            </Link>
            <Link
              href="https://github.com/Abdullah-Az-Zahur"
              target="_blank"
              className="home-cta-secondary inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition"
            >
              <FiGithub /> GitHub
            </Link>
          </div>
        </div>

        <div className="home-portrait-wrap order-1 relative flex min-h-[290px] w-full items-center justify-center md:order-2 md:min-h-[calc(100dvh-9rem)]">
          <div className="home-portrait-halo absolute h-[min(70vw,34rem)] w-[min(70vw,34rem)] rounded-full" />
          <div className="home-portrait-guide absolute h-[min(66vw,32rem)] w-[min(66vw,32rem)] rounded-full border" />
          <div className="home-portrait-guide home-portrait-guide-offset absolute h-[min(54vw,26rem)] w-[min(54vw,26rem)] rounded-full border" />
          <Image
            src="/assets/images/My half Photo.png"
            alt="Md. Abdullah Az-Zahur, Software Engineer"
            width={720}
            height={900}
            priority
            className="home-portrait relative z-10 h-[min(78vw,34rem)] w-auto object-contain drop-shadow-[0_28px_35px_rgba(0,0,0,0.35)] md:h-[min(76vh,40rem)]"
          />
          <div className="home-status-badge absolute bottom-[12%] left-[8%] z-20 hidden rounded-lg border px-3 py-2 text-xs backdrop-blur md:block">
            <span className="home-variable">status</span> = building useful
            things
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
