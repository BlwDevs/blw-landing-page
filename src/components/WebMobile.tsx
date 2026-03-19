import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Smartphone, Globe, Layers, ArrowRight } from 'lucide-react';

const techTags = ['React', 'Next.js', 'React Native', 'Flutter', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL'];

const WebMobile: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  const features = [
    { icon: Globe, title: 'Apps Web', desc: 'Plataformas robustas e escaláveis' },
    { icon: Smartphone, title: 'Apps Mobile', desc: 'iOS e Android nativos ou híbridos' },
    { icon: Code2, title: 'APIs & Backend', desc: 'Microserviços e integrações' },
    { icon: Layers, title: 'Full Stack', desc: 'Da arquitetura ao deploy' },
  ];

  return (
    <section ref={sectionRef} id="services-start" className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-[var(--blw-dark)] transition-colors duration-300">
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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-blue)] bg-[var(--blw-blue)]/10 border border-[var(--blw-blue)]/15 mb-4">
                <Code2 className="w-3.5 h-3.5" /> Desenvolvimento
              </span>
              <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-[var(--blw-text)] dark:text-white leading-tight">
                Web & Mobile
              </h2>
              <p className="mt-4 text-lg text-[var(--blw-gray-600)] dark:text-gray-400 max-w-md">
                Da ideia ao produto digital — construímos aplicações que seus usuários vão amar.
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
                  <div className="w-10 h-10 rounded-lg bg-[var(--blw-blue)]/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-[var(--blw-blue)]" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[var(--blw-text)] dark:text-white">{f.title}</div>
                    <div className="text-xs text-[var(--blw-gray-400)] mt-0.5">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {techTags.map(tag => (
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
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--blw-blue)] hover:underline"
            >
              Quero meu app <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>

          {/* Right — 3D Device Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{ rotateY, rotateX }}
              className="relative w-full max-w-[480px]"
            >
              {/* Laptop mockup */}
              <div className="relative bg-[var(--blw-dark-card)] rounded-2xl border border-[var(--blw-gray-800)] shadow-2xl overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1a2130] border-b border-[var(--blw-gray-800)]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-5 bg-[var(--blw-dark-surface)] rounded-md flex items-center px-3">
                      <span className="text-[10px] text-[var(--blw-gray-600)]">app.seudominio.com.br</span>
                    </div>
                  </div>
                </div>
                {/* Screen content */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-5 bg-[var(--blw-blue)]/20 rounded-md" />
                    <div className="flex gap-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-12 h-3 bg-[var(--blw-gray-800)] rounded" />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3 py-4">
                    <div className="w-3/4 h-5 bg-gradient-to-r from-[var(--blw-blue)]/30 to-transparent rounded" />
                    <div className="w-1/2 h-5 bg-gradient-to-r from-[var(--blw-blue)]/20 to-transparent rounded" />
                    <div className="w-2/3 h-3 bg-[var(--blw-gray-800)] rounded mt-3" />
                    <div className="w-1/2 h-3 bg-[var(--blw-gray-800)] rounded" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-20 rounded-lg bg-gradient-to-b from-[var(--blw-blue)]/10 to-transparent border border-[var(--blw-gray-800)]" />
                    ))}
                  </div>
                  <div className="h-24 rounded-lg bg-[var(--blw-dark-surface)] border border-[var(--blw-gray-800)] flex items-end p-3 gap-1.5">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-[var(--blw-blue)]/40 rounded-t"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 + i * 0.06, ease: 'easeOut' }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile mockup floating */}
              <motion.div
                className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-8 w-[140px] md:w-[160px]"
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
                    <div className="w-16 h-3 bg-[var(--blw-blue)]/25 rounded" />
                    <div className="w-full h-2 bg-[var(--blw-gray-800)] rounded" />
                    <div className="w-3/4 h-2 bg-[var(--blw-gray-800)] rounded" />
                    <div className="h-12 rounded-lg bg-gradient-to-b from-[var(--blw-blue)]/15 to-transparent border border-[var(--blw-gray-800)] mt-2" />
                    <div className="h-12 rounded-lg bg-gradient-to-b from-purple-500/10 to-transparent border border-[var(--blw-gray-800)]" />
                    <div className="flex gap-2 pt-1">
                      <div className="flex-1 h-8 rounded-lg bg-[var(--blw-blue)]/20" />
                      <div className="flex-1 h-8 rounded-lg bg-[var(--blw-gray-800)]" />
                    </div>
                  </div>
                  <div className="flex justify-center py-2">
                    <div className="w-10 h-1 bg-[var(--blw-gray-600)] rounded-full" />
                  </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 -z-10 bg-[var(--blw-blue)]/5 dark:bg-[var(--blw-blue)]/8 rounded-3xl blur-3xl scale-110" />
            </motion.div>
          </motion.div>
        </div>

        {/* TODO: Project Showcase — descomentar quando tiver projetos reais */}
        {/* <ProjectShowcase /> */}
      </div>
    </section>
  );
};

export default WebMobile;
