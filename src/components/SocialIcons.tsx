"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function SocialIcons() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <Link href="https://github.com/darHH">
          <DotLottieReact
            src="/lotties/Github.lottie"
            loop
            autoplay
            className="w-32"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/darhh/">
          <DotLottieReact
            src="/lotties/LinkedIn.lottie"
            loop
            autoplay
            className="w-24 mr-6"
          />
        </Link>
        <Link href="https://www.darplants.com/">
          <Image
            src="/darplants_logo.jpg"
            alt="Darplants Logo"
            width="36"
            height="36"
            className="ml-10"          
          />
        </Link>
      </div>
      <div className="flex gap-10 pl-6">
        <p className="pl-2">Github</p>
        <p>LinkedIn</p>
        <p className="pl-2">Darplants</p>
      </div>
    </div>
  );
}

export default SocialIcons;
