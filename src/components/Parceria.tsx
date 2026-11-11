import type { CSSProperties } from 'react';

/** Como a metodologia se aplica a uma startup com financiamento. */
const steps = [
  { name: 'Ler o plano', text: 'Partimos do plano de trabalho do financiamento.', value: 'E0 a E2' },
  { name: 'Especificar', text: 'Requisitos e backlog priorizados pelos marcos.', value: 'E3' },
  { name: 'Construir e verificar', text: 'Entregas curtas, testadas contra os critérios de aceite.', value: 'E4 a E6' },
  { name: 'Registrar e decidir', text: 'Cada etapa deixa registro. No fim, decidimos o próximo ciclo.', value: 'E7 e E8' },
];

const ecosystem = [
  { code: 'FA', name: 'FACEPE', detail: 'Edital COMPET Soluções', status: 'Parceira' },
  { code: 'IC', name: 'Inova Caatinga', detail: 'Programa de aceleração', status: 'Aprovada' },
  { code: 'IN', name: 'INTECVASF', detail: 'Incubadora no Vale do São Francisco', status: 'Incubada' },
  { code: 'SE', name: 'SEBRAE', detail: 'Capacitação e desenvolvimento', status: 'Apoio' },
];

const Parceria: React.FC = () => {
  return (
    <section className="section" id="parceria" style={{ '--hm': 2 } as CSSProperties} aria-labelledby="parceria-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="parceria-h">Parceria de execução para startups com financiamento</h2>
          <p>O recurso chega com prazo e prestação de contas. A BLW desenvolve o produto dentro desses limites.</p>
        </div>
        <div className="grid grid--top">
          <div className="span-6 stack-6">
            <ul className="rows">
              {steps.map(step => (
                <li key={step.name}>
                  <span className="rows__name">{step.name}</span>
                  <p>{step.text}</p>
                  <span className="rows__value">{step.value}</span>
                </li>
              ))}
            </ul>
            <div className="btn-row">
              <a className="btn btn--secondary" href="#contato" data-interesse="parceria-executora">
                Propor uma parceria
              </a>
            </div>
          </div>

          <div
            className="span-6 start-7"
            role="img"
            aria-label="Ecossistema de fomento da BLW: parceira da FACEPE, aprovada no Inova Caatinga, incubada na INTECVASF e com apoio do SEBRAE"
          >
            <div className="d-win d-win--roomy ui" aria-hidden="true">
              <div className="d-win__bar">
                <span className="d-win__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>BLW · Ecossistema de fomento</span>
              </div>
              <div className="d-main">
                <div className="d-rows">
                  {ecosystem.map(item => (
                    <div className="d-row" key={item.name}>
                      <span className="d-thumb d-code">{item.code}</span>
                      <div>
                        <b>{item.name}</b>
                        <small>{item.detail}</small>
                      </div>
                      <span className="d-chip">{item.status}</span>
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

export default Parceria;
