import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import Analytics from './components/Analytics.tsx';

const root = document.getElementById('root')!;
if (root.hasChildNodes()) root.replaceChildren();
createRoot(root).render(
  <StrictMode>
    <HelmetProvider><Analytics/><App /></HelmetProvider>
  </StrictMode>
);
