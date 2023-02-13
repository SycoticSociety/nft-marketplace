import { createContext } from 'react';
import { ChainId } from '@thirdweb-dev/sdk';

const ChainContext = createContext({
    selectedChain: ChainId.Mainnet,
    setSelectedChain: (chain) => {},
  });

export default ChainContext;
