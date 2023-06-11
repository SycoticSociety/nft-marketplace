import { ThirdwebSDK } from "@thirdweb-dev/sdk";

export default async function mintNft(req,res) {
  try {
    // De-structure the arguments we passed in out of the request body
    const { authorAddress, nftName , nftDesc , nftImage , nftCollectionContract } = JSON.parse(req.body);
    
    // You'll need to add your private key in a .env.local file in the root of your project
    // !!!!! NOTE !!!!! NEVER LEAK YOUR PRIVATE KEY to anyone!
    if (!process.env.PRIVATE_KEY) {
      throw new Error("You're missing PRIVATE_KEY in your .env.local file.");
    }
    // Initialize the Thirdweb SDK on the serverside
    // Load the NFT Collection via it's contract address using the SDK
    let sdk=null
    let nftCollection=''

    if(nftCollectionContract=='Arbitrum'){
      sdk = ThirdwebSDK.fromPrivateKey(
        // Your wallet private key (read it in from .env.local file)
        process.env.PRIVATE_KEY,
        "arbitrum"
      );
      nftCollection = await sdk.getContract("0xA53A24AFa3BC77E1d8FCBB28FbdFA48e70A5Ebe6","nft-collection");
    }else{
      sdk = ThirdwebSDK.fromPrivateKey(
        // Your wallet private key (read it in from .env.local file)
        process.env.PRIVATE_KEY,
        "polygon"
      );
      nftCollection = await sdk.getContract("0xf59d868542F170DD9cDbc3D267dABB3D4A80a991","nft-collection");
    }
    

    // Here we can make all kinds of cool checks to see if the user is eligible to mint the NFT.
    // Here are a few examples:

    // 1) Check that it's an animal name from our list of animal names
    // This demonstrates how we can restrict what kinds of NFTs we give signatures for
    // if (!animalNames.includes(nftName?.toLowerCase())) {
    //   res.status(400).json({ error: "That's not one of the animals we know!" });
    //   return;
    // }

    // 2) Check that this wallet hasn't already minted a page - 1 NFT per wallet
    // const hasMinted = (await nftCollection?.balanceOf(authorAddress)).gt(0);
    // if (hasMinted) {
    //   res.status(400).json({ error: "Already minted" });
    //   return;
    // }

    // If all the checks pass, begin generating the signature...
    // Generate the signature for the page NFT

    const metadata={
      name: nftName,
      image:nftImage,
      description: nftDesc
    }

    const mintNFTToWallet=await nftCollection.erc721.mintTo(authorAddress,metadata)
    console.log(mintNFTToWallet)
    const signedPayload = await nftCollection.signature.generate({
      to: authorAddress,
      metadata,
      royaltyRecipient:authorAddress,
      primarySaleRecipient:authorAddress
    });
    const nft = await nftCollection.signature.mint(signedPayload);
    // Return back the signedPayload to the client.
    res.status(200).json({
      signedPayload: JSON.parse(JSON.stringify(signedPayload)),
      nft
    });
  } catch (e) {
    res.status(500).json({ error: `Server error ${e}` });
  }
}