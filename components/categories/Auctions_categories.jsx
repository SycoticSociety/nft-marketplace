import React, { useState } from "react";
import HeadLine from "../headLine";
import Auctions_category_data from "../../data/auctions_category_data";
import Tippy from "@tippyjs/react";
import Countdown_timer from "../Countdown_timer";
import Auctions_dropdown from "../dropdown/Auctions_dropdown";
import Link from "next/link";
import { bidsModalShow } from "../../redux/counterSlice";
import "tippy.js/themes/light.css";
import Image from "next/image";
import auctions_category_data from "../../data/auctions_category_data";
import { Modal , Box, Typography, Input , Button} from "@mui/material";
import {useContract, useTransferNFT} from "@thirdweb-dev/react";

const Auctions_categories = ({ ownedNFTs }) => {
  const [data, setData] = useState(ownedNFTs?.slice(0, 8));
  const [open, setOpen] = useState(false);
  const [id, setId]=useState("")
  const handleOpen = (id) => {
	setOpen(true)
	setId(id)
  } ;
  const handleClose = () => setOpen(false);
  const [walletAddress,setWalletAddress]=useState("")
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  const handleloadMore = () => {
    setData(auctions_category_data);
    setLoadMoreBtn(false);
  };
  const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	color:'black',
	boxShadow: 24,
	p: 4,
  };
  const { contract } = useContract("0x1583ecdf26e245D4E5D8CAe54CdF10D32667892C");
  const {
    mutate: transferNFT,
    isLoading,
    error,
  } = useTransferNFT(contract);
  return (
    <div>
      <section className="py-24">
        <div className="container ">
          <HeadLine
            image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/2764-fe0f.png"
            text="Your NFTs"
            classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
          />
          <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
            {data?.map((item) => {
              const { owner, metadata, type, supply } = item;
              return (
                <article className="dark:bg-jacarata-800" key={metadata.id}>
                  <div className="dark:bg-jacarta-900 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                    <figure className="relative">
                      <a>
                        <Image
                          src={metadata?.image}
                          alt="item 8"
                          className="w-full rounded-[0.625rem]"
                          loading="lazy"
                          height="100%"
                          width="100%"
                          layout="responsive"
                          objectFit="cover"
                        />
                      </a>
                    </figure>
                    <div className="mt-7 flex items-center justify-between">
                      <a>
                        <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                          {metadata?.name}
                        </span>
                      </a>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <a>
                        <span className=" text-jacarta-700 hover:text-accent  dark:text-white">
                          {metadata?.description}
                        </span>
                      </a>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <a>
                        <button onClick={()=>handleOpen(metadata.id)} className="bg-gray p-2 rounded-md text-jacarta-700 hover:text-accent  dark:text-white">
                          Transfer
                        </button>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                             Transfer NFT to
                            </Typography>
                            <input type="text" value={walletAddress} onChange={(e)=>setWalletAddress(e.target.value)} placeholder="Enter wallet address" type="text"/>
							<Button disabled={!walletAddress} onClick={()=>{
                              transferNFT({
								to:walletAddress,
								tokenId:String(id)
							})
							}
							
							} type="submit">Transfer to Address</Button>
                          </Box>
                        </Modal>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {loadMoreBtn && (
            <div className="mt-10 text-center">
              <button
                onClick={handleloadMore}
                className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Auctions_categories;
