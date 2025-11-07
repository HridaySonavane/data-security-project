import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroHeaderSection = () => {
  return (
    <section className="w-full h-screen border border-white bg-background-dark text-white flex items-center justify-center px-16 py-16">
      <div className="w-full h-full overflow-hidden flex flex-col items-center justify-center gap-8 relative">
        <Image
          src={"/background-6.jpg"}
          alt="pic"
          width={1000}
          height={1000}
          className="object-cover rounded-sm w-full h-full"
        />
        <div className="absolute w-full h-full bg-black/50" />
        <div className="absolute flex flex-col gap-4 items-center w-4/5">
          <h1 className="font-display text-8xl text-center">
            Digital Signature verification made simpler
          </h1>
          <p className="font-sans font-semibold text-base text-center px-56">
            Sign files using your private key and verify them with a public key.
            Ensure document authenticity and integrity wiht a single click
          </p>
          <div className="w-full flex items-center justify-center gap-4">
            <Link href={"/dashboard"}>
              <Button variant={"secondary"}>Get Started</Button>
            </Link>
            <Button className="bg-white/10 backdrop-blur-xl">Learn more</Button>
          </div>
        </div>
      </div>
      {/* <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"> */}
    </section>
  );
};

export default HeroHeaderSection;
