import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileCheck, Settings, Target, TrendingUp, Scale, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Diagnóstico',
    desc: 'Mapeamos processos e identificamos oportunidades de melhoria.',
    color: 'var(--blw-accent-amber)',
  },
  {
    icon: Settings,
    title: 'Estratégia',
    desc: 'Planejamos a solução ideal com cronograma e KPIs definidos.',
    color: 'var(--blw-accent-amber)',
  },
  {
    icon: FileCheck,
    title: 'Implementação',
    desc: 'Executamos com metodologia ágil e acompanhamento contínuo.',
    color: 'var(--blw-accent-amber)',
  },
  {
    icon: TrendingUp,
    title: 'Resultados',
    desc: 'Métricas claras, ROI mensurável e evolução constante.',
    color: 'var(--blw-accent-amber)',
  },
];

const services = [
  'Compliance Fiscal',
  'Automação SPED/EFD',
  'Consultoria Tributária',
  'Serviços de TI',
  'Gestão de Processos',
  'Transformação Digital',
];

const FiscalConsulting: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-accent-amber)] bg-[var(--blw-accent-amber)]/10 border border-[var(--blw-accent-amber)]/15 mb-4">
            <Scale className="w-3.5 h-3.5" /> Consultoria & Fiscal
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--blw-text)] dark:text-white leading-tight">
            Simplifique o{' '}
            <span className="text-[var(--blw-accent-amber)]">complexo</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--blw-gray-600)] dark:text-gray-400 max-w-xl mx-auto">
            Inteligência fiscal, consultoria estratégica e serviços que transformam operações.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto mb-16">
          {/* Connection line */}
          <div className="absolute top-12 left-0 right-0 h-[2px] bg-[var(--blw-gray-200)] dark:bg-[var(--blw-gray-800)] hidden md:block">
            <motion.div
              className="h-full bg-[var(--blw-accent-amber)]"
              initial={{ width: 0 }}
              animate={timelineInView ? { width: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <motion.div
                  className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-5 bg-white dark:bg-[var(--blw-dark-card)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--blw-accent-amber)] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </motion.div>
                <h3 className="text-base font-bold text-[var(--blw-text)] dark:text-white mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--blw-gray-400)] leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {services.map(s => (
              <span
                key={s}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-white dark:bg-[var(--blw-dark-card)] text-[var(--blw-text)] dark:text-gray-300 border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] shadow-sm"
              >
                {s}
              </span>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--blw-accent-amber)] hover:underline"
          >
            Solicitar consultoria <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FiscalConsulting;
