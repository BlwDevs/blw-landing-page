import { ArrowUpRight } from 'lucide-react';
import { BlwLogo, BrandPattern } from './BlwLogo';
import { CULTIVA_APP_URL } from '../constants';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerSections: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Atuação',
    links: [
      { label: 'Projetos sob demanda', href: '#atuacao' },
      { label: 'Parceria executora', href: '#parceria' },
      { label: 'Produtos próprios', href: '#produtos' },
      { label: 'Baixar o app Cultiva.ai', href: CULTIVA_APP_URL, external: true },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Metodologia', href: '#metodologia' },
      { label: 'Quem somos', href: '#quem-somos' },
      { label: 'Parceiros', href: '#parceiros' },
      { label: 'Contato', href: '#contato' },
    ],
  },
];

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/blw-devs-bb94923b2/',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/blwdevs/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-ink">
      {/* Padrão de símbolos da marca, bem discreto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 text-white/[0.05]"
        style={{
          maskImage: 'linear-gradient(to left, #000 0%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to left, #000 0%, transparent 70%)',
        }}
      >
        <BrandPattern />
      </div>
      <div className="wrap py-14 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <BlwLogo tone="on-dark" className="h-10 w-auto" />
            <p className="mt-5 text-xs font-light uppercase tracking-[0.4em] text-white/60">
              Building Lines Worldwide
            </p>
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-white/65">
              Desenvolvimento de software sob medida e parceria executora para startups com financiamento.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 text-white/70 transition-colors hover:border-violet hover:text-white"
                >
                  <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map(section => (
            <nav key={section.title} aria-label={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">{section.title}</h3>
              <ul className="mt-5 space-y-1">
                {section.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-[0.9375rem] text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                      {link.external && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} BLW Desenvolvimento. Todos os direitos reservados.</p>
          <p>Petrolina/PE · Empresa Simples de Inovação · CNPJ 61.973.869/0001-07</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
