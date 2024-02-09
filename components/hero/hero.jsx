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
            <h1 className="text-jacarta-700 font-bold font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl">
              Now Trade,{" "}
              <span className="animate-gradient">
                <a href="https://swap.crodex.app/#/swap?outputCurrency=0xe7f3c7c6611357313b5c2734341fe9cbad1d9f59"> Sycotic Society, </a>
              </span>
              {" "}
              <span className="animate-gradient">
                <a href="https://swap.crodex.app/#/swap?outputCurrency=0x4E2E7700C8f8A414b4AF8828f54330a304B6625d"> Free Coin, </a>
              </span>
              and
                <span className="animate-gradient">
                <a href="https://swap.crodex.app/#/swap?outputCurrency=0x3E68eA1588E32e51D98dBda6Ea05128513ECC713"> BrokeASF </a>
              </span>
For only three percent!

            </h1>

            <p className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
             
            </p>
           
<div className="flex space-x-4">
  <Link href="https://swap.crodex.app/#/swap?outputCurrency=0x4E2E7700C8f8A414b4AF8828f54330a304B6625d">
    <a className="text-white w-fit-content">
      <img src="freeCoinTokenSwap.png" alt="Free Coin Image" width="75%" height="75%" />
      <p className="font-semibold hover:text-white">Free Coin 🪙</p>
    </a>
  </Link>
  <Link href="https://swap.crodex.app/#/swap?outputCurrency=0xe7f3c7c6611357313b5c2734341fe9cbad1d9f59">
    <a className="text-white">
      <img src="/images/sycoticTokenSwap.png" alt="Sycotic Society Image" width="75%" height="75%" />
      <p className="font-semibold hover:text-white">Sycotic Society 💢</p>
    </a>
  </Link>
  <Link href="https://swap.crodex.app/#/swap?outputCurrency=0x3E68eA1588E32e51D98dBda6Ea05128513ECC713">
    <a className="text-white">
      <img src="/images/brokeAsfTokenSwap.png" alt="Broke ASF Image" width="75%" height="75%" />
      <p className="font-semibold hover:text-white">Broke ASF ...🐒</p>
    </a>
  </Link>
</div>




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
