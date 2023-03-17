import React, { useState } from "react";
import Team from "../../components/about/Team";
import Partners from "../../components/partners/Partners";
import About_news from "../../components/blog/about_news";
import Story from "../../components/about/Story";
import Head from "next/head";
import Meta from "../../components/Meta";

const About = () => {
  const [video, setVideo] = useState(null);
  return (
    <>
      <Meta title="About || Sycotic Society| NFT Marketplace Next.js Template" />
      {/* <!-- Page title --> */}
      <section className="relative pt-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          {/* <!-- Page Title --> */}
          <div className="mx-auto max-w-2xl py-16 text-center">
            <h1 className="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white">
              About
            </h1>
            <p className="dark:text-jacarta-300 text-lg leading-normal">
              Every digital creation available through Sycotic Society is a
              truly unique digital creation, that will live forever on the Blockchain.
            </p>
          </div>
        </div>
      </section>
      {/* <!-- Intro / Statistics --> */}

      <section className="pb-4">
        <div className="container flex flex-col sm:flex-row sm:justify-around">
          {/* <!-- Video Lightbox --> */}
          <figure className="before:bg-jacarta-900/25 rounded-xl relative m-4
           overflow-hidden rounded-3xl">
            <img
              src="/images/trailerFire.png"
              className="w-full"
              alt="video"
            />
            <button
              className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90"
              onClick={() => setVideo('https://www.youtube.com/embed/Zq0Ss7Ga_wc')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-8 w-8 fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" />
              </svg>
            </button>
          </figure>
          <figure className="before:bg-jacarta-900/25 rounded-xl relative m-4 overflow-hidden rounded-3xl">
            <img
              src="/images/newDarkestHour.png"
              className="w-full"
              alt="video"
            />
            <button
              className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white transition-transform will-change-transform hover:scale-90"
              onClick={() => setVideo('https://www.youtube.com/embed/NiARatEGGME')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="h-8 w-8 fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" />
              </svg>
            </button>
          </figure>
        </div>
      </section>

      <div
        className={
          video ? "modal lightbox fade show" : "modal lightbox fade hidden"
        }
      >
        <div className="modal-dialog modal-dialog-centered modal-xl w-full">
          <div className="modal-content border-0 bg-transparent">
            <div className="modal-body p-0 relative">
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ zIndex: "2", background: "none" }}
                onClick={() => setVideo(undefined)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: "relative", top: "-5px" }}
                  viewBox="0 0 16 16"
                  fill="#fff"
                >
                  <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"></path>
                </svg>
              </button>

              <div
                id="lightboxCarousel-d7ewe4ig"
                className="lightbox-carousel carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    style={{ minHeight: "100px" }}
                  >
                    <div className="position-absolute top-50 start-50 translate-middle text-white">
                      <div
                        className="spinner-border"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                      ></div>
                    </div>
                    <div
                      className="ratio ratio-16x9"
                      style={{ backgroundColor: "#000" }}
                    >
                      <iframe
                        src={video}
                        title="YouTube video player"
                        // frameborder="0"
                        allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
                        // allowfullscreen=""
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- end intro / statistics --> */}
      {/* <!-- end story --> */}
      <Team />
      {/* <Partners /> */}
      {/* <About_news /> */}
    </>
  );
};

export default About;
