import React from "react";
import Meta from "../../components/Meta";
import FancyBlock from "../../components/crypto/FancyBlock";
import Partners2 from "../../components/partners/Partners2";
import CryptoCounter from "../../components/cryto-trading/CryptoCounter";
import CryptoPrice from "../../components/cryto-trading/price";
import Features from "../../components/cryto-trading/Features";
import InvestEarn from "../../components/cryto-trading/invest-earn";
import ProcessCta from "../../components/cryto-trading/ProcessCta";
import Hero_11 from "../../components/hero/hero_11";

const Home_11 = () => {
  return (
    <main>
      <Meta title="| Sycotic Society| NFT Marketplace" />
      <Hero_11 />
      <FancyBlock />
      <CryptoPrice />
      {/* <CryptoCounter /> */}
      {/* <Features /> */}
      
    </main>
  );
};

export default Home_11;
