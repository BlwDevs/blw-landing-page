import { phases } from '../data/methodology';
const Projetos: React.FC = () => (
  <section className="section" id="metodologia" aria-labelledby="metodologia-h">
    <div className="wrap">
      <div className="section-head">
        <h2 id="metodologia-h">Do primeiro contato à solução em uso</h2>
        <p>Nossa metodologia organiza o projeto em quatro fases. Você acompanha as decisões, valida as entregas e define os próximos passos com o time.</p>
      </div>
      <ol className="bw-phases">
        {phases.map((phase, index) => <li key={phase.id}>
          <h3><span>0{index + 1}</span>{phase.name}</h3>
          <ol>{phase.steps.map(step => <li key={step.code}><h4>{step.name}</h4><p>{step.description}</p></li>)}</ol>
        </li>)}
      </ol>
    </div>
  </section>
);
export default Projetos;
