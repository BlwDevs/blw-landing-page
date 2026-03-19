import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Cpu, Rocket } from 'lucide-react';
import ContactForm from './ContactForm';

const words = ['impacto', 'resultado', 'inovação', 'futuro'];

const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Zap, text: 'Desenvolvimento Ágil' },
    { icon: Shield, text: 'Dados Seguros' },
    { icon: Cpu, text: 'IA Personalizada' },
    { icon: Rocket, text: 'Entrega Rápida' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[var(--blw-dark)] transition-colors duration-300">
      {/* Background layers */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating blobs */}
      <div className="blob blob-1 w-[500px] h-[500px] bg-[var(--blw-blue)]/20 dark:bg-[var(--blw-blue)]/10 -top-40 -left-40" />
      <div className="blob blob-2 w-[400px] h-[400px] bg-violet-500/15 dark:bg-violet-500/8 top-1/2 right-0" />
      <div className="blob blob-3 w-[300px] h-[300px] bg-cyan-400/10 dark:bg-cyan-400/5 bottom-0 left-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-28 md:py-32 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-[var(--blw-blue)]/10 text-[var(--blw-blue)] border border-[var(--blw-blue)]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--blw-blue)] animate-pulse" />
                Soluções que transformam negócios
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.08] text-[var(--blw-text)] dark:text-white"
            >
              Transforme sua ideia{' '}
              <br className="hidden sm:block" />
              em software de{' '}
              <span className="relative inline-block">
                <span className="gradient-text" key={wordIndex}>
                  {words[wordIndex]}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-[var(--blw-blue)] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: 'linear' }}
                  key={`line-${wordIndex}`}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg sm:text-xl text-[var(--blw-gray-600)] dark:text-gray-400 max-w-lg leading-relaxed"
            >
              Web, Mobile, IA, Dados, AgTech e muito mais — criamos soluções sob medida para escalar seu negócio.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feat, i) => (
                <motion.div
                  key={feat.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[var(--blw-dark-surface)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] shadow-sm"
                >
                  <feat.icon className="w-4 h-4 text-[var(--blw-blue)]" />
                  <span className="text-sm font-medium text-[var(--blw-text)] dark:text-gray-300">{feat.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="shimmer-btn group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-[var(--blw-blue)] hover:bg-[var(--blw-blue-dark)] rounded-xl transition-all duration-200 shadow-lg shadow-[var(--blw-blue)]/20"
              >
                Solicitar solução
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('services-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-[var(--blw-blue)] border-2 border-[var(--blw-blue)]/20 hover:border-[var(--blw-blue)]/40 bg-[var(--blw-blue)]/5 hover:bg-[var(--blw-blue)]/10 rounded-xl transition-all duration-200"
              >
                Ver soluções
              </button>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            id="contact-form"
          >
            <ContactForm variant="light" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
