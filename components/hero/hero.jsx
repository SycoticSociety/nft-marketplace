import React from "react";
import Link from "next/link";

const hero = () => {
  const handleImageClick = () => {
    // Your click event logic goes here
    // For example, you can display an alert when the image is clicked
    alert('Image clicked!');
  };

  return (
    <section className="relative pb-10 pt-20 md:pt-32 h-1527">
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full">
        <img
          src="/images/gradient.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full"
        />
      </picture>

      <div className="container h-full mx-auto">
        <div className="grid h-full items-center justify-center gap-4 md:grid-cols-12">
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="flex flex-col items-center justify-center h-full py-10 xl:py-20">
              <h1 className="text-jacarta-700 font-bold font-display mb-6 text-center text-4xl dark:text-white mb:text-center lg:text-5xl lg:text-5xl">
              {" "}
                <span className="animate-gradient">
                  <a href="https://swap.crodex.app/#/swap?outputCurrency=0xe7f3c7c6611357313b5c2734341fe9cbad1d9f59"> Sycotic Society Cronos </a>
                </span>
                {" "}
            
              </h1>

              <p className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
                {/* Additional text content if needed */}
              </p>

              <div className="flex space-x-4">
               
                <Link href="https://swap.crodex.app/#/swap?outputCurrency=0xe7f3c7c6611357313b5c2734341fe9cbad1d9f59">
                  <a className="text-white">
                    <img src="/images/sycoticTokenSwap.png" alt="Sycotic Society Image" width="325px" height="325px" />
                    <p className="font-semibold hover:text-white"></p>
                  </a>
                </Link>
               
              </div>
            </div>
          </div>

         {/* Hero images */}
          <div className="col-span-12 md:col-span-6 xl:col-span-8 relative">
            <div className="text-center md:pl-8 md:text-right">
              {/* Base image */}
              <a href="https://sycotic-comicshop.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/hero/hero.jpg"
                  alt="Hero Image"
                  className="hero-img mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem]"
                  style={{ zIndex: 1 }} // Set a higher z-index for the base image
                />
              </a>
              {/* 3D Hero element */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default hero;
