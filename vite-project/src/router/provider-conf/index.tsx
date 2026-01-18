import React from 'react';
import type { PropsWithChildren } from 'react';

const ProviderConf: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default ProviderConf;