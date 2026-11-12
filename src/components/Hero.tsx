import bgHero from '../assets/backgrounds/bg-contato.webp';

const Arrow: React.FC = () => (
  <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

/**
 * Hero "word" do kit: uma frase de impacto em letras grandes, com a última palavra viva (empresas, startups,
 * agronegócio). O layout.js troca a palavra a cada 2 s por duas rodadas, descansa na primeira e volta a tocar quando
 * o ponteiro entra no título; as letras perto do ponteiro mudam de largura (data-ly-letters).
 */
const Hero: React.FC = () => {
  return (
    <section className="hero hero--word" data-enter aria-labelledby="hero-h">
      <img
        className="layer"
        src={bgHero}
        alt=""
        aria-hidden="true"
        width="1920"
        height="1081"
        fetchPriority="high"
      />
      <div className="wrap">
        <div className="hero-text hero__in">
          <h1 id="hero-h" data-ly-letters="wdth">
            IA e software para{' '}
            <span className="ly-word" data-ly-word='["startups.","agronegócio."]'>
              empresas.
            </span>
          </h1>
          <div className="grid hero__foot">
            <div className="span-6">
              <p className="hero__lead">
                A BLW, de Pernambuco, desenvolve software e IA sob medida para o agronegócio do Vale do São Francisco, empresas e startups. Somos 5 sócios engenheiros.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href="#contato">
                  Falar com a BLW
                  <Arrow />
                </a>
                <a className="btn btn--secondary" href="#metodologia">
                  Ver como trabalhamos
                </a>
              </div>
            </div>
            <dl className="hero__facts hero__facts--col span-5 start-8">
              <div>
                <dt>Sede</dt>
                <dd>Pernambuco</dd>
              </div>
              <div>
                <dt>Fomento</dt>
                <dd>Parceira da FACEPE</dd>
              </div>
              <div>
                <dt>Aceleração</dt>
                <dd>Aprovada no Inova Caatinga</dd>
              </div>
              <div>
                <dt>Produto no ar</dt>
                <dd>Cultiva.ai</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
