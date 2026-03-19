import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useGoogleSheets, type FormSubmissionData } from '../services/googleSheets';

interface ContactFormProps {
  variant?: 'light' | 'dark' | 'glass';
  compact?: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ variant = 'light', compact = false }) => {
  const { submitToSheets, isConfigured } = useGoogleSheets();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 11);
      let maskedValue = '';
      if (numericValue.length > 0) {
        if (numericValue.length <= 2) {
          maskedValue = `(${numericValue}`;
        } else if (numericValue.length <= 7) {
          maskedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
        } else {
          const isNineDigit = numericValue.length === 11;
          if (isNineDigit) {
            maskedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7)}`;
          } else {
            maskedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 6)}-${numericValue.slice(6)}`;
          }
        }
      }
      setFormData(prev => ({ ...prev, [name]: maskedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const whatsappMessage = `Olá! Gostaria de solicitar uma solução:\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}${formData.phone ? `\n*Telefone:* ${formData.phone}` : ''}\n\n*Mensagem:* ${formData.message}\n\nAguardo retorno!`;
    const whatsappUrl = `https://wa.me/5587991965693?text=${encodeURIComponent(whatsappMessage)}`;

    // Google Sheets em background (não bloqueia o envio)
    if (isConfigured) {
      const submissionData: FormSubmissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };
      submitToSheets(submissionData).catch(() => {});
    }

    window.open(whatsappUrl, '_blank');
    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const isDark = variant === 'dark';
  const isGlass = variant === 'glass';

  const cardClasses = isGlass
    ? 'glass-card rounded-2xl p-6 lg:p-8'
    : isDark
      ? 'bg-[var(--blw-dark-card)] border border-[var(--blw-gray-800)] rounded-2xl p-6 lg:p-8'
      : 'bg-white dark:bg-[var(--blw-dark-card)] border border-[var(--blw-gray-200)] dark:border-[var(--blw-gray-800)] rounded-2xl p-6 lg:p-8 shadow-xl shadow-black/5';

  const inputClasses = isDark || isGlass
    ? 'form-input !bg-[var(--blw-dark-surface)] !border-[var(--blw-gray-800)] !text-white !placeholder-[var(--blw-gray-600)]'
    : 'form-input';

  const labelClasses = isDark || isGlass
    ? 'block text-sm font-medium text-gray-300 mb-2'
    : 'block text-sm font-medium text-[var(--blw-gray-600)] dark:text-gray-300 mb-2';

  return (
    <div className={cardClasses}>
      <div className="text-center mb-6">
        <h3 className={`text-xl lg:text-2xl font-bold mb-1 font-[Syne] ${isDark || isGlass ? 'text-white' : 'text-[var(--blw-text)] dark:text-white'}`}>
          Fale com um especialista
        </h3>
        <p className={`text-sm ${isDark || isGlass ? 'text-gray-400' : 'text-[var(--blw-gray-400)] dark:text-gray-400'}`}>
          Resposta em menos de 24 horas
        </p>
      </div>

      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-emerald-500" />
          </div>
          <p className={`text-lg font-semibold ${isDark || isGlass ? 'text-white' : 'text-[var(--blw-text)] dark:text-white'}`}>
            Mensagem enviada!
          </p>
          <p className={`text-sm text-center ${isDark || isGlass ? 'text-gray-400' : 'text-[var(--blw-gray-400)]'}`}>
            Entraremos em contato em breve pelo WhatsApp.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="text-[var(--blw-blue)] text-sm font-medium hover:underline mt-2"
          >
            Enviar outra mensagem
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={compact ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            <div>
              <label htmlFor="form-name" className={labelClasses}>Nome *</label>
              <input
                type="text"
                id="form-name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className={inputClasses}
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="form-email" className={labelClasses}>Email *</label>
              <input
                type="email"
                id="form-email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={inputClasses}
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="form-phone" className={labelClasses}>Telefone</label>
            <input
              type="tel"
              id="form-phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              maxLength={15}
              className={inputClasses}
              placeholder="(87) 99999-9999"
            />
          </div>

          <div>
            <label htmlFor="form-message" className={labelClasses}>Mensagem *</label>
            <textarea
              id="form-message"
              name="message"
              required
              rows={compact ? 3 : 4}
              value={formData.message}
              onChange={handleInputChange}
              className={`${inputClasses} resize-none`}
              placeholder="Conte-nos sobre seu projeto..."
            />
          </div>

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-500 text-sm"
            >
              <AlertCircle className="w-4 h-4" />
              <span>Preencha todos os campos obrigatórios.</span>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="shimmer-btn w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-[var(--blw-blue)] hover:bg-[var(--blw-blue-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Solicitar proposta
              </>
            )}
          </button>

          <p className={`text-xs text-center ${isDark || isGlass ? 'text-gray-500' : 'text-[var(--blw-gray-400)]'}`}>
            Seus dados estão seguros conosco.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
