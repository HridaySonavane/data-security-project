"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "./animate-ui/icons/chevron-down";
import { Button } from "./ui/button";
import Card from "./Card";

const Navbar = () => {
  const subNavItems = [
    { title: "Sign in", description: "Access your account", icon: "icon" },
    { title: "Get Started", description: "Access your account", icon: "icon" },
    { title: "Explore", description: "Access your account", icon: "icon" },
    { title: "Learn more", description: "Access your account", icon: "icon" },
  ];

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav className="bg-background-light h-14 w-full flex items-center justify-between px-12 gap-5 font-sans font-semibold text-gray-200 ">
        <div className="h-full w-auto flex items-center">
          <Image
            src={"Zen Logo.svg"}
            alt="logo"
            width={32}
            height={32}
            className="object-contain"
          />

          <div className="flex items-center gap-6 ml-8 text-xs">
            <Link href="/">Home</Link>
            <Link href="/features">About</Link>
            <Link href="/about">Contact</Link>
            <button>
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setClicked(!clicked)}
              >
                more
                <ChevronDown animateOnHover size={18} />
              </p>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Button className="text-xs font-sans font-bold px-3 py-2 h-fit bg-primary/60">
            Login
          </Button>
          <Button
            className="text-xs font-sans font-bold px-3 py-2 h-fit bg-[#BFA98A]"
            variant={"secondary"}
          >
            Sign Up
          </Button>
        </div>
      </nav>

      {clicked && (
        <div className="absolute w-full h-fit px-12 py-6 bg-background-light text-gray-200 grid grid-cols-4 z-20">
          <div>
            {/* card heading */}
            <h3 className="font-extrabold text-sm">resources</h3>

            {/* card items */}
            {subNavItems.map(({ title, description, icon }) => (
              <Link
                key={title}
                href="/"
                className="flex items-center gap-2 my-4"
              >
                <span>{icon}</span>
                <div>
                  <h4 className="font-black text-sm font-sans">{title}</h4>
                  <p className="font-medium text-xs font-sans">{description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div>
            {/* card heading */}
            <h3 className="font-extrabold text-sm">page group two</h3>

            {/* card items */}
            {subNavItems.map(({ title, description, icon }) => (
              <Link
                key={title}
                href="/"
                className="flex items-center gap-2 my-4"
              >
                <span>{icon}</span>
                <div>
                  <h4 className="font-black text-sm font-sans">{title}</h4>
                  <p className="font-medium text-xs font-sans">{description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div>
            {/* card heading */}
            <h3 className="font-extrabold text-sm">additional links</h3>

            {/* card items */}
            {subNavItems.map(({ title, description, icon }) => (
              <Link
                key={title}
                href="/"
                className="flex items-center gap-2 my-4"
              >
                <span>{icon}</span>
                <div>
                  <h4 className="font-black text-sm font-sans">{title}</h4>
                  <p className="font-medium text-xs font-sans">{description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="h-full w-full">
            <div className="flex flex-col h-full gap-4 w-full justify-baseline bg-background-dark p-6 rounded-md">
              <h3 className="font-extrabold text-sm font-sans">
                latest from blog
              </h3>
              <Image
                src={"/subnav.jpg"}
                alt="pic"
                width={500}
                height={500}
                className="object-cover rounded-sm w-full h-32"
              />
              <div>
                <h4 className="font-black text-sm font-sans pb-3">
                  cryptography trends
                </h4>
                <p className="font-medium text-xs font-sans">
                  exploring modern digital signature technologies
                </p>
                <p className="text-xs mt-1">read more</p>
              </div>
              <Button variant={"link"} className="text-gray-200 mt-auto w-fit">
                See all articles...
              </Button>
            </div>
          </div>
          {/* <div className="w-full h-full">
        </div> */}
        </div>
      )}
    </>
  );
};

export default Navbar;
