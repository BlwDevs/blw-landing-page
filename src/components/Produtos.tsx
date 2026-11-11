import type { CSSProperties } from 'react';

const products = [
  {
    title: 'Gerencia a propriedade rural',
    text: 'Financeiro da safra, estoque de insumos, lançamento por voz e nota fiscal lida por foto.',
    label: 'Cultiva.ai Gestão',
    chip: 'No ar',
    lines: ['Safra', 'Estoque', 'Lançamento por voz'],
  },
  {
    title: 'Responde dúvidas do campo',
    text: 'Consultor digital 24 horas para manejo, análise de solo e rotina de cooperativas.',
    label: 'Cultiva.ai Consultoria',
    chip: 'Agente de IA',
    lines: ['Manejo', 'Solo', 'Cooperativas'],
  },
  {
    title: 'Prevê falhas em adutoras',
    text: 'Detecta anomalias com a telemetria que o distrito de irrigação já tem, sem sensor novo.',
    label: 'Cultiva.Guard',
    chip: 'Piloto no DINC',
    lines: ['Pressão', 'Vazão', 'Alerta'],
  },
];

const stack = [
  { name: 'Flutter', src: '/assets/icons/flutter.svg', width: 20, height: 24 },
  { name: 'Go', src: '/assets/icons/go.svg', width: 24, height: 9, wide: true },
  { name: 'PostgreSQL', src: '/assets/icons/postgres.svg', width: 23, height: 24 },
];

const Produtos: React.FC = () => {
  return (
    <section className="section" id="produtos" style={{ '--hm': 2 } as CSSProperties} aria-labelledby="produtos-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="produtos-h">Produtos próprios para o agronegócio</h2>
        </div>
        <div className="grid open-cards">
          {products.map(product => (
            <article className="card card--row card--open span-4" key={product.label}>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
              <div className="panel panel--inset bw-panel bw-panel--s" role="img" aria-label={`${product.label}: ${product.lines.join(', ')}`}>
                <div className="stage">
                  <div className="at-rise fit">
                    <div className="d-card ui" aria-hidden="true">
                      <div className="d-card__row">
                        <h5>{product.label}</h5>
                        <span className="d-chip">{product.chip}</span>
                      </div>
                      {product.lines.map(line => (
                        <div className="d-note__line" key={line}>
                          <i>✓</i>
                          <span>
                            <b>{line}</b>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="bw-stack">
          <p className="t-label muted">Tecnologias dos produtos</p>
          <ul>
            {stack.map(item => (
              <li key={item.name}>
                {item.wide ? (
                  <span className="ic-tile ic-tile--24 ic-tile--wide">
                    <img className="ic ic-24 ic-wide" loading="lazy" decoding="async" src={item.src} alt={item.name} width={item.width} height={item.height} />
                  </span>
                ) : (
                  <img className="ic ic-28" loading="lazy" decoding="async" src={item.src} alt={item.name} width={item.width} height={item.height} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
