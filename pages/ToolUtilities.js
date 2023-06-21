import React, { useContext, useEffect } from "react";
import UserContext from "../components/UserContext";

import Partners2 from "../../components/partners/Partners2";
import CryptoCounter from "../../components/cryto-trading/CryptoCounter";
import CryptoPrice from "../../components/cryto-trading/price";
import Features from "../../components/cryto-trading/Features";
import InvestEarn from "../../components/cryto-trading/invest-earn";
import ProcessCta from "../../components/cryto-trading/ProcessCta";
import Hero_11 from "../../components/hero/hero_11";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Meta from "../components/Meta";

export default function Home() {
  const { scrollRef } = useContext(UserContext);

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
      <Meta title="| Sycotic Society | NFT Marketplace" />
      <main>
      <Hero_11 />
      <CryptoPrice />
      <InvestEarn />
      <main/>
  );
}
