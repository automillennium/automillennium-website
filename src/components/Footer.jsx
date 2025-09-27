"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      animation.to(
        ".animated-block",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          duration: 1,
          ease: "power4.out",
          stagger: 0.5,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="w-screen bg-black text-white" ref={containerRef}>
      <div className="w-full bg-black py-16 px-8 border-t border-gray-200">
        <h2 className="prompto text-2xl md:text-3xl text-center font-bold italic mb-10 animated-block opacity-0 translate-y-8">
          5 GLOBAL FACTORY LOCATIONS
        </h2>

        <div className="flex flex-col-reverse md:flex-row justify-center gap-10 h-[250px]">
          <div className="flex flex-1 flex-col justify-center items-start gap-3 pl-0 md:pl-40">
            <h3 className="prompto text-5xl md:text-6xl italic font-bold outline-text mb-2 animated-block opacity-0 translate-y-8">
              UAE
            </h3>
            <h3 className="prompto text-5xl md:text-6xl italic font-bold outline-text mb-2 animated-block opacity-0 translate-y-8">
              INDIA
            </h3>
            <h3 className="prompto text-5xl md:text-6xl italic font-bold outline-text mb-2 animated-block opacity-0 translate-y-8">
              SAUDI
            </h3>
          </div>

          <div className="flex-2 flex justify-center items-center animated-block opacity-0 translate-y-8">
            <img
              src="/img/map-w.png"
              alt="Map image"
              className="object-contain w-[800px] h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Automillennium group. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div> */}
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/automillennium/automillennium-website.git
git push -u origin main

    </footer>
  );
};

export default Footer;
