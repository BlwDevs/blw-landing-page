import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Beaker, Rocket, LineChart, Blocks, ArrowRight, Users, Warehouse, Truck, FileSpreadsheet } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico',
    desc: 'Vamos a campo entender o processo real — não o que está no organograma.',
  },
  {
    icon: Beaker,
    title: 'Prova de conceito',
    desc: 'Um recorte pequeno rodando de verdade, com resultado medido antes do investimento maior.',
  },
  {
    icon: Rocket,
    title: 'Implantação',
    desc: 'Software em produção, integrado ao que a operação já usa, com treinamento da equipe.',
  },
  {
    icon: LineChart,
    title: 'Operação e evolução',
    desc: 'Acompanhamento na safra e ajuste contínuo conforme o uso mostra o que falta.',
  },
];

const useCases = [
  {
    icon: Users,
    title: 'Cooperativas e associações',
    desc: 'Acompanhamento de cooperados, comunicação em escala e consolidação de dados de produção que hoje vivem em planilhas separadas.',
  },
  {
    icon: Warehouse,
    title: 'Packing houses e beneficiamento',
    desc: 'Rastreabilidade, controle de lotes e leitura automática de documentos que hoje passam por digitação manual.',
  },
  {
    icon: Truck,
    title: 'Logística e comercialização',
    desc: 'Previsão de volume, programação de colheita e agentes que respondem a produtor e comprador sem fila.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Dados dispersos',
    desc: 'Integração de sistemas, planilhas e papel em uma base única — o passo que destrava qualquer projeto de IA.',
  },
];

const AgroSolutions: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' });

  return (
    <section
      id="sob-medida"
      className="relative py-24 md:py-32 overflow-hidden bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-blue)] bg-[var(--blw-blue)]/10 border border-[var(--blw-blue)]/15 mb-4">
            <Blocks className="w-3.5 h-3.5" /> Sob medida
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--blw-text)] dark:text-white leading-tight">
            Tecnologia e IA para{' '}
            <span className="text-[var(--blw-blue)]">empresas do agro</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--blw-gray-600)] dark:text-gray-400">
            Cooperativas, associações e empresas do setor têm processos internos que consomem tempo e escondem
            informação. Construímos a solução junto com quem opera — do diagnóstico ao software rodando na safra.
          </p>
        </motion.div>

        {/* Casos de uso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-[var(--blw-dark-card)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] hover:border-[var(--blw-blue)]/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--blw-blue)]/10 flex items-center justify-center shrink-0">
                <uc.icon className="w-5 h-5 text-[var(--blw-blue)]" />
              </div>
              <div>
                <h3 className="font-semibold text-base text-[var(--blw-text)] dark:text-white">{uc.title}</h3>
                <p className="text-sm text-[var(--blw-gray-600)] dark:text-gray-400 mt-1.5 leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Como trabalhamos */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xl md:text-2xl font-bold text-[var(--blw-text)] dark:text-white mb-12"
        >
          Como trabalhamos
        </motion.h3>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto mb-14">
          {/* Connection line */}
          <div className="absolute top-12 left-0 right-0 h-[2px] bg-[var(--blw-gray-200)] dark:bg-[var(--blw-gray-800)] hidden md:block">
            <motion.div
              className="h-full bg-[var(--blw-blue)]"
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
                <motion.div
                  className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-5 bg-white dark:bg-[var(--blw-dark-card)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <step.icon className="w-8 h-8 text-[var(--blw-blue)]" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--blw-blue)] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </motion.div>
                <h4 className="text-base font-bold text-[var(--blw-text)] dark:text-white mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-[var(--blw-gray-400)] leading-relaxed max-w-[210px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <button
            onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="shimmer-btn group inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white bg-[var(--blw-blue)] hover:bg-[var(--blw-blue-dark)] rounded-xl transition-all duration-200 shadow-lg shadow-[var(--blw-blue)]/20"
          >
            Quero mapear meu processo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AgroSolutions;
