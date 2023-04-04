import Link from 'next/link';
import React from 'react';
import { hero_6_data } from '../../data/hero_6_data';

const Hero_6 = ({galleryImages}) => {
	return (
		<>
			{/* <!-- Hero --> */}
			<section className="relative px-2 pb-2 py-6 md:pt-2">
				<div className="flex flex-col gap-8 lg:flex-row">
					<div className="w-full lg:w-1/3">
						<div className="grid grid-cols-2 grid-rows-2 gap-5 grid-flow-row-dense lg:grid-flow-col-dense">
							{galleryImages?.slice(0, 2).map((item) => {
								const { id, title, img, authorName } = item;
								const itemLink = img
									.split('/')
									.slice(-1)
									.toString()
									.replace('_square.jpg', '')
									.replace('.gif', '');
								return (
									<article key={id} className="row-start-2 lg:row-auto lg:col-start-2">
										<div className="relative overflow-hidden rounded-2.5xl bg-white dark:bg-jacarta-900">
											<figure className="relative">
												<Link href={`/item/${itemLink}`}>
													<a className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20">
														<img
															src={img}
															alt={title}
															className="w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
															height="470"
															width="470"
														/>
													</a>
												</Link>
											</figure>
											<div className="pointer-events-none absolute bottom-0 w-full p-5">
												<h2 className="font-display text-base leading-none text-white xl:text-lg">
													{title}
												</h2>
												<span className="text-2xs text-white">{authorName}</span>
											</div>
										</div>
									</article>
								);
							})}
						</div>
					</div>
					<div className="w-full lg:w-1/3">
						{galleryImages?.slice(2,3).map((item) => {
							const { id, title, img, authorName } = item;
							const itemLink = img
								.split('/')
								.slice(-1)
								.toString()
								.replace('.jpg', '')
								.replace('_square', '')
								.replace('.gif', '');
							return (
								<article key={id}>
									<div className="relative overflow-hidden rounded-2.5xl bg-white dark:bg-jacarta-700">
										<figure className="relative">
											<Link href={`/item/${itemLink}`}>
												<a className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20">
													<img
														src={img}
														alt={title}
														className="w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
														height="470"
														width="470"
													/>
												</a>
											</Link>
										</figure>
										<div className="pointer-events-none absolute bottom-0 w-full p-5">
											<h2 className="font-display text-base leading-none text-white xl:text-lg">
												{title}
											</h2>
											<span className="text-2xs text-white">{authorName}</span>
										</div>
									</div>
								</article>
							);
						})}
					</div>
					<div className="w-full lg:w-1/3">
						<div className="grid grid-cols-2 grid-rows-2 gap-5 lg:grid-flow-col">
							{galleryImages?.slice(3,5).map((item) => {
								const { id, title, img, authorName } = item;
								const itemLink = img
									.split('/')
									.slice(-1)
									.toString()
									.replace('.jpg', '')
									.replace('_square', '')
									.replace('.gif', '');
								return (
									<article key={id}>
										<div className="relative overflow-hidden rounded-2.5xl bg-white dark:bg-jacarta-700">
											<figure className="relative">
												<Link href={`/item/${itemLink}`}>
													<a className="group block after:absolute after:inset-0 after:block after:bg-jacarta-900/20">
														<img
															src={img}
															alt={title}
															className="w-full object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
															height="470"
															width="470"
														/>
													</a>
												</Link>
											</figure>
											<div className="pointer-events-none absolute bottom-0 w-full p-5">
												<h2 className="font-display text-base leading-none text-white xl:text-lg">
													{title}
												</h2>
												<span className="text-2xs text-white">{authorName}</span>
											</div>
										</div>
									</article>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end hero --> */}
		</>
	);
};

export default Hero_6;
