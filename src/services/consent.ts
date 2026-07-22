// Consentimento de cookies (LGPD).
//
// O loader da RD Station NÃO fica no index.html de propósito: ele só é injetado
// depois do aceite. Antes disso nenhum cookie de rastreamento é gravado.
//
// A conversão do formulário (src/services/rdStation.ts) continua sendo enviada
// mesmo sem aceite — ali o visitante digitou os próprios dados justamente para
// ser contatado, o que é a finalidade do formulário. O que muda é que sem o
// cookie `__trf.src` a conversão vai sem origem de tráfego.

const STORAGE_KEY = 'blw-consentimento-cookies';

const RD_LOADER_SRC =
  'https://d335luupugsy2.cloudfront.net/js/loader-scripts/afa60fca-73f9-4e17-b659-05b1568044e3-loader.js';

export type ConsentStatus = 'aceito' | 'recusado';

/** `null` = ainda não decidiu (banner deve aparecer). */
export const getConsent = (): ConsentStatus | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'aceito' || stored === 'recusado' ? stored : null;
  } catch {
    // Modo privado / storage bloqueado: trata como "não decidiu".
    return null;
  }
};

export const setConsent = (status: ConsentStatus): void => {
  try {
    localStorage.setItem(STORAGE_KEY, status);
  } catch {
    // Sem storage o banner reaparece na próxima visita — aceitável.
  }
};

/** Injeta o loader da RD Station uma única vez. */
export const loadRdStation = (): void => {
  if (document.querySelector(`script[src="${RD_LOADER_SRC}"]`)) return;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = RD_LOADER_SRC;
  document.head.appendChild(script);
};
