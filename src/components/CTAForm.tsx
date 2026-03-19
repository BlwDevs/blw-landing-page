import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const CTAForm: React.FC = () => {
  return (
    <section id="cta-form" className="relative py-24 md:py-32 overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--blw-dark)] via-[#0d1520] to-[#0a0e18]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--blw-blue)]/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Pronto para{' '}
                <span className="gradient-text">transformar</span>
                <br />seu negócio?
              </h2>
              <p className="text-lg text-gray-400 max-w-md">
                Converse com nossos especialistas e receba uma proposta personalizada para o seu projeto.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: '+55 87 98868-5309',
                  href: 'https://wa.me/5587988685309',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'blwdevs@gmail.com',
                  href: 'mailto:blwdevs@gmail.com',
                },
                {
                  icon: MapPin,
                  label: 'Localização',
                  value: 'Brasil — Atendimento remoto',
                  href: null,
                },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[var(--blw-blue)]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white hover:text-[var(--blw-blue)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-white">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['Resposta rápida', 'Sem compromisso', 'Proposta grátis'].map(badge => (
                <span key={badge} className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 bg-white/5 border border-white/5">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm variant="dark" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTAForm;
