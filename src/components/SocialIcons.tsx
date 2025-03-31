"use client";
import React from "react";
import Link from "next/link";
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
        <a href="mailto:darrenteo77@gmail.com">
          <DotLottieReact
            src="/lotties/Email.lottie"
            loop
            autoplay
            className="w-20"
          />
        </a>
      </div>
      <div className="flex gap-14 pl-6">
        <p className="pl-3">Github</p>
        <p>LinkedIn</p>
        <p className="pl-1">Email</p>
      </div>
    </div>
  );
}

export default SocialIcons;
