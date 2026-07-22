import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { getConsent, setConsent, loadRdStation, type ConsentStatus } from '../services/consent';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === 'aceito') {
      loadRdStation();
    } else if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const decide = (status: ConsentStatus) => {
    setConsent(status);
    setIsVisible(false);
    if (status === 'aceito') loadRdStation();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[60]"
        >
          <div className="rounded-2xl bg-white dark:bg-[var(--blw-dark-card)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] shadow-2xl p-5">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[var(--blw-accent-emerald)]/10 flex items-center justify-center shrink-0">
                <Cookie className="w-4.5 h-4.5 text-[var(--blw-accent-emerald)]" />
              </div>
              <div>
                <h2 className="font-display font-bold text-sm text-[var(--blw-text)] dark:text-white">
                  Cookies por aqui
                </h2>
                <p className="text-xs text-[var(--blw-gray-600)] dark:text-gray-400 mt-1.5 leading-relaxed">
                  Usamos cookies de análise para entender como você chegou até aqui e melhorar o site.
                  Nada é ativado sem o seu aceite — e recusar não atrapalha em nada a navegação nem o
                  contato com a gente.
                </p>
              </div>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={() => decide('aceito')}
                className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-[var(--blw-accent-emerald)] hover:bg-emerald-600 transition-colors duration-200"
              >
                Aceitar
              </button>
              <button
                onClick={() => decide('recusado')}
                className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold text-[var(--blw-gray-600)] dark:text-gray-400 border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] hover:bg-black/[0.03] dark:hover:bg-white/[0.04] transition-colors duration-200"
              >
                Recusar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
