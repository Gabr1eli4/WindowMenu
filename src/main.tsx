import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

import '@/assets/style/Index.scss';
import { useMenu } from './hooks/useMenu';

useMenu();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
