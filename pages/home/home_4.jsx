import React from "react";
import {
  HeadLine
} from "../../components/component";
import Meta from "../../components/Meta";
import Hero_4 from "../../components/hero/hero_4";
import dynamic from "next/dynamic";

const FilterCategoryItem=dynamic(()=>import('../../components/categories/filterCategoryItem'))
const CoverflowCarousel=dynamic(()=>import("../../components/carousel/coverflowCarousel"))

const Home_4 = () => {
  // const addresses={
  //   [String(ChainId.Fantom)]:{marketplace1:"0x7780Afb7243Fb6d706eBA2a99EEaF492bc94F171",marketplace2:"0x7979E0B2442451a2493CFC2e4264B9BeA8C86804"},
  //   [String(ChainId.Polygon)]: {marketplace1:"0x7266BA8cA064fbFC96DAE22B5C29a468D178C253"},
  //   [String(ChainId.Avalanche)]: {marketplace1:"0x4c2FFeBe9E22802776D6943203007898634cBDA2"},
  // }
  return (
    <>
      <Meta title="SycoticSociety | NFT Marketplace" />
      <Hero_4 />
      <CoverflowCarousel/>
      {/* <Top_collection /> */}
      {/* <Auctions_categories /> */}
      <section id="cards" className="py-24">
        <div className="container">
          <HeadLine
            image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png"
            text="Explore multiple NFT BlockChains"
            classes="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white"
          />
          <FilterCategoryItem />
        </div>
      </section>
      {/* <NewseLatter bgWhite={true} /> */}
      {/* <Feature_collections />
			<Partners /> */}
    </>
  );
};

export default Home_4;
