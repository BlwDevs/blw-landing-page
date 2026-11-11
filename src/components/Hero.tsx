import { ArrowRight } from 'lucide-react';
import { BlwSymbol, BrandPattern } from './BlwLogo';
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
      {/* Fundo: brilhos da marca + padrão de símbolos em contorno */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 55% at 88% -5%, rgba(97,90,251,0.38) 0%, transparent 62%), radial-gradient(50% 45% at 0% 100%, rgba(161,71,184,0.22) 0%, transparent 65%)',
        }}
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="arc-a" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#615afb" stopOpacity="0" />
            <stop offset="0.55" stopColor="#615afb" stopOpacity="0.5" />
            <stop offset="1" stopColor="#a7a3ff" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path d="M-80 760 C 330 520, 760 330, 1520 -40" stroke="url(#arc-a)" strokeWidth="1.5" />
        <path d="M-80 830 C 380 610, 860 420, 1520 90" stroke="url(#arc-a)" strokeWidth="1" opacity="0.6" />
      </svg>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 text-white/[0.07]"
        style={{
          maskImage: 'radial-gradient(70% 70% at 70% 40%, #000 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(70% 70% at 70% 40%, #000 0%, transparent 75%)',
        }}
      >
        <BrandPattern />
      </div>

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
            <BlwSymbol
              tone="on-dark"
              className="pointer-events-none absolute -right-10 -top-14 hidden h-[118%] w-auto opacity-[0.16] lg:block"
            />
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
