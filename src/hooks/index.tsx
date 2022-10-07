import React, { PropsWithChildren } from 'react';

import { CoinProvider } from './coin'

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
      <CoinProvider>
        {children}
      </CoinProvider>
  );
};

export default AppProvider;
