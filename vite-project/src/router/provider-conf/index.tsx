import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import type { PropsWithChildren } from 'react';

const ProviderConf: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children as any}
    </QueryClientProvider>
  );
};

export default ProviderConf;