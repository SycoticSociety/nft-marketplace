import React , {useEffect} from 'react'
import { HeadLine } from '../../components/component';
import FilterCategoryItem from "../../components/categories/filterCategoryItem";
import Link from 'next/link';
import {artistInfo} from '../../data/artists_data';
import {useRouter} from 'next/router';
import { useTheme } from 'next-themes';
import {Browse_category} from '../../components/component';
import More_items from '../item/more_items';

function Artist() {
  const router=useRouter()
  const {id} = router.query
  const {title,desc,img,SocialIcons,galleryImages,marketPlaceLink,artistChainId}=artistInfo[parseInt(id-1)] || artistInfo[0]
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);


  return (
    <div className='dark:bg-gray-900 pt-28'>
       <div className='flex flex-col lg:flex-row justify-center gap-10 items-center mt-28 mb-10'>
       <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full">
        <img
          src="/images/gradient.jpg"
          alt="gradient"
          className="h-full w-full"
        />
      </picture>
      <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block h-full" >
        <img
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full"
        />
      </picture>
           <div className='mx-4 lg:mx-0'>
              <h2 className='mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-accent-dark'>
              About the Artist
              </h2>
              <p>{desc}</p>
              <p>Socials</p>
             <div className="flex justify-center space-x-5">
                {SocialIcons?.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link href={href} key={id}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group cursor-pointer"
                      >
                        <svg className="icon hover:fill-accent  fill-jacarta-300 h-5 w-5 dark:hover:fill-accent">
                          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                        </svg>
                      </a>
                    </Link>
                  );
                })}
              </div> 
           </div>
           <div className="relative">
                <figure className="flex items-center justify-center">
                  <img
                    src={img}
                    alt="benifit"
                    className="rounded-full border border-jacarta-100 p-14 dark:border-jacarta-600"
                  />
                  <img
                    src="/images/dao/3d_elements_circle.png"
                    alt=""
                    className="absolute animate-spin-slow"
                  />
                </figure>
              </div>
        </div>  
       {/* <h2 className="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white">
        <img src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png" alt="headling" className="mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"/>
            Gallery Section
        </h2>
       <Hero_6 galleryImages={galleryImages}/> */}
       <section id="cards" className="py-12 pt-24">
        <div className="container">
          <HeadLine
            image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png"
            text={title}
            classes="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white"
          />
          <FilterCategoryItem marketplace={marketPlaceLink} artistChainId={artistChainId}/>
        </div>
        {/* <More_items galleryImages={galleryImages}/> */}
        <Browse_category/>
      </section>
    </div>
  )
}

export default Artist