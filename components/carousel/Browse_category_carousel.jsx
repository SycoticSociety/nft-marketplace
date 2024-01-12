import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'tippy.js/dist/tippy.css';
import Browse_category_data from '../../data/Browse_category_data';
import Link from 'next/link';

const Browse_category_carousel = () => {
	return (
		<div className="overflow-hidden">
			<Swiper
				slidesPerView="auto"
				spaceBetween={10}
				loop={true}
				breakpoints={{
					// when window width is >= 640px
					100: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					// when window width is >= 768px
					700: {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					900: {
						slidesPerView: 5,
						spaceBetween: 15,
					},
					1200: {
						slidesPerView: 7,
						spaceBetween: 15,
					},
				}}
				className=" card-slider-4-columns !py-5"
				style={{ transform: 'scaleX(1.2)' }}
				modules={[EffectCoverflow, Pagination, Navigation , Autoplay]}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				  }}
			>
				{Browse_category_data.map((item) => {
					const { id, image, title, bgColor , href } = item;
					return (

						<SwiperSlide key={id}>
  <article style={{ marginTop: '30px' }}>
    <Link href={href}>
      <a className="dark:bg-jacarta-700 dark:border-jacarta-700 !border-opacity-40 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
        <figure
          style={{ backgroundColor: bgColor }}
          className={` rounded-t-[0.625rem] w-full rounded-[0.625rem]`}
        >
          <img src={image} alt="item 1" className="w-full" />
        </figure>
        <div className="mt-4 text-center">
          <span className="font-display text-jacarta-700 text-md dark:text-white">
            {title}
          </span>
        </div>
      </a>
    </Link>
  </article>
</SwiperSlide>




						
					);
				})}
			</Swiper>
		</div>
	);
};

export default Browse_category_carousel;
