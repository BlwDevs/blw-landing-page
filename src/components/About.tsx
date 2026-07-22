import { motion } from 'framer-motion';
import { MapPin, Users, Layers, Handshake } from 'lucide-react';

const timeline = [
  { when: 'jul/2025', what: 'Fundação da BLW em Petrolina/PE e entrada na incubadora INTECVASF' },
  { when: 'set/2025', what: 'Nasce a marca Cultiva.ai' },
  { when: 'nov/2025', what: 'Primeira rodada de validação com produtores do Vale do São Francisco' },
  { when: 'jan/2026', what: 'Aprovação no programa de aceleração Inova Caatinga' },
  { when: 'mar/2026', what: 'Aprovação no edital FACEPE COMPET Soluções' },
  { when: 'jun/2026', what: 'Cultiva.ai nas lojas — primeiros produtores usando na safra' },
];

const pillars = [
  {
    icon: MapPin,
    title: 'Nascida no Vale do São Francisco',
    desc: 'Um dos polos de fruticultura irrigada mais produtivos do país. Estamos onde a manga e a uva são produzidas — não a mil quilômetros de distância.',
  },
  {
    icon: Users,
    title: 'Cinco engenheiros sócios',
    desc: 'Engenharia de computação com mão na terra: visita à propriedade, conversa com agrônomo e código escrito em cima do problema real.',
  },
  {
    icon: Layers,
    title: 'Plataforma, não projeto avulso',
    desc: 'Cada produto adiciona uma camada de dado que fortalece os demais. A gestão alimenta o consultor; a operação alimenta o preditivo.',
  },
  {
    icon: Handshake,
    title: 'Construída com o ecossistema',
    desc: 'INTECVASF, SEBRAE, AgriFuture Hub, São Francisco Valley, FACEPE e Inova Caatinga sustentam a base institucional e técnica do que entregamos.',
  },
];

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[var(--blw-dark)] transition-colors duration-300"
    >
      {/* Background sutil */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-accent-emerald)] bg-[var(--blw-accent-emerald)]/10 border border-[var(--blw-accent-emerald)]/15 mb-4">
            <MapPin className="w-3.5 h-3.5" /> Quem somos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--blw-text)] dark:text-white leading-tight">
            AgTech feita de dentro do agro
          </h2>
          <p className="mt-4 text-lg text-[var(--blw-gray-600)] dark:text-gray-400">
            A BLW Desenvolvimento é uma Empresa Simples de Inovação sediada em Petrolina/PE, dedicada a aplicar
            inteligência artificial ao agronegócio brasileiro — começando por onde conhecemos cada talhão.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-start">
          {/* Pilares */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="p-5 rounded-2xl bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--blw-accent-emerald)]/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-[var(--blw-accent-emerald)]" />
                </div>
                <h3 className="font-semibold text-base text-[var(--blw-text)] dark:text-white leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--blw-gray-600)] dark:text-gray-400 mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Linha do tempo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <h3 className="font-display font-bold text-lg text-[var(--blw-text)] dark:text-white mb-6">
              Nossa trajetória
            </h3>

            <div className="relative pl-6">
              {/* Linha vertical */}
              <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[var(--blw-accent-emerald)] via-[var(--blw-accent-emerald)]/40 to-transparent" />

              <div className="space-y-6">
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.when}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="relative"
                  >
                    <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-[var(--blw-accent-emerald)] ring-4 ring-white dark:ring-[var(--blw-dark)]" />
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--blw-accent-emerald)]">
                      {t.when}
                    </div>
                    <p className="text-sm text-[var(--blw-gray-600)] dark:text-gray-400 mt-1 leading-relaxed">
                      {t.what}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
