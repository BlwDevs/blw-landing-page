const capabilities = [
  { name: 'Agentes de IA', text: 'Interfaces de conversa que conectam pessoas, informações e serviços.' },
  { name: 'Imagens e documentos', text: 'Extração de informações para transformar fotos e documentos em dados utilizáveis.' },
  { name: 'Dados e monitoramento', text: 'Análise de dados operacionais para identificar padrões e possíveis falhas.' },
  { name: 'Interfaces por voz', text: 'Registro de informações por fala, inclusive na rotina de campo.' },
];
const IA: React.FC = () => (
  <section className="section" id="ia" aria-labelledby="ia-h">
    <div className="wrap">
      <div className="section-head">
        <h2 id="ia-h">Engenharia por trás de cada solução</h2>
        <p>Combinamos desenvolvimento de software, integrações e IA conforme o desafio. A tecnologia faz parte do produto e dos processos que ele precisa atender.</p>
      </div>
      <dl className="bw-capabilities">{capabilities.map(item => <div key={item.name}><dt>{item.name}</dt><dd>{item.text}</dd></div>)}</dl>
    </div>
  </section>
);
export default IA;
