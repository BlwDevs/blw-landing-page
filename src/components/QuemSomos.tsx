import facepe from '../assets/partners/facepe.png';
import sebrae from '../assets/partners/sebrae.png';
import agriFuture from '../assets/partners/agri-future-hub.png';
import vallis from '../assets/partners/vallis.png';
import nit from '../assets/partners/nit.png';
import dinc from '../assets/partners/dinc.png';
import agrovel from '../assets/partners/agrovel-salitre.png';
import fazendaVitoria from '../assets/partners/fazenda-vitoria.png';
import iarisTech from '../assets/partners/iaris-tech.png';

const timeline = [
  { when: 'jul/2025', what: 'Fundação em Petrolina e entrada na incubadora INTECVASF' },
  { when: 'set/2025', what: 'Nasce a marca Cultiva.ai' },
  { when: 'nov/2025', what: 'Primeira validação com produtores do Vale' },
  { when: 'jan/2026', what: 'Aprovação no Inova Caatinga' },
  { when: 'mar/2026', what: 'Aprovação no edital FACEPE COMPET Soluções' },
  { when: 'jun/2026', what: 'Cultiva.ai nas lojas, usado na safra' },
];

interface Partner {
  name: string;
  src: string;
  width: number;
  height: number;
  /** Logo com letras brancas: precisa de uma placa escura em vez da branca. */
  onDark?: boolean;
}

/** Logos nas cores originais de cada parceiro, sem alteração. */
const partners: Partner[] = [
  { name: 'FACEPE, Fundação de Amparo à Ciência e Tecnologia do Estado de Pernambuco', src: facepe, width: 271, height: 100 },
  { name: 'SEBRAE', src: sebrae, width: 144, height: 100 },
  { name: 'agri.future hub', src: agriFuture, width: 216, height: 80, onDark: true },
  { name: 'Vallis', src: vallis, width: 191, height: 100 },
  { name: 'NIT', src: nit, width: 111, height: 100 },
  { name: 'DINC, Distrito de Irrigação Nilo Coelho', src: dinc, width: 299, height: 100 },
  { name: 'Agrovel Salitre', src: agrovel, width: 114, height: 100 },
  { name: 'Fazenda Vitória, Vale do São Francisco', src: fazendaVitoria, width: 146, height: 112 },
  { name: 'IAris Tech', src: iarisTech, width: 179, height: 112 },
];

const QuemSomos: React.FC = () => {
  return (
    <section className="section" id="empresa" aria-labelledby="empresa-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="empresa-h">Cinco engenheiros sócios, em Petrolina</h2>
          <p>
            A BLW Desenvolvimento é uma Empresa Simples de Inovação. Visitamos o cliente, ouvimos quem opera e escrevemos
            código sobre o problema real.
          </p>
        </div>
        <div className="grid grid--top">
          <div className="span-6 bw-partners">
            <p className="t-label muted">Parceiros</p>
            <ul className="bw-logos">
              {partners.map(partner => (
                <li key={partner.name} className={partner.onDark ? 'is-dark' : undefined}>
                  <img src={partner.src} alt={partner.name} width={partner.width} height={partner.height} loading="lazy" decoding="async" />
                </li>
              ))}
            </ul>
          </div>
          <div
            className="span-6 start-7"
            role="img"
            aria-label={`Trajetória da BLW: ${timeline.map(t => `${t.when}, ${t.what}`).join('; ')}`}
          >
            <div className="d-win d-win--roomy ui" aria-hidden="true">
              <div className="d-win__bar">
                <span className="d-win__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>BLW · Trajetória</span>
              </div>
              <div className="d-main">
                <div className="d-rows">
                  {timeline.map(item => (
                    <div className="d-row d-row--date" key={item.when}>
                      <span className="d-when">{item.when}</span>
                      <b>{item.what}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
