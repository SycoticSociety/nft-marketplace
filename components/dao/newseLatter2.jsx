import HeadLine from "../headLine";
import Image from "next/image";
import DaoBlock from "./DaoBlock";

const NewseLatter2 = () => {
  return (
    <section className="relative py-24">
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <Image
          src="/images/gradient.jpg"
          alt="gradient"
          className="h-full w-full"
          layout="fill"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
        <Image
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full"
          layout="fill"
        />
      </picture>

      <div className="container">
        {/* Start global distribute and dao idea */}
        <div className="lg:flex lg:space-x-12">
          <DaoBlock />
        </div>
        {/* End global distribute and dao idea */}

        {/* start call to action weekly digest */}
        
        {/* end call to action weekly digest */}
      </div>
    </section>
  );
};

export default NewseLatter2;
