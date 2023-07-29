import React from 'react';
import { useWallet } from '@suiet/wallet-kit';

const ListNFTButton = () => {
  const wallet = useWallet();

  const handleListNFT = async () => {
    if (wallet && wallet.connected) {
      console.log('Wallet status:', wallet.status);
      console.log('Connected wallet name:', wallet.name);
      console.log('Connected account info:', wallet.account);

      // TODO: Add the logic for listing the NFT as collateral
      console.log('NFT listed!');
    } else {
      console.log('Wallet is not connected');
    }
  };

  return (
    <button onClick={handleListNFT} disabled={!wallet || !wallet.connected}>
      List NFT as Collateral
    </button>
  );
};

export default ListNFTButton;
