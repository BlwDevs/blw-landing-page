import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Clock, Brain, ArrowRight, Sprout, Users, ClipboardList, Mic, FlaskConical, CloudSun } from 'lucide-react';

interface Scenario {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accent: string;
  accentRgb: string;
  agentName: string;
  conversation: { role: 'user' | 'ai'; text: string }[];
}

const scenarios: Scenario[] = [
  {
    id: 'manejo',
    label: 'Manejo',
    icon: Sprout,
    accent: '#10b981',
    accentRgb: '16, 185, 129',
    agentName: 'Consultor Digital — Cultiva.ai',
    conversation: [
      { role: 'user', text: 'Minha manga tá com mancha preta na folha. O que pode ser?' },
      { role: 'ai', text: 'Pelos sintomas, provável antracnose (Colletotrichum). Confirme se as manchas têm halo amarelado e se apareceram após as últimas chuvas. Me manda uma foto da folha que eu confirmo antes de indicar aplicação.' },
      { role: 'user', text: 'Sim, tem o halo amarelo. Choveu semana passada.' },
      { role: 'ai', text: 'Quadro compatível com antranose em pressão de umidade. Recomendo fungicida à base de cobre em intervalo de 7 dias e drenagem do talhão 3, que já teve o mesmo problema na safra passada. Registro a recomendação no histórico da fazenda?' },
    ],
  },
  {
    id: 'solo',
    label: 'Solo & análise',
    icon: FlaskConical,
    accent: '#8b5cf6',
    accentRgb: '139, 92, 246',
    agentName: 'Consultor Digital — Análise de solo',
    conversation: [
      { role: 'user', text: 'Recebi a análise de solo do talhão 5. Manda ver.' },
      { role: 'ai', text: 'Analisado. pH 5,2 (baixo para uva), V% 41, Ca e Mg abaixo do ideal, K adequado. O principal limitante é a acidez — está travando a absorção do que você já aplica.' },
      { role: 'user', text: 'Quanto de calcário eu preciso?' },
      { role: 'ai', text: 'Para elevar V% a 70: ~2,1 t/ha de calcário dolomítico (PRNT 85%), aplicado 60 a 90 dias antes do próximo ciclo. No seu talhão de 3,2 ha, são 6,7 t. Quer que eu lance como custo previsto na safra?' },
    ],
  },
  {
    id: 'cooperativa',
    label: 'Cooperativa',
    icon: Users,
    accent: '#0d80f2',
    accentRgb: '13, 128, 242',
    agentName: 'Agente operacional — sob medida',
    conversation: [
      { role: 'user', text: 'Quais cooperados estão com aplicação atrasada nesta semana?' },
      { role: 'ai', text: '7 cooperados com atividade vencida: 4 em aplicação foliar, 2 em irrigação e 1 em poda. Os talhões afetados somam 31 ha. Envio o aviso pelo WhatsApp de cada um?' },
      { role: 'user', text: 'Envia. E me dá o consumo de insumos do mês.' },
      { role: 'ai', text: 'Avisos enviados. Consumo de fevereiro: fertilizante 18,4 t (+12% vs. janeiro), defensivos 640 L, água 42 mil m³. O aumento vem de 3 propriedades que entraram em florada. Gero o relatório em PDF?' },
    ],
  },
];

