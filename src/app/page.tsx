import green from "../../public/assets/images/home/Green.png";
import blue from "../../public/assets/images/home/Blue.png";
import Image from "next/image";
import "./styles/Home.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniSlash } from "react-icons/hi2";
import { TbSlashes } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center">
      {/* Green Image - Middle Top */}
      <div className="col-start-1 row-start-1 justify-self-center self-start">
        <Image
          src={green}
          alt="Green"
          width={600} // Default size
          height={600}
          className="w-[300px] md:w-[500px] lg:w-[600px] opacity-80" // Reduced transparency
        />
      </div>

      {/* Blue Image - Middle Right */}
      <div className="col-start-1 row-start-1 justify-self-end self-center">
        <Image
          src={blue}
          alt="Blue"
          width={600} // Default size
          height={600}
          className="w-[300px] md:w-[500px] lg:w-[600px] opacity-80" // Reduced transparency
        />
      </div>

      {/* Content */}
      <div className="col-start-1 row-start-1 grid md:grid-cols-2 md:gap-4 md:items-center">
        <div className="">
          <div>
            <h4 className="text-[#E5E9F0] text-sm">Hi all. I am</h4>
            <h2 className="text-[#E5E9F0] md:text-4xl">
              Md. Abdullah Az-Zahur
            </h2>
            <h4 className="text-[#4D5BCE] text-xl flex items-center text-center">
              {" "}
              <IoIosArrowForward className="font-bold mr-2" /> Web Developer
            </h4>
          </div>
          <div>
            <p className="flex items-center ">
              <TbSlashes className="mr-2" /> complete the game to continue
            </p>
            <p className="flex items-center ">
              <TbSlashes className="mr-2" /> you can also see it on my Github
              page
            </p>
            <p>
              <span className="text-[#4D5BCE]">const</span>{" "}
              <span className="text-[#43D9AD]">githubLink</span> = 
              <Link href='https://github.com/Abdullah-Az-Zahur/portfolio-v2' className="text-[#E99287] ml-1 underline  decoration-[0.5px]">“https://github.com/Abdullah-Az-Zahur/portfolio-v2”</Link>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
