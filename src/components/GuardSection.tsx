import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Radio, Droplets, Brain, Bell, ServerCog, ArrowRight, TriangleAlert, Activity } from 'lucide-react';

const capabilities = [
  { icon: Brain, title: 'Modelos de ML', desc: 'XGBoost e detecção de anomalias' },
  { icon: Activity, title: 'Leitura contínua', desc: 'Vazão e pressão da rede existente' },
  { icon: Bell, title: 'Alerta em tempo real', desc: 'Aviso antes do rompimento virar prejuízo' },
  { icon: ServerCog, title: 'Sem hardware novo', desc: 'Roda sobre a telemetria já instalada' },
];

const tags = ['Adutoras', 'Distritos de irrigação', 'Telemetria', 'Manutenção preditiva', 'Perda de água'];

/** Série de pressão simulada: operação normal e uma queda anômala no fim. */
const pressure = [62, 65, 61, 64, 63, 66, 62, 65, 63, 61, 44, 28];
const hours = ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'];
const anomalyFrom = 10;

const GuardSection: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInView = useInView(chartRef, { once: true, margin: '-80px' });

  return (
    <section
      id="cultiva-guard"
      className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[var(--blw-dark)] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-accent-cyan)] bg-[var(--blw-accent-cyan)]/10 border border-[var(--blw-accent-cyan)]/15 mb-4">
            <Radio className="w-3.5 h-3.5" /> Cultiva.Guard · SDPAH
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--blw-text)] dark:text-white leading-tight">
            A infraestrutura do agro{' '}
            <span className="text-[var(--blw-accent-cyan)]">avisando antes de quebrar</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--blw-gray-600)] dark:text-gray-400 max-w-2xl mx-auto">
            Sistema de detecção e previsão de anomalias em adutoras, desenvolvido com o
            Distrito de Irrigação Senador Nilo Coelho. Inteligência sobre os dados que a operação já gera —
            sem instalar sensor novo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — Capabilities */}
          <div className="space-y-6">
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
                  <div className="w-9 h-9 rounded-lg bg-[var(--blw-accent-cyan)]/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-4.5 h-4.5 text-[var(--blw-accent-cyan)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-[var(--blw-text)] dark:text-white leading-tight">{s.title}</div>
                    <div className="text-[11px] text-[var(--blw-gray-400)] mt-0.5">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contexto do piloto */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 rounded-xl bg-[var(--blw-accent-cyan)]/5 border border-[var(--blw-accent-cyan)]/15"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <Droplets className="w-4 h-4 text-[var(--blw-accent-cyan)]" />
                <span className="text-xs font-semibold text-[var(--blw-accent-cyan)]">
                  Piloto com o DINC — projeto SDPAH
                </span>
              </div>
              <p className="text-xs text-[var(--blw-gray-600)] dark:text-gray-400 mb-3 leading-relaxed">
                Um rompimento de adutora não é só água perdida: é irrigação parada, safra em risco e emergência
                cara. O Cultiva.Guard aprende o comportamento normal da rede e sinaliza o desvio enquanto ainda
                dá tempo de agir. Desenvolvido no âmbito do edital FACEPE COMPET Soluções.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[10px] font-medium text-[var(--blw-accent-cyan)] bg-[var(--blw-accent-cyan)]/8 border border-[var(--blw-accent-cyan)]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Para quem serve */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 rounded-xl bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)]"
            >
              <div className="text-xs font-semibold text-[var(--blw-text)] dark:text-white mb-2">
                Aplicável a
              </div>
              <p className="text-xs text-[var(--blw-gray-600)] dark:text-gray-400 leading-relaxed">
                Distritos de irrigação, concessionárias de água e operações agrícolas de grande porte que já
                coletam telemetria e ainda tratam manutenção de forma reativa.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--blw-accent-cyan)] hover:underline"
            >
              Conversar sobre a minha rede{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Right — Painel de monitoramento */}
          <motion.div
            ref={chartRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-[var(--blw-dark-card)] rounded-2xl border border-[var(--blw-gray-800)] shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--blw-gray-800)]">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[var(--blw-accent-cyan)]" />
                  <span className="text-sm font-medium text-white">Cultiva.Guard — Setor Norte</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[var(--blw-accent-cyan)]/10 text-[var(--blw-accent-cyan)] text-[10px] font-medium">
                    Monitorando
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* KPIs */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: 'Pressão atual', val: '28 mca', icon: Activity, trend: 'abaixo do normal', bad: true },
                    { label: 'Trechos ativos', val: '14', icon: Radio, trend: 'em leitura' },
                    { label: 'Anomalias 24h', val: '1', icon: TriangleAlert, trend: 'detectada', bad: true },
                  ].map(k => (
                    <div key={k.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <k.icon className={`w-3 h-3 ${k.bad ? 'text-amber-400' : 'text-[var(--blw-accent-cyan)]'}`} />
                        <span className="text-[9px] text-gray-500 uppercase tracking-wider">{k.label}</span>
                      </div>
                      <div className="text-base font-bold text-white">{k.val}</div>
                      <div className={`text-[10px] mt-0.5 font-medium ${k.bad ? 'text-amber-400' : 'text-gray-500'}`}>
                        {k.trend}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Série de pressão */}
                <div className="bg-white/[0.02] rounded-xl border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500">Pressão da adutora — últimas 24h</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-sm bg-[var(--blw-accent-cyan)]" />
                        <span className="text-[9px] text-gray-500">Normal</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-sm bg-amber-500" />
                        <span className="text-[9px] text-gray-500">Anomalia</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-[130px]">
                    {hours.map((h, i) => {
                      const isAnomaly = i >= anomalyFrom;
                      return (
                        <div key={h} className="flex-1 h-full flex flex-col items-center justify-end gap-1">
                          <motion.div
                            className={`w-full rounded-t-sm ${
                              isAnomaly
                                ? 'bg-gradient-to-t from-amber-500 to-amber-500/40'
                                : 'bg-gradient-to-t from-[var(--blw-accent-cyan)] to-[var(--blw-accent-cyan)]/40'
                            }`}
                            initial={{ height: 0 }}
                            animate={chartInView ? { height: `${pressure[i]}%` } : { height: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                            style={{ originY: 1 }}
                          />
                          <span className={`text-[9px] ${isAnomaly ? 'text-amber-400/70' : 'text-gray-600'}`}>{h}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Alerta */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={chartInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl bg-amber-500/[0.07] border border-amber-500/20"
                >
                  <TriangleAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-amber-300">
                      Queda atípica de pressão — trecho 07
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                      Padrão incompatível com a demanda registrada no horário. Equipe de manutenção notificada
                      às 20h14.
                    </p>
                  </div>
                </motion.div>

                {/* Status do modelo */}
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <Brain className="w-3.5 h-3.5 text-[var(--blw-accent-cyan)]" />
                  <span className="text-[10px] text-gray-500">Modelo preditivo</span>
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--blw-accent-cyan)] to-[var(--blw-blue)]"
                      initial={{ width: 0 }}
                      animate={chartInView ? { width: '100%' } : {}}
                      transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="text-[10px] text-[var(--blw-accent-cyan)] font-medium">Em treinamento contínuo</span>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 -z-10 bg-[var(--blw-accent-cyan)]/5 rounded-3xl blur-3xl scale-105" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuardSection;
