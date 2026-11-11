import { ArrowRight } from 'lucide-react';

/** Como a metodologia se aplica a uma startup com financiamento. */
const steps = [
  {
    phase: 'E0 a E2',
    title: 'Lemos o plano',
    text: 'Partimos do plano de trabalho do financiamento e do que a startup precisa entregar em cada marco.',
  },
  {
    phase: 'E3',
    title: 'Especificamos',
    text: 'Escrevemos requisitos, critérios de aceite e um backlog priorizado pelos marcos.',
  },
  {
    phase: 'E4 a E6',
    title: 'Construímos e verificamos',
    text: 'Entregas curtas, testadas contra os critérios de aceite e validadas com a startup.',
  },
  {
    phase: 'E7 e E8',
    title: 'Documentamos e decidimos',
    text: 'Cada etapa deixa um registro rastreável, que ajuda na prestação de contas. No fim do ciclo decidimos o próximo passo.',
  },
];

const ecosystem = [
  { name: 'FACEPE', detail: 'Edital COMPET Soluções', status: 'Parceira' },
  { name: 'Inova Caatinga', detail: 'Programa de aceleração', status: 'Aprovada' },
  { name: 'INTECVASF', detail: 'Incubadora no Vale do São Francisco', status: 'Incubada' },
  { name: 'SEBRAE', detail: 'Capacitação e desenvolvimento empresarial', status: 'Apoio' },
];

const Parceria: React.FC = () => {
  return (
    <section id="parceria" className="on-light section-pad bg-mist text-ink">
      <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow">Para startups com financiamento</p>
          <h2 className="h-section mt-4 text-ink">Parceira de execução para quem captou recurso e precisa entregar</h2>
          <p className="lead mt-5 max-w-xl">
            Edital, aceleração ou investimento: o recurso chega com prazo, escopo e prestação de contas. A BLW entra
            como o time que desenvolve o produto dentro desses limites.
          </p>

          <ol className="mt-10 space-y-7">
            {steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-ink/12 pt-6">
                <span className="text-2xl font-extrabold text-violet-700">0{i + 1}</span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/50">{step.phase}</span>
                  </div>
                  <p className="mt-1.5 text-[1.0625rem] leading-relaxed text-ink/70">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <a href="#contato" data-interesse="parceria-executora" className="btn btn-primary mt-10">
            Propor uma parceria
            <ArrowRight className="arrow h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <aside className="self-start rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_24px_60px_-30px_rgba(12,11,24,0.35)] sm:p-8 lg:sticky lg:top-28">
          <p className="eyebrow">Já fazemos parte desse ecossistema</p>
          <ul className="mt-6 divide-y divide-ink/10">
            {ecosystem.map(item => (
              <li key={item.name} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="text-lg font-bold text-ink">{item.name}</p>
                  <p className="mt-0.5 text-[0.9375rem] text-ink/65">{item.detail}</p>
                </div>
                <span className="shrink-0 rounded-full bg-violet-700/10 px-3 py-1 text-xs font-semibold text-violet-700">
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-ink/10 pt-5 text-[0.9375rem] leading-relaxed text-ink/65">
            Também fazemos parte das redes AgriFuture Hub e São Francisco Valley.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Parceria;
