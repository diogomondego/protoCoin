import React, { PropsWithChildren } from 'react';
import { AuthProvider } from './auth';

import { CoinProvider } from './coin'

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthProvider>
      <CoinProvider>
        {children}
      </CoinProvider>
    </AuthProvider>
  );
};

export default AppProvider;
