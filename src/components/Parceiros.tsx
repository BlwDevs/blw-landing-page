import facepe from '../assets/partners/facepe.png';
import sebrae from '../assets/partners/sebrae.png';
import agriFuture from '../assets/partners/agri-future-hub.png';
import vallis from '../assets/partners/vallis.png';
import nit from '../assets/partners/nit.png';
import dinc from '../assets/partners/dinc.png';
import agrovel from '../assets/partners/agrovel-salitre.png';
import fazendaVitoria from '../assets/partners/fazenda-vitoria.png';
import iarisTech from '../assets/partners/iaris-tech.png';

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
  {
    name: 'FACEPE, Fundação de Amparo à Ciência e Tecnologia do Estado de Pernambuco',
    src: facepe,
    width: 271,
    height: 100,
  },
  { name: 'SEBRAE', src: sebrae, width: 144, height: 100 },
  { name: 'agri.future hub', src: agriFuture, width: 216, height: 80, onDark: true },
  { name: 'Vallis', src: vallis, width: 191, height: 100 },
  { name: 'NIT', src: nit, width: 111, height: 100 },
  { name: 'DINC, Distrito de Irrigação Nilo Coelho', src: dinc, width: 299, height: 100 },
  { name: 'Agrovel Salitre', src: agrovel, width: 114, height: 100 },
  { name: 'Fazenda Vitória, Vale do São Francisco', src: fazendaVitoria, width: 366, height: 280 },
  { name: 'IAris Tech', src: iarisTech, width: 448, height: 280 },
];

const Parceiros: React.FC = () => {
  return (
    <section id="parceiros" className="section-pad bg-ink">
      <div className="wrap">
        <div className="max-w-2xl">
          <p className="eyebrow">Parceiros</p>
          <h2 className="h-section mt-4">Parceiros da BLW</h2>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-4">
          {partners.map(partner => (
            <li
              key={partner.name}
              className={`flex h-28 w-[calc(50%-0.5rem)] items-center justify-center rounded-2xl p-5 sm:h-32 sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.8rem)] ${
                partner.onDark ? 'border border-white/15 bg-night' : 'bg-white'
              }`}
            >
              <img
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                loading="lazy"
                decoding="async"
                className="h-14 w-full object-contain sm:h-16"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Parceiros;
