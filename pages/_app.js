import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import UserContext from "../components/UserContext";
import ChainContext from "../components/chainContext";
import { useRef, useState } from "react";
import { MetaMaskProvider } from "metamask-react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });
  const [selectedChain, setSelectedChain] = useState(ChainId.Mumbai);
  const [selectedMarketplace, setSelectedMarketplace] = useState(
    "0x7780Afb7243Fb6d706eBA2a99EEaF492bc94F171"
  );
  return (
    <>
      <Meta title="Sycotic Society | NFT Marketplace" />
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <ChainContext.Provider value={{ selectedChain, setSelectedChain , selectedMarketplace, setSelectedMarketplace}}>
              <ThirdwebProvider desiredChainId={selectedChain}>
                <MetaMaskProvider>
                  <UserContext.Provider value={{ scrollRef: scrollRef }}>
                    {pid === "/login" ? (
                      <Component {...pageProps} />
                    ) : (
                      <Layout>
                        <Component {...pageProps} />
                      </Layout>
                    )}
                  </UserContext.Provider>
                </MetaMaskProvider>
              </ThirdwebProvider>
          </ChainContext.Provider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
