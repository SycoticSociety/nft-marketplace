/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import Statistic_promo_carousel from '../carousel/statistic_promo_2_carousel';

const Statistic_promo_2 = () => {
	return (
		<div>
			{/* <!-- Promo 2 --> */}
			<section className="statistic_promo_2-section bg-[#010107] py-12 lg:pb-32 overflow-x-hidden">
				<div className="container">
					<div className="items-center justify-between lg:flex">
						<div className="mb-12 lg:w-[45%] lg:pr-16">
							<h2 className="mb-6 font-display text-2xl text-white">
								Sycotic Society and Artificial Intelligence.  A match made in heaven.
							</h2>
							<p className="mb-8 text-lg leading-normal text-jacarta-200">
						          Although we are currently in the early phases of development, we have achieved many great feats to date. Looking forward
								to 2024, I see exponential growth and mass adoption on the horizion.  We will be ready.
							</p>
							<p className="mb-12 text-jacarta-200">
						
							</p>
							<Link href="https://www.convex.dev/ai-town">
								<a className="inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
									Visit A.I Town
								</a>
							</Link>
						</div>
						<div className="relative text-center lg:w-1/2">
							<img
								src="/images/nft-game/gradient_glow_large_2.png"
								loading="lazy"
								alt=""
								className="pointer-events-none absolute scale-150"
							/>

							{/* <!-- Slider --> */}
							<Statistic_promo_carousel />

							<img
								src="/images/nft-game/crypto_icons_1.png"
								alt=""
								loading="lazy"
								className="pointer-events-none absolute -top-10 z-10 animate-fly"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end promo 2 --> */}
		</div>
	);
};

export default Statistic_promo_2;
