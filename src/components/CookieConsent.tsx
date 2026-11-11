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
          className="fixed bottom-4 left-4 right-4 z-[60] sm:bottom-6 sm:left-auto sm:right-6 sm:max-w-md"
        >
          <div className="rounded-2xl border border-white/12 bg-night p-5 shadow-2xl shadow-black/50">
            <div className="mb-4 flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet/20">
                <Cookie className="h-[18px] w-[18px] text-violet-300" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-sm font-bold text-white">Cookies por aqui</h2>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                  Usamos cookies de análise para entender como você chegou até aqui e melhorar o site. Nada é ativado
                  sem o seu aceite, e recusar não atrapalha a navegação nem o contato com a gente.
                </p>
              </div>
            </div>

            <div className="flex gap-2.5">
              <button
                type="button"
                onClick={() => decide('aceito')}
                className="btn btn-primary flex-1 !min-h-[44px] !px-4 !py-2 !text-sm"
              >
                Aceitar
              </button>
              <button
                type="button"
                onClick={() => decide('recusado')}
                className="btn btn-secondary flex-1 !min-h-[44px] !px-4 !py-2 !text-sm"
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
