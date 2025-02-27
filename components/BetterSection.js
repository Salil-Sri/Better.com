
"use client";
import Image from "next/image";
import { use, useState } from "react";

const BetterSection = () => {
  const[image,setimage] = useState("/fonts/image.png")
  return (
    <section className="mt-[100px] mx-5 px-4 flex flex-col lg:flex-row justify-between items-center">
      
      <div className="flex flex-col lg:w-1/2 w-full items-center lg:items-start">
        <Image
          alt="Better Mortgage"
          width={410}
          height={710}
          src= {image}
          priority
          className="rounded-2xl w-full max-w-[410px] h-auto"
        />

        
        <div className="flex py-6 gap-2 font-bold text-center">
          <button className="w-24 sm:w-28 bg-white py-2 rounded-3xl border-4 hover:border-[#017848]"
          onClick={()=>setimage("/fonts/image.png")}
         >
            Arian
          </button>
          <button className="w-24 sm:w-28 bg-white py-2 rounded-3xl border-4 hover:border-[#017848]"
          onClick={()=>setimage("/fonts/image2.webp")}>
            Amanda
          </button>
          <button className="w-24 sm:w-28 bg-white py-2 rounded-3xl border-4 hover:border-[#017848]"
          onClick={()=>setimage("/fonts/image3.webp")}>
            Paul
          </button>
        </div>
      </div>

      
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start bg-white w-full lg:w-1/2 px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold leading-tight">
          Find out why
          <br />
          we’re better.
        </h1>
        <button className="px-6 sm:px-10 lg:px-[100px] py-3 sm:py-4 lg:py-5 bg-[#004733] text-white font-bold rounded-[100px] hover:bg-[#017848] transition mt-6">
          See all our Stories
        </button>
      </div>
    </section>
  );
};

export default BetterSection;
