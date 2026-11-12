import { BlwLogo } from './BlwLogo';

/** Miolo do header.nav do kit (nav-mega): "Parcerias" abre um painel com um caminho para cada público. */
const Header: React.FC = () => {
  return (
    <>
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Ir para o conteúdo
        </a>
        <a className="nav__logo" href="#top" aria-label="BLW Devs, topo da página">
          <BlwLogo tone="on-dark" className="nav__brand" />
        </a>
        <nav className="nav__links" aria-label="Principal">
          {[
            ['#solucoes', 'Soluções'], ['#agro', 'Portfólio'], ['#ia', 'Tecnologia'],
            ['#empresa', 'Empresa'], ['#parcerias', 'Parceiros'],
          ].map(([href, label]) => <div className="nav__item" key={href}><a className="nav__link" href={href}>{label}</a></div>)}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href="#contato">
            Falar com a BLW
          </a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;
