import { useId } from 'react';
import { LOCKUP_SYMBOL_PATH, LOCKUP_WORDMARK_PATH, SYMBOL_PATH } from '../assets/brand/paths';

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

/** Símbolo isolado. */
export const BlwSymbol: React.FC<LogoProps> = ({ tone = 'on-dark', className }) => (
  <svg viewBox="0 0 1490 2000" className={className} role="img" aria-label="BLW">
    <path d={SYMBOL_PATH} fill={COLORS[tone].symbol} fillRule="evenodd" />
  </svg>
);

/** Versão horizontal: símbolo + BLW. */
export const BlwLogo: React.FC<LogoProps> = ({ tone = 'on-dark', className }) => (
  <svg viewBox="0 0 2000 919" className={className} role="img" aria-label="BLW">
    <path d={LOCKUP_SYMBOL_PATH} fill={COLORS[tone].symbol} fillRule="evenodd" />
    <path d={LOCKUP_WORDMARK_PATH} fill={COLORS[tone].word} fillRule="evenodd" />
  </svg>
);

/**
 * Padrão de símbolos em contorno, igual ao do guia (camiseta e cartão).
 * Decorativo: a cor vem de `currentColor`, então o contraste se ajusta pelo texto do pai.
 */
export const BrandPattern: React.FC<{ className?: string }> = ({ className }) => {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={className} width="100%" height="100%" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`${id}-tile`} width="190" height="256" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="14" strokeLinejoin="round" transform="scale(0.055)">
            <path d={SYMBOL_PATH} fillRule="evenodd" />
          </g>
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinejoin="round"
            transform="translate(95 128) scale(0.055)"
          >
            <path d={SYMBOL_PATH} fillRule="evenodd" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id}-tile)`} />
    </svg>
  );
};
