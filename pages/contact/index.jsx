import React from "react";
import ImageTitle from "../../components/imageTitle";
import Meta from "../../components/Meta";
import ContactForm from "../../components/contact/ContactForm";
import Address from "../../components/contact/address";

const Contact = () => {
  const bgImage = "/images/page-title/knowledge_base_banner.jpg";

  return (
    <div>
      <Meta title="Contact || Xhibiter | NFT Marketplace Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        <ImageTitle text="Get in touch" image={bgImage} />

        {/* <!-- Contact --> */}
        <section className="dark:bg-jacarta-800 relative py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <Address />
        </section>
        {/* <!-- end contact --> */}
      </div>
    </div>
  );
};

export default Contact;
