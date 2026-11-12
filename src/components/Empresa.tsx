import { useState, type CSSProperties } from 'react';
import facepe from '../assets/partners/facepe.png';
import sebrae from '../assets/partners/sebrae.png';
import agriFuture from '../assets/partners/agri-future-hub.png';
import vallis from '../assets/partners/vallis.png';
import nit from '../assets/partners/nit.png';
import dinc from '../assets/partners/dinc.png';
import agrovel from '../assets/partners/agrovel-salitre.png';
import fazendaVitoria from '../assets/partners/fazenda-vitoria.png';
import iarisTech from '../assets/partners/iaris-tech.png';

/** Marcos reais da BLW. O gráfico sobe a cada marco; não há valores no eixo porque não há números a mostrar. */
const milestones = [
  { when: 'jul/2025', what: 'Fundação em Pernambuco e entrada na incubadora INTECVASF' },
  { when: 'set/2025', what: 'Nasce a marca Cultiva.ai' },
  { when: 'nov/2025', what: 'Primeira validação com produtores do Vale' },
  { when: 'jan/2026', what: 'Aprovação no Inova Caatinga' },
  { when: 'mar/2026', what: 'Aprovação no edital FACEPE COMPET Soluções' },
  { when: 'jun/2026', what: 'Cultiva.ai nas lojas, usado na safra' },
];

/** Cada marco é um degrau: plateau, salto, plateau. Os nós ficam no meio de cada plateau, alinhados às colunas. */
const LINE = 'M0 214H60L107 196H227L273 166H394L440 132H560L606 98H727L773 58H894L940 26H1000';
const AREA = `${LINE}V240H0Z`;
const NODES = [
  { x: 83, y: 196 },
  { x: 250, y: 166 },
  { x: 417, y: 132 },
  { x: 583, y: 98 },
  { x: 750, y: 58 },
  { x: 917, y: 26 },
];

interface Partner {
  name: string;
  src: string;
  width: number;
  height: number;
  /** Logo com letras brancas: precisa de uma pílula escura atrás. */
  onDark?: boolean;
}

/** Logos nas cores originais de cada parceiro, sem alteração. */
const partners: Partner[] = [
  { name: 'FACEPE, Fundação de Amparo à Ciência e Tecnologia do Estado de Pernambuco', src: facepe, width: 271, height: 100 },
  { name: 'SEBRAE', src: sebrae, width: 144, height: 100 },
  { name: 'agri.future hub', src: agriFuture, width: 216, height: 80, onDark: true },
  { name: 'Vallis', src: vallis, width: 191, height: 100 },
  { name: 'NIT', src: nit, width: 111, height: 100 },
  { name: 'DINC, Distrito de Irrigação Nilo Coelho', src: dinc, width: 299, height: 100 },
  { name: 'Agrovel Salitre', src: agrovel, width: 114, height: 100 },
  { name: 'Fazenda Vitória, Vale do São Francisco', src: fazendaVitoria, width: 146, height: 112 },
  { name: 'IAris Tech', src: iarisTech, width: 179, height: 112 },
];

const Pause: React.FC = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <rect x="3" y="2" width="3" height="10" rx="1" />
    <rect x="8" y="2" width="3" height="10" rx="1" />
  </svg>
);
const Play: React.FC = () => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M4 2.5v9l7.5-4.5z" />
  </svg>
);

/** Quem somos, a trajetória em gráfico animado e o carrossel de parceiros. */
const Empresa: React.FC = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="section" id="empresa" style={{ '--hm': 2 } as CSSProperties} aria-labelledby="empresa-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="empresa-h">Uma empresa de tecnologia com raízes no Vale</h2>
          <p>
            A BLW Desenvolvimento foi fundada em Pernambuco por cinco engenheiros. Desenvolvemos produtos próprios e software sob medida, com atuação próxima às empresas e aos produtores da região.
          </p>
        </div>

        <div
          className="bw-growth"
          data-m-loop
          role="img"
          aria-label={`Trajetória da BLW, um degrau por marco: ${milestones.map(m => `${m.when}, ${m.what}`).join('; ')}`}
        >
          <div className="bw-growth__chart" aria-hidden="true">
            <svg viewBox="0 0 1000 240" preserveAspectRatio="none">
              <defs>
                <linearGradient id="bw-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#615afb" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#615afb" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="bw-growth__base" d="M0 239H1000" />
              <path className="bw-growth__area" d={AREA} fill="url(#bw-area)" />
              <path className="bw-growth__line" d={LINE} pathLength="1" />
            </svg>
            <ol className="bw-growth__nodes">
              {NODES.map((node, i) => (
                <li
                  key={i}
                  className={`bw-growth__node bw-growth__node--${i + 1}`}
                  style={{ left: `${node.x / 10}%`, top: `${(node.y / 240) * 100}%` }}
                />
              ))}
            </ol>
          </div>
          <ol className="bw-growth__labels" aria-hidden="true">
            {milestones.map((m, i) => (
              <li key={m.when} className={`bw-growth__label bw-growth__label--${i + 1}`}>
                <b>{m.when}</b>
                <span>{m.what}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bw-partner-heading" id="parcerias">
          <h3>Parceiros e instituições que fazem parte da nossa trajetória</h3>
          <p>Uma rede que conecta pesquisa, empreendedorismo e experiência no campo.</p>
        </div>
        <div className={`bw-marquee${paused ? ' is-paused' : ''}`} role="group" aria-label="Parceiros da BLW">
          <div className="bw-marquee__view">
            <ul className="bw-marquee__track" data-edge-free>
              {[...partners, ...partners].map((partner, i) => {
                const copy = i >= partners.length;
                return (
                  <li key={`${partner.name}-${i}`} className={partner.onDark ? 'is-dark' : undefined} aria-hidden={copy || undefined}>
                    <img
                      src={partner.src}
                      alt={copy ? '' : partner.name}
                      width={partner.width}
                      height={partner.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            type="button"
            className="loop-pause"
            aria-label={paused ? 'Retomar o carrossel de parceiros' : 'Pausar o carrossel de parceiros'}
            onClick={() => setPaused(p => !p)}
          >
            {paused ? <Play /> : <Pause />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Empresa;
