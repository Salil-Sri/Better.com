"use client";
import Link from "next/link";
import Image  from "next/image";

const HeroSection = () => {
  return (
    <div className=" max-w-screen-2xl overflow-hidden px-6 md:px-10 lg:px-14 bg-[#004733] ">
     <h1 className="font-extrabold  z-10 w-auto text-center 
  text-[40px] md:text-[32px] lg:text-[118px] 
  lg:relative   lg:top-32 
    lg:leading-[1.1] 
  text-[#1EE07F]  lg:mb-7">
  Mortgages <br /> made simple
</h1>



      <div className="relative flex flex-col items-center justify-center md:flex-row mt-10 ">
       
        <div className="w-80 md:w-auto ">
          <Link
            href="/start"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full  font-bold leading-normal transition-all ease-in-out duration-200 bg-[#1EE07F] text-[#004733]  h-16 px-12 py-5 mt-lg w-full md:mt-none md:w-fit hover:bg-[#004733] hover:text-white"
          >
            Start my approval
          </Link>

         
          <div className="mt-3 flex items-center justify-center gap-1 text-sm text-accentSecondary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 6H8.5V10.5H7.5V6ZM6.5 1.5H9.5V2.5H6.5V1.5Z"
                
              ></path>
              <path
               
                d="M13.9987 5.00055L13.2887 4.29555L12.1637 5.42055C11.2429 4.35706 9.94762 3.68926 8.54717 3.5559C7.14671 3.42254 5.74872 3.83386 4.64365 4.70442C3.53857 5.57497 2.81139 6.83782 2.61318 8.23057C2.41497 9.62333 2.76098 11.0389 3.57931 12.1832C4.39765 13.3275 5.62539 14.1125 7.00745 14.3751C8.3895 14.6377 9.81961 14.3578 11.0006 13.5934C12.1817 12.8291 13.0228 11.6391 13.3493 10.2707C13.6758 8.90233 13.4625 7.46077 12.7537 6.24554L13.9987 5.00055ZM7.99875 13.5005C7.10873 13.5005 6.2387 13.2366 5.49868 12.7422C4.75866 12.2477 4.18189 11.5449 3.84129 10.7226C3.5007 9.90035 3.41158 8.99555 3.58522 8.12264C3.75885 7.24972 4.18743 6.4479 4.81677 5.81856C5.44611 5.18923 6.24793 4.76064 7.12084 4.58701C7.99376 4.41338 8.89856 4.50249 9.72082 4.84309C10.5431 5.18368 11.2459 5.76046 11.7404 6.50048C12.2348 7.2405 12.4987 8.11053 12.4987 9.00055C12.4987 10.194 12.0246 11.3386 11.1807 12.1825C10.3368 13.0264 9.19222 13.5005 7.99875 13.5005Z"
              ></path>
            </svg>
            <span className="mr-1 text-white">3 min</span>
            <span className="text-white">| No credit impact</span>
          </div>
        </div>

      
        <div className="mt-5 md:mb-[-36px] md:mt-0 z-0">
          <Image
            alt="Better Mortgage"
            width={510}
            height={810}
            src="/fonts/hello.png"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
