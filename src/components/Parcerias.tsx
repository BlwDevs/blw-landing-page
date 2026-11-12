const services = [
  { title: 'Software sob medida', text: 'Sistemas de gestão, aplicativos e integrações desenvolvidos para os processos da sua empresa.' },
  { title: 'Produtos para startups', text: 'Desenvolvimento técnico para transformar uma ideia em produto, do primeiro protótipo à operação.' },
  { title: 'Inteligência artificial aplicada', text: 'Agentes, processamento de documentos e análise de dados integrados à rotina do negócio.' },
];
const Parcerias: React.FC = () => (
  <section className="section" id="solucoes" aria-labelledby="solucoes-h">
    <div className="wrap">
      <div className="section-head">
        <h2 id="solucoes-h">Tecnologia para o próximo passo do seu negócio</h2>
        <p>Desenvolvemos soluções para empresas, startups e agronegócio, conectando a necessidade de quem usa às possibilidades da tecnologia.</p>
      </div>
      <div className="bw-services">
        {services.map((service, index) => <article key={service.title}>
          <span className="t-label">0{index + 1}</span>
          <h3>{service.title}</h3><p>{service.text}</p>
        </article>)}
      </div>
      <div className="btn-row"><a className="btn btn--secondary" href="#contato">Conversar sobre meu projeto</a></div>
    </div>
  </section>
);
export default Parcerias;
