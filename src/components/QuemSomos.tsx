const pillars = [
  {
    title: 'No Vale do São Francisco',
    text: 'Um dos polos de fruticultura irrigada mais produtivos do país. Trabalhamos perto de quem usa o que construímos.',
  },
  {
    title: 'Método escrito antes do código',
    text: 'Cada projeto segue as mesmas nove etapas, com requisitos numerados e critérios de aceite definidos antes da construção.',
  },
];

const timeline = [
  { when: 'jul/2025', what: 'Fundação da BLW em Petrolina/PE e entrada na incubadora INTECVASF' },
  { when: 'set/2025', what: 'Nasce a marca Cultiva.ai' },
  { when: 'nov/2025', what: 'Primeira rodada de validação com produtores do Vale do São Francisco' },
  { when: 'jan/2026', what: 'Aprovação no programa de aceleração Inova Caatinga' },
  { when: 'mar/2026', what: 'Aprovação no edital FACEPE COMPET Soluções' },
  { when: 'jun/2026', what: 'Cultiva.ai nas lojas, com os primeiros produtores usando na safra' },
];

const QuemSomos: React.FC = () => {
  return (
    <section id="quem-somos" className="section-pad bg-night">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <p className="eyebrow">Quem somos</p>
          <h2 className="h-section mt-4">Cinco engenheiros sócios, em Petrolina</h2>
          <p className="lead mt-5 max-w-xl">
            A BLW Desenvolvimento é uma Empresa Simples de Inovação sediada em Petrolina, PE. Visitamos o cliente,
            conversamos com quem opera e escrevemos código em cima do problema real.
          </p>

          <ul className="mt-10 space-y-7">
            {pillars.map(pillar => (
              <li key={pillar.title} className="border-t border-white/12 pt-6">
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-white/70">{pillar.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Nossa trajetória</h3>
          <ol className="relative mt-8 space-y-7 border-l border-white/15 pl-7">
            {timeline.map(item => (
              <li key={item.when} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.125rem] top-1.5 h-3 w-3 rounded-full bg-violet ring-4 ring-night"
                />
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-300">{item.when}</p>
                <p className="mt-1 text-[1.0625rem] leading-relaxed text-white/75">{item.what}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
