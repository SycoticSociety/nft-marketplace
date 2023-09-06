import ArtsCarousel from "../carousel/artCarousel";
import Link from "next/link";
import Image from "next/image";

const Hero_2 = () => {
  return (
    <>
      {/* <!-- Hero --> */}

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
