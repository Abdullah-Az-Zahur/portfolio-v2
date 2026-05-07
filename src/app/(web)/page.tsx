import HomeBackgroundBlobs from "@/features/home/components/HomeBackgroundBlobs";
import TypingAnimation from "@/shared/ui/TypingAnimation/TypingAnimation";
import { Metadata } from "next";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { TbSlashes } from "react-icons/tb";

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
    <div className="relative min-h-[calc(100dvh-56px)] overflow-hidden bg-[#011627] md:min-h-[calc(100dvh-56px-48px)]">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(120% 85% at 20% 15%, rgba(67,217,173,0.16) 0%, rgba(67,217,173,0) 62%), radial-gradient(110% 80% at 80% 35%, rgba(77,91,206,0.2) 0%, rgba(77,91,206,0) 66%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] md:hidden"
        aria-hidden
        style={{
          background:
            "radial-gradient(75% 100% at 50% 100%, rgba(67,217,173,0.12) 0%, rgba(77,91,206,0.1) 34%, rgba(1,22,39,0) 72%)",
        }}
      />
      <HomeBackgroundBlobs />

      {/* Content */}
      <div className="relative z-10 grid h-full place-items-center md:grid-cols-2 md:gap-4 md:items-center">
        <div className="p-5">
          <div className="mt-10 md:mt-0 md:space-y-5 space-y-3">
            <h4 className="text-[#E5E9F0] text-xl">Hi all. I am</h4>
            <h2 className="text-[#E5E9F0] font-bold lg:7xl md:text-5xl text-3xl">
              Md. Abdullah Az&#8209;Zahur
            </h2>
            <h4 className="text-[#4D5BCE]  flex items-center text-center">
              <IoIosArrowForward className="font-bold mr-2" />
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

          <div className="hidden md:block">
            <p className="flex items-center">
              <TbSlashes className="mr-2" /> complete the game to continue
            </p>
            <p className="flex items-center">
              <TbSlashes className="mr-2" /> you can also see it on my Github
              page
            </p>
          </div>
          <div className="my-2">
            <span className="text-[#4D5BCE]">const</span>{" "}
            <span className="text-[#43D9AD]">githubLink</span> =
            <Link
              href="https://github.com/Abdullah-Az-Zahur"
              className="text-[#E99287] ml-1 underline"
            >
              &quot;https://github.com/Abdullah-Az-Zahur&quot;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
