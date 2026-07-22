import { motion } from 'framer-motion';
import { Building2, GraduationCap, Rocket, Network, FlaskConical, Droplets } from 'lucide-react';

const partners = [
  {
    name: 'INTECVASF',
    role: 'Incubadora',
    desc: 'Incubação da BLW no Vale do São Francisco',
    icon: Building2,
  },
  {
    name: 'SEBRAE',
    role: 'Apoio ao negócio',
    desc: 'Capacitação e desenvolvimento empresarial',
    icon: GraduationCap,
  },
  {
    name: 'AgriFuture Hub',
    role: 'Hub de inovação agro',
    desc: 'Conexão com o ecossistema do agronegócio',
    icon: Rocket,
  },
  {
    name: 'São Francisco Valley',
    role: 'Ecossistema de inovação',
    desc: 'Rede de inovação do Vale do São Francisco',
    icon: Network,
  },
];

const support = [
  { label: 'FACEPE', detail: 'Edital COMPET Soluções', icon: FlaskConical },
  { label: 'Inova Caatinga', detail: 'Programa de aceleração', icon: Rocket },
  { label: 'DINC', detail: 'Distrito de Irrigação Nilo Coelho — piloto Cultiva.Guard', icon: Droplets },
];

const Partners: React.FC = () => {
  return (
    <section id="parceiros" className="relative py-20 md:py-24 overflow-hidden bg-white dark:bg-[var(--blw-dark)] transition-colors duration-300">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--blw-gray-400)]">
            Construímos junto com o ecossistema
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[var(--blw-text)] dark:text-white">
            Parceiros e apoiadores
          </h2>
        </motion.div>

        {/* Parceiros principais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group p-5 rounded-2xl bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] hover:border-[var(--blw-accent-emerald)]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--blw-accent-emerald)]/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-[var(--blw-accent-emerald)]" />
              </div>
              <div className="font-display font-bold text-base text-[var(--blw-text)] dark:text-white leading-tight">
                {p.name}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--blw-accent-emerald)] mt-1">
                {p.role}
              </div>
              <p className="text-xs text-[var(--blw-gray-600)] dark:text-gray-400 mt-2 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fomento e pilotos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-xs text-[var(--blw-gray-400)] uppercase tracking-wider mr-1">
            Fomento e pilotos
          </span>
          {support.map(s => (
            <span
              key={s.label}
              title={s.detail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[var(--blw-dark-card)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] text-sm"
            >
              <s.icon className="w-3.5 h-3.5 text-[var(--blw-blue)]" />
              <span className="font-semibold text-[var(--blw-text)] dark:text-gray-200">{s.label}</span>
              <span className="hidden md:inline text-xs text-[var(--blw-gray-400)]">· {s.detail}</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  );
};

export default Partners;
