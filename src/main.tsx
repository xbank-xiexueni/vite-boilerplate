import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import WebApp from '@twa-dev/sdk';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TonConnectUIProvider
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/XXNFirstBot/app',
      }}
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: 'safepalwallet',
            name: 'SafePal',
            imageUrl:
              'https://s.pvcliping.com/web/public_image/SafePal_x288.png',
            tondns: '',
            aboutUrl: 'https://www.safepal.com',
            universalLink: 'https://link.safepal.io/ton-connect',
            jsBridgeKey: 'safepalwallet',
            bridgeUrl: 'https://ton-bridge.safepal.com/tonbridge/v1/bridge',
            platforms: ['ios', 'android', 'chrome', 'firefox'],
          },
          {
            appName: 'bitgetTonWallet',
            name: 'Bitget Wallet',
            imageUrl:
              'https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget%20wallet_logo_iOS.png',
            aboutUrl: 'https://web3.bitget.com',
            deepLink: 'bitkeep://',
            jsBridgeKey: 'bitgetTonWallet',
            bridgeUrl: 'https://bridge.tonapi.io/bridge',
            platforms: ['ios', 'android', 'chrome'],
            universalLink: 'https://bkcode.vip/ton-connect',
          },
          {
            appName: 'tonwallet',
            name: 'TON Wallet',
            imageUrl: 'https://wallet.ton.org/assets/ui/qr-logo.png',
            aboutUrl:
              'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
            universalLink: 'https://wallet.ton.org/ton-connect',
            jsBridgeKey: 'tonwallet',
            bridgeUrl: 'https://bridge.tonapi.io/bridge',
            platforms: ['chrome', 'android'],
          },
        ],
      }}
      manifestUrl='https://xbank-xiexueni.github.io/vite-boilerplate/tonconnect-manifest.json'
    >
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
