import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { useGoogleSheets, type FormSubmissionData } from '../services/googleSheets';
import { useRdStation } from '../services/rdStation';

/** Número comercial da BLW, no formato aceito pelo wa.me (DDI + DDD + número). */
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5587988685309';

/** Assuntos do formulário. O `value` também entra no nome da conversão na RD Station. */
export const INTERESTS = [
  { value: 'conhecer-blw', label: 'Conhecer a BLW e a metodologia' },
  { value: 'projeto-sob-demanda', label: 'Um projeto sob demanda' },
  { value: 'parceria-executora', label: 'Parceria de execução para a minha startup' },
  { value: 'outro', label: 'Outro assunto' },
] as const;

type Interest = (typeof INTERESTS)[number]['value'];

interface ContactFormProps {
  /**
   * Prefixo do nome da conversão na RD Station. O assunto escolhido é somado a ele
   * (ex.: 'site-blw-contato-parceria-executora') para saber o que cada lead procura.
   */
  conversionIdentifier?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY: FormData = { name: '', email: '', phone: '', message: '' };

const ContactForm: React.FC<ContactFormProps> = ({ conversionIdentifier = 'site-blw-contato' }) => {
  const { submitToSheets, isConfigured } = useGoogleSheets();
  const { submitToRdStation, isConfigured: isRdConfigured } = useRdStation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  /** Distingue "faltou preencher" de "o envio falhou" — a saída para o usuário é diferente. */
  const [errorKind, setErrorKind] = useState<'validacao' | 'envio'>('validacao');
  const [interest, setInterest] = useState<Interest>('conhecer-blw');
  const [formData, setFormData] = useState<FormData>(EMPTY);

  const interestLabel = INTERESTS.find(i => i.value === interest)?.label ?? '';

  // Links da página com data-interesse="..." já deixam o assunto escolhido ao rolar até aqui
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-interesse]');
      const value = el?.dataset.interesse;
      const match = INTERESTS.find(i => i.value === value);
      if (match) setInterest(match.value);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

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

  /** Mensagem pronta para quem prefere falar direto pelo WhatsApp. */
  const buildWhatsappUrl = (): string => {
    const preenchido = formData.name.trim() || formData.message.trim();
    const texto = preenchido
      ? `Olá! Vim pelo site da BLW e quero falar sobre: ${interestLabel}.\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}${formData.phone ? `\n*Telefone:* ${formData.phone}` : ''}${formData.message ? `\n\n*Mensagem:* ${formData.message}` : ''}`
      : `Olá! Vim pelo site da BLW e quero falar sobre: ${interestLabel}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorKind('validacao');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // O assunto vai junto da mensagem para quem lê a planilha e a RD
    const message = `[${interestLabel}] ${formData.message}`;
    const envios: Promise<unknown>[] = [];

    if (isConfigured) {
      const submissionData: FormSubmissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message,
      };
      envios.push(submitToSheets(submissionData));
    }

    if (isRdConfigured) {
      envios.push(
        submitToRdStation({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message,
          identifier: `${conversionIdentifier}-${interest}`,
        })
      );
    }

    // Sem nenhum destino configurado o formulário seria um beco sem saída —
    // nesse caso cai no WhatsApp para o contato não se perder.
    if (envios.length === 0) {
      window.open(buildWhatsappUrl(), '_blank');
      setSubmitStatus('success');
      setFormData(EMPTY);
      setIsSubmitting(false);
      return;
    }

    const resultados = await Promise.allSettled(envios);

    resultados.forEach(r => {
      if (r.status === 'rejected') console.error('[Formulário] envio falhou:', r.reason);
    });

    // Só declara sucesso se o lead chegou em pelo menos um destino.
    const algumSucesso = resultados.some(r => r.status === 'fulfilled');

    if (algumSucesso) {
      setSubmitStatus('success');
      setFormData(EMPTY);
    } else {
      setErrorKind('envio');
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const labelClasses = 'mb-2 block text-sm font-medium text-white/80';

  return (
    <div className="rounded-2xl border border-white/10 bg-ink p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-8">
      <h3 className="text-2xl font-bold text-white">Fale com a BLW</h3>
      <p className="mt-1 text-sm text-white/60">Resposta em menos de 24 horas</p>

      {submitStatus === 'success' ? (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center" role="status">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-violet/20">
            <CheckCircle className="h-8 w-8 text-violet-300" aria-hidden="true" />
          </span>
          <p className="text-lg font-semibold text-white">Mensagem enviada!</p>
          <p className="text-sm text-white/65">Recebemos seu contato e respondemos em menos de 24 horas.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-violet-300"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Prefere agilizar? Chame no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setSubmitStatus('idle')}
            className="min-h-[44px] text-sm font-medium text-white/55 hover:text-white"
          >
            Enviar outra mensagem
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div>
            <label htmlFor="form-interest" className={labelClasses}>
              Sobre o que você quer falar?
            </label>
            <select
              id="form-interest"
              name="interest"
              value={interest}
              onChange={e => setInterest(e.target.value as Interest)}
              className="form-field"
            >
              {INTERESTS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="form-name" className={labelClasses}>
                Nome *
              </label>
              <input
                type="text"
                id="form-name"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-field"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="form-email" className={labelClasses}>
                Email *
              </label>
              <input
                type="email"
                id="form-email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-field"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="form-phone" className={labelClasses}>
              Telefone
            </label>
            <input
              type="tel"
              id="form-phone"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleInputChange}
              maxLength={15}
              className="form-field"
              placeholder="(87) 99999-9999"
            />
          </div>

          <div>
            <label htmlFor="form-message" className={labelClasses}>
              Mensagem *
            </label>
            <textarea
              id="form-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="form-field resize-none"
              placeholder="Conte em poucas linhas o que você precisa ou o que quer saber."
            />
          </div>

          {submitStatus === 'error' && (
            <div role="alert" className="flex items-start gap-2 text-sm text-red-300">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {errorKind === 'validacao'
                  ? 'Preencha nome, email e mensagem.'
                  : 'Não conseguimos enviar agora. Tente de novo ou fale com a gente pelo WhatsApp abaixo.'}
              </span>
            </div>
          )}

          <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full disabled:opacity-50">
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Enviar mensagem
              </>
            )}
          </button>

          {/* Canal alternativo — quem prefere WhatsApp não precisa passar pelo formulário */}
          <div className="flex items-center gap-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-white/45">ou</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <a href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Falar no WhatsApp
          </a>

          <p className="text-center text-xs text-white/50">Usamos seus dados só para responder a este contato.</p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
