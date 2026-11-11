import type { CSSProperties } from 'react';
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
    <section className="section" id="agro" style={{ '--hm': 2 } as CSSProperties} aria-labelledby="agro-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="agro-h">Gestão de propriedade rural, feita no Vale do São Francisco</h2>
          <p>O Cultiva.ai organiza safras, talhões, agenda, estoque e financeiro, com consultor digital por conversa.</p>
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

          <div className="span-5 start-8 bw-agro">
            <ul className="bw-agro__photos">
              <li>
                <img
                  src="/photos/rio-sao-francisco-500.jpg"
                  alt="Barcos às margens do rio São Francisco, com aves no céu"
                  width="500"
                  height="331"
                  loading="lazy"
                  decoding="async"
                />
              </li>
              <li>
                <img
                  src="/photos/irrigacao-500.jpg"
                  alt="Técnico abrindo um registro de irrigação em uma lavoura"
                  width="500"
                  height="333"
                  loading="lazy"
                  decoding="async"
                />
              </li>
              <li className="bw-agro__main">
                <img
                  src="/photos/mango.jpg"
                  alt="Mangas verdes penduradas em uma mangueira"
                  width="960"
                  height="643"
                  loading="lazy"
                  decoding="async"
                />
                <div className="bw-agro__phones">
                  <img
                    src={chat}
                    alt="Conversa do Cultiva.ai no WhatsApp com a recomendação de controle de mato antes da florada"
                    width="444"
                    height="450"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={inicio}
                    alt="Tela inicial do Cultiva.ai com as tarefas da semana, atividades, adubações e estoque"
                    width="444"
                    height="880"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agro;
