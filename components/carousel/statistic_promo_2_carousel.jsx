import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import 'tippy.js/dist/tippy.css';
import { bidsData } from '../../data/bids_data';
import Link from 'next/link';
import Tippy from '@tippyjs/react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { bidsModalShow } from '../../redux/counterSlice';
import { useDispatch } from 'react-redux';
import Likes from '../likes';
import { statistic_promo_2_data } from '../../data/statistic_promo_2_data';

const Statistic_promo_carousel = () => {
	const dispatch = useDispatch();

	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar]}
				spaceBetween={30}
				slidesPerView="auto"
				loop={true}
				breakpoints={{
					240: {
						slidesPerView: 1,
					},
				}}
				navigation={{
					nextEl: '.bids-swiper-button-next',
					prevEl: '.bids-swiper-button-prev',
				}}
				className=" card-slider-4-columns !py-5"
			>
				{statistic_promo_2_data.map((item) => {
					const { id, img } = item;
					return (
						<SwiperSlide className="text-white" key={id}>
							<img
								src={img}
								alt=""
								width="400"
								height="600"
								className="swiper-lazy inline-block border-0"
							/>
							{/* <div className="swiper-lazy-preloader"></div> */}
						</SwiperSlide>
					);
				})}
			</Swiper>
			{/* <!-- Slider Navigation --> */}
			<div className="group bids-swiper-button-prev swiper-button-prev shadow-red-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden">
				<MdKeyboardArrowLeft />
			</div>
			<div className="group bids-swiper-button-next swiper-button-next shadow-red-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden">
				<MdKeyboardArrowRight />
			</div>
		</>
	);
};

export default Statistic_promo_carousel;
