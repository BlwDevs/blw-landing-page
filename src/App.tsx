import Hero from './components/Hero';
import Atuacao from './components/Atuacao';
import Metodologia from './components/Metodologia';
import Parceria from './components/Parceria';
import Produtos from './components/Produtos';
import QuemSomos from './components/QuemSomos';
import Contato from './components/Contato';

/** O miolo da página: as seções dentro do <main id="top">. */
const Sections: React.FC = () => {
  return (
    <>
      <Hero />
      <Atuacao />
      <Metodologia />
      <Parceria />
      <Produtos />
      <QuemSomos />
      <Contato />
    </>
  );
};

export default Sections;
