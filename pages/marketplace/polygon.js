import React, { useContext, useEffect } from "react";
import FilterCategoryItem from "../../components/categories/filterCategoryItem";
import UserContext from "../../components/UserContext";
import ChainContext from "../../components/chainContext";
import { ChainId } from "@thirdweb-dev/sdk";

export default function Home() {
  const { scrollRef } = useContext(UserContext);
  const {selectedChain, setSelectedChain, selectedMarketplace,setSelectedMarketplace}=useContext(ChainContext)
  useEffect(()=>{
    setSelectedChain(ChainId.Polygon);
    setSelectedMarketplace('0x7266BA8cA064fbFC96DAE22B5C29a468D178C253');
  },[])

  useEffect(() => {
    window.scrollTo(0, scrollRef.current.scrollPos);
    const handleScrollPos = () => {
      scrollRef.current.scrollPos = window.scrollY;
    };
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  });

  return (
    <>
      <FilterCategoryItem marketplace={selectedMarketplace}/>
    </>
  );
}
