import { Partners } from "../../components/component";
import DownloadAppBanner from "../../components/crypto/DownloadAppBanner";
import FancyBlock from "../../components/crypto/FancyBlock";
import Feature from "../../components/crypto/feature";
import WalletFeature from "../../components/crypto/wallet-feature";
import NeedHelpBlock from "../../components/crypto/nee-help-block";
import Hero_10 from "../../components/hero/hero_10";
import Meta from "../../components/Meta";
import Testimonial from "../../components/testimonial/Testimonial";
import Calculator from "../../components/Calculator";



const Home_1 = () => {
  return (
    <main>
      <Meta title="Home 10 || Sycotic Society | NFT Marketplace" />
      <Hero_10 />
     
      <Calculator/>
      <div className="container">
        <figure className="before:bg-jacarta-900/25 rounded-xl relative mt-24 overflow-hidden rounded-3xl before:absolute before:inset-0 ">
          <iframe
            className="h-[80vh] w-[95vw]"
            id="geckoterminal-embed"
            title="GeckoTerminal Embed"
            src="https://www.geckoterminal.com/cro/pools/0x172ef983f851bcdbf2a26a14756955a9c5954b7d?embed=1&info=1&swaps=1"
            allow="clipboard-write"
            allowFullScreen
          ></iframe>
        </figure>
      </div>
    <DownloadAppBanner />
     
    </main>
  );
};

export default Home_1;
