import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import WebMobile from './components/WebMobile';
import DesignSection from './components/DesignSection';
import AISection from './components/AISection';
import DataAgtech from './components/DataAgtech';
import FiscalConsulting from './components/FiscalConsulting';
import CTAForm from './components/CTAForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App bg-[var(--blw-bg-primary)] transition-colors duration-300">
        <Header />
        <Hero />
        {/* TODO: descomentar quando tiver dados reais de portfólio */}
        {/* <TrustedBy /> */}
        <WebMobile />
        <DesignSection />
        <AISection />
        <DataAgtech />
        <FiscalConsulting />
        <CTAForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
