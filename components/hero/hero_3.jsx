import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import Image from "next/image";
import {
  hero_3_swiper_data,
  hero_3_swiper_thumbs_data,
} from "../../data/hero_3_swiper_data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Hero_3 = () => {
  const [activeThumb, setActiveThumb] = useState(null);

  return (
    <>
      {/* <!-- Hero Slider --> */}
      <section className="relative sm:h-screen h-[500px]">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="full-slider my-36 h-2/3 sm:h-screen sm:my-0"
        >
          {hero_3_swiper_data.map((item) => {
            const { image, id, title, name, color, titleLink, userLink } = item;
            return (
              <SwiperSlide key={id}>
                <div className="swiper-slide after:absolute after:inset-0 sm:mt-0 sm:mb-0">
                  <div className="container relative z-10 h-full pt-40 mb-10">
                    <p className={`font-display text-md font-semibold text-white text-center block mx-auto w-fit bg-${color} p-2 rounded-md`} style={{backgroundColor:`${color}`}}>
                      <Link href={titleLink}>
                        <a>{title}</a>
                      </Link>
                    </p>
                  </div>
                  <Link href={titleLink}>
                  <Image
                    src={image}
                    className="inset-0 w-full h-full"
                    alt={title}
                    width={1920}
                    height={1080}
                    layout="fill"
                  />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* <!-- Thumbs --> */}
        <div className="absolute inset-x-0 bottom-12">
          <div className="container">
            {/* <Thumbs_carousel /> */}
            <Swiper
              modules={[FreeMode, Navigation, Thumbs]}
              onSwiper={setActiveThumb}
              loop={true}
              spaceBetween={10}
              slidesPerView="auto"
              breakpoints={{
                100: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className=" full-slider-thumbs swiper-initialized swiper-horizontal swiper-pointer-events swiper-thumbs"
            >
              {hero_3_swiper_thumbs_data.map((item) => {
                const { image, id } = item;
                return (
                  <SwiperSlide
                    className="swiper-slide cursor-pointer rounded p-5 md:p-10 lg:p-12 swiper-slide-duplicate swiper-slide-duplicate-next "
                    key={id}
                  >
                    <img
                      src={image}
                      className="w-full rounded-lg"
                      alt="thumb 1"
                    />
                    <div className="carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20 ">
                      <div className="progress bg-accent absolute h-0.5 w-0"></div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero_3;