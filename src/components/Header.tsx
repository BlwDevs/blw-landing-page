import { BlwLogo } from './BlwLogo';

const Chev: React.FC = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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
          <div className="nav__item">
            <a className="nav__link" href="#parcerias">
              Parcerias <Chev />
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Para quem</p>
                  <a href="#parcerias">
                    Startups<span>Execução do produto financiado</span>
                  </a>
                  <a href="#agro">
                    Agronegócio<span>Gestão rural e IA no campo</span>
                  </a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">O que desenvolvemos</p>
                  <a href="#projetos">
                    Empresas<span>Sistemas sob demanda</span>
                  </a>
                  <a href="#ia">
                    IA aplicada<span>Agentes e visão computacional</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#projetos">
              Projetos
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#ia">
              IA
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#agro">
              Agro
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#empresa">
              Empresa
            </a>
          </div>
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
