import { motion } from 'framer-motion';
import { Sprout, MessageSquareText, Radio, Blocks, ArrowRight, Check } from 'lucide-react';

interface Solution {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accent: string;
  featured?: boolean;
  target: string;
  cta: { label: string; anchor: string };
}

const solutions: Solution[] = [
  {
    id: 'gestao',
    badge: 'Produto',
    name: 'Cultiva.ai Gestão',
    tagline: 'A fazenda organizada no celular — sem planilha e sem escritório.',
    bullets: [
      'Financeiro, estoque, insumos e atividades',
      'Custo por safra e por talhão',
      'Lançamento por voz e foto de nota fiscal',
    ],
    icon: Sprout,
    accent: 'var(--blw-accent-emerald)',
    featured: true,
    target: 'Produtores de manga e uva · equipes de campo',
    cta: { label: 'Conhecer o Cultiva.ai', anchor: 'cultiva-ai' },
  },
  {
    id: 'consultor',
    badge: 'Produto',
    name: 'Cultiva.ai Consultoria',
    tagline: 'Um consultor agronômico no bolso, disponível 24/7.',
    bullets: [
      'Manejo, solo, frutos e clima por voz ou chat',
      'Base científica + histórico da própria fazenda',
      'Complementa a consultoria presencial',
    ],
    icon: MessageSquareText,
    accent: 'var(--blw-accent-violet)',
    featured: true,
    target: 'Produtores · agrônomos consultores',
    cta: { label: 'Ver o consultor em ação', anchor: 'consultor-digital' },
  },
  {
    id: 'guard',
    badge: 'Piloto DINC',
    name: 'Cultiva.Guard (SDPAH)',
    tagline: 'Detecção e previsão de rompimentos em adutoras com machine learning.',
    bullets: [
      'Anomalias detectadas nos dados que já existem',
      'Alertas em tempo real, sem hardware novo',
      'Piloto com o Distrito de Irrigação Nilo Coelho',
    ],
    icon: Radio,
    accent: 'var(--blw-accent-cyan)',
    target: 'Distritos de irrigação · concessionárias',
    cta: { label: 'Entender o Cultiva.Guard', anchor: 'cultiva-guard' },
  },
  {
    id: 'sob-medida',
    badge: 'Sob medida',
    name: 'Soluções para empresas do agro',
    tagline: 'Processos internos otimizados com tecnologia e inteligência artificial.',
    bullets: [
      'Agentes de IA para operação e atendimento',
      'Integração e leitura de dados dispersos',
      'Automação de rotinas e relatórios',
    ],
    icon: Blocks,
    accent: 'var(--blw-blue)',
    target: 'Cooperativas · associações · packing houses',
    cta: { label: 'Falar sobre meu processo', anchor: 'sob-medida' },
  },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const Solutions: React.FC = () => {
  return (
    <section
      id="services-start"
      className="relative py-24 md:py-32 overflow-hidden bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-accent-emerald)] bg-[var(--blw-accent-emerald)]/10 border border-[var(--blw-accent-emerald)]/15 mb-4">
            <Sprout className="w-3.5 h-3.5" /> Soluções
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--blw-text)] dark:text-white leading-tight">
            Do caderno à decisão
          </h2>
          <p className="mt-4 text-lg text-[var(--blw-gray-600)] dark:text-gray-400">
            Uma plataforma de produtos que transforma o dado que o agro já produz — e não usa — em decisão prática.
            Cada camada de dado fortalece a próxima.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {solutions.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col p-6 md:p-7 rounded-2xl bg-white dark:bg-[var(--blw-dark-card)] border transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: s.featured ? `color-mix(in srgb, ${s.accent} 30%, transparent)` : undefined,
              }}
            >
              {/* Card sem destaque usa a borda padrão */}
              {!s.featured && (
                <div className="absolute inset-0 rounded-2xl border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] pointer-events-none" />
              )}

              <div className="relative flex items-start justify-between gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `color-mix(in srgb, ${s.accent} 12%, transparent)` }}
                >
                  <s.icon className="w-6 h-6" style={{ color: s.accent }} />
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    color: s.accent,
                    backgroundColor: `color-mix(in srgb, ${s.accent} 10%, transparent)`,
                  }}
                >
                  {s.badge}
                </span>
              </div>

              <h3 className="relative font-display text-xl md:text-2xl font-bold text-[var(--blw-text)] dark:text-white leading-tight">
                {s.name}
              </h3>
              <p className="relative mt-2 text-sm text-[var(--blw-gray-600)] dark:text-gray-400 leading-relaxed">
                {s.tagline}
              </p>

              <ul className="relative mt-5 space-y-2.5 flex-1">
                {s.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: s.accent }} />
                    <span className="text-sm text-[var(--blw-gray-600)] dark:text-gray-400">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-6 pt-5 border-t border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] flex items-center justify-between gap-4 flex-wrap">
                <span className="text-[11px] text-[var(--blw-gray-400)] uppercase tracking-wider">{s.target}</span>
                <button
                  onClick={() => scrollTo(s.cta.anchor)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                  style={{ color: s.accent }}
                >
                  {s.cta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
