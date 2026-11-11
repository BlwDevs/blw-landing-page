import { ArrowRight, Blocks, Handshake, Package } from 'lucide-react';

const arms = [
  {
    icon: Blocks,
    title: 'Projetos sob demanda',
    text: 'Sistemas de gestão, plataformas de processos, aplicativos e integrações feitos para a sua operação. Você traz o problema e nós levamos do diagnóstico à operação, nas nove etapas da metodologia.',
    cta: 'Contar o meu projeto',
    href: '#contato',
    interesse: 'projeto-sob-demanda',
  },
  {
    icon: Handshake,
    title: 'Parceira executora de startups',
    text: 'Sua startup captou recurso em edital, aceleração ou investimento? A BLW assume o desenvolvimento do produto dentro do escopo, do prazo e dos marcos do financiamento.',
    cta: 'Ver como funciona',
    href: '#parceria',
  },
  {
    icon: Package,
    title: 'Produtos próprios',
    text: 'Criamos e mantemos produtos de IA para o agronegócio, como o Cultiva.ai, usado por produtores do Vale do São Francisco.',
    cta: 'Conhecer os produtos',
    href: '#produtos',
  },
];

const Atuacao: React.FC = () => {
  return (
    <section id="atuacao" className="section-pad bg-ink">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Atuação</p>
          <h2 className="h-section mt-4">Três formas de trabalhar com a BLW</h2>
          <p className="lead mt-5">
            Contrate um projeto, tenha a BLW como time de execução do seu produto ou conheça o que já construímos.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {arms.map((arm, i) => (
            <li key={arm.title} className="card flex flex-col p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet/20 text-violet-300">
                  <arm.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold tracking-[0.16em] text-white/40">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{arm.title}</h3>
              <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-white/70">{arm.text}</p>
              <a
                href={arm.href}
                data-interesse={arm.interesse}
                className="link-draw mt-7 inline-flex min-h-[44px] w-fit items-center gap-2 font-semibold text-violet-300"
              >
                {arm.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Atuacao;
