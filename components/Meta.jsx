import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={desc} />
        <meta name="keyword" content={keyword} />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Sycotic Society | NFT Marketplace ",
  keyword:
    "Trade Fantom opera, Cronos main net beta, Arbitrum crypto, crypto collectibles, crypto makretplace, cryptocurrency, digital items, market, nft, nft marketplace, nft next js, NFT react, non-fungible tokens, virtual asset, wallet",
  desc: "Sycotic 💢 Society.  Your home for everything Blockchain.  Create and trade your very own NFTs onsite, while utilizing powerful tools like our eth gwei wei converter.",
};

export default Meta;
