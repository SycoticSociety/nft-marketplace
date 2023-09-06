import React,{useEffect} from 'react';

import Hero_2 from '../../components/hero/hero_2';
import Hero_8 from "../../components/hero/hero_8";
import Statistic_promo_carousel from '../carousel/statistic_promo_2_carousel';
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
			<NewseLatter />			
			<Browse_category/>
			
			<TrustedPartner />
		</main>
	);
};

export default Home_1;
