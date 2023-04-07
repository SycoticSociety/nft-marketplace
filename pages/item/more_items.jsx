import React from 'react';
import { HeadLine } from '../../components/component';
import BidsCarousel from '../../components/carousel/bidsCarousel';

const More_items = ({galleryImages}) => {
	return (
		<section className="dark:bg-black bg-white py-24">
			{/* <!-- Hot Bids --> */}
			<div className="container">
				<HeadLine
					text="More from this collection"
					classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
				/>

				<div className="relative">
					{/* <!-- Slider --> */}
					<BidsCarousel galleryImages={galleryImages} />
				</div>
			</div>
			{/* <!-- end hot bids --> */}
		</section>
	);
};

export default More_items;
