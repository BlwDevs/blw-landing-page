import { MessageCircle, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import bgContato from '../assets/backgrounds/bg-contato.webp';

const contacts = [
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
    label: 'Onde estamos',
    value: 'Petrolina, PE · Vale do São Francisco',
    href: null,
  },
];

const Contato: React.FC = () => {
  return (
    <section id="contato" className="section-pad relative isolate overflow-hidden bg-ink text-white">
      {/* Fundo: arte de linhas luminosas da marca */}
      <img
        src={bgContato}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[80%_50%]"
      />

      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 className="h-section mt-4 text-white">Vamos conversar sobre o seu projeto?</h2>
          <p className="lead mt-5 max-w-lg">
            Conte o que você precisa: um projeto sob demanda, uma parceria de execução ou só conhecer a BLW e a nossa
            metodologia. Conversamos sem compromisso.
          </p>

          <ul className="mt-10 space-y-5">
            {contacts.map(item => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet/20 text-violet-300">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="link-draw inline-flex min-h-[44px] items-center text-lg font-semibold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contato;
