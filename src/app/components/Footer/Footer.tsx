import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 border border-gray-500 h-12 w-full ">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center">
          <h2 className="p-3">find me in:</h2>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/md-abdullah-az-zahur/"
            className="p-[15px]  border-l border-gray-500  "
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            href="href='https://www.facebook.com/abdullahaazzahur.giyas'"
            className="p-[15px]  border-x border-gray-500"
          >
            <FaFacebookF />
          </Link>
        </div>
        <Link
          target="_blank"
          href="https://github.com/Abdullah-Az-Zahur"
          className="flex items-center"
        >
          <h2 className=" p-3 border-l border-gray-500 text-sm ">
            @Abdullah-Az-Zahur
          </h2>
          <div className="pr-3 ">
            <FaGithub />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
