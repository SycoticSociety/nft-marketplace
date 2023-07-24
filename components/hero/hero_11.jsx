const hero_11 = () => {
  const heroContent = {
    subTitle: " ",
    title: (
      <>
        The Blockchain, Simplified!
        <br />
        <span className="animate-gradient">Sycotic 💢 Society</span>
      
      </>
    ),
    btnText: "Sycotic Society Cronos",
    heroImg: "/images/hero/hero_crypto_trading.png",
    link: "https://swap.crodex.app/#/swap?outputCurrency=0xe7f3c7c6611357313b5c2734341fe9cbad1d9f59",
  };
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero relative pt-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient.jpg"
            alt="gradient"
            className="h-[150%] w-full object-cover"
          />
        </picture>
        <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
          <img
            src="/images/gradient_dark.jpg"
            alt="gradient dark"
            className="h-[150%] w-full object-cover"
          />
        </picture>
         <picture className="pointer-events-none absolute bottom-[15%] left-1/2 -translate-x-1/2">
          <img
            src="/images/crypto-trading/crypto_trading_icons.png"
            alt=""
            className="animate-fly"
          />
        </picture> 

        <div className="container">
          <div className="mx-auto max-w-4xl pt-16 text-center">
            <p className="mb-6 text-lg text-accent dark:text-accent-lighter">
              {heroContent.subTitle}
            </p>
            <h1 className="mb-8 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
              {heroContent.title}
            </h1>
            <a
              href={heroContent.link}
              className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
            >
              {heroContent.btnText}
            </a>
            <figure className="relative z-10 mt-12 text-center">
              <img
                src={heroContent.heroImg}
                className="relative z-10  inline-block"
                alt="hero"
              />
              {/* <div className="absolute bottom-5 left-1/2 h-[364px] w-[364px] -translate-x-1/2 overflow-hidden rounded-[1.875rem] bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
                <div className="absolute -left-1/4 -top-1/4 h-[150%] w-[150%] -rotate-45 animate-gradientDiagonal"></div>
              </div>  */}
            </figure>
          </div>
        </div>
        {/* End .container */}

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="fill-jacarta-700 dark:fill-jacarta-900"
            ></path>
          </svg>
        </div>
        {/* End absolute bottom */}
         <iframe
    src="https://bafybeic54udbggbhtn7nfjrrj7elrim4shfped7c3cco7neset7fdwpwmu.gateway.ipfscdn.io/erc1155.html?contract=0x65D8A98596D25Df1700F6258183791E070ebD195&chain=%7B%22name%22%3A%22Cronos+Mainnet+Beta%22%2C%22chain%22%3A%22CRO%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcronos-beta.rpc.thirdweb.com%2Fa8a7f8aa7ddd8115bad1892b179be99f%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Cronos%22%2C%22symbol%22%3A%22CRO%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22cro%22%2C%22chainId%22%3A25%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22cronos-beta%22%7D&tokenId=0&theme=dark&primaryColor=cyan"
    width="600px"
    height="600px"
    style="max-width:100%;"
    frameborder="0"
    ></iframe>
        
      </section>
      {/* <!-- end hero -->  */}
    </>
  );
};

export default hero_11;
