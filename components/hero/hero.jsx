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
        <div className="grid h-full items-center gap-4 md:grid-cols-12">
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4">
            {/* Your content here */}
          </div>

          {/* Hero images */}
          <div className="col-span-6 xl:col-span-8">
            <div className="relative text-center md:pl-8 md:text-right">
              {/* Base image */}
              <img
                src="/images/hero/hero.jpg"
                alt=""
                className="hero-img mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
                onClick={handleImageClick}
              />
              {/* 3D Hero element */}
              <img
                src="/images/hero/3D_elements.png"
                alt=""
                className="animate-fly absolute top-0 md:-right-[10%]"
                onClick={handleImageClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
