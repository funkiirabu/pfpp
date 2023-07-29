import ListNFTButton from '../components/ListNFTButton';

function Home() {
  return (
    <div>
      <h1>Welcome to pfpp!</h1>
      <p>
        This is a (DApp) that allows you to use your NFTs as collateral
        for loans. To get started, connect your wallet.
      </p>
      <ListNFTButton />
    </div>
  );
}

export default Home;
