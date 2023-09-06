import ArtsCarousel from "../carousel/artCarousel";
import Link from "next/link";
import Image from "next/image";

const Hero_2 = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero relative py-20 md:pt-32">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <figure className="h-[630px] w-full">
            <Image src="/images/gradient.jpg" alt="gradient" layout="fill" />
          </figure>
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <figure className="h-[630px] w-full">
            <Image
              src="/images/gradient_dark.jpg"
              alt="gradient dark"
              layout="fill"
            />
          </figure>
        </picture>

        <div className="container">
          <div className="py-24 text-center">
            <h1 className="text-jacarta-700 font-display mb-6 text-5xl dark:text-white lg:text-6xl xl:text-7xl">
             
            </h1>
            <p className="dark:text-jacarta-200 mb-8 text-lg">
             
            </p>
            <div className="inline-flex space-x-4">
            
            
            </div>
          </div>

          <div className="relative">
            {/* <!-- Slider --> */}
            <ArtsCarousel />
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_2;
