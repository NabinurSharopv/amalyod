import Modals from '../../components/modals';
import { Provider } from 'react-redux';
import { store } from '../../redux';

const ProviderConf = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <Modals />
      </Provider>
    </>
  );
};

export default ProviderConf;  