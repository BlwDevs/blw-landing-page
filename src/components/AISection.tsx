import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Bot, Zap, Clock, Brain, MessageSquare, ArrowRight, Headphones, Building2, Landmark } from 'lucide-react';

interface Scenario {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  accentRgb: string;
  agentName: string;
  conversation: { role: 'user' | 'ai'; text: string }[];
}

const scenarios: Scenario[] = [
  {
    id: 'atendimento',
    label: 'Atendimento',
    icon: Headphones,
    accent: '#3b82f6',
    accentRgb: '59, 130, 246',
    agentName: 'Assistente de Suporte — v3.1',
    conversation: [
      { role: 'user', text: 'Qual o prazo de entrega do meu pedido #8842?' },
      { role: 'ai', text: 'Seu pedido #8842 está em trânsito! Previsão: amanhã, 14h-18h. Rastreamento atualizado há 15 minutos. Deseja receber notificações em tempo real?' },
      { role: 'user', text: 'Sim! E posso alterar o endereço de entrega?' },
      { role: 'ai', text: 'Notificações ativadas! Sobre o endereço: o pedido já saiu do CD, mas posso abrir redirecionamento via transportadora. Taxa: R$ 0. Deseja prosseguir?' },
    ],
  },
  {
    id: 'gestao',
    label: 'Gestão',
    icon: Building2,
    accent: '#f59e0b',
    accentRgb: '245, 158, 11',
    agentName: 'Agente de Processos — v2.8',
    conversation: [
      { role: 'user', text: 'Quais processos estão pendentes de aprovação?' },
      { role: 'ai', text: '3 processos pendentes: Compra de equipamentos (R$ 45K — aguarda diretor financeiro), Contratação TI — 2 vagas (aguarda RH), Renovação contrato Fornecedor X (vence em 5 dias). Envio alertas?' },
      { role: 'user', text: 'Envie alertas e me dê o relatório de produtividade.' },
      { role: 'ai', text: 'Alertas enviados! Relatório Q1: Produtividade geral +18%, tempo de resposta -32%, SLA 96.4%. Destaque: equipe comercial superou meta em 22%. Exportar PDF?' },
    ],
  },
  {
    id: 'governo',
    label: 'Gov & Jurídico',
    icon: Landmark,
    accent: '#06b6d4',
    accentRgb: '6, 182, 212',
    agentName: 'Consultor Normativo — v4.2',
    conversation: [
      { role: 'user', text: 'Qual artigo regulamenta licitações eletrônicas?' },
      { role: 'ai', text: 'Lei 14.133/2021 (Nova Lei de Licitações), Art. 17, §2º. Complementado pelo Decreto 10.024/2019 para pregão eletrônico. Prazo mínimo: 8 dias úteis. Detalhes dos requisitos?' },
      { role: 'user', text: 'Sim, e quais normas valem para pregão presencial?' },
      { role: 'ai', text: 'Pregão presencial: Lei 14.133/2021, Art. 17 §1º + Decreto 3.555/2000 (vigente). Documentação: Art. 62-69. Comissão: mínimo 3 membros. Recurso: 3 dias úteis. Mostrar fluxo completo?' },
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
    { icon: Zap, value: '0.3s', label: 'Resposta' },
    { icon: Clock, value: '24/7', label: 'Disponível' },
    { icon: Brain, value: '100%', label: 'Contextual' },
  ];

  const useCases = [
    { icon: MessageSquare, title: 'Atendimento', desc: 'Respostas instantâneas para clientes' },
    { icon: Brain, title: 'RAG Inteligente', desc: 'Busca em documentos da empresa' },
    { icon: Zap, title: 'Automação', desc: 'Workflows inteligentes e integrados' },
    { icon: Bot, title: 'Agentes Custom', desc: 'IA especialista no seu negócio' },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--blw-dark)] noise-overlay">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: `rgba(${currentScenario.accentRgb}, 0.3)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `blob-float ${15 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-1000"
        style={{ backgroundColor: `rgba(${currentScenario.accentRgb}, 0.06)` }}
      />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--blw-blue)]/5 rounded-full blur-[120px]" />

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
            <Bot className="w-3.5 h-3.5" /> Inteligência Artificial
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Agentes de IA que{' '}
            <span className="bg-gradient-to-r from-[var(--blw-accent-violet)] to-[var(--blw-blue)] bg-clip-text text-transparent">
              trabalham por você
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto mb-8">
            RAG, automação e agentes personalizados — respostas em segundos, disponíveis 24/7.
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
                  <div className="text-base font-bold text-white font-[Syne]">{s.value}</div>
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

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              onClick={() => document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--blw-accent-violet)] hover:underline mt-1"
            >
              Quero meu agente de IA <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
