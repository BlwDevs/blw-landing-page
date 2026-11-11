import { BlwLogo } from './BlwLogo';

const Chev: React.FC = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Miolo do header.nav do kit (nav-mega): "Metodologia" abre um painel; as outras palavras vão direto à seção. */
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
            <a className="nav__link" href="#atuacao">
              Atuação
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#metodologia">
              Metodologia <Chev />
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-3">
                  <p className="t-label">Entrar</p>
                  <a href="#metodologia">
                    Entrada<span>Contato, qualificação e abertura</span>
                  </a>
                  <a href="#metodologia">
                    Entender<span>Diagnóstico e especificação</span>
                  </a>
                </div>
                <div className="menu-col span-3">
                  <p className="t-label">Entregar</p>
                  <a href="#metodologia">
                    Construir<span>Arquitetura, código e testes</span>
                  </a>
                  <a href="#metodologia">
                    Entregar<span>Operação e decisão do ciclo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#parceria">
              Parceria
            </a>
          </div>
          <div className="nav__item">
            <a className="nav__link" href="#produtos">
              Produtos
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
