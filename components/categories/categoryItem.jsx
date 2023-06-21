import React from "react";
import "tippy.js/dist/tippy.css";
import Auctions_dropdown from "../dropdown/Auctions_dropdown";
import { useMetamask } from "@thirdweb-dev/react";

const CategoryItem = ({ listings,contract,address}) => {
  const connectWithMetamask=useMetamask()
  const buyAsset = async (id,address,contract) => {
    if(!address){
      connectWithMetamask()
    }else{
      await contract.buyoutListing(id, 1);
      console.log(contract.buyoutListing(id,1))
      alert("Asset purchased successfully!");
      window.location.reload();
    }
  };  
  

  if(listings && contract){
    return (
      <div className="grid grid-cols-1 gap-[3rem] sm:gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {listings?.map((item) => {
          const {
            asset,
            buyoutCurrencyValuePerToken,
            id
          } = item;
          
         return (
            <article key={asset.id}>
              <div className="dark:bg-jacarta-900 dark:border-jacarta-700 !border-opacity-40 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                <figure className="relative">
                  <img
                    src={asset.image}
                    alt="item 5"
                    className="w-full h-[230px] rounded-[0.625rem]"
                  />
                </figure>
                <div className="mt-7 flex items-center justify-between">
                  <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                    {asset?.name}
                  </span>
                  {/* auction dropdown  */}
                  <Auctions_dropdown classes="dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full " />
                </div>
                <div className="mt-2 text-sm">
                  <span className="dark:text-jacarta-200 text-jacarta-700 mr-1">
                    {buyoutCurrencyValuePerToken?.displayValue}
                  </span>
                  {/* <span className="dark:text-jacarta-300 text-jacarta-500">
                    {bidCount}/{bidLimit}
                  </span> */}
                </div>
  
                <div className="mt-8 flex items-center justify-between">
                  <button
                    className="text-accent font-display text-sm font-semibold"
                    // onClick={() => dispatch(buyModalShow())}
                    onClick={()=>buyAsset(id,address,contract)}
                  >
                    Buy now
                  </button>
                  {/* <Link href={`/item/${itemLink}`}>
                    <a className="group flex items-center">
                      <svg className="icon icon-history group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                        <use xlinkHref="/icons.svg#icon-history"></use>
                      </svg>
                      <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">
                        View History
                      </span>
                    </a>
                  </Link> */}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    );
  };
  }

export default CategoryItem;
