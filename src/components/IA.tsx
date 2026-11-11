import type { CSSProperties } from 'react';
const capabilities = [
  { name: 'Visão computacional', text: 'Leitura de notas fiscais e documentos a partir de uma foto.' },
  { name: 'Agentes de IA', text: 'Consultor digital que responde por conversa, 24 horas por dia.' },
  { name: 'Previsão e anomalias', text: 'Modelos de ML sobre a telemetria que a operação já gera.' },
  { name: 'Voz', text: 'Lançamento de dados falando, no meio do campo.' },
];

const steps = [
  { code: '1', name: 'Foto da nota fiscal', detail: 'Enviada pelo celular', chip: 'Recebida', cls: '' },
  { code: '2', name: 'Campos lidos pela IA', detail: 'Fornecedor, itens e valor', chip: 'Lida', cls: '' },
  { code: '3', name: 'Lançamento no financeiro', detail: 'Na safra e no talhão certos', chip: 'Lançada', cls: '' },
];

/** IA aplicada: o que a BLW desenvolve com inteligência artificial e visão computacional. */
const IA: React.FC = () => {
  return (
    <section className="section bw-ia" id="ia" style={{ '--hm': 2 } as CSSProperties} aria-labelledby="ia-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="ia-h">Inteligência artificial e visão computacional</h2>
          <p>Projetos de IA sob medida, de agentes de conversa a modelos que leem imagens e dados de campo.</p>
        </div>
        <div className="grid grid--top">
          <ul className="rows span-6">
            {capabilities.map(item => (
              <li key={item.name}>
                <span className="rows__name">{item.name}</span>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>

          <div
            className="span-5 start-8"
            role="img"
            aria-label="Leitura de uma nota fiscal por foto: recebida, lida pela IA e lançada no financeiro"
          >
            <div className="d-win ui d-win--roomy" aria-hidden="true">
              <div className="d-win__bar">
                <span className="d-win__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>Cultiva.ai · Nota fiscal por foto</span>
              </div>
              <div className="d-main">
                <div className="d-rows">
                  {steps.map(step => (
                    <div className="d-row" key={step.code}>
                      <span className="d-thumb d-code">{step.code}</span>
                      <div>
                        <b>{step.name}</b>
                        <small>{step.detail}</small>
                      </div>
                      <span className="d-chip">{step.chip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IA;
