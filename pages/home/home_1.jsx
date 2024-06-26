import React, { useEffect } from 'react';

import Hero_2 from '../../components/hero/hero_2';
import Statistic_promo_2 from "../../components/promo/statistic_promo_2"; // Import Statistic_promo_2
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

	// Add useEffect to set the theme
	useEffect(() => {
		setTheme("dark");
	}, [setTheme]);

	return (
		<main>
			<Meta title="| Sycotic Society | NFT Marketplace" />
			<Hero />						
			<NewseLatter />
		    
			<Browse_category/>		
			<TrustedPartner />
		</main>
	);
};

export default Home_1;
