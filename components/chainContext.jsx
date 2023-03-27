import { createContext } from 'react';
import { ChainId } from '@thirdweb-dev/sdk';

const ChainContext = createContext({
    selectedChain: ChainId.Mainnet,
    setSelectedChain: (chain) => {},
    selectedMarketplace: String,
    setSelectedMarketplace: (selectedMarketplace) => {},
  });

export default ChainContext;
