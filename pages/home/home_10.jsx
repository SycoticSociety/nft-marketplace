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

          <iframe
    src="https://ipfs-3.thirdwebcdn.com/ipfs/QmQPCbHnEppn7KoJA5VNJ9N9Xdw6dMk1cLb17tNQJ2ufpJ/marketplace.html?contract=0x7266BA8cA064fbFC96DAE22B5C29a468D178C253&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fpolygon.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%7D&listingId=2&theme=dark&primaryColor=purple"
    width="600px"
    height="600px"
    style="max-width:100%;"
    frameborder="0"
    ></iframe>
          
        </figure>
      </div>
    <DownloadAppBanner />
     
    </main>
  );
};

export default Home_1;
