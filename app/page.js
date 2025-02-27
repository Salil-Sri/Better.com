"use client";

import BetterSection from "@/components/BetterSection";
import FAQSection from "@/components/FAQSection";

import Footerone from "@/components/Footerone";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <>
     <div className="flex flex-col ">
     <Navbar/>
     <HeroSection/>
     <BetterSection/>
     <FAQSection/>
     <div className="h-0.5 mb-9 w-full bg-gray-300"></div>
     <Footerone/>
     
     </div>
    </>
  );
}