const AISection: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(terminalRef, { once: true, margin: '-100px' });
  const [activeScenario, setActiveScenario] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const animationRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const currentScenario = scenarios[activeScenario];

  const clearAnimations = useCallback(() => {
    animationRef.current.forEach(t => clearTimeout(t));
    animationRef.current = [];
  }, []);

  const startTypingAnimation = useCallback((conversation: typeof scenarios[0]['conversation']) => {
    clearAnimations();
    setVisibleMessages(0);
    setTypingText('');
    setIsTyping(false);

    let messageIndex = 0;
    let charIndex = 0;

    const typeNextMessage = () => {
      if (messageIndex >= conversation.length) return;
      const msg = conversation[messageIndex];

      if (msg.role === 'user') {
        setVisibleMessages(messageIndex + 1);
        messageIndex++;
        const t = setTimeout(typeNextMessage, 600);
        animationRef.current.push(t);
      } else {
        setIsTyping(true);
        setVisibleMessages(messageIndex);

        const typeChar = () => {
          if (charIndex < msg.text.length) {
            setTypingText(msg.text.slice(0, charIndex + 1));
            charIndex++;
            const t = setTimeout(typeChar, 15);
            animationRef.current.push(t);
          } else {
            setIsTyping(false);
            setVisibleMessages(messageIndex + 1);
            setTypingText('');
            charIndex = 0;
            messageIndex++;
            const t = setTimeout(typeNextMessage, 1000);
            animationRef.current.push(t);
          }
        };

        const t = setTimeout(typeChar, 400);
        animationRef.current.push(t);
      }
    };

    const t = setTimeout(typeNextMessage, 600);
    animationRef.current.push(t);
  }, [clearAnimations]);

  useEffect(() => {
    if (!isInView) return;
    startTypingAnimation(currentScenario.conversation);
    return () => clearAnimations();
  }, [isInView, activeScenario, currentScenario.conversation, startTypingAnimation, clearAnimations]);

  useEffect(() => {
    if (!isInView || hasUserInteracted) return;
    const interval = setInterval(() => {
      setActiveScenario(prev => (prev + 1) % scenarios.length);
    }, 14000);
    return () => clearInterval(interval);
  }, [isInView, hasUserInteracted]);

  const handleScenarioClick = (index: number) => {
    if (index === activeScenario) return;
    setHasUserInteracted(true);
    setActiveScenario(index);
  };

  const stats = [
    { icon: Clock, value: '24/7', label: 'Disponível' },
    { icon: Mic, value: 'Voz', label: 'Sem digitar' },
    { icon: Brain, value: 'Contexto', label: 'Da sua fazenda' },
  ];

  const useCases = [
    { icon: Sprout, title: 'Manejo do dia a dia', desc: 'Pragas, doenças, dosagens e aplicações' },
    { icon: FlaskConical, title: 'Solo e frutos', desc: 'Leitura de análises e recomendação prática' },
    { icon: CloudSun, title: 'Clima e janela de aplicação', desc: 'O que fazer — e o que adiar' },
    { icon: ClipboardList, title: 'Histórico que aprende', desc: 'Cada safra deixa a resposta mais precisa' },
  ];

  return (
    <section id="consultor-digital" className="relative py-24 md:py-32 overflow-hidden bg-[var(--blw-dark)] noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: `rgba(${currentScenario.accentRgb}, 0.3)`,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `blob-float ${15 + (i % 5) * 2}s ease-in-out infinite ${(i % 4) * 1.2}s`,
            }}
          />
        ))}
      </div>
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-1000"
        style={{ backgroundColor: `rgba(${currentScenario.accentRgb}, 0.06)` }}
      />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--blw-accent-emerald)]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header + Tabs inline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-accent-violet)] bg-[var(--blw-accent-violet)]/10 border border-[var(--blw-accent-violet)]/20 mb-4">
            <Bot className="w-3.5 h-3.5" /> Cultiva.ai Consultoria
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Um consultor agronômico{' '}
            <span className="bg-gradient-to-r from-[var(--blw-accent-emerald)] to-[var(--blw-accent-violet)] bg-clip-text text-transparent">
              no bolso do produtor
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            IA com base agronômica científica e o histórico da própria propriedade — por voz ou chat,
            em linguagem de campo. Não substitui o agrônomo: cobre os dias em que ele não está lá.
          </p>

          {/* Compact scenario tabs */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/5">
            {scenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              const isActive = index === activeScenario;
              return (
                <button
                  key={scenario.id}
                  onClick={() => handleScenarioClick(index)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-400 ${
                    isActive ? 'text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'
                  }`}
                  style={isActive ? {
                    backgroundColor: `rgba(${scenario.accentRgb}, 0.15)`,
                    boxShadow: `0 0 20px rgba(${scenario.accentRgb}, 0.1)`,
                  } : {}}
                >
                  <Icon className="w-4 h-4 transition-colors duration-400" style={{ color: isActive ? scenario.accent : undefined }} />
                  <span className="hidden sm:inline">{scenario.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* Left — Terminal + Stats */}
          <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative rounded-2xl border shadow-2xl overflow-hidden transition-all duration-700"
                  style={{
                    backgroundColor: '#0c1017',
                    borderColor: `rgba(${currentScenario.accentRgb}, 0.2)`,
                    boxShadow: `0 0 60px rgba(${currentScenario.accentRgb}, 0.06)`,
                  }}
                >
                  {/* Terminal header */}
                  <div className="flex items-center gap-3 px-5 py-3 bg-[#0f151d] border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 ml-2">
                      <Bot className="w-3.5 h-3.5" style={{ color: currentScenario.accent }} />
                      <span>{currentScenario.agentName}</span>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentScenario.accent }} />
                      <span className="text-[10px]" style={{ color: `rgba(${currentScenario.accentRgb}, 0.7)` }}>Online</span>
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="p-5 space-y-3.5 min-h-[300px]">
                    {currentScenario.conversation.slice(0, visibleMessages).map((msg, i) => (
                      <motion.div
                        key={`${activeScenario}-${i}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                            msg.role === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm border border-white/5'
                          }`}
                          style={
                            msg.role === 'user'
                              ? { backgroundColor: `rgba(${currentScenario.accentRgb}, 0.15)`, color: currentScenario.accent }
                              : { backgroundColor: 'rgba(255,255,255,0.04)', color: '#d1d5db' }
                          }
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}

                    {isTyping && typingText && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                        <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-tl-sm bg-white/[0.04] text-gray-300 text-sm border border-white/5 leading-relaxed">
                          {typingText}
                          <span className="inline-block w-[2px] h-[14px] ml-0.5 align-text-bottom" style={{ backgroundColor: currentScenario.accent, animation: 'blink-cursor 0.8s step-end infinite' }} />
                        </div>
                      </motion.div>
                    )}
                    {isTyping && !typingText && (
                      <div className="flex justify-start">
                        <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/5 flex gap-1.5">
                          {[0, 1, 2].map(i => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500" style={{ animation: `blob-float 1s ease-in-out infinite ${i * 0.15}s` }} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stats inline */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="text-center p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <s.icon className="w-3.5 h-3.5 mx-auto mb-1.5" style={{ color: currentScenario.accent }} />
                  <div className="text-base font-bold text-white font-display">{s.value}</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Use Cases compact */}
          <div className="space-y-4">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-[var(--blw-accent-violet)]/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--blw-accent-violet)]/10 flex items-center justify-center shrink-0">
                  <uc.icon className="w-4.5 h-4.5 text-[var(--blw-accent-violet)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{uc.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{uc.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.55 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-[var(--blw-accent-violet)]/[0.06] border border-[var(--blw-accent-violet)]/15"
            >
              <Zap className="w-4 h-4 text-[var(--blw-accent-violet)] shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-relaxed">
                A mesma tecnologia que roda no Cultiva.ai vira agente sob medida para cooperativas e empresas do
                agro — treinado nos processos e documentos de cada operação.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--blw-accent-violet)] hover:underline mt-1"
            >
              Quero um agente de IA no meu agro <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
