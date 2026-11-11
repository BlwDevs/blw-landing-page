import { ArrowRight } from 'lucide-react';
import bgHero from '../assets/backgrounds/bg-hero.webp';
import { phases } from '../data/methodology';

/** Reconhecimentos e apoios reais da BLW. Rótulo + nome. */
const proof = [
  { label: 'Parceira', name: 'FACEPE' },
  { label: 'Aprovada no', name: 'Inova Caatinga' },
  { label: 'Incubada na', name: 'INTECVASF' },
  { label: 'Apoio', name: 'SEBRAE' },
];

const Hero: React.FC = () => {
  return (
    <section id="topo" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* Fundo: arte de linhas luminosas da marca. O degradê à esquerda garante a leitura do texto. */}
      <img
        src={bgHero}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[78%_50%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/55 to-transparent sm:via-ink/40 lg:from-ink/30 lg:via-transparent"
      />

      <div className="wrap flex flex-1 items-center pb-12 pt-32 lg:pt-28">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          {/* Texto */}
          <div>
            <p className="eyebrow enter" style={{ '--i': 0 } as React.CSSProperties}>
              BLW Devs · Petrolina, PE
            </p>
            <h1 className="h-display enter mt-5 text-white" style={{ '--i': 1 } as React.CSSProperties}>
              Software sob medida, com método do contato à entrega.
            </h1>
            <p className="lead enter mt-6 max-w-xl" style={{ '--i': 2 } as React.CSSProperties}>
              A BLW é uma empresa de desenvolvimento de Petrolina, PE. Fazemos projetos sob demanda e executamos o
              produto de startups que captaram financiamento. Primeiro especificamos e validamos com você, depois
              construímos.
            </p>
            <div
              className="enter mt-9 flex flex-col gap-3 sm:flex-row"
              style={{ '--i': 3 } as React.CSSProperties}
            >
              <a href="#contato" className="btn btn-primary">
                Vamos conversar
                <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#metodologia" className="btn btn-secondary">
                Conhecer a metodologia
              </a>
            </div>
          </div>

          {/* A metodologia em uma olhada */}
          <div className="enter relative hidden md:block" style={{ '--i': 4 } as React.CSSProperties}>
            <div className="relative rounded-2xl border border-white/12 bg-night/75 p-5 backdrop-blur-md sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <p className="eyebrow">Metodologia BLW</p>
                <p className="text-sm text-white/55">9 etapas · 4 fases</p>
              </div>
              <ol className="mt-5 divide-y divide-white/10">
                {phases.map(phase => (
                  <li key={phase.id} className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                    <span className="pt-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                      {phase.name}
                    </span>
                    <ul className="flex flex-wrap gap-2">
                      {phase.steps.map(step => (
                        <li
                          key={step.code}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.04] px-2.5 py-1.5 text-sm text-white transition-colors hover:border-violet/70 hover:bg-violet/15"
                        >
                          <span className="font-bold text-violet-300">{step.code}</span>
                          {step.short}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              <a
                href="#metodologia"
                className="link-draw mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-violet-300"
              >
                Ver as nove etapas
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Prova: apoio e reconhecimento do ecossistema */}
      <div className="border-t border-white/10 bg-ink/60 backdrop-blur-sm">
        <ul className="wrap grid grid-cols-2 gap-x-6 gap-y-5 py-6 lg:grid-cols-4">
          {proof.map(item => (
            <li key={item.name} className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">{item.label}</span>
              <span className="text-lg font-semibold text-white">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
