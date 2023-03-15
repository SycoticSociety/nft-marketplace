import React from 'react';
import {
	Hero,
	Hero_3,
	NewseLatter,
	Browse_category,
} from '../../components/component';
import Meta from '../../components/Meta';

const Home_1 = () => {
	return (
		<main>
			<Meta title="Home 1 || Sycotic Society | NFT Marketplace Next.js Template" />
			<Hero />
			<Browse_category/>
			<NewseLatter />
		</main>
	);
};

export default Home_1;
