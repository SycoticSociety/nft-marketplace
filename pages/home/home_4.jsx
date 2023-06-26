import React,{useEffect} from "react";
import {
  HeadLine
} from "../../components/component";
import Meta from "../../components/Meta";
import Hero_4 from "../../components/hero/hero_4";
import Hero_6 from '../../components/hero/hero_6';
import Characters from "../../components/characters";
import { useTheme } from "next-themes";
import CoverflowCarousel from '../../components/carousel/coverflowCarousel'
import FilterCategoryItem from "../../components/categories/filterCategoryItem";


const Home_4 = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);
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
	          text="Explore BlockChains" 
            classes="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white animate-gradient"
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
