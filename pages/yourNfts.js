import React from 'react'
import { Auctions_categories } from '../components/component'
import { useOwnedNFTs, useContract,useAddress,ConnectWallet} from "@thirdweb-dev/react";
import { useMetaMask } from 'metamask-react';

function YourNfts() {
 const address = useAddress();
 const connectWithMetaMask=useMetaMask()
 const { contract, isLoading } = useContract("0xf59d868542F170DD9cDbc3D267dABB3D4A80a991");
 const { data: ownedNFTs, loadingNfts, error } = useOwnedNFTs(contract, address);
  return (
    <div className='container mt-28'>
    {!address && 
    <>
    <h1 className='font-display text-jacarta-700 py-8 text-center text-xl font-medium dark:text-white'>Connect your wallet to see your nfts.</h1>
    <button
              onClick={connectWithMetaMask}
              className="bg-accent cursor-default rounded-full py-3 px-8 text-center font-semibold text-white transition-all" 
            >
              Connect Your Wallet
            </button>
    </>
    }
    {ownedNFTs && <Auctions_categories ownedNFTs={ownedNFTs}/>}
    </div>
  )
}

export default YourNfts