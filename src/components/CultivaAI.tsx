import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sprout, Mic, ScanLine, Wallet, Boxes, ArrowRight, Smartphone, Download } from 'lucide-react';
import { CULTIVA_APP_URL } from '../constants';

const features = [
  { icon: Wallet, title: 'Financeiro da safra', desc: 'Entradas, saídas e custo real por talhão' },
  { icon: Boxes, title: 'Estoque e insumos', desc: 'O que tem, o que gastou, o que falta' },
  { icon: Mic, title: 'Lançamento por voz', desc: 'Registra falando, no meio do campo' },
  { icon: ScanLine, title: 'Nota fiscal por foto', desc: 'A IA lê e lança sozinha' },
];

const stack = ['Flutter', 'Go', 'PostgreSQL', 'Agentes de IA', 'Visão computacional', 'Voz'];

const CultivaAI: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <section
      ref={sectionRef}
      id="cultiva-ai"
      className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[var(--blw-dark)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-accent-emerald)] bg-[var(--blw-accent-emerald)]/10 border border-[var(--blw-accent-emerald)]/15 mb-4">
                <Sprout className="w-3.5 h-3.5" /> Produto principal
              </span>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-[var(--blw-text)] dark:text-white leading-tight">
                Cultiva.ai <span className="text-[var(--blw-accent-emerald)]">Gestão</span>
              </h2>
              <p className="mt-4 text-lg text-[var(--blw-gray-600)] dark:text-gray-400 max-w-md">
                A propriedade inteira organizada no celular. O produtor deixa o caderno e a planilha —
                e passa a saber quanto custa cada safra enquanto ela acontece.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--blw-accent-emerald)]/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-[var(--blw-accent-emerald)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--blw-text)] dark:text-white">{f.title}</div>
                    <div className="text-xs text-[var(--blw-gray-400)] mt-0.5">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Disponibilidade */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-[var(--blw-accent-emerald)]/5 border border-[var(--blw-accent-emerald)]/15"
            >
              <div className="flex items-start gap-3 flex-1">
                <Smartphone className="w-5 h-5 text-[var(--blw-accent-emerald)] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--blw-gray-600)] dark:text-gray-400">
                  App disponível para <strong className="text-[var(--blw-text)] dark:text-gray-200">Android e iOS</strong>,
                  em uso por produtores do Vale do São Francisco na safra atual.
                </p>
              </div>
              <a
                href={CULTIVA_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[var(--blw-accent-emerald)] hover:bg-emerald-600 rounded-xl transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                Baixar o app
              </a>
            </motion.div>

            {/* Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {stack.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] text-[var(--blw-gray-600)] dark:text-gray-400 border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--blw-accent-emerald)] hover:underline"
            >
              Quero conhecer o Cultiva.ai{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Right — App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
            style={{ perspective: 1200 }}
          >
            <motion.div style={{ rotateY, rotateX }} className="relative w-full max-w-[480px]">
              {/* Dashboard web */}
              <div className="relative bg-[var(--blw-dark-card)] rounded-2xl border border-[var(--blw-gray-800)] shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a2130] border-b border-[var(--blw-gray-800)]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-5 bg-[var(--blw-dark-surface)] rounded-md flex items-center px-3">
                      <span className="text-[10px] text-[var(--blw-gray-600)]">app.cultiva.ai</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">Safra 2026 · Manga Tommy</div>
                      <div className="text-sm font-semibold text-white mt-0.5">Fazenda Boa Vista</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-[var(--blw-accent-emerald)]/10 text-[var(--blw-accent-emerald)] text-[10px] font-medium">
                      Em campo
                    </span>
                  </div>

                  {/* KPIs */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { label: 'Custo da safra', val: 'R$ 48,2k' },
                      { label: 'Área', val: '12,4 ha' },
                      { label: 'Custo / ha', val: 'R$ 3,9k' },
                    ].map(k => (
                      <div key={k.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <div className="text-[9px] text-gray-500 uppercase tracking-wider mb-1">{k.label}</div>
                        <div className="text-sm font-bold text-white">{k.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Gastos por categoria */}
                  <div className="bg-white/[0.02] rounded-xl border border-white/5 p-4">
                    <div className="text-xs text-gray-500 mb-3">Custos por categoria</div>
                    <div className="space-y-2.5">
                      {[
                        { label: 'Insumos', pct: 82 },
                        { label: 'Mão de obra', pct: 64 },
                        { label: 'Irrigação', pct: 41 },
                        { label: 'Manutenção', pct: 23 },
                      ].map((row, i) => (
                        <div key={row.label} className="flex items-center gap-3">
                          <span className="text-[10px] text-gray-500 w-20 shrink-0">{row.label}</span>
                          <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-[var(--blw-accent-emerald)]/60 to-[var(--blw-accent-emerald)]"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${row.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Atividades */}
                  <div className="space-y-2">
                    {[
                      { txt: 'Aplicação foliar — Talhão 3', tag: 'Hoje' },
                      { txt: 'Colheita parcial — Talhão 1', tag: '2 dias' },
                    ].map(a => (
                      <div
                        key={a.txt}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/5"
                      >
                        <span className="text-[11px] text-gray-400">{a.txt}</span>
                        <span className="text-[9px] text-[var(--blw-accent-emerald)]">{a.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile mockup flutuante — captura por voz */}
              <motion.div
                className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-8 w-[150px] md:w-[170px]"
                initial={{ opacity: 0, y: 30, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="bg-[var(--blw-dark-card)] rounded-[20px] border border-[var(--blw-gray-800)] shadow-2xl overflow-hidden">
                  <div className="flex justify-center pt-2 pb-1">
                    <div className="w-16 h-4 bg-[#1a2130] rounded-full" />
                  </div>
                  <div className="p-3 space-y-2.5">
                    <div className="text-[9px] text-gray-500 uppercase tracking-wider">Lançar por voz</div>
                    <div className="rounded-lg bg-[var(--blw-accent-emerald)]/10 border border-[var(--blw-accent-emerald)]/20 p-2.5">
                      <p className="text-[9px] text-gray-300 leading-relaxed">
                        "Gastei 320 reais de adubo no talhão 3"
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--blw-accent-emerald)] animate-pulse" />
                      <span className="text-[8px] text-[var(--blw-accent-emerald)]">Lançamento registrado</span>
                    </div>
                    <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-[8px] text-gray-500">Categoria</span>
                        <span className="text-[8px] text-gray-300">Insumos</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[8px] text-gray-500">Valor</span>
                        <span className="text-[8px] text-gray-300">R$ 320,00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[8px] text-gray-500">Talhão</span>
                        <span className="text-[8px] text-gray-300">03</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 h-9 rounded-lg bg-[var(--blw-accent-emerald)]/20">
                      <Mic className="w-3.5 h-3.5 text-[var(--blw-accent-emerald)]" />
                      <span className="text-[9px] text-[var(--blw-accent-emerald)] font-medium">Gravar</span>
                    </div>
                  </div>
                  <div className="flex justify-center py-2">
                    <div className="w-10 h-1 bg-[var(--blw-gray-600)] rounded-full" />
                  </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 -z-10 bg-[var(--blw-accent-emerald)]/8 rounded-3xl blur-3xl scale-110" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CultivaAI;
