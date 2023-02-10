import React, { useEffect } from "react";
import { trendingCategoryData } from "../../data/categories_data";
import Collection_category_filter from "../collectrions/collection_category_filter";
import CategoryItem from "./categoryItem";
import { useDispatch } from "react-redux";
import { updateTrendingCategoryItemData } from "../../redux/counterSlice";
import {
  useContract,
  useActiveListings,
  useAddress
} from "@thirdweb-dev/react";



const FilterCategoryItem = () => {
  const dispatch = useDispatch();
  const { contract } = useContract(
    '0x7266BA8cA064fbFC96DAE22B5C29a468D178C253',
    "marketplace"
  );
  const { data: listings, isLoading: loadingListings } = useActiveListings(contract);
  const address = useAddress();
  if(!listings) return <h2 className="font-display text-jacarta-700 py-16 text-center text-2xl font-medium dark:text-white">Loading Assets ...</h2>
  return (
    <div>
      {/* <!-- Filter --> */}
      <Collection_category_filter />
      <CategoryItem listings={listings} contract={contract} address={address}/>
      <div className="mt-10 text-center">
        <button
          className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default FilterCategoryItem;
