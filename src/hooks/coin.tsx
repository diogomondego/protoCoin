import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';

import { CoinData } from '../utils/types';

interface CoinContextData {
  coins: CoinData[];
  setCoins: React.Dispatch<CoinData[]>;
}

const CoinContext = createContext<CoinContextData>({} as CoinContextData);

const CoinProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [coins, setCoins] = useState<CoinData[]>([]);

  return (
    <CoinContext.Provider
      value={{
        coins,
        setCoins,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

function useCoin(): CoinContextData {
  const context = useContext(CoinContext);

  if (!context) {
    throw new Error('useCoin must be used within on CoinProvider');
  }

  return context;
}

export { CoinProvider, useCoin };
