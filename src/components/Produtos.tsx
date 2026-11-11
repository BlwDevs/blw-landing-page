import { ArrowUpRight } from 'lucide-react';
import { CULTIVA_APP_URL } from '../constants';

const products = [
  {
    tag: 'App no ar',
    name: 'Cultiva.ai Gestão',
    text: 'Gestão da propriedade rural no celular: financeiro da safra, estoque de insumos, lançamento por voz e nota fiscal lida por foto.',
    meta: 'Android e iOS · em uso por produtores do Vale do São Francisco',
    cta: 'Baixar o app',
    href: CULTIVA_APP_URL,
  },
  {
    tag: 'Agente de IA',
    name: 'Cultiva.ai Consultoria',
    text: 'Consultor digital que responde dúvidas de manejo, análise de solo e rotina de cooperativas, 24 horas por dia.',
    meta: 'Manejo · Solo · Cooperativas',
  },
  {
    tag: 'Piloto no DINC',
    name: 'Cultiva.Guard',
    text: 'Detecta e prevê anomalias em adutoras usando a telemetria que o distrito de irrigação já tem, sem instalar sensor novo.',
    meta: 'Desenvolvido com o Distrito de Irrigação Senador Nilo Coelho',
  },
];

const stack = ['Flutter', 'Go', 'PostgreSQL', 'Agentes de IA', 'Visão computacional', 'Voz'];

const Produtos: React.FC = () => {
  return (
    <section id="produtos" className="section-pad bg-ink">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Produtos próprios</p>
          <h2 className="h-section mt-4">O que a BLW já construiu para o agronegócio</h2>
          <p className="lead mt-5">
            Os produtos nasceram no Vale do São Francisco, junto com produtores e com um distrito de irrigação.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map(product => (
            <li key={product.name} className="card flex flex-col p-7">
              <span className="w-fit rounded-full bg-violet/20 px-3 py-1 text-xs font-semibold text-violet-300">
                {product.tag}
              </span>
              <h3 className="mt-5 text-2xl font-bold">{product.name}</h3>
              <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-white/70">{product.text}</p>
              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-white/55">{product.meta}</p>
              {product.href && (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw mt-3 inline-flex min-h-[44px] w-fit items-center gap-1.5 font-semibold text-violet-300"
                >
                  {product.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-white/10 pt-8">
          <span className="mr-2 text-sm text-white/55">Tecnologias dos nossos produtos</span>
          {stack.map(item => (
            <span key={item} className="rounded-lg border border-white/12 px-3 py-1.5 text-sm text-white/85">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produtos;
