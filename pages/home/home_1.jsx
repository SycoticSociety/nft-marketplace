import React,{useEffect} from 'react';
import EmbeddedPage from '../EmbeddedPage'; // Adjust the path
import {
	Hero,
	NewseLatter,
	Browse_category,
} from '../../components/component';
import Meta from '../../components/Meta';
import TrustedPartner from "../../components/dao/TrustedPartner";
import { hero_6_data } from '../../data/hero_6_data';
import Hero_6 from '../../components/hero/hero_6';
import { useTheme } from "next-themes";

const Home_1 = () => {
	const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);
	return (
		<main>
			<Meta title="| Sycotic Society | NFT Marketplace" />
			<Hero />
			<Browse_category/>
	                <EmbeddedPage />
			<NewseLatter />
			<TrustedPartner />
		</main>
	);
};

export default Home_1;
