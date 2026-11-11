import type { CSSProperties } from 'react';
/** Três formatos de relação com a BLW, um por público. Cada cartão mostra o que está em mãos naquele tipo de parceria. */
const formats = [
  {
    title: 'Executa o produto da sua startup',
    text: 'Com edital, aceleração ou investimento, a BLW desenvolve o produto dentro do escopo e do prazo.',
    label: 'Marcos do financiamento',
    chip: 'Em execução',
    lines: [
      { ok: true, b: 'Marco 1', t: 'especificação entregue' },
      { ok: true, b: 'Marco 2', t: 'piloto em uso' },
      { ok: false, b: 'Marco 3', t: 'entrega prevista' },
    ],
  },
  {
    title: 'Leva IA para a propriedade rural',
    text: 'Gestão de safra, consultor digital e monitoramento, desenvolvidos no Vale do São Francisco.',
    label: 'Cultiva.ai · Safra',
    chip: 'No ar',
    lines: [
      { ok: true, b: 'Talhões', t: 'organizados por safra' },
      { ok: true, b: 'Lançamento', t: 'feito por voz' },
      { ok: true, b: 'Estoque', t: 'e financeiro em dia' },
    ],
  },
  {
    title: 'Desenvolve o sistema da sua empresa',
    text: 'Sistemas de gestão, integrações e automações sob medida para empresas que já operam.',
    label: 'Escopo do projeto',
    chip: 'Em andamento',
    lines: [
      { ok: true, b: 'Sistema de gestão', t: 'especificado' },
      { ok: true, b: 'Aplicativo', t: 'em construção' },
      { ok: false, b: 'Integração', t: 'a validar' },
    ],
  },
];

const Parcerias: React.FC = () => {
  return (
    <section className="section" id="parcerias" style={{ '--hm': 2 } as CSSProperties} aria-labelledby="parcerias-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="parcerias-h">Parcerias de desenvolvimento com IA</h2>
        </div>
        <div className="grid open-cards">
          {formats.map(format => (
            <article className="card card--row card--open span-4" key={format.title}>
              <h3>{format.title}</h3>
              <p>{format.text}</p>
              <div className="panel panel--inset bw-panel" role="img" aria-label={`${format.label}: ${format.lines.map(l => `${l.b} ${l.t}`).join(', ')}`}>
                <div className="stage">
                  <div className="at-rise fit">
                    <div className="d-card ui" aria-hidden="true">
                      <div className="d-card__row">
                        <h5>{format.label}</h5>
                        <span className="d-chip">{format.chip}</span>
                      </div>
                      {format.lines.map(line => (
                        <div className="d-note__line" key={line.b}>
                          <i className={line.ok ? undefined : 'warn'}>{line.ok ? '✓' : '!'}</i>
                          <span>
                            <b>{line.b}</b> {line.t}
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
      </div>
    </section>
  );
};

export default Parcerias;
