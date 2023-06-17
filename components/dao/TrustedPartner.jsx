import Partner1 from "./Partner1";
import Partner2 from "./Partner2";
import 'swiper/css';
import 'swiper/css/navigation';
import 'tippy.js/dist/tippy.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Browse_category_carousel from "../carousel/Browse_category_carousel";

const TrustedPartner = () => {
  return (
    <>
      {/* <!-- Partners --> */}
      <section className="overflow-hidden py-8 dark:bg-accent-light bg-accent-lighter">
        <div className="container">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              Our Links
            </h2>
            <p className="text-lg dark:text-white">
            Sycotic 💢 Society:  We are in good company!
            </p>
          </div>
        </div>
        <div className="mb-8 flex animate-marqueeRight space-x-8">
          <Partner1 />
        </div>
        {/* End .animate-marqueeRight */}
        <div className="flex animate-marquee space-x-8">
          <Partner2 />
        </div>
        {/* animate-marquee */}
      </section>
      {/* <!-- end partners -->  */}
    </>
  );
};

export default TrustedPartner;
