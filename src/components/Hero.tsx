import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sprout, MessageSquareText, Radio, Blocks } from 'lucide-react';
import ContactForm from './ContactForm';

const words = ['decidir melhor', 'produzir mais', 'perder menos'];

const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Sprout, text: 'Gestão rural' },
    { icon: MessageSquareText, text: 'Consultor digital 24/7' },
    { icon: Radio, text: 'Monitoramento preditivo' },
    { icon: Blocks, text: 'IA sob medida' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[var(--blw-dark)] transition-colors duration-300">
      {/* Background layers */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating blobs */}
      <div className="blob blob-1 w-[500px] h-[500px] bg-[var(--blw-accent-emerald)]/20 dark:bg-[var(--blw-accent-emerald)]/10 -top-40 -left-40" />
      <div className="blob blob-2 w-[400px] h-[400px] bg-[var(--blw-blue)]/15 dark:bg-[var(--blw-blue)]/8 top-1/2 right-0" />
      <div className="blob blob-3 w-[300px] h-[300px] bg-violet-500/10 dark:bg-violet-500/5 bottom-0 left-1/3" />

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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-[var(--blw-accent-emerald)]/10 text-[var(--blw-accent-emerald)] border border-[var(--blw-accent-emerald)]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--blw-accent-emerald)] animate-pulse" />
                AgTech · Vale do São Francisco
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[2rem] sm:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.1] text-[var(--blw-text)] dark:text-white"
            >
              Inteligência artificial
              <br />
              para o agro
              <br />
              <motion.span
                className="gradient-text-agro inline-block"
                key={wordIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {words[wordIndex]}
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg sm:text-xl text-[var(--blw-gray-600)] dark:text-gray-400 max-w-xl leading-relaxed"
            >
              A BLW é uma casa de produtos de IA para o agronegócio. Criamos o{' '}
              <strong className="font-semibold text-[var(--blw-text)] dark:text-gray-200">Cultiva.ai</strong> e
              desenvolvemos soluções sob medida para cooperativas, distritos de irrigação e empresas do agro.
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
                  <feat.icon className="w-4 h-4 text-[var(--blw-accent-emerald)]" />
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
                className="shimmer-btn group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-[var(--blw-accent-emerald)] hover:bg-emerald-600 rounded-xl transition-all duration-200 shadow-lg shadow-[var(--blw-accent-emerald)]/20"
              >
                Falar com a BLW
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('services-start')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-[var(--blw-accent-emerald)] border-2 border-[var(--blw-accent-emerald)]/20 hover:border-[var(--blw-accent-emerald)]/40 bg-[var(--blw-accent-emerald)]/5 hover:bg-[var(--blw-accent-emerald)]/10 rounded-xl transition-all duration-200"
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
            <ContactForm variant="light" conversionIdentifier="site-blw-hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
