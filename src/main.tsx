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
      manifestUrl='https://xbank-xiexueni.github.io/vite-boilerplate/tonconnect-manifest.json'
    >
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
