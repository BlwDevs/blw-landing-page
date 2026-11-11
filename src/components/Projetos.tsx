import type { CSSProperties } from 'react';
import { phases } from '../data/methodology';

type State = 'ok' | 'wait' | 'idle';

/** Estado de cada etapa na janela: o projeto está na validação da especificação (E3). */
const stateOf = (code: string): State => {
  const n = Number(code.slice(1));
  return n < 3 ? 'ok' : n === 3 ? 'wait' : 'idle';
};

const LABEL: Record<State, string> = { ok: 'Concluída', wait: 'Em validação', idle: 'Pendente' };
const CHIP: Record<State, string> = { ok: '', wait: ' d-chip--low', idle: ' d-chip--idle' };

const rows = phases.flatMap(phase => phase.steps.map(step => ({ ...step, phase: phase.name })));

/** Projetos sob demanda. A metodologia aparece aqui, por cima: uma janela com as nove etapas, sem detalhar cada uma. */
const Projetos: React.FC = () => {
  return (
    <section className="section" id="projetos" style={{ '--hm': 2 } as CSSProperties} aria-labelledby="projetos-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="projetos-h">Projetos sob demanda</h2>
          <p>
            Do diagnóstico ao sistema em uso, com uma metodologia própria de 9 etapas que você valida a cada fase.
          </p>
        </div>
        <div className="grid grid--top">
          <ul className="rows span-6">
            <li>
              <span className="rows__name">Sistemas de gestão</span>
              <p>Plataformas de processos e painéis para a sua operação.</p>
            </li>
            <li>
              <span className="rows__name">Aplicativos e integrações</span>
              <p>Do celular do campo aos sistemas que você já usa.</p>
            </li>
            <li>
              <span className="rows__name">Automação com IA</span>
              <p>Agentes e leitura de documentos que tiram o trabalho manual.</p>
            </li>
          </ul>

          <div
            className="span-5 start-8"
            role="img"
            aria-label="Esteira de um projeto BLW com as nove etapas: três concluídas e a especificação em validação"
          >
            <div className="d-win ui bw-method" aria-hidden="true">
              <div className="d-win__bar">
                <span className="d-win__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>BLW · Metodologia, esteira do projeto</span>
              </div>
              <div className="d-main">
                <div className="d-rows">
                  {rows.map(row => {
                    const state = stateOf(row.code);
                    return (
                      <div className="d-row" key={row.code}>
                        <span className="d-thumb d-code">{row.code}</span>
                        <div>
                          <b>{row.name}</b>
                        </div>
                        <span className={`d-chip${CHIP[state]}`}>{LABEL[state]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
