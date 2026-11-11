/** Duas frentes de trabalho. Cada cartão mostra, na janela, o que a BLW tem em mãos naquele tipo de trabalho. */
const Atuacao: React.FC = () => {
  return (
    <section className="section" id="atuacao" aria-labelledby="atuacao-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="atuacao-h">Projetos sob demanda e execução para startups</h2>
        </div>
        <div className="grid open-cards">
          <article className="card card--row card--open span-6">
            <h3>Desenvolve o sistema que você precisa</h3>
            <p>Sistemas de gestão, aplicativos e integrações feitos para a sua operação, do diagnóstico ao uso.</p>
            <div
              className="panel panel--inset bw-panel"
              role="img"
              aria-label="Escopo de um projeto sob demanda: sistema de gestão especificado, aplicativo em construção e integração a validar"
            >
              <div className="stage">
                <div className="at-rise fit">
                  <div className="d-card ui" aria-hidden="true">
                    <div className="d-card__row">
                      <h5>Escopo do projeto</h5>
                      <span className="d-chip d-chip--low">Em andamento</span>
                    </div>
                    <div className="d-note__line">
                      <i>✓</i>
                      <span>
                        <b>Sistema de gestão</b> especificado
                      </span>
                    </div>
                    <div className="d-note__line">
                      <i>✓</i>
                      <span>
                        <b>Aplicativo</b> em construção
                      </span>
                    </div>
                    <div className="d-note__line">
                      <i className="warn">!</i>
                      <span>
                        <b>Integração</b> a validar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="card card--row card--open span-6">
            <h3>Executa o produto da sua startup</h3>
            <p>Edital, aceleração ou investimento: desenvolvemos o produto dentro do escopo e do prazo.</p>
            <div
              className="panel panel--inset bw-panel"
              role="img"
              aria-label="Marcos de um financiamento: especificação entregue, piloto em uso e entrega prevista"
            >
              <div className="stage">
                <div className="at-rise fit">
                  <div className="d-card ui" aria-hidden="true">
                    <div className="d-card__row">
                      <h5>Marcos do financiamento</h5>
                      <span className="d-chip">Em execução</span>
                    </div>
                    <div className="d-note__line">
                      <i>✓</i>
                      <span>
                        <b>Marco 1</b> especificação entregue
                      </span>
                    </div>
                    <div className="d-note__line">
                      <i>✓</i>
                      <span>
                        <b>Marco 2</b> piloto em uso
                      </span>
                    </div>
                    <div className="d-note__line">
                      <i className="warn">!</i>
                      <span>
                        <b>Marco 3</b> entrega prevista
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Atuacao;
