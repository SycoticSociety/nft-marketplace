import HeadLine from "../headLine";
import { newseLatterData } from "../../data/newseLatterData";

const NewseLatter = () => {
  return (
    <section className="hero relative py-24">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img
            className="h-full w-full"
            src="./images/gradient.jpg"
            alt="gradient"
          />
        </picture> 
         <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img
            className="h-full w-full"
            src="./images/gradient_dark.jpg"
            alt="gradient dark"
          />
        </picture> 

      <div className="container">
        <HeadLine
          text="Create and sell your NFTs"
          classes="font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white"
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {newseLatterData.map((item) => {
            const { id, icon, title, text , link } = item;
            return (
              <a href={link} key={id}>
              <div className="text-center newseLatter-item" >
                <div
                  className={`mb-6 inline-flex rounded-full p-3`}
                  style={{ backgroundColor: icon.parentBg }}
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full`}
                    style={{ backgroundColor: icon.childBg }}
                  >
                    <svg className="icon icon-wallet h-5 w-5 fill-white">
                      <use xlinkHref={`/icons.svg#${icon.svg}`}></use>
                    </svg>
                  </div>
                </div>
                <h3 className="font-display text-jacarta-700 mb-4 text-lg dark:text-white">
                  {id}. {title} 
                </h3>
                <p className="dark:text-jacarta-300">{text}</p>
              </div>
              </a>
            );
          })}
        </div>

        {/* <p className="text-jacarta-700 mx-auto mt-20 max-w-2xl text-center text-lg dark:text-white">
          Join our mailing list to stay in the loop with Sycotic Society updates.
        </p> */}

        {/* <div className="mx-auto mt-7 max-w-md text-center">
          <form className="relative" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="dark:bg-jacarta-700 dark:border-jacarta-600 !border-opacity-40 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
            />
            <button className="hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
              Subscribe
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
};

export default NewseLatter;
