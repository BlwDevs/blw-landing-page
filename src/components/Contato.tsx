import type { CSSProperties } from 'react';
import ContactForm from './ContactForm';
import bgContato from '../assets/backgrounds/bg-hero.webp';

const WHATSAPP_URL = 'https://wa.me/5587988685309';
const EMAIL_URL = 'mailto:blwdevs@gmail.com';

/** Contato: uma chamada simples da empresa, sem repetir a metodologia. A arte da marca é o fundo do painel de atalhos. */
const Contato: React.FC = () => {
  return (
    <section className="section" id="contato" style={{ '--hm': 2 } as CSSProperties} aria-labelledby="contato-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="contato-h">Conversa com a BLW</h2>
          <p>
            Empresas, startups e produtores do Vale do São Francisco: conte o que você precisa. Respondemos em menos de
            24 horas.
          </p>
        </div>
        <div className="grid grid--top">
          <div className="span-6">
            <ContactForm />
          </div>
          <div className="card span-5 start-8 bw-callout" style={{ backgroundImage: `url(${bgContato})` }}>
            <p className="t-lead">Prefere falar direto?</p>
            <div className="btn-row">
              <a className="btn btn--secondary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <img className="ic ic-20" loading="lazy" decoding="async" src="/assets/icons/whatsapp.svg" alt="" width="20" height="20" />
                Chamar no WhatsApp
              </a>
              <a className="btn btn--secondary" href={EMAIL_URL}>
                <img className="ic ic-20" loading="lazy" decoding="async" src="/assets/icons/gmail.svg" alt="" width="20" height="16" />
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
