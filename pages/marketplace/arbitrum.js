import React, { useContext, useEffect } from "react";
import FilterCategoryItem from "../../components/categories/filterCategoryItem";
import UserContext from "../../components/UserContext";
import ChainContext from "../../components/chainContext";
import { ChainId } from "@thirdweb-dev/sdk";

export default function Arbitrum() {
  const { scrollRef } = useContext(UserContext);
  const {selectedChain, setSelectedChain, selectedMarketplace,setSelectedMarketplace}=useContext(ChainContext)
  useEffect(()=>{
    setSelectedChain(ChainId.Arbitrum);
    setSelectedMarketplace('0x9a6032e89B02C6CE0902b8546543D79ceB797871');
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
