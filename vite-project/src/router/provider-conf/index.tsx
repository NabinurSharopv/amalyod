import Modals from '../../components/modals';
import { Provider } from 'react-redux';
import { store } from '../../redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const ProviderConf = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Toaster 
          position="top-center" 
          containerStyle={{ zIndex: 999999 }} 
        />
        {children}
        <Modals />
      </Provider>
    </QueryClientProvider>
  );
};

export default ProviderConf;