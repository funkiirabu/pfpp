import '@/styles/globals.css'
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';
import ConnectWallet from '../components/ConnectWallet';  // adjust the path if needed

function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
      <ConnectWallet />
    </WalletProvider>
  );
}

export default App;
