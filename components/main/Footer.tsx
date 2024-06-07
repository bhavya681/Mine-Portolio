import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { CiTwitter } from "react-icons/ci";

import { FaInstagram } from "react-icons/fa";

import { CiLinkedin } from "react-icons/ci";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col cursor-pointer items-center justify-start">
            <div className="font-bold text-[16px] cursor-pointer">Community</div>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://youtube.com" className="cursor-pointer">
                <FaYoutube />
              </a>
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p> */}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a className="cursor-pointer" href="https://github.com/bhavya681">
                <RxGithubLogo />
              </a>
              <span className="text-[15px] ml-[6px] cursor-pointer">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a className="cursor-pointer" href="https://discord.com">
                <RxDiscordLogo />
              </a>
              <span className="text-[15px] ml-[6px] cursor-pointer">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col cursor-pointer items-center justify-start">
            <div className="font-bold text-[16px] cursor-pointer">Social Media</div>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="https://instagram.com">
                <FaInstagram />
              </a>
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p> */}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a className="cursor-pointer" href="https://twitter.com">
                <CiTwitter />
              </a>
              <span className="text-[15px] ml-[6px] cursor-pointer">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a className="cursor-pointer" href="https://www.linkedin.com/in/bhavya-wade-212874268/">
                <CiLinkedin />
              </a>
              <span className="text-[15px] ml-[6px] cursor-pointer">Linkedin</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About Me</div>
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p> */}
            {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p> */}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a className="cursor-pointer" href="mailto:bhavyawade2@gmail.com">
                <span className="text-[15px] ml-[6px] cursor-pointer">
                  bhavyawade2@gmail.com
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Bhavya Wade 2023. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
