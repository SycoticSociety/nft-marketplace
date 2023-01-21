import { useAddress, useContract, useMarketplace } from '@thirdweb-dev/react'
import React,{useEffect, useState} from 'react'

function listings() {
    const [listings,setListings]=useState([])
    const [loading,setLoading]=useState(true)
    const address=useAddress();
    const marketplace=useContract(process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS);
    
    useEffect(()=>{
        getListings()
    },[])
    const getListings=async()=>{
        try {
            if(!address) return;
            const list=await marketplace.getActiveListings()
            console.log(list)
            setListings(list)
            setLoading(false)
        } catch (error) {
            console.log(error)
            alert('Error fetching the listings!')
        }
    }

  return (
    <div>listings</div>
  )
}

export default listings