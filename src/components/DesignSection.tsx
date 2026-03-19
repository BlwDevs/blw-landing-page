import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Figma, Layers, PenTool, ArrowRight } from 'lucide-react';

const DesignSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const services = [
    { icon: Palette, label: 'Branding' },
    { icon: Figma, label: 'UI/UX Design' },
    { icon: Layers, label: 'Design System' },
    { icon: PenTool, label: 'Prototipagem' },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--blw-gray-100)] dark:bg-[var(--blw-dark-surface)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] shadow-2xl cursor-col-resize select-none"
            onPointerMove={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              setSliderPos(Math.max(5, Math.min(95, x)));
            }}
          >
            {/* "After" — Professional design (full background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d12] via-[#111820] to-[#0a1628]">
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                {/* Pro nav */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--blw-blue)] to-violet-500" />
                    <span className="text-white font-bold text-sm font-[Syne]">YourBrand</span>
                  </div>
                  <div className="flex gap-4">
                    {['Home', 'About', 'Work'].map(t => (
                      <span key={t} className="text-gray-400 text-xs">{t}</span>
                    ))}
                    <span className="text-xs px-3 py-1 bg-[var(--blw-blue)] text-white rounded-full">Contact</span>
                  </div>
                </div>
                {/* Pro content */}
                <div className="flex-1 flex flex-col justify-center gap-3">
                  <div className="text-2xl md:text-3xl font-extrabold font-[Syne] text-white leading-tight">
                    Design que<br />
                    <span className="gradient-text">inspira ação</span>
                  </div>
                  <p className="text-gray-400 text-xs max-w-[200px]">
                    Interfaces memoráveis que conectam sua marca ao mercado.
                  </p>
                  <div className="flex gap-2 mt-2">
                    <div className="px-4 py-1.5 bg-[var(--blw-blue)] rounded-lg text-xs text-white font-medium">Ver mais</div>
                    <div className="px-4 py-1.5 border border-gray-600 rounded-lg text-xs text-gray-300">Contato</div>
                  </div>
                </div>
                {/* Pro cards */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { color: 'from-[var(--blw-blue)]/20 to-[var(--blw-blue)]/5', label: 'Web' },
                    { color: 'from-violet-500/20 to-violet-500/5', label: 'Mobile' },
                    { color: 'from-emerald-500/20 to-emerald-500/5', label: 'Brand' },
                  ].map(c => (
                    <div key={c.label} className={`bg-gradient-to-b ${c.color} border border-white/5 rounded-xl p-3`}>
                      <div className="text-white text-xs font-medium">{c.label}</div>
                      <div className="text-gray-500 text-[10px] mt-1">Premium</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* "Before" — Generic ugly design (clipped to left portion) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="absolute inset-0 bg-gray-50">
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                  {/* Ugly nav */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-gray-400 rounded" />
                      <span className="text-gray-600 font-normal text-sm" style={{ fontFamily: 'Times New Roman, serif' }}>Company</span>
                    </div>
                    <div className="flex gap-4">
                      {['Home', 'About', 'Work'].map(t => (
                        <span key={t} className="text-gray-500 text-xs underline">{t}</span>
                      ))}
                    </div>
                  </div>
                  {/* Ugly content */}
                  <div className="flex-1 flex flex-col justify-center gap-2">
                    <div className="text-2xl md:text-3xl text-gray-700 leading-tight" style={{ fontFamily: 'Times New Roman, serif' }}>
                      Welcome to<br />our website
                    </div>
                    <p className="text-gray-500 text-xs max-w-[200px]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      We make stuff. Click here to learn more about us.
                    </p>
                    <div className="flex gap-2 mt-2">
                      <div className="px-4 py-1.5 bg-gray-400 text-xs text-white">Click Here</div>
                      <div className="px-4 py-1.5 border border-gray-400 text-xs text-gray-500">Info</div>
                    </div>
                  </div>
                  {/* Ugly cards */}
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {['Service 1', 'Service 2', 'Service 3'].map(c => (
                      <div key={c} className="bg-white border-2 border-gray-300 p-3">
                        <div className="text-gray-600 text-xs">{c}</div>
                        <div className="text-gray-400 text-[10px] mt-1">Lorem ipsum</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white/80 z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-red-500/90 text-white text-[10px] font-bold uppercase tracking-wider">
              Antes
            </div>
            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-emerald-500/90 text-white text-[10px] font-bold uppercase tracking-wider">
              Depois
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--blw-accent-rose)] bg-[var(--blw-accent-rose)]/10 border border-[var(--blw-accent-rose)]/15 mb-4">
                <Palette className="w-3.5 h-3.5" /> Design
              </span>
              <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-[var(--blw-text)] dark:text-white leading-tight">
                Identidade Visual &<br />Design de Interface
              </h2>
              <p className="mt-4 text-lg text-[var(--blw-gray-600)] dark:text-gray-400 max-w-md">
                Sua marca merece mais do que o básico. Criamos experiências visuais que convertem.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {services.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-[var(--blw-dark-card)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)]"
                >
                  <s.icon className="w-5 h-5 text-[var(--blw-accent-rose)]" />
                  <span className="text-sm font-medium text-[var(--blw-text)] dark:text-white">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--blw-accent-rose)] hover:underline"
            >
              Quero um novo visual <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
