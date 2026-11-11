import type { CSSProperties } from 'react';
import { phases, type MethodPhase } from '../data/methodology';

/** O que a fase deixa nas mãos do cliente. */
const deliverables: Record<string, string> = {
  entrada: 'Escopo inicial e responsáveis',
  entender: 'Especificação e backlog priorizado',
  construir: 'Entregas verificadas',
  entregar: 'Sistema em uso e decisão do ciclo',
};

/** Texto de cada passo: um título que diz a fase e duas linhas. */
const chapters: Record<string, { title: string; text: string }> = {
  entrada: {
    title: 'Entrada: etapas E0 e E1',
    text: 'Entendemos o que você precisa e formalizamos o início, com escopo e responsáveis.',
  },
  entender: {
    title: 'Entender: etapas E2 e E3',
    text: 'Vamos ao processo real e escrevemos requisitos, critérios de aceite e backlog priorizado.',
  },
  construir: {
    title: 'Construir: etapas E4 a E6',
    text: 'Definimos a arquitetura, desenvolvemos com apoio de IA e verificamos cada entrega.',
  },
  entregar: {
    title: 'Entregar: etapas E7 e E8',
    text: 'Colocamos o sistema em uso. No fim do ciclo, decidimos juntos: encerrar, abrir novo ciclo ou pausar.',
  },
};

const PhaseWindow: React.FC<{ phase: MethodPhase; index: number }> = ({ phase, index }) => (
  <figure
    className="mo-pc__visual"
    role="img"
    aria-label={`Fase ${index + 1} de 4, ${phase.name}: ${phase.steps.map(s => `${s.code} ${s.name}`).join('; ')}`}
  >
    <div className="d-card ui bw-phase" aria-hidden="true">
      <div className="d-card__row">
        <h5>{phase.name}</h5>
        <span className="d-chip">Fase {index + 1} de 4</span>
      </div>
      {phase.steps.map(step => (
        <div className="d-note__line" key={step.code}>
          <i>✓</i>
          <span>
            <b>{step.code}</b> {step.name}
          </span>
        </div>
      ))}
      <div className="bw-phase__out">
        <small>Você recebe</small>
        <b>{deliverables[phase.id]}</b>
      </div>
    </div>
  </figure>
);

/** Momento "pinned-chapters": a seção fica duas telas na tela e abre uma fase por vez, com a janela dela ao lado. */
const Metodologia: React.FC = () => {
  return (
    <section
      className="section"
      id="metodologia"
      style={{ '--h': 2, '--hm': 2 } as CSSProperties}
      data-moment="pinned-chapters"
      aria-labelledby="metodologia-h"
    >
      <div className="wrap mo-pc__grid">
        <div className="mo-pc__text">
          <h2 id="metodologia-h">Nove etapas em quatro fases</h2>
          <ol className="mo-pc__steps">
            {phases.map((phase, index) => (
              <li className="mo-pc__step" key={phase.id}>
                <h3>{chapters[phase.id].title}</h3>
                <p>{chapters[phase.id].text}</p>
                <PhaseWindow phase={phase} index={index} />
              </li>
            ))}
          </ol>
        </div>
        <div className="mo-pc__visuals frame" />
      </div>
    </section>
  );
};

export default Metodologia;
