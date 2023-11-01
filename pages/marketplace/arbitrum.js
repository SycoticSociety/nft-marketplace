import React, { useContext, useEffect } from "react";
import FilterCategoryItem from "../../components/categories/filterCategoryItem";
import UserContext from "../../components/UserContext";
import ChainContext from "../../components/chainContext";
import { ChainId } from "@thirdweb-dev/sdk";

// Import your HTTP client library (e.g., Axios)
import axios from "axios"; // Example import, you can use your preferred library

export default function Arbitrum() {
  const { scrollRef } = useContext(UserContext);
  const { selectedChain, setSelectedChain, selectedMarketplace, setSelectedMarketplace } = useContext(ChainContext);

  // Define your API key (replace 'YOUR_API_KEY' with your actual key)
  const apiKey = "c6283d4d5955100fffcdd22978b8190a";

  useEffect(() => {
    setSelectedChain(ChainId.Arbitrum);
    setSelectedMarketplace('0x9a6032e89B02C6CE0902b8546543D79ceB797871');
  }, []);

  useEffect(() => {
    // Define the API endpoint
    const apiEndpoint = "YOUR_API_ENDPOINT"; // Replace with your actual API endpoint

    // Use your HTTP client to make the API request with the API key
    axios.get(apiEndpoint, {
      headers: {
        "Authorization": `Bearer ${apiKey}` // Use the appropriate header for your API
      }
    })
      .then(response => {
        // Handle the API response here
        // You can set the data in your component's state or perform other actions
      })
      .catch(error => {
        console.error("API request failed:", error);
      });

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
      <FilterCategoryItem marketplace={selectedMarketplace} />
    </>
  );
}
