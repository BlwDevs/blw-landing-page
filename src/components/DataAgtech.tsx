import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, TrendingUp, Database, Leaf, ArrowRight, Activity, Zap } from 'lucide-react';

const DataAgtech: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: '-80px' });

  // Dados reais (jan-ago) + previsão (set-dez)
  const realData = [35, 48, 42, 58, 52, 64, 60, 72];
  const forecastData = [null, null, null, null, null, null, null, null, 78, 85, 82, 94];
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

  const capabilities = [
    { icon: BarChart3, title: 'Dashboards Inteligentes', desc: 'Visão completa em tempo real' },
    { icon: Database, title: 'Integração de Dados', desc: 'Todas as fontes conectadas' },
    { icon: TrendingUp, title: 'Análise Preditiva', desc: 'Antecipe resultados futuros' },
    { icon: Leaf, title: 'AgTech', desc: 'Previsão de safras e insumos' },
  ];

  const predictiveKpis = [
    { value: '94.7%', label: 'Acurácia preditiva' },
    { value: '90 dias', label: 'Horizonte futuro' },
    { value: '3.2s', label: 'Resposta em tempo real' },
  ];

  const agTechTags = ['Produtividade agrícola', 'Previsão de safras', 'Otimização de insumos', 'Risco climático', 'Sensores IoT'];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[var(--blw-dark)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header compacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-accent-emerald)] bg-[var(--blw-accent-emerald)]/10 border border-[var(--blw-accent-emerald)]/15 mb-4">
            <BarChart3 className="w-3.5 h-3.5" /> Dados & AgTech
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--blw-text)] dark:text-white leading-tight">
            Seus dados prevendo o{' '}
            <span className="text-[var(--blw-accent-emerald)]">futuro do seu negócio</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--blw-gray-600)] dark:text-gray-400 max-w-2xl mx-auto">
            Antecipe cenários, identifique oportunidades e tome decisões com base no que vai acontecer — não no que já passou.
          </p>
        </motion.div>

        {/* Layout lado a lado: conteúdo + dashboard */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — Capabilities + AgTech + KPIs */}
          <div className="space-y-6">
            {/* Capabilities grid compacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {capabilities.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--blw-accent-emerald)]/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-4.5 h-4.5 text-[var(--blw-accent-emerald)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[var(--blw-text)] dark:text-white leading-tight">{s.title}</div>
                    <div className="text-[11px] text-[var(--blw-gray-400)] mt-0.5">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* AgTech highlight compacto */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 rounded-xl bg-[var(--blw-accent-emerald)]/5 dark:bg-[var(--blw-accent-emerald)]/[0.06] border border-[var(--blw-accent-emerald)]/15"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <Leaf className="w-4 h-4 text-[var(--blw-accent-emerald)]" />
                <span className="text-xs font-semibold text-[var(--blw-accent-emerald)]">Especialização AgTech</span>
              </div>
              <p className="text-xs text-[var(--blw-gray-600)] dark:text-gray-400 mb-3 leading-relaxed">
                Dados ambientais, operacionais e históricos combinados para modelos de decisão mais eficientes no campo.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {agTechTags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md text-[10px] font-medium text-[var(--blw-accent-emerald)] bg-[var(--blw-accent-emerald)]/8 border border-[var(--blw-accent-emerald)]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Predictive KPIs — foco em qualidade futura */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-3"
            >
              {predictiveKpis.map(k => (
                <div key={k.label} className="text-center p-3 rounded-xl bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] transition-colors duration-300">
                  <div className="text-lg font-extrabold font-[Syne] text-[var(--blw-accent-emerald)]">{k.value}</div>
                  <div className="text-[10px] text-[var(--blw-gray-400)] mt-0.5 uppercase tracking-wider">{k.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--blw-accent-emerald)] hover:underline"
            >
              Transformar meus dados <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Right — Dashboard Preditivo */}
          <motion.div
            ref={chartRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-[var(--blw-dark-card)] rounded-2xl border border-[var(--blw-gray-800)] shadow-2xl overflow-hidden">
              {/* Dashboard header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--blw-gray-800)]">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[var(--blw-accent-emerald)]" />
                  <span className="text-sm font-medium text-white">Dashboard Preditivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[var(--blw-accent-emerald)]/10 text-[var(--blw-accent-emerald)] text-[10px] font-medium">Live</span>
                  <span className="px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 text-[10px] font-medium">Preditivo</span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* Mini KPI cards — foco futuro */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: 'Previsão Q4', val: 'R$ 1.2M', icon: TrendingUp, trend: '+24%' },
                    { label: 'Acurácia', val: '94.7%', icon: Activity, trend: '+2.1%' },
                    { label: 'Cenários', val: '847', icon: Zap, trend: 'analisados' },
                  ].map(k => (
                    <div key={k.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <k.icon className="w-3 h-3 text-[var(--blw-accent-emerald)]" />
                        <span className="text-[9px] text-gray-500 uppercase tracking-wider">{k.label}</span>
                      </div>
                      <div className="text-base font-bold text-white">{k.val}</div>
                      <div className="text-[10px] mt-0.5 font-medium text-emerald-400">{k.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Bar chart: Real vs Forecast */}
                <div className="bg-white/[0.02] rounded-xl border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500">Receita — Real vs Projeção</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-sm bg-[var(--blw-accent-emerald)]" />
                        <span className="text-[9px] text-gray-500">Real</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-sm bg-violet-500/60 border border-dashed border-violet-400" />
                        <span className="text-[9px] text-gray-500">Previsão</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-[130px]">
                    {months.map((m, i) => {
                      const isReal = i < realData.length;
                      const value = isReal ? realData[i] : (forecastData[i] ?? 0);
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <motion.div
                            className={`w-full rounded-t-sm ${
                              isReal
                                ? 'bg-gradient-to-t from-[var(--blw-accent-emerald)] to-[var(--blw-accent-emerald)]/50'
                                : 'bg-gradient-to-t from-violet-500/50 to-violet-500/20 border border-dashed border-violet-400/30'
                            }`}
                            initial={{ height: 0 }}
                            animate={chartInView ? { height: `${value}%` } : { height: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.04, ease: 'easeOut' }}
                            style={{ originY: 1 }}
                          />
                          <span className={`text-[9px] ${isReal ? 'text-gray-600' : 'text-violet-400/70'}`}>{m}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Trend line preditiva */}
                <div className="bg-white/[0.02] rounded-xl border border-white/5 p-4">
                  <div className="text-xs text-gray-500 mb-3">Tendência de Crescimento — Projeção 90 dias</div>
                  <svg viewBox="0 0 400 90" className="w-full h-[70px]">
                    {[0, 30, 60, 90].map(y => (
                      <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    ))}
                    {/* Linha divisória real/previsão */}
                    <line x1="266" y1="0" x2="266" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
                    <text x="140" y="88" fill="rgba(255,255,255,0.15)" fontSize="8" textAnchor="middle">Dados reais</text>
                    <text x="340" y="88" fill="rgba(139,92,246,0.3)" fontSize="8" textAnchor="middle">Projeção</text>

                    {/* Real data line */}
                    <motion.path
                      d="M0,72 C30,68 50,60 90,52 C130,44 150,48 190,38 C210,32 230,35 266,25"
                      fill="none"
                      stroke="var(--blw-accent-emerald)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={chartInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                    />
                    {/* Forecast line (dashed) */}
                    <motion.path
                      d="M266,25 C290,18 320,12 360,6 C380,3 395,2 400,1"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="6 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={chartInView ? { pathLength: 1, opacity: 0.8 } : {}}
                      transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                    />
                    {/* Confidence band */}
                    <motion.path
                      d="M266,25 C290,14 320,6 360,0 C380,-3 395,-4 400,-5 L400,18 C395,15 380,12 360,14 C320,20 290,24 266,25 Z"
                      fill="rgba(139,92,246,0.08)"
                      initial={{ opacity: 0 }}
                      animate={chartInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1.8 }}
                    />
                    {/* Area fill real */}
                    <motion.path
                      d="M0,72 C30,68 50,60 90,52 C130,44 150,48 190,38 C210,32 230,35 266,25 L266,90 L0,90 Z"
                      fill="url(#emerald-gradient-pred)"
                      initial={{ opacity: 0 }}
                      animate={chartInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1 }}
                    />
                    <defs>
                      <linearGradient id="emerald-gradient-pred" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--blw-accent-emerald)" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="var(--blw-accent-emerald)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Pipeline status */}
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <Zap className="w-3.5 h-3.5 text-violet-400" />
                  <span className="text-[10px] text-gray-500">Processamento</span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--blw-accent-emerald)] to-violet-500"
                      initial={{ width: 0 }}
                      animate={chartInView ? { width: '100%' } : {}}
                      transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">Dados atualizados</span>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 -z-10 bg-[var(--blw-accent-emerald)]/5 rounded-3xl blur-3xl scale-105" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataAgtech;
