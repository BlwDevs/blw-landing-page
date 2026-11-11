import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { phases } from '../data/methodology';

const specPoints = [
  'Requisitos numerados, ligados à tela do protótipo e ao critério de aceite.',
  'Regras de negócio escritas na linguagem de quem opera.',
  'Backlog priorizado em épicos, com o escopo de cada ciclo.',
  'Pontos em aberto listados para você decidir antes da construção.',
];

/** Linha que liga as quatro fases. Desenha uma vez quando a seção entra na tela. */
const Rail: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });

  return (
    <div ref={ref} aria-hidden="true" className="relative mb-6 hidden xl:block">
      <div className="absolute inset-x-0 top-1.5 h-px bg-white/12" />
      <div
        className="absolute inset-x-0 top-1.5 h-px origin-left bg-violet"
        style={{
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
      <div className="relative grid grid-cols-4 gap-5">
        {phases.map(phase => (
          <span key={phase.id} className="h-3 w-3 rounded-full bg-violet ring-4 ring-night" />
        ))}
      </div>
    </div>
  );
};

const Metodologia: React.FC = () => {
  return (
    <section id="metodologia" className="section-pad bg-night">
      <div className="wrap">
        <div className="max-w-3xl">
          <p className="eyebrow">Metodologia BLW</p>
          <h2 className="h-section mt-4">Nove etapas, da primeira conversa à decisão sobre o próximo ciclo</h2>
          <p className="lead mt-5 max-w-2xl">
            Todo projeto passa pelas mesmas quatro fases. A BLW especifica antes de construir, e cada fase termina em
            uma entrega que você revisa e aprova.
          </p>
        </div>

        <div className="mt-14">
          <Rail />
          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {phases.map((phase, i) => (
              <li key={phase.id} className="card flex flex-col p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold">{phase.name}</h3>
                  <span className="text-sm font-semibold tracking-[0.16em] text-violet-300">0{i + 1}</span>
                </div>
                <ol className="mt-6 space-y-6">
                  {phase.steps.map(step => (
                    <li key={step.code} className="flex gap-3.5">
                      <span className="mt-0.5 inline-flex h-7 w-10 shrink-0 items-center justify-center rounded-md bg-violet/20 text-sm font-bold text-violet-300">
                        {step.code}
                      </span>
                      <div>
                        <h4 className="text-base font-semibold leading-snug text-white">{step.name}</h4>
                        <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-white/65">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>

        {/* Exemplo do que sai de uma etapa: a especificação (E3) */}
        <div className="card mt-8 grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <p className="eyebrow">Exemplo do que você recebe na E3</p>
            <h3 className="mt-4 text-3xl font-bold leading-tight">Especificação antes de construir</h3>
            <ul className="mt-6 space-y-3.5">
              {specPoints.map(point => (
                <li key={point} className="flex gap-3 text-[1.0625rem] leading-relaxed text-white/75">
                  <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[1.0625rem] leading-relaxed text-white/75">
              O projeto avança em ciclos. O primeiro costuma ser um piloto com uso real, e a cada ciclo decidimos juntos
              o que vem depois.
            </p>
          </div>

          {/* Requisito de exemplo, em formato de especificação */}
          <div className="overflow-hidden rounded-xl bg-white text-ink shadow-[0_28px_70px_-24px_rgba(97,90,251,0.55)]">
            <div className="flex items-center gap-2 border-b border-ink/10 bg-mist px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <span className="ml-2 text-xs font-medium text-ink/60">Especificação funcional · Ciclo 1</span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold tracking-wider text-violet-700">RF-021</p>
                  <h4 className="mt-1 text-lg font-bold leading-snug">Avisar o responsável quando uma tarefa vencer</h4>
                </div>
                <span className="rounded-full bg-violet-700/10 px-2.5 py-1 text-xs font-semibold text-violet-700">
                  Prioridade alta
                </span>
              </div>

              <dl className="mt-5 grid grid-cols-3 gap-3 border-y border-ink/10 py-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink/55">Tela</dt>
                  <dd className="mt-0.5 font-medium">Painel › Tarefas</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink/55">Regra</dt>
                  <dd className="mt-0.5 font-medium">RN-04</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-ink/55">Aceite</dt>
                  <dd className="mt-0.5 font-medium">CA-09</dd>
                </div>
              </dl>

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-ink/55">Critério de aceite</p>
              <dl className="mt-2.5 space-y-2.5 text-[0.9375rem] leading-snug">
                <div className="flex gap-3">
                  <dt className="w-14 shrink-0 font-bold text-violet-700">Dado</dt>
                  <dd>uma tarefa com prazo definido</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-14 shrink-0 font-bold text-violet-700">Quando</dt>
                  <dd>o prazo passar sem a tarefa ser concluída</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-14 shrink-0 font-bold text-violet-700">Então</dt>
                  <dd>o responsável recebe um aviso e a tarefa aparece em “Atrasadas”</dd>
                </div>
              </dl>

              <div className="mt-5 flex items-center justify-between gap-3 rounded-lg bg-mist px-3.5 py-2.5 text-sm">
                <span className="text-ink/60">Backlog</span>
                <span className="text-right font-semibold">Épico 3 · Alertas e prazos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-ink p-7 sm:flex-row sm:items-center sm:p-9">
          <p className="max-w-xl text-lg leading-relaxed text-white/80">
            Quer ver como essas etapas ficam no seu projeto? Conversamos sobre a metodologia, sem compromisso.
          </p>
          <a href="#contato" data-interesse="conhecer-blw" className="btn btn-primary shrink-0">
            Vamos conversar
            <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
