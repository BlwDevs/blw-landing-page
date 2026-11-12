import { useEffect, useRef, type ChangeEvent, type FormEvent } from 'react';
import { useGoogleSheets, type FormSubmissionData } from '../services/googleSheets';

/** Número comercial da BLW, no formato aceito pelo wa.me (DDI + DDD + número). */
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5587988685309';

/** Assuntos do formulário. O rótulo escolhido vai na frente da mensagem, para quem lê a planilha e o e-mail. */
export const INTERESTS = [
  { value: 'conhecer-blw', label: 'Conhecer as soluções da BLW' },
  { value: 'projeto-sob-demanda', label: 'Um projeto sob demanda' },
  { value: 'parceria-executora', label: 'Desenvolver o produto da minha startup' },
  { value: 'outro', label: 'Outro assunto' },
] as const;

/**
 * Formulário no padrão do kit (form.form): o system.js valida no envio, põe o erro sob o campo e leva o foco ao
 * primeiro campo com problema. O envio em si é nosso (Google Sheets e, como alternativa, WhatsApp). O campo de status é
 * escrito por referência, porque o system.js também escreve nele.
 */
const ContactForm: React.FC = () => {
  const { submitToSheets, isConfigured } = useGoogleSheets();
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const interestRef = useRef<HTMLSelectElement>(null);

  const say = (text: string): void => {
    if (statusRef.current) statusRef.current.textContent = text;
  };

  // Links da página com data-interesse="..." já deixam o assunto escolhido ao rolar até aqui
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-interesse]');
      const match = INTERESTS.find(i => i.value === el?.dataset.interesse);
      if (match && interestRef.current) interestRef.current.value = match.value;
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  /** Máscara do telefone brasileiro: (87) 99999-9999. */
  const handlePhone = (e: ChangeEvent<HTMLInputElement>): void => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 11);
    let masked = '';
    if (digits.length > 0) {
      if (digits.length <= 2) masked = `(${digits}`;
      else if (digits.length <= 7) masked = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      else if (digits.length === 11) masked = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
      else masked = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    e.target.value = masked;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    // O system.js já barrou o envio com campo inválido: nada a fazer aqui.
    if (e.defaultPrevented) return;
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const interest = String(data.get('interest') || 'outro');
    const interestLabel = INTERESTS.find(i => i.value === interest)?.label ?? '';
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    // O assunto vai junto da mensagem para quem lê a planilha e o e-mail
    const message = `[${interestLabel}] ${String(data.get('message') || '').trim()}`;

    const whatsappUrl = (): string => {
      const text = `Olá! Vim pelo site da BLW e quero falar sobre: ${interestLabel}.\n\n*Nome:* ${name}\n*Email:* ${email}${phone ? `\n*Telefone:* ${phone}` : ''}\n\n*Mensagem:* ${String(data.get('message') || '').trim()}`;
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    };

    const envios: Promise<unknown>[] = [];
    if (isConfigured) {
      const submission: FormSubmissionData = { name, email, phone, message };
      envios.push(submitToSheets(submission));
    }

    // Sem a URL do script configurada o formulário seria um beco sem saída:
    // nesse caso cai no WhatsApp para o contato não se perder.
    if (envios.length === 0) {
      window.open(whatsappUrl(), '_blank');
      say('Abrimos o WhatsApp com a sua mensagem. Falta só enviar por lá.');
      return;
    }

    const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
    if (button) button.disabled = true;
    say('Enviando');

    const resultados = await Promise.allSettled(envios);
    resultados.forEach(r => {
      if (r.status === 'rejected') console.error('[Formulário] envio falhou:', r.reason);
    });

    if (button) button.disabled = false;
    // Só declara sucesso se o contato foi gravado.
    if (resultados.some(r => r.status === 'fulfilled')) {
      form.reset();
      say('Recebemos sua mensagem. Nossa equipe entrará em contato.');
    } else {
      say('Não conseguimos enviar agora. O que você escreveu continua aqui. Tente de novo ou use o WhatsApp.');
    }
  };

  return (
    <form
      ref={formRef}
      className="form bw-form"
      method="post"
      action="#contato"
      onSubmit={handleSubmit}
      noValidate
      data-fix="Corrija os campos marcados."
    >
      <div className="field">
        <label htmlFor="f-interest">Assunto</label>
        <select id="f-interest" name="interest" ref={interestRef} defaultValue="conhecer-blw" required>
          {INTERESTS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-name">Nome</label>
        <input id="f-name" name="name" type="text" autoComplete="name" required aria-describedby="f-name-err" />
        <p className="field__error" id="f-name-err" hidden>
          Escreva o seu nome.
        </p>
      </div>
      <div className="field">
        <label htmlFor="f-email">E-mail</label>
        <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby="f-email-err" />
        <p className="field__error" id="f-email-err" hidden>
          Escreva um e-mail com @, como nome@empresa.com.br.
        </p>
      </div>
      <div className="field">
        <label htmlFor="f-phone">Telefone (opcional)</label>
        <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" maxLength={15} onChange={handlePhone} />
      </div>
      <div className="field bw-form__wide">
        <label htmlFor="f-message">Mensagem</label>
        <textarea id="f-message" name="message" rows={3} required aria-describedby="f-message-err" />
        <p className="field__error" id="f-message-err" hidden>
          Conte em poucas linhas o que você precisa.
        </p>
      </div>
      <div className="btn-row bw-form__wide">
        <button className="btn btn--primary" type="submit">
          Enviar mensagem
        </button>
      </div>
      <p className="form__status bw-form__wide" role="status" data-form-status ref={statusRef} />
    </form>
  );
};

export default ContactForm;
