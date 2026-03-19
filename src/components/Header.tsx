import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logoBlw from '../assets/logo-BLW.png';

const navLinks = [
  { label: 'Início', id: 'hero' },
  { label: 'Soluções', id: 'services-start' },
  { label: 'Sobre', id: 'trusted-by' },
  { label: 'Contato', id: 'cta-form' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-[var(--blw-dark)]/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
              <img src={logoBlw} alt="BLW" className="h-9 w-auto" />
              <span className="font-[Syne] font-bold text-lg text-[var(--blw-text)] dark:text-white tracking-tight hidden sm:block">
                Build Lines to World
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-4 py-2 text-sm font-medium text-[var(--blw-gray-600)] dark:text-gray-400 hover:text-[var(--blw-text)] dark:hover:text-white transition-colors rounded-lg hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={toggleDarkMode}
                className="ml-2 p-2.5 rounded-xl text-[var(--blw-gray-600)] dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Alternar tema"
              >
                {isDarkMode ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>

              <button
                onClick={() => scrollTo('contact-form')}
                className="shimmer-btn ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--blw-blue)] hover:bg-[var(--blw-blue-dark)] rounded-xl transition-all duration-200"
              >
                Começar projeto
              </button>
            </nav>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-xl text-[var(--blw-gray-600)] dark:text-gray-400"
                aria-label="Alternar tema"
              >
                {isDarkMode ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl text-[var(--blw-text)] dark:text-white"
                aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white dark:bg-[var(--blw-dark)] border-l border-black/5 dark:border-white/5 p-6 pt-20"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-[var(--blw-text)] dark:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo('contact-form')}
                  className="mt-4 w-full py-3.5 text-center text-sm font-semibold text-white bg-[var(--blw-blue)] rounded-xl"
                >
                  Começar projeto
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
