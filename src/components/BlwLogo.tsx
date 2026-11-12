import { LOCKUP_SYMBOL_PATH, LOCKUP_WORDMARK_PATH } from '../assets/brand/paths';

/**
 * Versões de cor permitidas pelo guia: violeta + branco sobre fundo escuro,
 * violeta + preto sobre fundo claro e tudo branco sobre o violeta da marca.
 * Não distorcer, rotacionar nem trocar as cores.
 */
export type LogoTone = 'on-dark' | 'on-light' | 'on-violet';

const COLORS: Record<LogoTone, { symbol: string; word: string }> = {
  'on-dark': { symbol: '#615afb', word: '#ffffff' },
  'on-light': { symbol: '#615afb', word: '#0c0b18' },
  'on-violet': { symbol: '#ffffff', word: '#ffffff' },
};

interface LogoProps {
  tone?: LogoTone;
  className?: string;
}

/** Versão horizontal: símbolo + BLW. */
export const BlwLogo: React.FC<LogoProps> = ({ tone = 'on-dark', className }) => (
  <svg viewBox="0 0 2000 919" className={className} role="img" aria-label="BLW">
    <path d={LOCKUP_SYMBOL_PATH} fill={COLORS[tone].symbol} fillRule="evenodd" />
    <path d={LOCKUP_WORDMARK_PATH} fill={COLORS[tone].word} fillRule="evenodd" />
  </svg>
);
