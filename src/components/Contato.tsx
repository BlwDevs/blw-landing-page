import type { CSSProperties } from 'react';
import ContactForm from './ContactForm';

const WHATSAPP_URL = 'https://wa.me/5587988685309';
const EMAIL_URL = 'mailto:blwdevs@gmail.com';

const Contato: React.FC = () => {
  return (
    <section className="section" id="contato" style={{ '--hm': 2 } as CSSProperties} aria-labelledby="contato-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="contato-h">Conversa com a BLW</h2>
          <p>Conte o que você precisa. Respondemos em menos de 24 horas.</p>
        </div>
        <div className="grid grid--top">
          <div className="span-5 stack-6">
            <div
              role="img"
              aria-label="Três tipos de conversa com a BLW: projeto sob demanda, parceria de execução e conhecer a empresa"
            >
              <div className="d-win d-win--roomy ui" aria-hidden="true">
                <div className="d-win__bar">
                  <span className="d-win__dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>BLW · Tipos de conversa</span>
                </div>
                <div className="d-main">
                  <div className="d-rows">
                    <div className="d-row d-row--two">
                      <span className="d-thumb d-code">01</span>
                      <div>
                        <b>Projeto sob demanda</b>
                        <small>Do diagnóstico ao uso</small>
                      </div>
                    </div>
                    <div className="d-row d-row--two">
                      <span className="d-thumb d-code">02</span>
                      <div>
                        <b>Parceria de execução</b>
                        <small>Para startups com financiamento</small>
                      </div>
                    </div>
                    <div className="d-row d-row--two">
                      <span className="d-thumb d-code">03</span>
                      <div>
                        <b>Conhecer a BLW</b>
                        <small>A empresa e a metodologia</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="span-6 start-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
