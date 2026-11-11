import { BlwLogo } from './BlwLogo';
import { CULTIVA_SITE_URL } from '../constants';
import CookieConsent from './CookieConsent';
import bgContato from '../assets/backgrounds/bg-contato.webp';

const LINKEDIN_URL = 'https://www.linkedin.com/in/blw-devs-bb94923b2/';
const INSTAGRAM_URL = 'https://www.instagram.com/blwdevs/';

const Arrow: React.FC = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

const socials = [
  {
    name: 'LinkedIn',
    href: LINKEDIN_URL,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'Instagram',
    href: INSTAGRAM_URL,
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
];

/** Miolo do footer.closing do kit (close-type + footer-dark): a chamada em cima, o diretório e a linha legal embaixo. */
const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* arte de fundo da marca: uma camada atrás das palavras do fechamento (system.css, footer.closing > img.layer) */}
      <img className="layer" src={bgContato} alt="" aria-hidden="true" width="1920" height="1081" loading="lazy" decoding="async" />
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Seu projeto começa numa conversa</h2>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href="#contato">
            Falar com a BLW
            <Arrow />
          </a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-6 stack-5">
              <a className="nav__logo" href="#top" aria-label="BLW Devs, topo da página">
                <BlwLogo tone="on-dark" className="nav__brand" />
              </a>
              <p className="footer__lede">Desenvolvimento de software sob medida e parceria de execução para startups.</p>
              <div className="socials">
                {socials.map(social => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="span-3 start-7 footer__col">
              <h3>Atuação</h3>
              <ul>
                <li>
                  <a href="#parcerias">Parcerias com IA</a>
                </li>
                <li>
                  <a href="#projetos">Projetos sob demanda</a>
                </li>
                <li>
                  <a href="#ia">IA e visão computacional</a>
                </li>
                <li>
                  <a href={CULTIVA_SITE_URL} target="_blank" rel="noopener noreferrer">
                    Conhecer o Cultiva.ai
                  </a>
                </li>
              </ul>
            </div>
            <div className="span-3 footer__col">
              <h3>Empresa</h3>
              <ul>
                <li>
                  <a href="#empresa">Quem somos</a>
                </li>
                <li>
                  <a href="#agro">Agronegócio</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; {year} BLW Desenvolvimento</span>
            <details className="credits">
              <summary>Fotografias via Wikimedia Commons e USDA; logotipos são marcas de seus proprietários</summary>
              <p>
                Mangas: B.navez, CC BY-SA 3.0. Rio São Francisco: Sued Sheila Sarmento, CC BY 2.0. Irrigação: USDA, domínio
                público. Logotipos de parceiros com as cores originais. Ícones de Flutter, Go e PostgreSQL: SVG Logos, de
                Gil Barbara (CC0).
              </p>
            </details>
            <CookieConsent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
