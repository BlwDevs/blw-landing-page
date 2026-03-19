import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { value: 50, suffix: '+', label: 'Projetos entregues' },
  { value: 5, suffix: '+', label: 'Anos de mercado' },
  { value: 30, suffix: '+', label: 'Clientes ativos' },
  { value: 99, suffix: '%', label: 'Satisfação' },
];

const TrustedBy: React.FC = () => {
  return (
    <section id="trusted-by" className="relative py-16 md:py-20 overflow-hidden bg-white dark:bg-[var(--blw-dark)] transition-colors duration-300">
      <div className="section-divider mb-16" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold font-[Syne] text-[var(--blw-text)] dark:text-white mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-[var(--blw-gray-400)] font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  );
};

export default TrustedBy;
