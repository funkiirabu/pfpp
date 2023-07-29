// WalletStatus.js

import { useWallet } from '@suiet/wallet-kit';

function addressEllipsis(address, startLength = 6, endLength = 4) {
  if (!address) {
    return '';
  }
  const start = address.slice(0, startLength);
  const end = address.slice(-endLength);
  return `${start}...${end}`;
}

const WalletStatus = () => {
  const wallet = useWallet();

  return (
    <section>
      <p>
        <span className="gradient">Wallet status:</span> {wallet.status}
      </p>
      <p>
        <span className="gradient">Wallet address:</span> {wallet.account?.address ? addressEllipsis(wallet.account.address) : 'Not connected'}
      </p>
      <p>
        <span className="gradient">Current network:</span> {wallet.chain?.name || 'Not connected'}
      </p>
    </section>
  );
};

export default WalletStatus;
