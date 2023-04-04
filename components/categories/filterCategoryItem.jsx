import React, { useMemo ,useContext, useState,useRef} from "react";
import Collection_category_filter from "../collectrions/collection_category_filter";
import CategoryItem from "./categoryItem";
import {
  useContract,
  useActiveListings,
  useAddress
} from "@thirdweb-dev/react";
import ChainContext from "../chainContext";


const FilterCategoryItem = ({marketplace}) => {
  const {selectedChain,setSelectedChain}=useContext(ChainContext)
  const addresses={
    [String(ChainId.Fantom)]:"0x7780Afb7243Fb6d706eBA2a99EEaF492bc94F171",
    [String(ChainId.Polygon)]: "0x7266BA8cA064fbFC96DAE22B5C29a468D178C253",
    [String(ChainId.Avalanche)]: "0x4c2FFeBe9E22802776D6943203007898634cBDA2"
  }
  const { contract } = useContract(
    marketplace || addresses[String(selectedChain)],
    "marketplace"
  );
  const { data: listings, isLoading: loadingListings } = useActiveListings(contract);
  const [loadMore,setLoadMore]=useState(8)
  const address = useAddress();
  const [filter,setFilter]=useState('Recently_Added')
  const arrangeListings=useMemo(()=>{
      if(listings){
        if(filter==='Recently_Added'){
          return listings.sort((a,b)=>Number(b.id)-Number(a.id))
        }else if(filter==='High_To_Low'){
          return listings.sort((a,b)=>Number(b.buyoutCurrencyValuePerToken.displayValue)-Number(a.buyoutCurrencyValuePerToken.displayValue))
        }else if (filter==='Low_To_High'){
          return listings.sort((a,b)=>Number(a.buyoutCurrencyValuePerToken.displayValue)-Number(b.buyoutCurrencyValuePerToken.displayValue))
        }
      }
    },[filter,listings])
  if(!listings) return <h2 className="font-display text-jacarta-700 py-16 text-center text-2xl font-medium dark:text-white">Loading Assets ...</h2>
  return (
    <div>
      <Collection_category_filter filter={filter} setFilter={setFilter}/>
      <CategoryItem listings={arrangeListings} contract={contract} address={address}/>
      <div className="mt-10 text-center">
        <button
          onClick={()=>setLoadMore(loadMore=>loadMore+8)}
          className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default FilterCategoryItem;
