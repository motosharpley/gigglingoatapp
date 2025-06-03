import { createAppKit } from '@reown/appkit/react';
import { solanaDevnet } from '@reown/appkit/networks';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';

const projectId = '17c21b4a0eb84ac7580f520706958799';
const solanaAdapter = new SolanaAdapter();

createAppKit({
  adapters: [solanaAdapter],
  networks: [solanaDevnet],
  projectId,
  metadata: {
    name: 'GigglinGOAT',
    description: 'Meme Contest App',
    url: 'https://gigglingoat.com',
    icons: [],
  },
});

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
