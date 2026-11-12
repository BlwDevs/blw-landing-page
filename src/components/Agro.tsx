import { CULTIVA_SITE_URL } from '../constants';
import chat from '../assets/app/cultiva-conversa.webp';
import inicio from '../assets/app/cultiva-inicio.webp';

const products = [
  { name: 'Cultiva.ai Gestão', text: 'Safra, estoque, financeiro e agenda no celular.', value: 'No ar' },
  { name: 'Cultiva.ai Consultoria', text: 'Consultor digital por conversa, no WhatsApp.', value: 'Agente de IA' },
  { name: 'Cultiva.Guard', text: 'Alerta de falhas em adutoras de distritos de irrigação.', value: 'Piloto no DINC' },
];

/**
 * Agronegócio do Vale do São Francisco: produtos próprios de gestão rural. As fotos ficam atrás das telas do app e as
 * palavras ficam fora das fotos. O link leva ao site do Cultiva.ai.
 */
const Agro: React.FC = () => {
  return (
    <section className="section" id="agro" aria-labelledby="agro-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="agro-h">Soluções que já saíram do papel</h2>
          <p>Nosso portfólio reúne gestão rural, assistência por IA e monitoramento de irrigação. Produtos desenvolvidos a partir dos desafios do Vale do São Francisco.</p>
        </div>
        <div className="grid grid--top">
          <div className="span-6 stack-6">
            <ul className="rows">
              {products.map(product => (
                <li key={product.name}>
                  <span className="rows__name">{product.name}</span>
                  <p>{product.text}</p>
                  <span className="rows__value">{product.value}</span>
                </li>
              ))}
            </ul>
            <div className="btn-row">
              <a className="btn btn--secondary" href={CULTIVA_SITE_URL} target="_blank" rel="noopener noreferrer">
                Conhecer o Cultiva.ai
              </a>
            </div>
          </div>

          <div className="span-5 start-8 bw-product-screens">
            <figure>
              <img src={inicio} alt="Tela inicial do Cultiva.ai: tarefas, atividades, adubações e estoque" width="444" height="880" loading="lazy" decoding="async" />
              <figcaption><strong>Cultiva.ai Gestão</strong>Rotina da propriedade em um só aplicativo.</figcaption>
            </figure>
            <figure>
              <img src={chat} alt="Conversa com o consultor digital Cultiva.ai no WhatsApp" width="444" height="450" loading="lazy" decoding="async" />
              <figcaption><strong>Cultiva.ai Consultoria</strong>Assistência por conversa no WhatsApp.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agro;
