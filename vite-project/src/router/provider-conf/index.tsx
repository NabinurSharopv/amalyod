import Modals from '../../components/modals';
import { Provider } from 'react-redux';
import { store } from '../../redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 1. QueryClientni komponentdan TASHQARIDA e'lon qiling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Xato bo'lsa qayta-qayta so'rov yubormaslik uchun
      refetchOnWindowFocus: false,
    },
  },
});

const ProviderConf = ({ children }: { children: React.ReactNode }) => {
  return (
    // 2. QueryClientProvider eng tepada bo'lishi kerak
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
        <Modals />
      </Provider>
    </QueryClientProvider>
  );
};

export default ProviderConf;