import { useEffect, useState } from 'react';
import { getConsent, setConsent, loadRdStation, type ConsentStatus } from '../services/consent';

const LABEL: Record<ConsentStatus | 'pendente', string> = {
  pendente: 'Cookies de análise: escolher',
  aceito: 'Cookies de análise: aceitos',
  recusado: 'Cookies de análise: recusados',
};

/**
 * Consentimento de cookies de análise (LGPD), no rodapé: o kit do taste-skill não admite avisos fixos na tela.
 * Nada é ativado antes do aceite, e a escolha pode ser trocada aqui a qualquer momento (recusar depois de
 * aceitar só vale para a próxima visita, porque o script já carregado não é desfeito).
 */
const CookieConsent: React.FC = () => {
  const [status, setStatus] = useState<ConsentStatus | null>(null);

  useEffect(() => {
    const consent = getConsent();
    setStatus(consent);
    if (consent === 'aceito') loadRdStation();
  }, []);

  const decide = (next: ConsentStatus) => {
    setConsent(next);
    setStatus(next);
    if (next === 'aceito') loadRdStation();
  };

  return (
    <details className="credits bw-cookies">
      <summary>{LABEL[status ?? 'pendente']}</summary>
      <p>
        Usamos cookies de análise para entender como você chegou ao site. Nada é ativado sem o seu aceite, e recusar não
        atrapalha a navegação nem o contato.
      </p>
      <div className="btn-row">
        <button type="button" className="btn btn--primary" onClick={() => decide('aceito')}>
          Aceitar cookies
        </button>
        <button type="button" className="btn btn--secondary" onClick={() => decide('recusado')}>
          Recusar cookies
        </button>
      </div>
    </details>
  );
};

export default CookieConsent;
