import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import UserContext from "../components/UserContext";
import { useEffect, useRef } from "react";
import { MetaMaskProvider } from "metamask-react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });

  useEffect(() => {
    // if (pid === '/home/home_8') {
    // 	const html = document.querySelector('html');
    // 	html.classList.remove('light');
    // 	html.classList.add('dark');
    // }
  }, []);

  return (
    <>
      <Meta title="Sycotic Society | NFT Marketplace" />
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <ThirdwebProvider desiredChainId={ChainId.Polygon}>
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
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
