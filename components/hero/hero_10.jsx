const Hero_10 = () => {
  const heroContent = {
    meta: "",
    title: "Sycotic Society Token on CRONOS.",
    descriptions: `We are setting the standard in Defi, through trasparency and accountablity.`,
    btnText: "Buy Sycotic Society",
  };

  return (
    <section className="relative py-20 lg:pt-48">
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
        <img src="/images/gradient.jpg" alt="gradient" />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
        <img src="/images/gradient_dark.jpg" alt="gradient dark" />
      </picture>

      <div className="container">
        <div className="h-full items-center gap-4 lg:grid lg:grid-cols-12">
          <div className="flex h-full flex-col items-center justify-center py-10 lg:col-span-5 lg:items-start lg:py-20">
            <div className="mb-8 flex items-center space-x-3 rounded-3xl border border-jacarta-200 px-5 py-2 dark:border-jacarta-300">
              <img
                src=""
                alt="cryto app"
                width="20"
                height="20"
              />
              <span className="text-xs font-bold uppercase tracking-wide text-jacarta-500 dark:text-jacarta-100">
                {heroContent.meta}
              </span>
            </div>
            <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white lg:text-left lg:text-6xl">
              {heroContent.title}
            </h1>
            <p className="mb-8 max-w-md text-center text-lg dark:text-jacarta-200 lg:text-left">
              {heroContent.descriptions}
            </p>
            <a
              href="https://swap.crodex.app/#/swap?outputCurrency=0xe7f3c7c6611357313b5c2734341fe9cbad1d9f59"
              className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              {heroContent.btnText}
            </a>
          </div>
          {/* End flex-col */}

          {/* <!-- Hero image --> */}
          <div className="col-span-7">
            <div className="relative text-center">
              <img
                src="/images/hero/hero_crypto_app.png"
                alt="hero"
                className="inline-block"
              />
              <div className="absolute top-0 -z-10 animate-fly">
                <img
                  src="/images/crypto-app/3d_elements_crypto_app.png"
                  alt=""
                  className="dark:hidden"
                />
                <img
                  src="/images/crypto-app/3d_elements_crypto_app_dark.png"
                  alt=""
                  className="hidden dark:block"
                />
               
                    
                <iframe height="100%" width="100%" id="geckoterminal-embed" title="GeckoTerminal Embed" src="https://www.geckoterminal.com/cro/pools/0x172ef983f851bcdbf2a26a14756955a9c5954b7d?embed=1&info=1&swaps=0" frameborder="0" allow="clipboard-write" allowfullscreen></iframe>
                    
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_10;
