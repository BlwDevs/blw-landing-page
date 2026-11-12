import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import './index.css';
import Header from './components/Header';
import Sections from './App';
import Footer from './components/Footer';
import { loadKit } from './kit';

/**
 * A página do kit é uma pilha de header.nav, main e footer.closing direto no <body> (layout-v4.md). Por isso
 * não existe um div#root: cada uma das três peças é uma raiz do React, montada na tag que já está no HTML.
 */
const mount = (id: string, tree: React.ReactNode): void => {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Failed to find #${id}`);
  const root = createRoot(el);
  flushSync(() => root.render(<StrictMode>{tree}</StrictMode>));
};

mount('nav-root', <Header />);
mount('top', <Sections />);
mount('closing-root', <Footer />);

// Os scripts do kit leem o DOM pronto: entram depois que as três peças estão desenhadas.
void loadKit();
