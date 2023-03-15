import React from "react";
import { HeadLine } from "../component";
import Browse_category_carousel from "../carousel/Browse_category_carousel";
import Image from "next/image";

const Browse_category = ({ bgWhite }) => {
  return (
    <div>
      <section className="relative py-8">
        {bgWhite && (
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full"
              layout="fill"
            />
          </picture>
        )}
        <div className="relative">
          <Browse_category_carousel />
        </div>
      </section>
    </div>
  );
};

export default Browse_category;
