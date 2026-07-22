import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Solutions from './components/Solutions';
import CultivaAI from './components/CultivaAI';
import AISection from './components/AISection';
import GuardSection from './components/GuardSection';
import AgroSolutions from './components/AgroSolutions';
import About from './components/About';
import CTAForm from './components/CTAForm';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App bg-[var(--blw-bg-primary)] transition-colors duration-300">
        <Header />
        <Hero />
        <Partners />
        <Solutions />
        <CultivaAI />
        <AISection />
        <GuardSection />
        <AgroSolutions />
        <About />
        <CTAForm />
        <Footer />
        <CookieConsent />
      </div>
    </ThemeProvider>
  );
};

export default App;
