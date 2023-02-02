import {
  useContract,
  useActiveListings,
  MediaRenderer,
  useAddress,
  useMetamask,
} from "@thirdweb-dev/react";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const connectWithMetamask = useMetamask();
  const { contract } = useContract(
    '0x7266BA8cA064fbFC96DAE22B5C29a468D178C253',
    "marketplace"
  );
  const { data: listings, isLoading: loadingListings } =
    useActiveListings(contract);
  const buyAsset = async (id) => {
    await contract.buyoutListing(id, 1);
    alert("Asset purchased successfully!");
    window.location.reload();
  };
  const address = useAddress();
  return (
    <div>
      <Header />
      <h2 className="section-header">Listings from Various Artists</h2>
      <hr />
      {
        // If the listings are loading, show a loading message
        loadingListings ? (
          <div>Loading listings...</div>
        ) : (
          // Otherwise, show the listings
          <>
          <div className="shop-items">
            {listings?.map((listing) => (
              <div key={listing.id}>
                <div className="shop-item">
                  <span className="shop-item-title">{listing.asset.name}</span>
                  <MediaRenderer
                    className="shop-item-image"
                    src={listing.asset.image}
                  />
                  <div className="shop-item-details">
                    <p className="shop-item-price">
                      <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                      {listing.buyoutCurrencyValuePerToken.symbol}
                    </p>
                    <button
                      className="btn btn-primary shop-item-button"
                      type="button"
                      onClick={() => buyAsset(listing.id)}
                      disabled={!address ? true : false}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
            {!address && <button  className="btn btn-primary shop-item-button" onClick={connectWithMetamask}>
            Connect your wallet to see the items
          </button>}
          </>
        )
      }
      <Footer />
    </div>
  );
}
