import '@/styles/globals.css'
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import ConnectWallet from '../components/ConnectWallet';
import WalletStatus from '../components/WalletStatus';  // import WalletStatus

function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
      <ConnectWallet />
      <WalletStatus />  // add WalletStatus
    </WalletProvider>
  );
}

export default App;
