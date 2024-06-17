import {
  useTonAddress,
  useTonWallet,
  useTonConnectUI,
  useTonConnectModal,
} from '@tonconnect/ui-react';

const transaction = {
  messages: [
    {
      address:
        '0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F', // destination address
      amount: '20000000', //Toncoin in nanotons
    },
  ],
};

const MyTonConnectUI = () => {
  const userFriendlyAddress = useTonAddress();
  const rowAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const { state, open, close } = useTonConnectModal();
  return (
    <>
      <div>User-friendly address: {userFriendlyAddress}</div>
      <div>Row address: {rowAddress}</div>
      {wallet && (
        <div>
          <span>Connected wallet: {JSON.stringify(wallet)}</span>
          <span>Device: {wallet?.device?.appName}</span>
        </div>
      )}
      <div>
        <div>Modal state: {state?.status}</div>
        <button onClick={open}>Open modal</button>
        <button onClick={() => close()}>Close modal</button>
      </div>
      <button
        onClick={() => {
          // @ts-ignore
          tonConnectUI.sendTransaction(transaction);
        }}
      >
        Send transaction
      </button>
    </>
  );
};

export default MyTonConnectUI;
