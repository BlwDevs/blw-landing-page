import Hero from './components/Hero';
import Statement from './components/Statement';
import Parcerias from './components/Parcerias';
import Projetos from './components/Projetos';
import IA from './components/IA';
import Agro from './components/Agro';
import Empresa from './components/Empresa';
import Contato from './components/Contato';

/** O miolo da página: as seções dentro do <main id="top">. */
const Sections: React.FC = () => {
  return (
    <>
      <Hero />
      <Statement />
      <Parcerias />
      <Agro />
      <IA />
      <Empresa />
      <Projetos />
      <Contato />
    </>
  );
};

export default Sections;
