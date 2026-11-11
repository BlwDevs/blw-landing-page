import bgHero from '../assets/backgrounds/bg-hero.webp';
import { phases } from '../data/methodology';

type State = 'ok' | 'wait' | 'idle';

/** Estado de cada etapa na janela do hero: o projeto está na validação da especificação (E3). */
const stateOf = (code: string): State => {
  const n = Number(code.slice(1));
  return n < 3 ? 'ok' : n === 3 ? 'wait' : 'idle';
};

const LABEL: Record<State, string> = { ok: 'Concluída', wait: 'Em validação', idle: 'Pendente' };
const CHIP: Record<State, string> = { ok: '', wait: ' d-chip--low', idle: ' d-chip--idle' };

const rows = phases.flatMap(phase => phase.steps.map(step => ({ ...step, phase: phase.name })));

const Arrow: React.FC = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

/** Hero "collage": o texto à esquerda, a esteira de etapas de um projeto na janela à direita. */
const Hero: React.FC = () => {
  return (
    <section className="hero hero--collage" data-enter aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <h1 id="hero-h">Software sob medida para empresas e startups</h1>
            <p className="hero__lead">
              A BLW, de Petrolina (PE), desenvolve software sob demanda e executa o produto de startups com
              financiamento. São 9 etapas, da primeira conversa à entrega, e você valida cada fase.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#contato">
                Falar com a BLW
                <Arrow />
              </a>
              <a className="btn btn--secondary" href="#metodologia">
                Ver a metodologia
              </a>
            </div>
            <p className="hero__proof">Parceira da FACEPE. Aprovada no Inova Caatinga.</p>
          </div>

          <div
            className="hero__art span-6 start-7"
            role="img"
            aria-label="Esteira de um projeto BLW com as nove etapas: três concluídas e a especificação em validação"
            style={{ backgroundImage: `url(${bgHero})` }}
          >
            <div className="ly-piece ly-piece--main d-win" aria-hidden="true">
              <div className="d-win__bar">
                <span className="d-win__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>BLW · Esteira do projeto</span>
              </div>
              <div className="d-main">
                <div className="d-main__head">
                  <h4>Metodologia BLW</h4>
                  <span className="d-btn">Ciclo 1</span>
                </div>
                <div className="d-tabs">
                  <span className="is-on">Todas 9</span>
                  <span>Concluídas</span>
                  <span>Pendentes</span>
                </div>
                <div className="d-rows">
                  {rows.map(row => {
                    const state = stateOf(row.code);
                    return (
                      <div className="d-row" key={row.code}>
                        <span className="d-thumb d-code">{row.code}</span>
                        <div>
                          <b>{row.name}</b>
                          <small>{row.phase}</small>
                        </div>
                        <span className={`d-chip${CHIP[state]}`}>{LABEL[state]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="ly-piece ly-piece--note d-card" aria-hidden="true" data-ly-steps="700">
              <div className="d-card__row">
                <h5>E3 · Especificação</h5>
                <span className="d-chip" data-step data-step-at="4">
                  Aprovada
                </span>
              </div>
              <div className="d-note__line" data-step>
                <i>✓</i>
                <span>
                  <b>Requisitos</b> escritos e numerados
                </span>
              </div>
              <div className="d-note__line" data-step>
                <i>✓</i>
                <span>
                  <b>Protótipo</b> validado por você
                </span>
              </div>
              <div className="d-note__line" data-step>
                <i>✓</i>
                <span>
                  <b>Backlog</b> priorizado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
