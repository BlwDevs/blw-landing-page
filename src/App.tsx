import Header from './components/Header';
import Hero from './components/Hero';
import Atuacao from './components/Atuacao';
import Metodologia from './components/Metodologia';
import Parceria from './components/Parceria';
import Produtos from './components/Produtos';
import QuemSomos from './components/QuemSomos';
import Parceiros from './components/Parceiros';
import Contato from './components/Contato';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Atuacao />
        <Metodologia />
        <Parceria />
        <Produtos />
        <QuemSomos />
        <Parceiros />
        <Contato />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

export default App;
