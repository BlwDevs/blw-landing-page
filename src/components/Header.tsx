import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BlwLogo } from './BlwLogo';

const navLinks = [
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Parceria executora', href: '#parceria' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Quem somos', href: '#quem-somos' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menu aberto: trava a rolagem da página e fecha com Esc
  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-ink/85 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[70] focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo
      </a>

      <div className="wrap flex h-[72px] items-center justify-between">
        <a href="#topo" aria-label="BLW Devs, voltar ao topo" className="flex h-11 items-center">
          <BlwLogo tone="on-dark" className="h-8 w-auto" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2.5 text-[0.9375rem] font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn btn-primary ml-3 !min-h-[44px] !px-5 !py-2 !text-[0.9375rem]">
            Vamos conversar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen(open => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>

    {/* Menu mobile em tela cheia. Fica fora do <header>: o backdrop-blur do header
        viraria o referencial do position:fixed e o painel colapsaria. */}
    {isMenuOpen && (
      <div id="menu-mobile" className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-ink lg:hidden">
        <nav aria-label="Principal (mobile)" className="wrap flex flex-col py-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex min-h-[56px] items-center border-b border-white/10 text-xl font-semibold text-white"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setIsMenuOpen(false)} className="btn btn-primary mt-8 w-full">
            Vamos conversar
          </a>
        </nav>
      </div>
    )}
    </>
  );
};

export default Header;
