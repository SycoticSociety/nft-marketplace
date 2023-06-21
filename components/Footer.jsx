import Link from "next/link";
import { footerMenuList, socialIcons } from "../data/footer_data";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}

      <footer  className="dark:bg-black page-footer bg-white">
        <div className="container">
          <div className="flex justify-center pt-8 pb-12">
            <div className="col-span-3 md:col-span-4">
              {/* <!-- Logo --> */}
              <Link href="#">
                <a className="mb-6 inline-block">
                 
                </a>
              </Link>

              <Link href="#">
                <a className=" mb-6 inline-block">
                
                </a>
              </Link>
              {/* <p className="dark:text-jacarta-300 mb-12">
                Create, sell and collect truly rare digital artworks. Powered by
                blockchain technology.
              </p> */}

              {/* <!-- Socials --> */}
              <div className="flex justify-center space-x-5">
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link className="" href={href} key={id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-accent">
                          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                        </svg>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* {footerMenuList.map((single) => (
              <div
                className={`col-span-full sm:col-span-3 md:col-span-2 ${single.diffClass}`}
                key={single.id}
              >
                <h3 className="font-display text-jacarta-700 mb-6 text-sm dark:text-white">
                  {single.title}
                </h3>
                <ul className="dark:text-jacarta-300 flex flex-col space-y-1">
                  {single.list.map((item) => {
                    const { id, href, text } = item;
                    return (
                      <li key={id}>
                        <Link href={href}>
                          <a className="hover:text-accent dark:hover:text-white">
                            {text}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))} */}
          </div>

          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} Sycotic Society — Powered By</span>
              <Link href="https://sahilmaheshwari.com">
                <a className="hover:text-accent dark:hover:text-white">
                  {" "}
                  Sahil Maheshwari and Sycotic Society
                </a>
              </Link>
            </span>

            <ul className="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <Link href="/tarms">
                  <a className="hover:text-accent dark:hover:text-white">
                    Terms and conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tarms">
                  <a className="hover:text-accent dark:hover:text-white">
                    Privacy policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
