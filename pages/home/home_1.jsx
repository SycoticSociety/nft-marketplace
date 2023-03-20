import React from 'react';
import {
	Hero,
	NewseLatter,
	Browse_category,
} from '../../components/component';
import Meta from '../../components/Meta';

const Home_1 = () => {
	return (
		<main>
			<Meta title="| Sycotic Society | NFT Marketplace Next.js Template" />
			<Hero />
		    <Browse_category/>
			<NewseLatter />
		</main>
	);
};

export default Home_1;
