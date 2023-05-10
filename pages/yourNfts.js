import React from 'react'
import { Auctions_categories } from '../components/component'
import { useOwnedNFTs, useContract,useAddress} from "@thirdweb-dev/react";

function yourNfts() {
 const address = useAddress();
 const { contract, isLoading } = useContract("0xf59d868542F170DD9cDbc3D267dABB3D4A80a991");
 const { data: ownedNFTs, loadingNfts, error } = useOwnedNFTs(contract, address);
  return (
    <>
    {!address && <h1>Connect your wallet to see your nfts.</h1>}
    {ownedNFTs && <Auctions_categories ownedNFTs={ownedNFTs}/>}
    </>
    
  )
}

export default yourNfts