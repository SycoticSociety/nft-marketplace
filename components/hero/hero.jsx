import Link from "next/link";

const hero = () => {
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
              Welcome to {"  "}
             <span className="animate-gradient">Sycotic Society</span>
            </h1>
            <p className="dark:text-jacarta-200 mb-8 text-center text-lg md:text-left">
              Digital marketplace for crypto collectibles and
              non-fungible tokens.
            </p>
            <div className="flex space-x-4">
              <Link href="https://swap.crodex.app/#/swap?outputCurrency=0xe7f3c7c6611357313b5c2734341fe9cbad1d9f59">
                <a className="bg-accent shadow-accent-volume hover:bg-accent-dark w-fit-content rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                Swap Sycotic Now!
                </a>
              </Link>
              <Link href="/marketplace">
                <a className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-fit-content rounded-full bg-orange py-3 px-8 text-center font-semibold transition-all hover:text-white">
                  Explore our NFTS
                </a>
              </Link>
              <Link href=" ">
                <a className="text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-fit-content rounded-full bg-blue py-3 px-8 text-center font-semibold transition-all hover:text-white">
                 Digital Utility Factory!
                </a>
              </Link>
            </div>
          </div>

          {/* <!-- Hero image --> */}
          <div className="col-span-6 xl:col-span-8">
            <div className="relative text-center md:pl-8 md:text-right">
              <img
                src="/images/hero/hero.jpg"
                alt=""
                className="hero-img mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
              />
              <img
                src="/images/hero/3D_elements.png"
                alt=""
                className="animate-fly absolute top-0 md:-right-[10%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
