import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

          <span className="text-xl font-mono transition-all ease-in-out hover:animate-ping font-bold ml-[10px] hidden md:block text-gray-300">
            Bhavya Wade
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {/* 
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}         
                     */}
          <a href="https://github.com/bhavya681" className="cursor-pointer">
            <RxGithubLogo className="text-white w-[36px] h-[24px] cursor-pointer" />
          </a>
          {/* <a href="https://instagram.com" className="cursor-pointer">
            <FaInstagram className="text-pink-300 w-[36px] h-[24px] cursor-pointer" />
          </a> */}
          <a href="https://www.linkedin.com/in/bhavya-wade-212874268/" className="cursor-pointer">
            <CiLinkedin className="text-blue-500 w-[36px] h-[26px] cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
